import React, {useState} from 'react'
import { formatRupiah } from '../../config/formatRupiah';
import {useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


const Container = styled.div`
    padding-top: 8.5vh;
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
    height: 80vh;
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
    margin-right: 7px;
    cursor: pointer;
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
`;
const TextButton = styled.span`
    font-size: 14px;
`;

const DetailProduct = () => {
    const navigate = useNavigate();
  const dataProduct = useSelector(state => state.product);
  const [color, setColor] = useState(0);
  return (
    <Container>
        {dataProduct.isLoading ?
            <div>sedang loading</div> 
            :
            dataProduct.dataProductById ?
            <Wrapper>
                <ImageContainer>
                    <Image src={require(`../../assets/image/products/${dataProduct.dataProductById.data.color[color].image}`)} />
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
                        {dataProduct.dataProductById.data.color.map((item, index) => 
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
            <div>data kosong</div>
        }
    </Container>
  )
}

export default DetailProduct;