import React, {useState} from 'react';
import { Navbar, Footer } from '../../components';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';


const Container = styled.div`
padding-top: 8.5vh;
`;

const About = () => {
  const location = useLocation();
  useState(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])
  return (
    <>
        <Navbar />
        <Container>Halaman Tentang Kami</Container>
        <Footer />
    </>
  );
}

export default About;