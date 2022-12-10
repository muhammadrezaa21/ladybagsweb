import React from 'react';
import styled from 'styled-components';
import {Logo as LogoWeb, InstagramLogo, FacebookLogo, BcaLogo, MandiriLogo, BriLogo, JneLogo, JntLogo, PosLogo, SiCepatLogo, LionParcelLogo, TikiLogo} from "../../assets";
import RoomIcon from '@mui/icons-material/Room';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {mobile} from "../../config/responsive";

const Container = styled.div`
    display: flex;
    padding: 0 20px;
    color: teal;
    ${mobile({
        flexDirection: 'column'
    })}
`; 
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    ${mobile({
        padding: 0
    })}
`; 

const Logo = styled.img`
    margin-top: 7px;
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
    ${mobile({
        padding: 0
    })}
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
    ${mobile({
        padding: 0,
        flexDirection: 'column',
        alignItems: 'flex-start'
    })}
`;

const SubPaymentContainer = styled.div`
    ${mobile({
        display: 'flex',
        width: '100%',
        justifyContent: 'space-arraound',
        margin: '5px 0'
    })}
`;

const Payment = styled.img`
    height: 25px;
    margin-right: 15px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({
        padding: 0,
        marginBottom: '20px',
        flexDirection: 'column',
    })}
`;

const EkspedisiContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
    ${mobile({
        marginBottom: '10px',
    })}
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
                Ladybags merupakan suplier fashion tas fashion di kota Medan. Kami menerima kerjasama untuk pengambilan partai besar maupun sistem dropship (pengiriman langsung ke alamat konsumen).
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
            <ContactItem onClick={() => window.open('https://www.google.com/maps/place/Gg.+Amat+No.25,+Titi+Kuning,+Kec.+Medan+Johor,+Kota+Medan,+Sumatera+Utara+20147/@3.5313508,98.6829235,17z/data=!3m1!4b1!4m5!3m4!1s0x30313a99c991b2eb:0x6afec5d229619a05!8m2!3d3.531345!4d98.685112')}><RoomIcon style={{ marginRight: "10px" }} /> Jl Brigjen Zein Hamid Gg.Amat No 25D</ContactItem>
            <ContactItem><AccessTimeIcon style={{ marginRight: "10px" }} /> Senin - Sabtu, 08.00 s/d 16.00 WIB</ContactItem>
            <ContactItem><WhatsAppIcon style={{ marginRight: "10px" }} /> 
                <PhoneNumber onClick={() => window.open('https://wa.me/082162882109')}>
                    0821 6288 2109
                </PhoneNumber>
                <span style={{ marginRight: "5px" }}>/</span>
                <PhoneNumber onClick={() => window.open('https://wa.me/085186336338')}>
                    0851 8633 6338 
                </PhoneNumber>
            </ContactItem>
            <PaymentContainer>
                <SubPaymentContainer>
                    <Payment src={BcaLogo} />
                    <Payment src={MandiriLogo}/>
                    <Payment src={BriLogo} />
                </SubPaymentContainer>
            </PaymentContainer>
        </Center>
        <Right>
            <Title>Jasa Pengiriman</Title>
            <EkspedisiContainer>
                <EkspedisiList>
                    <Ekspedisi src={JneLogo} /> 
                </EkspedisiList>
                <EkspedisiList>
                    <Ekspedisi src={TikiLogo} />
                </EkspedisiList>
                <EkspedisiList>
                    <Ekspedisi src={PosLogo} />
                </EkspedisiList>
            </EkspedisiContainer>
            <EkspedisiContainer>
                <EkspedisiList>
                    <Ekspedisi src={SiCepatLogo} /> 
                </EkspedisiList>
                <EkspedisiList>
                    <Ekspedisi src={JntLogo} />
                </EkspedisiList>
                <EkspedisiList>
                    <Ekspedisi src={LionParcelLogo} />
                </EkspedisiList>
            </EkspedisiContainer>
        </Right>
    </Container>
  )
}

export default Footer;