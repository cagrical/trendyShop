import { Routes, Route, Navigate } from "react-router-dom"
import Home from "../pages/Home"
import NotFoundPage from "../pages/NotFoundPage"
import ProductPage from "../pages/ProductPage"
import SignUpPage from "../pages/SignUpPage"
import SignInPage from "../pages/SingInPage"
import { AuthProvider, useAuth } from "../AuthContext"
import Navbar from "../components/Navbar"

function RouterConfig({ handleCartOpen }) {
    const ProtectedRoute = ({ element }) => {
        const { isAuthenticated } = useAuth();
        if (isAuthenticated === null) {
            return <div>Loading...</div>;
        }
        return isAuthenticated ? element : <Navigate to="/login" />;
    };

    return (
        <AuthProvider>
            <Navbar handleCartOpen={handleCartOpen} />
            <Routes>
                <Route path="/login" element={<SignInPage />} />
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<SignUpPage />} />
                <Route path="/product-details/:id" element={<ProtectedRoute element={<ProductPage />} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </AuthProvider>
    )
}

export default RouterConfig