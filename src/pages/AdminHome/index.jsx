import { Typography } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 4;
    padding: 20px;
    border: 1px solid rgba(0,0,0,.125);
    margin: 0 10px 10px 10px;
    border-radius: 5px;
`

const AdminHome = () => {
  return (
    <Container>
        <Typography variant="h3">Selamat Datang di Halaman Dashbord Admin</Typography>
    </Container>
  )
}

export default AdminHome;