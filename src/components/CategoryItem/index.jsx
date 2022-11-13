import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    margin: 10px 12px 10px 0;
    position: relative;
    height: 100%;
    min-width: 30vw;
    max-width: 40vw;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Info = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    letter-spacing: 3px;
    text-align: center;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    font-weight: 600;
    cursor: pointer;
`;

const CategoryItem = ({item}) => {
    const navigate = useNavigate();
  return (
    <Container>    
        <Image src={require(`../../assets/image/categories/${item.image}`)} />
        <Info>
            <Title>{item.name.toUpperCase()}</Title>
            <Button onClick={() => {navigate(`/kategori/${item.name.toLowerCase()}`)}}>SHOW NOW </Button>
        </Info>
    </Container>
  )
}

export default CategoryItem;