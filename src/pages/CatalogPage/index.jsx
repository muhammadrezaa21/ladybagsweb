import React, { useEffect } from 'react'
import {Navbar, Footer} from "../../components";
import styled from 'styled-components';
import {Skeleton} from '@mui/material'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCatalog } from '../../features/catalog/catalogSlice';
import {mobile} from "../../config/responsive";

const Container = styled.div`
    padding-top: 8.5vh;
    ${mobile({
        paddingTop: '7vh',
    })}
`;
const Wrapper = styled.div`
    padding: 40px;
    min-height: 45vh;
    ${mobile({
        padding: '0 20px 0 20px'
    })}
`;
const TitleContainer = styled.div`
    width: 25vw;
    height: 45px;
    margin-bottom: 5px;
    ${mobile({
        width: '60vw',
        height: '4vh'
    })}
`;
const Title = styled.h1`
    font-weight: 500;
    ${mobile({
        fontSize: '20px'
    })}
`
const InfoContainer = styled.div`
    border: 1px solid rgba(0,0,0,.125);
    padding: 0 10px;
    margin: 0 20px;
    ${mobile({
        margin: 0,
        padding: '0 10px 0 10px'
    })}
`;
const ItemContainer = styled.div`
    display: flex;
    flex: 1;
    margin: 10px 0;
    ${mobile({
        flexDirection: 'column',
    })} 
`;
const NameContainer = styled.div`
    display: flex;
    flex: 1;
    margin: 0 5px;
    align-items: center;
    ${mobile({
        margin: 0,
        padding: '10px'
    })}
`;
const ButtonContainer = styled.div`
    display: flex;
    flex: 2;
    padding: 10px 10px;
    ${mobile({
        flex: 1,
    })}
`;

const Button = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: white;
    padding: 0 5px;
    color: teal;
    font-weight: 500;
    border: 1px solid teal;

    &:hover{
        background-color: #f5fafd;
    };
`;
const Subtitle = styled.h4`
    letter-spacing: 1px;
    ${mobile({
        fontSize: '15px',
        margin: 0
    })}
`;
const TextButton = styled.span`
    margin-left: 3px;
    font-size: 14px;
    ${mobile({
        fontSize: '12px'
    })}
`;

const CatalogPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const dataCatalog = useSelector(state => state.catalog);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    dispatch(getAllCatalog());
  }, [])
  return (
    <>
        <Navbar />
        <Container>
            <Wrapper>
            <TitleContainer>
                {dataCatalog.data ? 
                <Title>DOWNLOAD KATALOG</Title>
                :
                <Skeleton animation="wave" variant="text" width={'100%'} height={'100%'} />
                }
            </TitleContainer>
                {dataCatalog.data ? 
                <InfoContainer>
                    {dataCatalog.data.data.map((item) => 
                    (<ItemContainer key={item._id}>
                        <NameContainer>
                            <Subtitle>{item.name.toUpperCase()}</Subtitle>
                        </NameContainer>
                        <ButtonContainer>
                            <Button onClick={()  => window.open(`${item.link}`) }>
                                <DownloadForOfflineIcon/>
                                <TextButton>DOWNLOAD KATALOG</TextButton>
                            </Button>
                        </ButtonContainer>
                    </ItemContainer>))
                    }
                </InfoContainer>
                :
                <Skeleton animation="wave" variant="rounded" width={'100%'} height={'60vh'} />
                }
            </Wrapper>
        </Container>
        <Footer />
    </>
  )
}

export default CatalogPage;