import { useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import RouterConfig from './config/Routerconfig'
import PageContainer from './container/PageContainer'
import Modal from './components/Modal'
import CartModal from "./components/CartModal"
import Loading from './components/Loading'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const navigate = useNavigate()


  useEffect(() => {
    // Check if the modal has been shown before
    const hasModalBeenShown = localStorage.getItem('hasModalBeenShown');

    if (!hasModalBeenShown) {
      // If the modal has not been shown, open it
      setIsModalOpen(true);
      localStorage.setItem('hasModalBeenShown', 'true');
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCartClose = () => setCartOpen(false);
  const handleCartOpen = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (isAuthenticated)
      setCartOpen(true)
    else {
      navigate("/login")
    }

  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <PageContainer>
        <Loading />
        <RouterConfig handleCartOpen={handleCartOpen} />
      </PageContainer>
      <CartModal open={cartOpen} handleClose={handleCartClose} />
      <Footer />
      <ToastContainer position='top-right' autoClose={2000} />
    </div>
  )
}

export default App