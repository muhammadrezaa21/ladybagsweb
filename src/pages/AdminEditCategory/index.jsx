import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { getCategoryById, editCategory } from '../../features/category/categorySlice';
import { host_url } from '../../config';
import { Typography, TextField, Button, Alert } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import swal from "sweetalert";

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
`;

const AlertContainer = styled.div`
    margin-top: 20px
`;

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

const AdminEditCategory = () => {
    const id = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [imagePreview, setImagePreview] = useState(); 
    const dataCategory = useSelector(state => state.category); 
    const [errorInput, setErrorInput] = useState(false);
    const handleImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    }
    const handleSubmit = () => {
        if(name && image){
            setErrorInput(false);
            const data = new FormData();
            data.append('name', name.toLowerCase());
            data.append('image', image)
            setLoading(true);
            dispatch(editCategory({data, id: id.id}));
        }
        else {
            setErrorInput(true);
        }
    }
    useEffect(() => {
        dispatch(getCategoryById(id.id));
    }, []);
    useEffect(() => {
        if(dataCategory.dataResponse){
            swal("Success!", "Kategori berhasil diubah!", "success");
            setLoading(false);
            navigate('/admin/kategori');
        }
    }, [dataCategory.isSuccess]);
    useEffect(() => {
        if(dataCategory.dataCategoryById) {
        setName(dataCategory.dataCategoryById.data.name);
        setImage(dataCategory.dataCategoryById.data.image);
         }   
    }, [dataCategory.dataCategoryById]);
  return (
    <Container>
        <Typography variant="h5">EDIT DATA KATEGORI</Typography>
        {errorInput &&
        <AlertContainer>
            <Alert severity="error">Semua field harus diisi!</Alert>
        </AlertContainer>        
        }
        <Wrapper>
            <Column> 
            <InputContainer>
                <TextField
                    label="Kategori"
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
            <ImageRow>
                {imagePreview ? <Image src={imagePreview} alt="images"/> : <Image src={image ? `${host_url}/${image}` : ''} alt="images"/>}
                <InputContainer>
                    <InputFile type='file' onChange={handleImage} />
                </InputContainer>
            </ImageRow>
            </Column>
        </Wrapper>
        {loading ? 
        <Button variant="contained" disabled color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }}>Loading ....</Button>
        :
        <Button variant="contained" color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }} onClick={handleSubmit} >Edit Kategori</Button>
        }
    </Container>
  )
}

export default AdminEditCategory;