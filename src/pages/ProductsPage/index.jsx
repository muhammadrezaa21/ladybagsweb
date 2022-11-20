import React, {useEffect} from "react";
import { Navbar, Footer, ProductsList } from "../../components";
import { useLocation, useSearchParams } from "react-router-dom";
import { getAllProduct } from "../../features/product/productSlice";
import { useDispatch} from "react-redux";

const ProductsPage = () => {
  const [queryString, setQueryString] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getAllProduct(queryString.get('search')));
  }, [queryString.get('search')])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <ProductsList type={"products"} />
      <Footer />
    </>  
  );
}; 

export default ProductsPage;
