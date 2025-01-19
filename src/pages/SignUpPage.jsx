import { useState } from 'react';
import '../css/SignUpPage.css';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserToDb, checkUserExist } from '../redux/slices/userSlice';


const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
    gender: '',
  });


  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    // Here you can process the form data or send it to an API
    if (formData.email) {
      const response = await dispatch(checkUserExist(formData.email));
      if (!response.payload) {
        const user = {
          email: formData.email,
          password: formData.password,
          name: formData.name,
          surname: formData.surname,
          gender: formData.gender,
          favs: []
        }
        try {
          dispatch(addUserToDb(user))
          if (user) {
            console.log('User created:', user);
            toast.success('Üye olma işlemi başarılı');
            setFormData({
              email: '',
              password: '',
              name: '',
              surname: '',
              gender: '',
            })
            navigate('/login')
          }
        } catch (error) {
          toast.error('üye olma işlemi başarısız' + error.message)
        }
      }
      else {
        toast.error('Kullanıcı mevcut')
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <p className="signup-subtitle">Merhaba, TrendyShop’a giriş yap veya hesap oluştur, indirimleri kaçırma!</p>
        <h2 className="signup-title">Üye Ol</h2>
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
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ad"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              placeholder="Soyad"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-input"
              required
            >
              <option value="">Cinsiyet Seçin</option>
              <option value="female">Kadın</option>
              <option value="male">Erkek</option>
            </select>
          </div>
          <button
            type="submit"
            className="submit-button"
          >
            Üye Ol
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
