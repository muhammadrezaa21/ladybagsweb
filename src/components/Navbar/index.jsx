import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import {Logo} from '../../assets';
import {Link, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    background-color: #fff;
    height: 8.5vh;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.33);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.33);
`;

const Wrapper = styled.div`
    padding: 8px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    display: flex; flex: 1; 
    margin-top: -2px
    background-color: red;
`;

const Image = styled.img`
    width: 100px;
`;

const Center = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
`;
const Right = styled.div`
    display: flex;
    flex: 2;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    margin-left: 25px;
    padding: 5px;
    align-items: center;
    width: 60%;
`;

const Input = styled.input`
    border: none;
    flex: 1;
    &:focus{
        outline: none;
    }
`;

const IconSearchContainer = styled.div`
    cursor: pointer;
`;

const SubItemContainer = styled.div`
    position: absolute;
    width: 120px;
    background-color: white;
    border: 1px solid rgba(0,0,0,.125);
    padding: 5px;
    display: none;
    transition: ease;
`;

const MenuItem = styled.div`
    position: relative;
    font-size: 14px;
    cursor: pointer;
    margin-right: 35px;
    color: ${props => (props.path === props.name) ? 'teal' : ''};
    &:hover{
        color: teal;
    }
    &:hover ${SubItemContainer}{
        display: block
    }
`;

const SubItem = styled.div`
    width: 100%;
    font-size: 14px;
    margin-top: 7px;
    color: black;
    border-bottom-style: solid;
    border-color: black;
    border-width: 1px;
    &:hover {
        color: teal;
        border-color: teal;
    }
`; 

const Navbar = () => {
    const dataCategory = useSelector(state => state.category.data.data);
    const location = useLocation().pathname;
    const path = location.split("/");
  return (
    <Container>
        <Wrapper>
            <Left> 
                <Image src={Logo} alt="Ladibags logo" />
            </Left>
            <Center>
                <SearchContainer>
                    <Input placeholder="Cari Produk" />
                    <IconSearchContainer>
                        <SearchIcon style={{ fontSize: 16, color: "gray" }} />
                    </IconSearchContainer>
                </SearchContainer>
            </Center>
            <Right>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'} >
                    <MenuItem path={path[1]} name={''}>HOME</MenuItem> 
                </Link>
                <Link style={{ textDecoration: 'none', color: 'black'  }} to={'/produk'}>
                    <MenuItem path={path[1]} name={'produk'}>PRODUK</MenuItem>
                </Link>
                    <MenuItem path={path[1]} name={'kategori'}>
                        KATEGORI
                        <SubItemContainer>
                            {dataCategory ?
                                dataCategory.map((item) => (
                                    <Link key={item._id} style={{ textDecoration: 'none', color: 'black'  }} to={`/kategori/${item.name}`}>
                                        <SubItem>{item.name.toUpperCase()}</SubItem>
                                    </Link>
                                ))
                                :
                                <div></div>
                            }
                        </SubItemContainer>                    
                    </MenuItem>
                <Link style={{ textDecoration: 'none', color: 'black'  }} to={'/katalog'}>
                    <MenuItem path={path[1]} name={'katalog'}>KATALOG</MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'black'  }} to={'/tentangkami'}>
                    <MenuItem path={path[1]} name={'tentangkami'}>TENTANG KAMI</MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;