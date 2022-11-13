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
    padding: 20px;
`;

const LeftColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
const RightColumn = styled.div`
    display: flex;
    flex: 2;
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

const SelectContainer = styled.div`
    display: flex;
    margin: 10px;
`;

const ImageContainer = styled.div`
    margin: 10px;
`;

const ImageRow = styled.div`
    display: flex;
`;

const Image = styled.img`
    width: 75px;
    height: 75px;
`;

const InputFile = styled.input`
    margin-top: 20px;
`;

const AdminCreateProduct = () => {
  return (
    <Container>
        <Typography variant="h5">TAMBAH DATA PRODUK</Typography>
        <Wrapper>
            <LeftColumn>
            <InputContainer>
                <TextField
                    label="Nama Produk"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='text'
                    autoComplete="true"
                    inputProps={{style: {fontSize: 13,}}}
                />
            </InputContainer>
            <InputContainer>
                <TextField
                    label="Harga"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='number'
                    autoComplete="true"
                    inputProps={{style: {fontSize: 13}}}
                />
            </InputContainer>
            <InputContainer>
                <TextField
                    label="Deskripsi Produk"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='text'
                    multiline={true}
                    minRows={4}
                    autoComplete="true"
                    inputProps={{style: {fontSize: 13}}}
                />
            </InputContainer>
            </LeftColumn>
            <RightColumn>
                <SelectContainer>
                    <FormControl variant="filled" fullWidth size="normal" sx={{ marginRight: 2 }}>
                        <InputLabel id="select-category">Kategori</InputLabel>
                        <Select
                            labelId="select-category"
                            value={''}
                            label="Age"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" fullWidth>
                        <InputLabel id="select-type">Type</InputLabel>
                        <Select
                            labelId="select-type"
                            value={''}
                            label="Age"
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </SelectContainer>
                <ImageContainer>
                    <ImageRow>
                        <Image src={require("../../assets/image/products/backpack1.jpg")} alt="belum ada gambar"/>
                        <InputContainer>
                            <TextField
                                label="Warna"
                                variant="filled"
                                fullWidth
                                size='normal'
                                type='text'
                                autoComplete="true"
                                inputProps={{style: {fontSize: 13,}}}
                            />
                        </InputContainer>
                        <InputContainer>
                            <InputFile type='file' />
                        </InputContainer>
                    </ImageRow>
                </ImageContainer>
                <Button variant="contained" sx={{ width: '25%', marginLeft: '10px', marginTop: '10px' }} >Tambah Warna</Button>
            </RightColumn>
        </Wrapper>
        <Button variant="contained" color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }} >Tambah Produk Baru</Button>
    </Container>
  )
}

export default AdminCreateProduct;