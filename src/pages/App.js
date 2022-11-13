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
import AdminCategory from "./AdminCategory";
import AdminBanner from "./AdminBanner";
import LoginPage from "./LoginPage";
import AdminCreateProduct from "./AdminCreateProduct";
import AdminCreateCategory from "./AdminCreateCategory";
import AdminCreateBanner from "./AdminCreateBanner";
import AdminCreateCatalog from "./AdminCreateCatalog";
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
        <Route path="/produk/:id" element={<DetailPage />} />
        <Route path="/kategori/:id" element={<CategoriesPage />} />
        <Route path="/katalog" element={<CatalogPage />} />
        <Route path="/tentangkami" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />}>
          <Route path="produk" element={<AdminProduct />} />
          <Route path="produk/:id" element={<AdminDetailProduct />} />
          <Route path="tambahProduk" element={<AdminCreateProduct />} />
          <Route path="kategori" element={<AdminCategory />} />
          <Route path="tambahKategori" element={<AdminCreateCategory />} />
          <Route path="banner" element={<AdminBanner />} />
          <Route path="tambahBanner" element={<AdminCreateBanner />} />
          <Route path="tambahKatalog" element={<AdminCreateCatalog />} />
        </Route>
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
