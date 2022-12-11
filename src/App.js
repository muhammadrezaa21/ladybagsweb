import React, { useEffect } from "react";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import DetailPage from "./pages/DetailPage";
import CatalogPage from "./pages/CatalogPage";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import AdminProduct from "./pages/AdminProduct";
import AdminDetailProduct from "./pages/AdminDetailProduct";
import AdminCreateProduct from "./pages/AdminCreateProduct";
import AdminEditProduct from "./pages/AdminEditProduct";
import AdminCategory from "./pages/AdminCategory";
import AdminCreateCategory from "./pages/AdminCreateCategory";
import AdminEditCategory from "./pages/AdminEditCategory";
import AdminBanner from "./pages/AdminBanner";
import AdminCreateBanner from "./pages/AdminCreateBanner";
import AdminEditBanner from "./pages/AdminEditBanner";
import AdminCatalog from "./pages/AdminCatalog";
import AdminCreateCatalog from "./pages/AdminCreateCatalog";
import AdminEditCatalog from "./pages/AdminEditCatalog";
import AdminUser from "./pages/AdminUser";
import AdminCreateUser from "./pages/AdminCreateUser";
import AdminEditPassword from "./pages/AdminEditPassword";
import LoginPage from "./pages/LoginPage";
import { getAllCategory } from "./features/category/categorySlice";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/produk" element={<ProductsPage />} />
        <Route path="/kategori/:id" element={<CategoriesPage />} />
        <Route path="/produk/:id" element={<DetailPage />} />
        <Route path="/katalog" element={<CatalogPage />} />
        <Route path="/tentangkami" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="produk" element={<AdminProduct />} />
          <Route path="produk/:id" element={<AdminDetailProduct />} />
          <Route path="tambahProduk" element={<AdminCreateProduct />} />
          <Route path="editProduk/:id" element={<AdminEditProduct />} />
          <Route path="kategori" element={<AdminCategory />} />
          <Route path="tambahKategori" element={<AdminCreateCategory />} />
          <Route path="editKategori/:id" element={<AdminEditCategory />} />
          <Route path="banner" element={<AdminBanner />} />
          <Route path="tambahBanner" element={<AdminCreateBanner />} />
          <Route path="editBanner/:id" element={<AdminEditBanner />} />
          <Route path="katalog" element={<AdminCatalog />} />
          <Route path="tambahKatalog" element={<AdminCreateCatalog />} />
          <Route path="editKatalog/:id" element={<AdminEditCatalog />} />
          <Route path="user" element={<AdminUser />} />
          <Route path="tambahUser" element={<AdminCreateUser />} />
          <Route path="editPassword/:id" element={<AdminEditPassword />} />
        </Route>
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
