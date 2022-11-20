import React, { useEffect } from "react";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import CategoriesPage from "./CategoriesPage";
import DetailPage from "./DetailPage";
import CatalogPage from "./CatalogPage";
import AboutPage from "./AboutPage";
import AdminPage from "./AdminPage";
import AdminProduct from "./AdminProduct";
import AdminDetailProduct from "./AdminDetailProduct";
import AdminCreateProduct from "./AdminCreateProduct";
import AdminEditProduct from "./AdminEditProduct";
import AdminCategory from "./AdminCategory";
import AdminCreateCategory from "./AdminCreateCategory";
import AdminEditCategory from "./AdminEditCategory";
import AdminBanner from "./AdminBanner";
import AdminCreateBanner from "./AdminCreateBanner";
import AdminEditBanner from "./AdminEditBanner";
import AdminCatalog from "./AdminCatalog";
import AdminCreateCatalog from "./AdminCreateCatalog";
import AdminEditCatalog from "./AdminEditCatalog";
import AdminUser from "./AdminUser";
import AdminCreateUser from "./AdminCreateUser";
import AdminEditPassword from "./AdminEditPassword";
import LoginPage from "./LoginPage";
import { getAllCategory } from "../features/category/categorySlice";
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
        <Route path="/" exact element={<HomePage />} />
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
