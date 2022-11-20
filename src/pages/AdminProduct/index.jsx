import { Typography, Alert, Skeleton } from '@mui/material';
import React, {useEffect} from 'react'
import { getAllProduct, deleteProduct, setDefaultData } from '../../features/product/productSlice';
import styled from 'styled-components';
import swal from 'sweetalert';
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
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

const DeleteContainer = styled.div`
  cursor: pointer
`;

const AdminProduct = () => {
  const dataProduct = useSelector(state => state.product);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    swal({
      title: "Apakah anda yakin?",
      text: "Produk akan dihapus ketika menekan tombol OK",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteProduct(id));
        swal("Success", "Produk berhasil dihapus", "success");
      } else {
        swal("Produk gagal dihapus");
      }
    });
  }

  useEffect(() => {
    dispatch(setDefaultData());
    dispatch(getAllProduct('all_product'));
  }, [dataProduct.data]);
  useEffect(() => {
    dispatch(getAllProduct('all_product'));
    dispatch(setDefaultData());
  }, []);

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
            <DeleteContainer onClick={() => handleDelete(params.row._id)} >
              <DeleteOutline style={{ fontSize: 30, color: "red"}}/>
            </DeleteContainer>
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
          <Skeleton variant="rounded" width={'100%'} height={'100%'} />
        }
    </Container>
  )
}

export default AdminProduct;




    