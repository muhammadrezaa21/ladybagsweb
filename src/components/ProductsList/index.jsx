import React, {useState} from 'react';
import styled from 'styled-components';
import Products from '../Products';
import { useSelector } from 'react-redux';
import { useLocation, useParams, } from 'react-router-dom';
import {Skeleton} from '@mui/material';
import {mobile} from "../../config/responsive";

const Container = styled.div`
    padding-top: 8.5vh;
    ${mobile({
        paddingTop: '7vh',
    })}
`;

const Title = styled.h1`
    margin-left: 40px;
    ${mobile({
        margin: '10px 0 10px 20px'
    })}
`
const FilterContainer = styled.div`
    padding: 0 40px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    ${mobile({
        padding: '0 20px',
    })}
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
const SkeletonTitleContainer = styled.div`
    width: 50vw;
    height: 45px;
    background-color: white;
`;
const SkeletonContainer = styled.div`
    padding: 20px 40px;
    background-color: white;
`;
const NoDataContainer = styled.div`
    padding: 20px 40px;
    background-color: white
`;
const NoDataText = styled.h3`
    font-weight: 500;
    font-size: 25px;
`;
 

const ProductsList = ({type}) => {
    const category = useParams();
    const path = useLocation().pathname.split('/')[1];
    const dataProduct = useSelector(state => state.product);
    const [productType, setProductType] = useState('all product')
  return (
    <Container>
        {type === 'products' ?
        (
        <Title>
            {dataProduct.isLoading ? 
                <SkeletonTitleContainer>
                    <Skeleton animation="wave" variant="text" width={'30%'} height={'100%'} />
                </SkeletonTitleContainer>
                : 
                'ALL PRODUK'
            }
        </Title>)
        :
        (<Title>
            {dataProduct.isLoading ? 
                <SkeletonTitleContainer>
                    <Skeleton animation="wave" variant="text" width={'30%'} height={'100%'} />
                </SkeletonTitleContainer>
                : 
                `${category.id.toUpperCase()}`
            }
        </Title>)
        }
        <FilterContainer>
            {dataProduct.isLoading ? 
            <SkeletonTitleContainer>
                <Skeleton animation="wave" variant="text" width={'35%'} height={'100%'} />
            </SkeletonTitleContainer>
            : 
            <Filter>
                <FilterText>Filter Product : </FilterText>
                <Select value={productType} onChange={(e) => setProductType(e.target.value)}>
                    <Option value="all product">All Product</Option>
                    <Option value="best seller">Best Seller</Option>
                    <Option value="new">New</Option>
                    <Option value="sale">Sale</Option>
                </Select>
            </Filter>} 
        </FilterContainer>
        
        {path === 'produk' && 
            <>
                {dataProduct.dataProducts ? 
                    dataProduct.dataProducts.data.length < 1 ? 
                    (
                    <NoDataContainer>
                        <NoDataText>Produk yang dicari tidak ditemukan</NoDataText>
                    </NoDataContainer>    
                    ) 
                    :
                    (<Products data={dataProduct.dataProducts.data} productType={productType} />)
                    :
                    (<SkeletonContainer>
                        <Skeleton animation="wave" variant="rounded" width={'100%'} height={'65vh'} />
                    </SkeletonContainer>)
                }
            </>
        }
        {path === 'kategori' && 
            <>
                {dataProduct.dataProductCategory ? 
                    <Products data={dataProduct.dataProductCategory.data} productType={productType} />
                    :
                    <SkeletonContainer>
                        <Skeleton animation="wave" variant="rounded" width={'100%'} height={'60vh'} />
                    </SkeletonContainer>
                }
            </>
        }

    </Container>
  )
}

export default ProductsList;