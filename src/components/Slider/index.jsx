import React, {useState, useEffect } from 'react'
import styled from 'styled-components';
import {Skeleton} from '@mui/material';
import { host_url } from '../../config';
import {mobile} from "../../config/responsive";

const Container = styled.div`
    padding-top: 8.5vh;
    width: 100%;
    height: 92vh;
    display: flex; 
    overflow-x: hidden;
    position: relative;
    ${mobile({
        paddingTop: '50px',
        width: '100vw',
        height: '166px',
    })}
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translate(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
    ${mobile({
        height: '100%',
    })}
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
    ${mobile({
        padding: '0px 15px 0px 10px',
    })}
`;

const Image = styled.img`
    height: 100%;
`;

const Title = styled.h1`
    font-size: 70px;
    ${mobile({
        fontSize: '20px',
    })}
`;

const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    letter-spacing: 3px;
    ${mobile({
        fontSize: '8px',
        margin: '0px 0px 0px 0px',
        letterSpacing: '2px'
    })}
`;

const Slider = ({dataBanner}) => {
   const [slideIndex, setSlideIndex] = useState(0); 
   const backgroundColor = ["f5fafd", "fbf0f4", "f5fafd", "f5fafd", "fbf0f4", "f5fafd"];
   useEffect(() => {
        setTimeout(() => {
            setSlideIndex(slideIndex < (dataBanner.data.length - 1) ? slideIndex + 1 : 0);
        }, 5000)
    }, [slideIndex]);
  return (
    <Container>
        {dataBanner ? 
            <Wrapper slideIndex={slideIndex}>
                {dataBanner.data.map((item, index) => (
                    <Slide bg={backgroundColor[index]} key={item._id}>
                        <ImageContainer>
                            <Image src={item.image ? `${host_url}/${item.image}` : ''} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title.toUpperCase()}</Title>
                            <Desc>{item.desc.toUpperCase()}</Desc>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            :
            <Skeleton variant="rounded" width={'100%'} height={'100%'} />
        }
    </Container>
  )
}

export default Slider;