import React, {useState} from 'react';
import { Navbar, Footer } from '../../components';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { TentangKami1, TentangKami2, TentangKami3 } from '../../assets';
import {mobile} from "../../config/responsive";

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
  background-color: #fbf0f4;
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
  ${mobile({
    flex: 1,
    padding: '0 20px'
})}
`;
const DescText = styled.h5`
  font-size: 25px;
  font-weight: 500;
  ${mobile({
    fontSize: '12px',
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
                <MainImage src={TentangKami1} />
                <ImageLayer />
              </MainContainer>
            <ContentOne>
              <RowImage>
                <ImageContainer>
                  <ImageContent src={TentangKami2} />
                </ImageContainer>
              </RowImage>
              <RowDesc>
                <DescText>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, nulla dolor. Exercitationem quis velit officia nesciunt natus qui vitae esse excepturi magni tenetur error voluptatum reiciendis, odit accusamus cumque ea? There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration in some from, by injected humour, or randomaised words which don't look even slightly believable.
                </DescText>
              </RowDesc>
            </ContentOne>
            <ContentTwo>
              <RowImage1>
                <ImageContainer>
                  <ImageContent src={TentangKami3} />
                </ImageContainer>
              </RowImage1>
              <RowDesc>
                <DescText>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, nulla dolor. ExercitatiTwom quis velit officia nesciunt natus qui vitae esse excepturi magni tenetur error voluptatum reiciendis, odit accusamus cumque ea? There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration in some from, by injected humour, or randomaised words which don't look even slightly believable.
                </DescText>
              </RowDesc>
              <RowImage2>
                <ImageContainer>
                  <ImageContent src={TentangKami3} />
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