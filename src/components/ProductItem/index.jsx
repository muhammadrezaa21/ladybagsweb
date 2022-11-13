import React from 'react';
import styled from 'styled-components';
import { formatRupiah } from '../../config/formatRupiah';
import { useNavigate, useLocation } from 'react-router-dom';

const Wrapper = styled.div`
    opacity: 1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
`;
const Container = styled.div`
    display: flex;
    flex: 1;
    margin: ${props => props.location === '/' ? '4px 0' : '4px 0.5vw 4px 0'};
    min-width: 18vw;
    max-width: 18vw;
    height: 300px;
    align-items: center;
    justify-content: space-between;
    position: relative;
    &:hover ${Wrapper} {
        cursor: pointer;
        opacity: 0.5
    }
`;


const Image = styled.img`
    height: 100%;
    width: 100%
`;
const TypeContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 20px 0 7px;
    background-color: red;
    border-radius: 0 10px 10px 0;
    z-index: 2;
`;

const Type = styled.p`
    font-size: 10px;
    color: white;
    font-weight: 600;
`;
    
const InfoContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    flex-direction: column;
    color: white;
    z-index: 2;
`;

const Subinfo = styled.div`
    display: flex;
    padding: 7px;
`
const Title = styled.h3`
    margin: 0;
    margin-left: 7px;
`;
const Price = styled.p`
    margin: 0 10px 0 0;
    font-size: 16px;
    font-weight: 600;
`;

const ProductItem = ({item}) => { 
    const location = useLocation().pathname;
    const navigate = useNavigate();
  return (
    <Container location={location} onClick={() => navigate(`/produk/${item._id}`)}>
        <Image src={require(`../../assets/image/products/${item.color[0].image}`)} />
        <Wrapper />
        {item.type !== 'normal' &&
            <TypeContainer>
                <Type>{item.type.toUpperCase()}</Type>
            </TypeContainer>
        }
        <InfoContainer>
            <Title>{item.name.toUpperCase()}</Title>
            <Subinfo>
                {item.promoPrice === 0 ?
                    <Price>Rp {formatRupiah(item.price)}</Price>
                :
                    <>
                        <Price>Rp {formatRupiah(item.promoPrice)}</Price>
                        <Price><s>Rp {formatRupiah(item.price)}</s></Price>
                    </>
                }
            </Subinfo>
        </InfoContainer>
    </Container>
  )
}

export default ProductItem;