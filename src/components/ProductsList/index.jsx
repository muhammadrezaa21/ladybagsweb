import React, {useState} from 'react';
import styled from 'styled-components';
import Products from '../Products';
import { useSelector } from 'react-redux';
import { useLocation, useParams, } from 'react-router-dom';

const Container = styled.div`
    padding-top: 8.5vh;
`;

const Title = styled.h1`
    margin-left: 40px;
`
const FilterContainer = styled.div`
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Filter = styled.div``;
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px
`;
const Select = styled.select`
    padding: 5px;
    margin-right: 20px
`;
const Option = styled.option``;


const ProductsList = ({type}) => {
    const category = useParams();
    const path = useLocation().pathname.split('/')[1];
    const dataProduct = useSelector(state => state.product);
    const [productType, setProductType] = useState('all product')


    const productPage = (data, productType) => {
        if(data){
            return <Products data={data.data} productType={productType} />
        }else {
            return <div>tidak ada data</div>
        }
    }
    const categoryPage = (data, productType) => {
        if(data){
            return <Products data={data.data} productType={productType} />
        }else {
            return <div>tidak ada data</div>
        }
    }
  return (
    <Container>
        {type === 'products' ?
        (<Title>ALL PRODUCTS</Title>)
        :
        (<Title>{category.id.toUpperCase()}</Title>)
        }
        <FilterContainer>
            <Filter>
                <FilterText>Filter Product : </FilterText>
                <Select value={productType} onChange={(e) => setProductType(e.target.value)}>
                    <Option value="all product">All Product</Option>
                    <Option value="best seller">Best Seller</Option>
                    <Option value="new">New</Option>
                    <Option value="sale">Sale</Option>
                </Select>
            </Filter>
        </FilterContainer>
        
        {dataProduct.isLoading ?
            <div>sedang loading</div>
            : path === 'produk' ? 
                productPage(dataProduct.dataProducts, productType) 
                : 
                categoryPage(dataProduct.dataProductCategory, productType)
        }

    </Container>
  )
}

export default ProductsList;