import React, {useState} from 'react'
import { formatRupiah } from '../../config/formatRupiah';
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled, {keyframes} from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {Skeleton} from "@mui/material";
import { host_url } from '../../config';
import {mobile} from "../../config/responsive";


const Container = styled.div`
    padding-top: 8.5vh;
    ${mobile({
        paddingTop: '50px'
    })}
`;

const Wrapper = styled.div`
    margin-top: 3vh;
    padding: 20px 40px;
    display: flex;
    ${mobile({
        flexDirection: 'column',
        marginTop: '20px',
        padding: '0 20px',
    })}
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const imageAnimation = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`;
const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    animation-name: ${imageAnimation};
    animation-duration: 2s;
    display: ${props => props.activeColor === props.index ? 'block' : 'none'};
    ${mobile({
        width: '100%',
        height: '232px',
        objectFit: 'cover'
    })}
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 40px;
    ${mobile({
        padding: 0,
        margin: '10px 0'
    })}    
`;
const Title = styled.h1`
    font-weight: 200;
    margin-top: 0;
    ${mobile({
        fontSize: '25px'
    })}    
`;
const Desc = styled.p`
    margin: 20px 0;
    letter-spacing: 1px;
    line-height: 1.5
    margin-top: 0;
    ${mobile({
        fontSize: '15px',
        margin: '10px 0'
    })} 
`;
const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
    margin-right: 15px;
    ${mobile({
        fontSize: '20px',
        fontWeight: '300'
    })} 
`;
const ColorContainer = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    ${mobile({
        margin: '10px 0'
    })} 
`;
const ColorTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 10px;
    ${mobile({
        fontSize: '20px',
        fontWeight: '300'
    })} 
`;
const Color = styled.div`
    padding: 3px;
    margin-right: 7px;
    border: 1px solid gray;
    border-radius: 3px;
    cursor: pointer;
    background-color: ${props => props.index === props.color ? 'teal' : 'white'};
    color: ${props => props.index === props.color ? 'white' : 'black'};
`;
const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px 5px 5px;
    cursor: pointer;
    margin-top: 40px;
    background-color: white;
    color: teal;
    font-weight: 500;
    border: 1px solid teal;

    &:hover{
        background-color: #f5fafd;
    };
    ${mobile({
        margin: '20px 0'
    })} 
`;
const TextButton = styled.span`
    font-size: 14px;
`;
const SkeletonContainer = styled.div`
    width: 100%;
    height: 80vh;
    background-color: white
`;

const DetailProduct = () => {
    const navigate = useNavigate();
  const dataProduct = useSelector(state => state.product);
  const [color, setColor] = useState(0);
  const data = dataProduct.dataProductById.data;
  return (
    <Container>
        <Wrapper>
        {data ?
            <>
                <ImageContainer>
                    {data.colors.map((item, index) => 
                        <Image index={index} activeColor={color} src={item.image ? `${host_url}/${item.image}` : ''} />
                    )}
                </ImageContainer>
                <InfoContainer>
                    <Title>{dataProduct.dataProductById.data.name.toUpperCase()}</Title>
                    <Desc>{dataProduct.dataProductById.data.desc.toUpperCase()}</Desc>
                    {dataProduct.dataProductById.data.promoPrice === 0 ?
                    <Price>Rp {formatRupiah(dataProduct.dataProductById.data.price)}</Price>
                    :
                    <>
                        <Price>Rp {formatRupiah(dataProduct.dataProductById.data.promoPrice)}</Price>
                        <Price><s>Rp {formatRupiah(dataProduct.dataProductById.data.price)}</s></Price>
                    </>
                    }
                    <ColorContainer>
                        <ColorTitle>Colors :</ColorTitle>
                        {dataProduct.dataProductById.data.colors.map((item, index) => 
                            <Color key={index} index={index} color={color} onClick={() => setColor(index)}>{item.color.toUpperCase()}</Color>
                        )}
                    </ColorContainer>
                    <ButtonContainer>
                        <ArrowBackIosNewIcon style={{ fontSize: 14}}/>
                        <TextButton onClick={() => navigate(-1)}> Back</TextButton>
                    </ButtonContainer>
                </InfoContainer>
            </>
            :
            <SkeletonContainer>
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
            </SkeletonContainer>
        }
        </Wrapper>
    </Container>
  )
}

export default DetailProduct;