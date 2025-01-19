import { useParams } from 'react-router-dom';
import '../css/ProductPage.css';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RedeemIcon from '@mui/icons-material/Redeem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getProductsFromDb, setSelectedProduct } from '../redux/slices/productSlice';

const ProductPage = () => {
  const dispatch = useDispatch()
  const { products, selectedProduct: initialSelectedProduct } = useSelector(store => store.products)
  const { id } = useParams();
  const [selectedProduct, setSelectedProductState] = useState(initialSelectedProduct); // Initialize selectedProduct with a default value
  const [loading, setLoading] = useState(true); // Add a loading state variable

  useEffect(() => {
    setLoading(true); // Reset loading state when component is re-rendered
  }, []);

  const getProductById = () => {
    if (Array.isArray(products)) {
      const product = products.find((product) => product.id === id);
      if (product) {
        dispatch(setSelectedProduct(product));
        setSelectedProductState(product); // Update selectedProduct state
      }
    }
  }
  useEffect(() => {
    dispatch(getProductsFromDb()); // Fetch products from database when component is mounted
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      getProductById()
      setLoading(false); // Set loading to false when products are loaded
    }
    window.scrollTo(0, 0);
  }, [id, products]) // Add products to the dependency array

  if (loading) {
    return <div style={{ height: "100vh" }}>Loading...</div>; // Display a loading state while products are being loaded
  }


  return (
    <div className="product-page">
      <div className="product-images">
        <div className="image-container">
          <img src={selectedProduct.image} alt="Product" />
          <div className="shipping-info">
            <RedeemIcon fontSize="small" />
            <span>Kargo Bedava</span>
          </div>
        </div>
      </div>
      <div className="product-info">
        <h1>{selectedProduct.title}</h1>
        <p>Marka: {selectedProduct.category}</p>
        <p className="price">Fiyat: {selectedProduct.price.toFixed(2)} TL</p>
        <p>{selectedProduct.description}</p>
        <button>Sepete Ekle</button>
        <IconButton className="favorite-button">
          <FavoriteBorderIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductPage;
