import React, {useEffect} from 'react';
import "./sidebar.css";
import {
  LineStyle,
  Storefront,
  DynamicFeed,
  AddCard,
  ViewCarousel,
  Person
} from "@mui/icons-material";
import {useSelector, useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate} from "react-router-dom";
import { setDefaultDataAuthUser } from "../../features/user/userSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector(state=>state.user);
  const navigate = useNavigate()
  const path = useLocation().pathname;
  const sidePath = path.split('/')[2];

  const logout = () => {
    dispatch(setDefaultDataAuthUser());
    navigate('/auth/login');
  }
  useEffect(() => {
    if(!dataUser.dataAuthUser){
      navigate('/auth/login');
    }
  }, [dataUser.dataAuthUser]);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin" className="link">
            <li className={`sidebarListItem ${path === '/admin' ? 'active' : ''}`}>
              <LineStyle className="sidebarIcon"/>
              Dashboard
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Produk</h3>
          <ul className="sidebarList">
            <Link to="/admin/produk" className="link">
              <li className={`sidebarListItem ${path === '/admin/produk' || sidePath === 'produk' || sidePath === 'editProduk' ? 'active' : ''}`}>
                <Storefront className="sidebarIcon" />
                Data Produk
              </li>
            </Link>
            <Link to="/admin/tambahProduk" className="link">
              <li className={`sidebarListItem ${path === '/admin/tambahProduk' ? 'active' : ''}`}>
                <Storefront className="sidebarIcon" />
                Tambah Produk
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Kategori</h3>
          <ul className="sidebarList">
            <Link to="/admin/kategori" className="link">
              <li className={`sidebarListItem ${path === '/admin/kategori' || sidePath === 'editKategori' ? 'active' : ''}`}>
                <DynamicFeed className="sidebarIcon" />
                Data Kategori
              </li>
            </Link>
            <Link to="/admin/tambahKategori" className="link">
              <li className={`sidebarListItem ${path === '/admin/tambahKategori' ? 'active' : ''}`}>
                <DynamicFeed className="sidebarIcon" />
                Tambah Kategori
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Katalog</h3>
          <ul className="sidebarList">
            <Link to="/admin/katalog" className="link">
            <li className={`sidebarListItem ${path === '/admin/katalog' || sidePath === 'editKatalog' ? 'active' : ''}`}>
              <AddCard className="sidebarIcon" />
              Data Katalog
            </li>
            </Link>
            <Link to="/admin/tambahKatalog" className="link">
            <li className={`sidebarListItem ${path === '/admin/tambahKatalog' ? 'active' : ''}`}>
              <AddCard className="sidebarIcon" />
              Tambah Katalog
            </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Banner</h3>
          <ul className="sidebarList">
          <Link to="/admin/banner" className="link">
            <li className={`sidebarListItem ${path === '/admin/banner' || sidePath === 'editBanner' ? 'active' : ''}`}>
              <ViewCarousel className="sidebarIcon" />
              Data Banner
            </li>
          </Link>
          <Link to="/admin/tambahBanner" className="link">
            <li className={`sidebarListItem ${path === '/admin/tambahBanner' ? 'active' : ''}`}>
              <ViewCarousel  className="sidebarIcon" />
              Tambah Banner
            </li>
          </Link>  
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">User</h3>
          <ul className="sidebarList">
            {dataUser.dataAuthUser.data.isAdmin && 
              <>
              <Link to="/admin/user" className="link">
              <li className={`sidebarListItem ${path === '/admin/user' ? 'active' : ''}`}>
                <Person className="sidebarIcon" />
                Data User
              </li>
              </Link>  
              <Link to="/admin/tambahUser" className="link">
              <li className={`sidebarListItem ${path === '/admin/tambahUser' ? 'active' : ''}`}>
                <Person className="sidebarIcon" />
                Tambah User
              </li>
              </Link> 
              </>
            } 
            <Link to={`/admin/editPassword/${dataUser.dataAuthUser.data._id}`} className="link">
            <li className={`sidebarListItem ${path === '/admin/editPassword' ? 'active' : ''}`}>
              <Person className="sidebarIcon" />
              Edit Password
            </li>
            </Link> 
            <div className="link" onClick={logout} >
            <li className={`sidebarListItem ${path === '/admin/editPassword' ? 'active' : ''}`}>
              <Person className="sidebarIcon" />
              Logout
            </li>
            </div> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;