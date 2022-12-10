import React from 'react';
import styled from 'styled-components';
import { formatRupiah } from '../../config/formatRupiah';
import { host_url } from '../../config';
import {mobile} from "../../config/responsive";
import { useNavigate, useLocation } from 'react-router-dom';

const Wrapper = styled.div`
    opacity: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props => props.location === '/' ? '4px 0' : '4px 0.5vw 4px 0'};
    min-width: 18vw;
    max-width: 18vw;
    height: 300px;
    position: relative;
    border-radius: 5px;
    &:hover ${Wrapper} {
        cursor: pointer;
        opacity: 0.5;
    };
    @media only screen and (max-width: 480px) {
        display: ${props => props.index > 5 ? 'none' : 'flex'};
        min-width: 43vw;
        height: 205px;
        margin: 4px 0;
    }
`;
const ImageContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 225px;
    align-items: center;
    justify-content: center;
    border-radius: 5px 5px 0 0;
    ${mobile({
        height: '153.75px'
    })}
`;
const Image = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 5px 5px 0 0;
`;
const ColorContainer = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
`;
const Color = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid rgba(0,0,0,.125);
    margin: 0 0 10px 10px;
    ${mobile({
        width: '7px',
        height: '7px',
        margin: `0 0 5px 5px`
    })} 
`;
const TypeContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 20px 0 7px;
    background-color: red;
    border-radius: 5px 10px 10px 0;
    z-index: 2;
`;
const Type = styled.p`
    font-size: 10px;
    color: white;
    font-weight: 600;
`;  
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75px;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    z-index: 3;
    ${mobile({
        height: '51.25px'
    })}
`;
const Subinfo = styled.div`
    display: flex;
    padding: 7px;
    width: 100%;
    height: 23px;
    align-items: center;
`;
const TitleContainer = styled.div`
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
            line-clamp: 1; 
    -webkit-box-orient: vertical;
    ${mobile({
        height: '27px',
    })}
`;
const Title = styled.h3`
    margin: 10px 0 0 0;
    margin-left: 7px;
    font-weight: 700;
    ${mobile({
        marginTop: '3px',
        fontSize: '15px'
    })}
`;
const Price = styled.p`
    margin: 0 10px 0 0;
    font-size: 18px;
    font-weight: 700;
    ${mobile({
        fontSize: '14px',
        margin: '0 5px 0 0'
    })}
`;
const DashPrice = styled.p`
    margin: 0;
    font-size: 16px;
    font-weight: 700;
    color: red;
    ${mobile({
        fontSize: '12px'
    })}
`;
const ProductItem = ({item, index}) => { 
    const location = useLocation().pathname;
    const navigate = useNavigate();
  return (
    <Container index={index} location={location} onClick={() => navigate(`/produk/${item._id}`)}>
        <ImageContainer>
            <Image src={item.colors[0].image ? `${host_url}/${item.colors[0].image}` : ''} />
            <ColorContainer>
                {item.colors.map((item, index) => 
                    <Color color={item.color} key={index}/>
                )}
            </ColorContainer>
        </ImageContainer>
        <InfoContainer>
            <TitleContainer>
                <Title>{item.name.toUpperCase()}</Title>
            </TitleContainer>
            <Subinfo>
                {item.promoPrice === 0 ?
                    <Price>Rp {formatRupiah(item.price)}</Price>
                    :
                    <>
                        <Price>Rp {formatRupiah(item.promoPrice)}</Price>
                        <DashPrice><s>Rp {formatRupiah(item.price)}</s></DashPrice>
                    </>
                }
            </Subinfo>
        </InfoContainer>
        <Wrapper />
        {item.type !== 'normal' &&
            <TypeContainer>
                <Type>{item.type.toUpperCase()}</Type>
            </TypeContainer>
        }
    </Container>
  )
}

export default ProductItem;