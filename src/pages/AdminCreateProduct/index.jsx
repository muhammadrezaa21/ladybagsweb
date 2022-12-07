import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import {createNewProduct} from "../../features/product/productSlice";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";
import { Typography, TextField, Select, MenuItem, FormControl, InputLabel, Button, Alert } from '@mui/material';
const Container = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    padding: 20px;
    border: 1px solid rgba(0,0,0,.125);
    margin: 0 10px 10px 10px;
    border-radius: 5px;
`;

const AlertContainer = styled.div`
    margin-top: 20px
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
    margin-top: 10px;
`;

const Image = styled.img`
    width: 75px;
    height: 75px;
`;

const InputFile = styled.input`
    margin-top: 20px;
`;
 
const AdminCreateProduct = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [promoPrice, setPromoPrice] = useState(0);
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [colors, setColors] = useState([{id: 1, color: '', image: '', imagePreview: ''}]);
    const categories = useSelector(state => state.category); 
    const dataProduct = useSelector(state => state.product); 
    const types = ['best seller', 'new', 'normal', 'sale'];
    const [errorInput, setErrorInput] = useState(false);
    const [readyUpload, setReadyUpload] = useState(false);
    const handleColor = (id, e) => {
        setColors(colors.map(item => {
            if(item.id === id){
                return {...item, color: e.target.value.toLowerCase()}
            } else {
                return item
            }
        }))
    }
    const handleImage = (id, e) => {
        const file = e.target.files[0];
        setColors(colors.map(item => {
            if(item.id === id){
                return {...item, image: file, imagePreview: URL.createObjectURL(file)}
            } else {
                return item;
            }
        }))
    }
    const addImageButton = () => {
        const id = colors.length + 1
        const color = ''
        const image = ''
        const imagePreview = ''
        setColors([...colors, {id, color, image, imagePreview}]);
    }
    const deleteImageButton = (id) => {
        setColors(colors.filter(item => item.id !== id));
    }
    const handleSubmit = () => {
        if(name && price && desc && category && type) {
            colors.map(color => {
                if(color.color && color.image){
                    setErrorInput(false);
                    setReadyUpload(true);
                } else {
                    setErrorInput(true);
                }
            })
        }
        else {
            setErrorInput(true);
        }
        if(errorInput !== true && readyUpload){
            const data = new FormData();
            data.append('name', name.toLowerCase());
            data.append('desc', desc.toLowerCase());
            data.append('price', price);
            data.append('promoPrice', promoPrice);
            data.append('colors', JSON.stringify(colors))
            colors.map((item) => {
                data.append('image', item.image)
            });
            data.append('category', category);
            data.append('type', type);
            setLoading(true);
            dispatch(createNewProduct(data));
        }
    }
    useEffect(() => {
        if(dataProduct.data){
            swal("Success!", "Produk baru berhasil ditambahkan!", "success");
            setLoading(false);
            navigate('/admin/produk');
        }
    }, [dataProduct.isSuccess])
  return (
    <Container>
        <Typography variant="h5">TAMBAH DATA PRODUK</Typography>
        {errorInput &&
        <AlertContainer>
            <Alert severity="error">Semua field harus diisi!</Alert>
        </AlertContainer>        
        }
        <Wrapper>
            <LeftColumn>
            <InputContainer>
                <TextField
                    label="Nama Produk"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='text'
                    autoComplete="off"
                    inputProps={{style: {fontSize: 13,}}}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <TextField
                    label="Harga Normal"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='number'
                    autoComplete="off"
                    inputProps={{style: {fontSize: 13}}}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <TextField
                    label="Harga Promo"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='number'
                    autoComplete="off"
                    inputProps={{style: {fontSize: 13}}}
                    value={promoPrice}
                    onChange={(e) => setPromoPrice(e.target.value)}
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
                    autoComplete="off"
                    inputProps={{style: {fontSize: 13}}}
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                />
            </InputContainer>
            </LeftColumn>
            <RightColumn>
                <SelectContainer>
                    <FormControl variant="filled" fullWidth size="normal" sx={{ marginRight: 2 }}>
                        <InputLabel id="select-category">Kategori</InputLabel>
                        <Select
                            labelId="select-category"
                            value={category}
                            label="Age"
                            onChange={(e) => setCategory(e.target.value.toLowerCase())}
                        >
                            {categories.isLoading ?
                                <div>sedang loading</div>
                                :
                                categories.data ?

                                categories.data.data.map((item) => (<MenuItem key={item._id} value={item.name}>{item.name.toUpperCase()}</MenuItem>))
                                :
                                ''
                            }
                        </Select>
                    </FormControl>
                    <FormControl variant="filled" fullWidth>
                        <InputLabel id="select-type">Type</InputLabel>
                        <Select
                            labelId="select-type"
                            value={type}
                            label="Age"
                            onChange={(e) => setType(e.target.value.toLowerCase())}
                        >
                            {types.map((item, index) =>(<MenuItem key={index} value={item}>{item.toUpperCase()}</MenuItem>))}
                        </Select>
                    </FormControl>
                </SelectContainer>
                <ImageContainer>
                {
                colors.map((item) => 
                    (<ImageRow key={item.id}>
                        {item.imagePreview && <Image src={item.imagePreview} alt="images"/>}
                        <InputContainer>
                            <TextField
                                label="Warna"
                                variant="filled"
                                fullWidth
                                size='normal'
                                type='text'
                                autoComplete="off"
                                inputProps={{style: {fontSize: 13,}}}
                                value={item.color}
                                onChange={(e) => handleColor(item.id, e)}
                            />
                        </InputContainer>
                        <InputContainer>
                            <InputFile type='file' onChange={(e) => handleImage(item.id, e)} />
                        </InputContainer>
                        {item.id > 1 ?
                            <Button variant="contained" size="small" sx={{height: '30px', marginLeft: '5px', marginTop: '25px', backgroundColor: 'red' }} onClick={ () => deleteImageButton(item.id)} >Hapus</Button> : ''}
                    </ImageRow>)
                )
                }
                </ImageContainer>
                <Button variant="contained" sx={{ width: '25%', marginLeft: '10px', marginTop: '10px' }} onClick={addImageButton} >Tambah Warna</Button>
            </RightColumn>
        </Wrapper>
        {loading ? 
        <Button variant="contained" disabled color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }}>Loading ....</Button>
        :
        <Button variant="contained" color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }} onClick={handleSubmit} >Tambah Produk Baru</Button>
        }
    </Container>
  )
}

export default AdminCreateProduct;