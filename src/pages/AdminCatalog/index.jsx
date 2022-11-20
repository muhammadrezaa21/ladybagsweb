import { Typography, Skeleton } from '@mui/material';
import React, {useEffect, useState} from 'react'
import {setDefaultDataResponse, getAllCatalog, deleteCatalog} from '../../features/catalog/catalogSlice';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import swal from "sweetalert"
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

const ButtonEdit = styled.div`
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin-right: 20px;
`;

const TitleContainer = styled.div`
  cursor: pointer;
`;
const Title = styled.div`
`;
const DeleteContainer = styled.div`
  cursor: pointer
`;

const AdminCatalog = () => {
  const dispatch = useDispatch();
  const dataCatalog = useSelector(state => state.catalog);

  const handleDelete = (id) => {
    swal({
      title: "Apakah anda yakin?",
      text: "Katalog akan dihapus ketika menekan tombol OK",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteCatalog(id));
        swal("Success", "Katalog berhasil dihapus", "success");
      } else {
        swal("Katalog gagal dihapus");
      }
    });
  }

  const columns = [
    { field: 'name', headerName: 'KATALOG', width: 300,
    renderCell: (params) => {
      return(
            <Title>{params.row.name}</Title>
      )
    },
    },
    { field: 'link', headerName: 'URL LINK', width: 400,
    renderCell: (params) => {
        return(
            <TitleContainer onClick={() => window.open(`${params.row.link}`)}>
                <Title>{params.row.link}</Title>
            </TitleContainer>  
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
            <Link style={{ textDecoration: 'none' }} to={`/admin/editKatalog/${params.row._id}`}>
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

  useEffect(() => {
    dispatch(setDefaultDataResponse());
    dispatch(getAllCatalog());
  }, [dataCatalog.dataResponse]);
  useEffect(() => {
    dispatch(getAllCatalog());
    dispatch(setDefaultDataResponse());
  }, []);

  return (
    <Container>
        <Typography variant="h5">Data Katalog</Typography>
        {dataCatalog.data ? 
          <DataGrid
            rows={dataCatalog.data.data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row._id}
            sx={{ textTransform: 'uppercase', marginTop: 1 }}
          />
          :
          <Skeleton variant="rounded" width={'100%'} height={'100%'} />
        }
    </Container>
  )
}

export default AdminCatalog;




    