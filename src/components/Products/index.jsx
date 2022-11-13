import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import ProductItem from '../ProductItem';
import {useNavigate} from "react-router-dom";

const Container = styled.div`
    display: flex;
    padding: ${props => props.page === 'home' ? '20px' : '20px 40px'};
    flex-wrap: wrap;
    justify-content: ${props => props.page === 'home' ? 'space-between' : ''};
    background-color: #f5fbfd;
`;
const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;
  `;
  
const Title = styled.h3`
  cursor: pointer;
  color: teal; 
`;
    
const Products = ({page, data, productType}) => {
  const navigate = useNavigate();
  return (
    <Container page={page}>
        {page === 'home' && data.map((item) => (<ProductItem item={item} key={item._id} />))}
        {page !== 'home' && 
          productType === 'all product' ?
            data.map((item) => (<ProductItem item={item} key={item._id} />))
            :
            data.map((item) => item.type === productType && (<ProductItem item={item} key={item._id} />))
        }
        {page === 'home' && <Info onClick={() => navigate('/produk')}><Title>See More Products</Title></Info>}
    </Container>
  )
}

export default Products;