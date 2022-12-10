import { Typography, Skeleton } from '@mui/material';
import React, {useEffect} from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
import swal from 'sweetalert';
import { useSelector, useDispatch } from 'react-redux';
import { DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from "@mui/icons-material";
import { host_url } from '../../config';
import { getAllBanner, setDefaultDataResponse, deleteBanner } from '../../features/banner/bannerSlice';

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

const DeleteContainer = styled.div`
  cursor: pointer
`;

const AdminBanner = () => {
  const dispatch = useDispatch();
  const dataBanner = useSelector(state => state.banner);

  const handleDelete = (id) => {
    swal({
      title: "Apakah anda yakin?",
      text: "Banner akan dihapus ketika menekan tombol OK",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteBanner(id));
        swal("Success", "Banner berhasil dihapus", "success");
      } else {
        swal("Banner gagal dihapus");
      }
    });
  }

  const columns = [
    { field: 'title', headerName: 'JUDUL BANNER', width: 200,
    renderCell: (params) => {
      return(
          <Title>{params.row.title}</Title>
      )
    },
    },
    {field: 'desc', headerName: "LINK", width: 400},
    { field: 'image', headerName: 'GAMBAR KATEGORI', width: 200,
    renderCell: (params) => {
        return(
          <Image src={params.row.image ? `${host_url}/${params.row.image}` : ''} />
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
            <Link style={{ textDecoration: 'none' }} to={`/admin/editBanner/${params.row._id}`}>
              <ButtonEdit>EDIT</ButtonEdit>
            </Link>
            <DeleteContainer onClick={() => handleDelete(params.row._id)} >
              <DeleteOutline style={{ fontSize: 30, color: "red", cursor: 'pointer'}}/>
            </DeleteContainer>
          </>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(setDefaultDataResponse());
    dispatch(getAllBanner());
  }, [dataBanner.dataResponse]);
  useEffect(() => {
    dispatch(getAllBanner());
    dispatch(setDefaultDataResponse());
  }, []);
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
          <Skeleton variant="rounded" width={'100%'} height={'100%'} />
        }
    </Container>
  )
}

export default AdminBanner;




    