import "./sidebar.css";
import {
  LineStyle,
  Storefront,
  DynamicFeed,
  AddCard,
  ViewCarousel,
  Person
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const path = useLocation().pathname;
  const sidePath = path.split('/')[2];
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
              <li className={`sidebarListItem ${path === '/admin/produk' || sidePath === 'produk' ? 'active' : ''}`}>
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
              <li className={`sidebarListItem ${path === '/admin/kategori' ? 'active' : ''}`}>
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
            <li className="sidebarListItem">
              <AddCard className="sidebarIcon" />
              Data Katalog
            </li>
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
            <li className={`sidebarListItem ${path === '/admin/banner' ? 'active' : ''}`}>
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
          {/* <Link to="/auth/login" className="link"> */}
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              Data User
            </li>
          {/* </Link>  */}
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              Tambah User
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;