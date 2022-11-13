import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const Container = styled.div`
    padding-top: 8.5vh;
    width: 100%;
    height: 92vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translate(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    height: 100%;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}
`;

const ImageContainer = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    justify-content: center;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Image = styled.img`
    height: 100%;
`;

const Title = styled.h1`
    font-size: 70px;
`;

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    letter-spacing: 3px
`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;

const Slider = ({data}) => {
    const dataBanner = data.data;
   const [slideIndex, setSlideIndex] = useState(0); 
   const backgroundColor = ["f5fafd", "fbf0f4", "f5fafd", "f5fafd", "fbf0f4", "f5fafd"];

   useEffect(() => {
    setTimeout(() => {
        setSlideIndex(slideIndex < (data.data.length - 1) ? slideIndex + 1 : 0);
    }, 5000);
   }, [slideIndex])

  return (
    <Container>
        <Wrapper slideIndex={slideIndex}>
            {dataBanner.map((item, index) => (
                <Slide bg={backgroundColor[index]} key={item._id}>
                    <ImageContainer>
                        <Image src={require(`../../assets/image/banners/${item.image}`)} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title.toUpperCase()}</Title>
                        <Desc>{item.desc.toUpperCase()}</Desc>
                    </InfoContainer>
                </Slide>
            ))}
        </Wrapper>
    </Container>
  )
}

export default Slider;