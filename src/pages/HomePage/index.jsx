import React, {useEffect } from 'react';
import {Navbar, Slider, Categories, Products, Footer} from '../../components';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBanner } from '../../features/banner/bannerSlice';
import {Skeleton} from '@mui/material';

const Container = styled.div`
    padding-top: 8.5vh;
    width: 100%;
    height: 92vh;
`;

const HomePage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const dataBanner = useSelector(state => state.banner)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    dispatch(getAllBanner());
    }, []);
  return (
    <> 
      <Navbar />
      {dataBanner.data ? 
        <Slider dataBanner={dataBanner.data} />
        :
        <Container>
          <Skeleton variant="rounded" width={'100%'} height={'100%'} />
        </Container>
      } 
      <Categories />
      <Products page="home"/>
      <Footer />
    </>
  )
}
 
export default HomePage;