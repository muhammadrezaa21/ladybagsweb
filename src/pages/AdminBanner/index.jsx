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

const AdminBanner = () => {
  const dataBanner = useSelector(state => state.banner);

  const columns = [
    { field: 'title', headerName: 'JUDUL BANNER', width: 200,
    renderCell: (params) => {
      return(
        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/admin/banner/${params.row._id}`}>
          <Title>{params.row.title}</Title>
        </Link>
      )
    },
    },
    {field: 'desc', headerName: "DESKRIPSI BANNER", width: 400},
    { field: 'image', headerName: 'GAMBAR KATEGORI', width: 200,
    renderCell: (params) => {
        return(
          <Image src={require(`../../assets/image/banners/${params.row.image}`)} />
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
        <Typography variant="h5">Data Banner</Typography>
        {dataBanner.data ? 
          <DataGrid
            rows={dataBanner.data.data}
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

export default AdminBanner;




    