import React, {useState} from 'react'
import {Navbar, Footer} from "../../components";
import styled from 'styled-components';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
    padding-top: 8.5vh;
`;
const Wrapper = styled.div`
    padding: 40px;
    min-height: 45vh;
`;
const TitleContainer = styled.div`
`;
const Title = styled.h1`
    font-weight: 500;
`
const InfoContainer = styled.div`
    border: 1px solid rgba(0,0,0,.125);
    padding: 0 10px;
    margin: 0 20px;
`;
const CatalogContainer = styled.div`
    display: flex;
    width: 50vw;
    align-items: center;
`;
const SubtitleContainer = styled.div`
    display: flex;
    flex: 1;
`;
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 10px 5px 5px;
    cursor: pointer;
    background-color: white;
    color: teal;
    font-weight: 500;
    border: 1px solid teal;

    &:hover{
        background-color: #f5fafd;
    };
`;
const Subtitle = styled.h4`
    letter-spacing: 1px;
`;
const TextButton = styled.span`
    font-size: 14px;
`;

const CatalogPage = () => {
    const location = useLocation();
  useState(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])
  return (
    <>
        <Navbar />
        <Container>
            <Wrapper>
            <TitleContainer>
                <Title>DOWNLOAD KATALOG</Title>
            </TitleContainer>
                <InfoContainer>
                    <CatalogContainer>
                        <SubtitleContainer>
                            <Subtitle>KATALOG APRIL 2022 </Subtitle>
                        </SubtitleContainer>
                        <Button>
                            <DownloadForOfflineIcon />
                            <TextButton> Download Katalog</TextButton>
                        </Button>
                    </CatalogContainer>
                    <CatalogContainer>
                        <SubtitleContainer>
                            <Subtitle>KATALOG MARET 2022 </Subtitle>
                        </SubtitleContainer>
                        <Button>
                            <DownloadForOfflineIcon />
                            <TextButton> Download Katalog</TextButton>
                        </Button>
                    </CatalogContainer>
                    <CatalogContainer>
                        <SubtitleContainer>
                            <Subtitle>KATALOG JANUARI 2022 </Subtitle>
                        </SubtitleContainer>
                        <Button>
                            <DownloadForOfflineIcon />
                            <TextButton> Download Katalog</TextButton>
                        </Button>
                    </CatalogContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
        <Footer />
    </>
  )
}

export default CatalogPage;