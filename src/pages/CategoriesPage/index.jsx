import React, {useEffect} from "react";
import { Navbar, Footer, ProductsList } from "../../components";
import { useLocation, useParams } from "react-router-dom";
import {useDispatch} from 'react-redux';
import { getProductByCategory } from "../../features/product/productSlice";

const CategoriesPage = () => {
  const category = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getProductByCategory(category.id))
  }, [location.pathname])
  return (
    <>
      <Navbar />
      <ProductsList type={'categories'} />
      <Footer />
    </>  
  );
};

export default CategoriesPage;
