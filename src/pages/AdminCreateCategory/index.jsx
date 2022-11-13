import React from 'react'
import styled from "styled-components";
import { Typography, TextField, Select, MenuItem, FormControl, InputLabel, Button } from '@mui/material';

const Container = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    padding: 20px;
    border: 1px solid rgba(0,0,0,.125);
    margin: 0 10px 10px 10px;
    border-radius: 5px;
`;

const Wrapper = styled.div`
    display: flex;
    width: 30%;
    padding: 20px;
`;

const Column = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`

const InputContainer = styled.div`
    margin: 10px;
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
`;

const ImageRow = styled.div`
    display: flex;
    margin: 10px;
`;

const Image = styled.img`
    width: 150px;
    height: 150px;
`;

const InputFile = styled.input`
`;

const AdminCreateCategory = () => {
  return (
    <Container>
        <Typography variant="h5">TAMBAH DATA KATEGORI</Typography>
        <Wrapper>
            <Column>
            <InputContainer>
                <TextField
                    label="Kategori"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='text'
                    autoComplete="true"
                    inputProps={{style: {fontSize: 13,}}}
                />
            </InputContainer>
            <ImageRow>
                <Image src={require("../../assets/image/categories/backpack.jpg")} alt="belum ada gambar"/>
                <InputContainer>
                    <InputFile type='file' />
                </InputContainer>
            </ImageRow>
            </Column>
        </Wrapper>
        <Button variant="contained" color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }} >Tambah Kategori Baru</Button>
    </Container>
  )
}

export default AdminCreateCategory;