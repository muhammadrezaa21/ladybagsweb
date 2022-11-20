import React, {useEffect} from 'react'
import { Navbar, Footer, DetailProduct } from '../../components';
import { getProductById } from '../../features/product/productSlice';
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch} from 'react-redux';
 
const DetailPage = () => {
  const idProduct = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductById(idProduct.id));
  }, [location.pathname]);
  return (
    <>
        <Navbar />
        <DetailProduct /> 
        <Footer />
    </>    
  )
}

export default DetailPage;