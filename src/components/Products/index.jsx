import React, {useEffect} from 'react';
import styled from 'styled-components';
import ProductItem from '../ProductItem';
import { getProductByType} from '../../features/product/productSlice';
import {useNavigate, useLocation} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {Skeleton} from '@mui/material';
import {mobile} from "../../config/responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;
`;
 
const Wrapper = styled.div`
    display: flex;
    background-color: #f5fbfd;
    padding: ${props => props.page === 'home' ? '20px' : '20px 40px'};
    flex-wrap: wrap;
    justify-content: ${props => props.page === 'home' ? 'space-between' : ''};
    ${mobile({
      justifyContent: 'space-between',
      padding: '20px 20px 20px 20px'
  })}
`

const Info = styled.div`
  cursor: pointer;
  color: teal; 
`;
  
const Title = styled.h3`
  cursor: pointer;
  color: teal; 
  ${mobile({
    fontSize: '15px'
})}
`;
    
const Products = ({page, data, productType}) => {
  const dispatch = useDispatch();
  const dataProduct = useSelector(state => state.product);
  const location = useLocation();
  const path = useLocation().pathname.split('/')[1];
  const navigate = useNavigate();
  useEffect(() => {
    if(!path){
      dispatch(getProductByType());
    }
  }, [location.pathname]);
  switch(page){
    case 'home' : 
          return (
            <Container>
              <Wrapper page={page}>
                {
                  dataProduct.dataProductHome ?
                  <>
                    {dataProduct.dataProductHome.data.map((item, index) => 
                      (<ProductItem index={index} item={item} key={item._id} />)
                    )}
                  </>  
                  :
                  <Skeleton variant="rounded" width={'100%'} height={'100%'} />
                }
              </Wrapper>
              <Info onClick={() => navigate('/produk?search=all_product')}><Title>See More Products</Title></Info>
            </Container>  
          );
          break;
    default : 
        return (
          <Wrapper>
            {productType === 'all product' ? 
              data.map((item) => (<ProductItem item={item} key={item._id} />))
              :
              data.map((item) => item.type === productType && (<ProductItem item={item} key={item._id} />))
            }

          </Wrapper>
        );
  }
  
}

export default Products;