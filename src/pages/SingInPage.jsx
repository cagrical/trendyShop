import { useState } from 'react';
import '../css/SignInPage.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { checkUserExist, getUserByEmail, setActiveUser } from '../redux/slices/userSlice';
import { useAuth } from '../AuthContext';

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userExist = await dispatch(checkUserExist(formData.email));
            if (userExist.payload) {
                const user = await dispatch(getUserByEmail(formData.email));
                if (user.payload === null) {
                    toast.error('Kullanıcı bulunamadı.');
                }
                else {
                    if (user.payload.email === formData.email) {
                        if (user.payload.password === formData.password) {
                            login()
                            toast.success('Giriş başarılı');
                            setFormData({
                                email: '',
                                password: '',
                            })
                            dispatch(setActiveUser(user.payload))
                            navigate('/')
                        }
                        else {
                            toast.error('Parola hatalı');
                        }
                    }
                    else {
                        toast.error('Kayıtlı bir email adresi bulunamadı..');
                    }
                }
            }
            else {
                toast.error('Kayıtlı bir email adresi bulunamadı..');
            }

            // if (response) {
            //     toast.success('giriş başarılı')
            //     navigate('/')
            //     setFormData({
            //         email: '',
            //         password: '',
            //     })
            // }
        } catch (error) {
            toast.error('giriş yapılamadi' + error.message)
        }
    };

    const handleRegister = () => {
        navigate("/register")
    }

    return (
        <div className="signup-container">
            <div className="signup-form">
                <p className="signup-subtitle">Merhaba, TrendyShop’a giriş yap veya hesap oluştur, indirimleri kaçırma!</p>
                <h2 className="signup-title">Giriş Yap / Üye Ol</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-posta"
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group password-input-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Şifre"
                            className="form-input"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="password-toggle"
                        >
                            {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="submit-button"
                    >
                        Giriş Yap
                    </button>
                </form>
                <button
                    type="submit"
                    className="submit-button"
                    onClick={handleRegister}
                >
                    Üye Ol
                </button>
            </div>
        </div>
    );
};

export default SignUpPage;
