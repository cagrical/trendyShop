import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    users: [],
    activeUser: {},
    loading: false,
    status: 'idle',
    userExist: false,
}

const url = "http://localhost:5000"

export const getUsersFromDb = createAsyncThunk("getUsersFromDb", async () => {
    const response = await axios.get(url + "/users")
    return response.data
})

export const checkUserExist = createAsyncThunk('checkUserExist', async (email, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${url}/users?email=${email}`);
        // Eğer kullanıcı varsa, response.data[0] dolu olacak
        return response.data.length > 0
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const getUserByEmail = createAsyncThunk("getUserByEmail", async (email, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${url}/users?email=${email}`);
        return response.data[0] || null;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

export const addUserToDb = createAsyncThunk("addUserToDb", async (user, { rejectWithValue }) => {
    try {
        const response = await axios.post(url + "/users", user)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.activeUser = { ...action.payload }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsersFromDb.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getUsersFromDb.fulfilled, (state, actions) => {
            state.users = actions.payload
            state.loading = false
        })

        builder.addCase(addUserToDb.fulfilled, (state, actions) => {
            state.status = 'succeeded';
            state.users = [...state.users, actions.payload]
        })
        builder.addCase(addUserToDb.rejected, (state) => {
            state.status = 'failed'
        })
        builder.addCase(addUserToDb.pending, (state) => {
            state.status = 'loading'
        })

        builder.addCase(checkUserExist.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.userExist = action.payload
        })
        builder.addCase(checkUserExist.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        })

        builder.addCase(getUserByEmail.pending, (state) => {
            state.status = 'loading';
        })
        builder.addCase(getUserByEmail.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.user = action.payload;
        })
        builder.addCase(getUserByEmail.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
        });
    }
})



export const { setActiveUser } = userSlice.actions
export default userSlice.reducer