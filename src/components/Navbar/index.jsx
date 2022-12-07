import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import {Logo} from '../../assets';
import {Link, useNavigate, useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import {mobile} from "../../config/responsive";
import DehazeIcon from '@mui/icons-material/Dehaze';

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
    ${mobile({
        height: '50px',
    })}
`;

const Wrapper = styled.div`
    padding: 8px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({
        paddingHorizontal: '5px',
        paddingVertical: '5px',
    })}
`;

const Left = styled.div`
    display: flex;
    flex: 1; 
    margin-top: -2px
`;

const Image = styled.img`
    width: 100px;
    ${mobile({
        width: '75px',
        marginLeft: '-20px'
    })}
`;

const Center = styled.div`
    display: flex;
    flex: 2;
    align-items: center;
    ${mobile({
        display: 'flex',
        flex: 1,
    })}
`;
const Right = styled.div`
    display: flex;
    flex: 2;
    @media only screen and (max-width: 480px) {
        position: absolute;
        left: 0;
        top: 7vh;
        flex: 1;
        flex-direction: column;
        width: 100%;
        padding: 10px 10px 10px 20px;
        background-color: white;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.33);
        -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.33);
        -box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.33);
        z-index: -1000;
        transform: ${props => props.isToogle ? 'translateX(0%)' : 'translateX(100%)'};
        transition: all 0.8s;
    }
    `;
    
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    margin-left: 25px;
    padding: 5px;
    align-items: center;
    width: 60%;
    ${mobile({
        width: '50vw',
        marginRight: '13px'
    })}
`;

const Input = styled.input`
    border: none;
    flex: 1;
    &:focus{
        outline: none;
    }
    ${mobile({
        width: '100%'
    })}
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
    @media only screen and (max-width: 480px) {
        border: none;
        position: static;
        display: flex;
        flex-direction: column;
        transition: all 0.8s;
    }    
`;

const MenuItem = styled.div`
    position: relative;
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
    color: ${props => (props.path === props.name) ? 'teal' : ''};
    &:hover{
        color: teal;
    }
    &:hover ${SubItemContainer}{
        display: block
    }
    ${mobile({
        margin: '10px 0',
    })}
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
    ${mobile({
        border: 'none'
    })}
`;

const ToogleContainer = styled.div`
    display: none;
    cursor: none;
    ${mobile({
        display: 'flex',
        cursor: 'pointer'
    })}
`;


const Navbar = () => {
    const dataCategory = useSelector(state => state.category.data.data);
    const location = useLocation().pathname;
    const navigate = useNavigate();
    const path = location.split("/");
    const [query, setQuery] = useState('');
    const [isToogle, setIsToogle] = useState(false);
    const [isCategoryToogle, setIsCategoryToogle] = useState(false);
    const handleClick = () => {
        const searchQuery = query.toLowerCase();
        navigate(`/produk?search=${searchQuery}`);
    }
    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            const searchQuery = query.toLowerCase();
            navigate(`/produk?search=${searchQuery}`);
        }
    }
    const handleToogle = () => {
        if(isToogle){
            setIsToogle(false);
        } else{
            setIsToogle(true);
        }
    }
    const handleCategoryToogle = () => {
        if(isCategoryToogle){
            setIsCategoryToogle(false);
        } else{
            setIsCategoryToogle(true);
        }
    }
    useEffect(() => {
        setIsToogle(false);
    }, [location])
  return (
    <Container>
        <Wrapper>
            <Left onClick={() => navigate('/')}> 
                <Image src={Logo} alt="Ladibags logo" />
            </Left>
            <Center>
                <SearchContainer>
                    <Input placeholder="Cari Produk" type="text" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleEnter} />
                    <IconSearchContainer onClick={handleClick}>
                        <SearchIcon style={{ fontSize: 16, color: "gray" }} />
                    </IconSearchContainer>
                </SearchContainer>
            </Center>
            <Right isToogle={isToogle}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'} >
                    <MenuItem path={path[1]} name={''}>HOME</MenuItem> 
                </Link>
                <Link style={{ textDecoration: 'none', color: 'black'  }} to={'/produk?search=all_product'}>
                    <MenuItem path={path[1]} name={'produk'}>PRODUK</MenuItem>
                </Link>
                    <MenuItem onClick={handleCategoryToogle} path={path[1]} name={'kategori'}>
                        KATEGORI
                        <SubItemContainer isCategoryToogle={isCategoryToogle}>
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
                <Link style={{ textDecoration: 'none', color: 'black'  }} to={'/admin'}>
                    <MenuItem path={path[1]} name={'admin'}>LOGIN</MenuItem>
                </Link>
            </Right>
            <ToogleContainer onClick={handleToogle}>
                <DehazeIcon style={{ color: "gray" }}  />
            </ToogleContainer>
        </Wrapper>
    </Container>
  )
}

export default Navbar;
