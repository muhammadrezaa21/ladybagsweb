import React, { useEffect } from "react";
import { Sidebar, Topbar } from "../../components";
import AdminHome from "../AdminHome";
import styled from "styled-components";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import { getAllProduct } from "../../features/product/productSlice";
import { getAllCategory } from "../../features/category/categorySlice";
import { getAllBanner } from "../../features/banner/bannerSlice";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  .link {
    text-decoration: none;
    color: inherit;
  }
`;

const AdminPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataUser = useSelector(state => state.user);
  useEffect(() => {
    if(!dataUser.dataAuthUser) {
      navigate("/auth/login");
    }
    else {
      dispatch(getAllProduct())
      dispatch(getAllCategory())
      dispatch(getAllBanner())
    }
  }, []);
  const location = useLocation();
  const path = location.pathname.split("/");
  return (
    <>
      <Topbar />
      <Container>
        <Sidebar />
        {(path.length === 2) && <AdminHome />  }
        <Outlet />
      </Container>
    </>
  );
};

export default AdminPage;
