import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import { Typography, TextField, Alert, Button } from '@mui/material';
import { createNewBanner } from '../../features/banner/bannerSlice';

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

const AlertContainer = styled.div`
    margin-top: 20px
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

const AdminCreateBanner = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState();
    const dataBanner = useSelector(state => state.banner); 
    const [errorInput, setErrorInput] = useState(false);

    const handleImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    }

    const handleSubmit = () => {
        if(title && desc && image){
            setErrorInput(false);
            const data = new FormData();
            data.append('title', title.toLowerCase());
            data.append('desc', desc.toLowerCase());
            data.append('image', image)
            setLoading(true);
            dispatch(createNewBanner(data));
        }
        else {
            setErrorInput(true);
        }
    };
    useEffect(() => {
        if(dataBanner.dataResponse){
            swal("Success!", "Banner baru berhasil ditambahkan!", "success");
            setLoading(false);
            navigate('/admin/banner');
        }
    }, [dataBanner.isSuccess]);
  return (
    <Container>
        <Typography variant="h5">TAMBAH DATA BANNER</Typography>
        {errorInput &&
        <AlertContainer>
            <Alert severity="error">Semua field harus diisi!</Alert>
        </AlertContainer>        
        }
        <Wrapper>
            <Column>
            <InputContainer>
                <TextField
                    label="Judul Banner"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='text'
                    autoComplete="off"
                    inputProps={{style: {fontSize: 13,}}}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <TextField
                    label="Link Banner"
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
            <ImageRow>
            {imagePreview && <Image src={imagePreview} alt="images"/>}
                <InputContainer>
                    <InputFile type='file' onChange={handleImage} />
                </InputContainer>
            </ImageRow>
            </Column>
        </Wrapper>
        {loading ? 
        <Button variant="contained" disabled color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }}>Loading ....</Button>
        :
        <Button variant="contained" color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }} onClick={handleSubmit} >Tambah Banner Baru</Button>
        }
    </Container>
  )
}

export default AdminCreateBanner;