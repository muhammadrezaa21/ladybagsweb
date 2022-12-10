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
    background-color: white;
`;
const Image = styled.img`
    height: 100%;
    width: 100%;
`;
const Slider = ({dataBanner}) => {
   const [slideIndex, setSlideIndex] = useState(0); 
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
                    <Slide onClick={() => window.open(`${item.desc}`)} key={item._id}>
                        <Image src={item.image ? `${host_url}/${item.image}` : ''} />
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