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

const Image = styled.img`
    margin: 10px 0;
    width: 70px;
    object-fit: cover
`;

const AdminCategory = () => {
  const dataCategory = useSelector(state => state.category);

  const columns = [
    { field: 'name', headerName: 'KATEGORI', width: 300,
    renderCell: (params) => {
      return(
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/admin/kategori/${params.row._id}`}>
          <Title>{params.row.name}</Title>
        </Link>
      )
    },
    },
    { field: 'image', headerName: 'GAMBAR KATEGORI', width: 400,
    renderCell: (params) => {
        return(
          <Image src={require(`../../assets/image/categories/${params.row.image}`)} />
        )
    },
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link style={{ textDecoration: 'none' }} to={`/admin/editKategori/${params.row._id}`}>
              <ButtonEdit>EDIT</ButtonEdit>
            </Link>
            <Link style={{ textDecoration: 'none' }} to={`/admin/hapusKategori/${params.row._id}`}>
              <DeleteOutline style={{ fontSize: 30, color: "red", cursor: 'pointer'}}/>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <Container>
        <Typography variant="h5">Data Kategori</Typography>
        {dataCategory.data ? 
          <DataGrid
            rows={dataCategory.data.data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row._id}
            sx={{ textTransform: 'uppercase', marginTop: 1 }}
          />
          :
          <div>Tidak ada data</div>
        }
    </Container>
  )
}

export default AdminCategory;




    