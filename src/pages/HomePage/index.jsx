import React, { useState, useEffect } from 'react';
import {Navbar, Slider, Categories, Products, Footer} from '../../components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getAllBanner} from "../../features/banner/bannerSlice";
import { getProductByType } from '../../features/product/productSlice';

const HomePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const dataBanner = useSelector(state => state.banner);
  const dataCategory = useSelector(state => state.category);
  const dataProduct = useSelector(state => state.product);

  useEffect(() => {
    dispatch(getAllBanner());
    dispatch(getProductByType());
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar />

      {dataBanner.data ? 
        <Slider data={dataBanner.data} />
        :
        <div></div>
      }
      {dataCategory.data ? 
        <Categories data={dataCategory.data} />
        :
        <div></div>
      }

      {dataProduct.isLoading ? 
        <div>sedang Loading</div>
        :
        dataProduct.dataProductHome ?
          <Products page="home" data={dataProduct.dataProductHome.data}/>
          :
          <div>data tidak ada</div>
      }

      <Footer />
    </>
  )
}
 
export default HomePage;