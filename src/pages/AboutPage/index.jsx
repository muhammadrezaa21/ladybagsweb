import React, {useState} from 'react';
import { Navbar, Footer } from '../../components';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { TentangKami1, TentangKami2, TentangKami3, Header, AboutUs1, AboutUs2 } from '../../assets';
import {mobile} from "../../config/responsive";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Container = styled.div`
  padding-top: 8.5vh;
  ${mobile({
    paddingTop: '50px'
})}
`;
const Wrapper = styled.div`
`;
const MainContainer = styled.div`
  position: relative;
  width: 100%;
  height: 91.5vh;
  background-color: #f5fafd;
  ${mobile({
    width: '100vw',
    height: '200px'
})}
`;
const MainImage = styled.img`
  height: 100%;
  width: 100%;
`;
const ContentOne = styled.div`
  position: relative;
  background-color: #f5fafd;
  padding: 50px 100px;
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px 10px'
})}
`;
const ContentTwo = styled.div`
  background-color: #f5fafd;
  padding: 50px 100px;
  display: flex;
  align-items: center;
  ${mobile({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px 10px'
})}
`;
const ImageLayer = styled.div`
  opacity: 1;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  `;
const ImageContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  ${mobile({
    width: '150px',
    height: '150px',
})}
`;
const ImageContent = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;
const RowImage = styled.div`
  display: flex;
  flex: 1;
`;
const RowImage1 = styled.div`
  display: none;
  flex: 1;
  ${mobile({
    display: 'flex'
})}
`;
const RowImage2 = styled.div`
  display: flex;
  flex: 1;
  ${mobile({
    display: 'none'
})}
`;
const RowDesc = styled.div`
  display: flex;
  flex: 2;
  padding: 0 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${mobile({
    flex: 1,
})}
`;
const DescTitle = styled.h2`
  font-size: 40px;
  margin-bottom: 0;
  ${mobile({
    fontSize: '30px',
    marginBottom: '5px'
  })}
`;
const DescText = styled.h5`
  font-size: 25px;
  font-weight: 500;
  margin: 5px 0;
  ${mobile({
    fontSize: '16px',
    marginTop: 0,
    marginBottom: 0,
    letterSpacing: '1.5px'
})}
`;
const ContactItem = styled.div`
    display: flex;
    align-items: center;
    color: teal;
    ${mobile({
      marginTop: '5px'
    })}
`;
const PhoneNumber = styled.div`
    margin-right: 5px;
    cursor: pointer;
    color: black;
    font-size: 25px;
    ${mobile({
      fontSize: '14px'
    })}
`;

const About = () => {
  const location = useLocation();
  useState(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])
  return (
    <>
        <Navbar />
        <Container>
          <Wrapper>
              <MainContainer>
                <MainImage src={Header} />
                <ImageLayer />
              </MainContainer>
            <ContentOne>
              <RowImage>
                <ImageContainer>
                  <ImageContent src={AboutUs1} />
                </ImageContainer>
              </RowImage>
              <RowDesc>
                <DescTitle>Partnership</DescTitle>
                <DescText>Daftar menjadi reseller kami.</DescText>
                <DescText>Hubungi kami di : </DescText>
                <ContactItem>
                  <WhatsAppIcon style={{ marginRight: "10px" }} /> 
                  <PhoneNumber onClick={() => window.open('https://wa.me/082162882109')}>
                      0821 6288 2109
                  </PhoneNumber>
                </ContactItem>
              </RowDesc>
            </ContentOne>
            <ContentTwo>
              <RowImage1>
                <ImageContainer>
                  <ImageContent src={AboutUs2} />
                </ImageContainer>
              </RowImage1>
              <RowDesc>
                <DescTitle>Ready Stock</DescTitle>
                <DescText>
                  Ready stock untuk tas fashion yang berada pada website. Kita akan update untuk stock yang sudah habis pada website.
                </DescText>
              </RowDesc>
              <RowImage2>
                <ImageContainer>
                  <ImageContent src={AboutUs2} />
                </ImageContainer>
              </RowImage2>
            </ContentTwo>
          </Wrapper>
        </Container>
        <Footer />
    </>
  );
}

export default About;