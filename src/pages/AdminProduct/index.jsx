import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';
import { DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material";

const Container = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    padding: 20px;
    border: 1px solid rgba(0,0,0,.125);
    margin: 0 10px 10px 10px;
    border-radius: 5px;
`;

const Title = styled.div`
  cursor: pointer;
`;

const ButtonEdit = styled.div`
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const AdminProduct = () => {
  const dataProduct = useSelector(state => state.product);

  const columns = [
    { field: 'name', headerName: 'NAMA PRODUK', width: 300,
    renderCell: (params) => {
      return(
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/admin/produk/${params.row._id}`}>
          <Title>{params.row.name}</Title>
        </Link>
      )
    },
    },
    { field: 'category', headerName: 'KATEGORI', width: 100 },
    { field: 'type', headerName: 'TYPE', width: 100 },
    {
      field: 'price',
      headerName: 'HARGA',
      type: 'number',
      width: 100,
    },
    {
      field: 'promoPrice',
      headerName: 'HARGA PROMO',
      type: 'number',
      width: 150,
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link style={{ textDecoration: 'none' }} to={`/admin/editProduk/${params.row._id}`}>
              <ButtonEdit>EDIT</ButtonEdit>
            </Link>
            <Link style={{ textDecoration: 'none' }} to={`/admin/deleteProduk/${params.row._id}`}>
              <DeleteOutline style={{ fontSize: 30, color: "red", cursor: 'pointer'}}/>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <Container>
        <Typography variant="h5">Data Produk</Typography>
        {dataProduct.dataProducts ? 
          <DataGrid
            rows={dataProduct.dataProducts.data}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            getRowId={(row) => row._id}
            sx={{ textTransform: 'uppercase', marginTop: 1 }}
          />
          :
          <div>Tidak ada data</div>
        }
    </Container>
  )
}

export default AdminProduct;




    