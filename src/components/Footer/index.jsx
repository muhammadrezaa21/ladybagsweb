import React from 'react';
import styled from 'styled-components';
import {Logo as LogoWeb, InstagramLogo, FacebookLogo, BcaLogo, MandiriLogo, BriLogo, BniLogo, JneLogo, JntLogo, PosLogo} from "../../assets";
import RoomIcon from '@mui/icons-material/Room';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Container = styled.div`
    display: flex;
    padding: 0 20px;
    color: teal;
`; 
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`; 

const Logo = styled.img`
    width: 100px;
`;

const Desc = styled.p`
    margin: 20px 0;
`;
const SocialContainer = styled.div`
    display: flex;
    align-items: center;
`;
const SocialIcon = styled.div`
    cursor: pointer;
`;

const SocialLogo = styled.img`
    width: 30px;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 20px;
`; 

const Title = styled.h3`
    margin-bottom: 20px;
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const PaymentContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

const Payment = styled.img`
    height: 25px;
    margin-right: 15px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const EkspedisiContainer = styled.div`
    display: flex;
`;
const EkspedisiList = styled.div`
    height: 50px;
    width: 75px;
    margin-right: 30px;
`;

const Ekspedisi = styled.img`
    width: 100%;
    height: 100%;
`;

const PhoneNumber = styled.div`
    margin-right: 5px;
    cursor: pointer;
`



const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo src={LogoWeb} />
            <Desc>
                There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration in some from, by injected humour, or randomaised words which don't look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon onClick={() => window.open('https://instagram.com/ladyshopbags')}>
                    <SocialLogo src={InstagramLogo} />
                </SocialIcon>
                <SocialIcon onClick={() => window.open('https://facebook.com/profile.php?id=100087099348466')}>
                    <SocialLogo src={FacebookLogo} />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Kontak</Title>
            <ContactItem><RoomIcon style={{ marginRight: "10px" }} /> Medan, Sumatera Utara, Indonesia</ContactItem>
            <ContactItem><AccessTimeIcon style={{ marginRight: "10px" }} /> Senin - Sabtu, 08.00 s/d 16.00 WIB</ContactItem>
            <ContactItem><WhatsAppIcon style={{ marginRight: "10px" }} /> 
                <PhoneNumber>
                    0821 6288 2109
                </PhoneNumber>
                <span style={{ marginRight: "5px" }}>/</span>
                <PhoneNumber>
                    0851 8633 6338 
                </PhoneNumber>
                </ContactItem>
            <PaymentContainer>
                <Payment src={BcaLogo} />
                <Payment src={BriLogo} />
                <Payment src={BniLogo} />
                <Payment src={MandiriLogo} name="mandiri"/>
            </PaymentContainer>
        </Center>
        <Right>
            <Title>Jasa Pengiriman</Title>
            <EkspedisiContainer>
                <EkspedisiList>
                    <Ekspedisi src={JneLogo} /> 
                </EkspedisiList>
                <EkspedisiList>
                    <Ekspedisi src={PosLogo} />
                </EkspedisiList>
                <EkspedisiList>
                    <Ekspedisi src={JntLogo} />
                </EkspedisiList>
            </EkspedisiContainer>
        </Right>
    </Container>
  )
}

export default Footer;