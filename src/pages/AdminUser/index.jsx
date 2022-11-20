import { Typography, Skeleton } from '@mui/material';
import React, {useEffect, useState} from 'react'
import {setDefaultDataResponse, getAllUser, deleteUser, changePassword} from '../../features/user/userSlice';
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
    text-transform: uppercase;
`;
const Title = styled.div`
`;
const DeleteContainer = styled.div`
  cursor: pointer
`;

const AdminUser = () => {
  const dispatch = useDispatch();
  const dataUser = useSelector(state => state.user);

  const handleDelete = (id) => {
    swal({
      title: "Apakah anda yakin?",
      text: "User akan dihapus ketika menekan tombol OK",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteUser(id));
        swal("Success", "User berhasil dihapus", "success");
      } else {
        swal("User gagal dihapus");
      }
    });
  };
  const handleReset = (id) => {
    swal({
      title: "Apakah anda yakin?",
      text: "Password user akan direset ketika menekan tombol OK",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(changePassword({data: null, id}));
        swal("Success", "Password user berhasil direset", "success");
      } else {
        swal("Password user gagal direset");
      };
    });
  }

  const columns = [
    { field: 'name', headerName: 'NAMA USER', width: 300,
    renderCell: (params) => {
      return(
            <TitleContainer>
                <Title>{params.row.name}</Title>
            </TitleContainer>
      )
    },
    },
    { field: 'link', headerName: 'EMAIL USER', width: 300,
    renderCell: (params) => {
        return(
            <Title>{params.row.email}</Title>
        )
    },
    },
    {
      field: "action",
      headerName: "ACTION",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            {dataUser.dataAuthUser.data._id !== params.row._id ?
            <>
              <ButtonEdit onClick={() => handleReset(params.row._id)}>RESET PASSWORD</ButtonEdit>
              <DeleteContainer onClick={() => handleDelete(params.row._id)} >
                <DeleteOutline style={{ fontSize: 30, color: "red"}}/>
              </DeleteContainer>
              </> : '' 
            }
          </>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(setDefaultDataResponse());
    dispatch(getAllUser());
  }, [dataUser.dataResponse]);
  useEffect(() => {
    dispatch(getAllUser());
    dispatch(setDefaultDataResponse());
  }, []);

  return (
    <Container>
        <Typography variant="h5">Data User</Typography>
        {dataUser.data ? 
          <DataGrid
            rows={dataUser.data.data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            getRowId={(row) => row._id}
            sx={{marginTop: 1 }}
          />
          :
          <Skeleton variant="rounded" width={'100%'} height={'100%'} />
        }
    </Container>
  )
}

export default AdminUser;




    