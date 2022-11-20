import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {getProductById} from "../../features/product/productSlice";
import { host_url } from '../../config';
import { formatRupiah } from '../../config/formatRupiah';
import { useParams, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { Typography, Skeleton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Container = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    padding: 20px;
    border: 1px solid rgba(0,0,0,.125);
    margin: 0 10px 10px 10px;
    border-radius: 5px;
`;
const Wrapper = styled.div`
    margin-top: 3vh;
    padding: 20px 40px;
    display: flex;
`;
const ImageContainer = styled.div`
    flex: 1;
`; 
const Image = styled.img`
    width: 100%;
    height: 60vh;
    object-fit: cover;
`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 40px;
`;
const Title = styled.h1`
    font-weight: 200;
    margin-top: 0;
`;
const Desc = styled.p`
    margin: 20px 0;
    letter-spacing: 1px;
    line-height: 1.5
`;
const Price = styled.span`
    font-size: 40px;
    font-weight: 100;
    margin-right: 15px;
`;
const ColorContainer = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
`;
const ColorTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-right: 10px;
`;
const Color = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid rgba(0,0,0,.125);
    margin-right: 7px;
    cursor: pointer;
`;
const ButtonContainer = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px 5px 5px;
    cursor: pointer;
    margin-top: 30px;
    background-color: white;
    color: teal;
    font-weight: 500;
    border: 1px solid teal;

    &:hover{
        background-color: #f5fafd;
    };
`;
const TextButton = styled.span`
    font-size: 14px;
`;

const AdminDetaiProduct = () => {
    const id = useParams();
    const navigate = useNavigate();    
    const dispatch = useDispatch();
    const [color, setColor] = useState(0);
    const dataProduct = useSelector(state => state.product);
    useEffect(() => {
        dispatch(getProductById(id.id));
    }, []);
  return (
    <Container>
        <Typography variant="h5">Detail Produk</Typography>
        {dataProduct.dataProductById ? 
            <Wrapper>
                <ImageContainer>
                    <Image src={`${host_url}/${dataProduct.dataProductById.data.colors[color].image}`} />
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
                            <Color color={item.color} key={index} onClick={() => setColor(index)} />
                        )}
                    </ColorContainer>
                    <ButtonContainer>
                        <ArrowBackIosNewIcon style={{ fontSize: 14}}/>
                        <TextButton onClick={() => navigate(-1)}> Back</TextButton>
                    </ButtonContainer>
                </InfoContainer>
            </Wrapper>
            :
            <Skeleton variant="rounded" width={'100%'} height={'100%'} />
        }
    </Container>
  )
}

export default AdminDetaiProduct