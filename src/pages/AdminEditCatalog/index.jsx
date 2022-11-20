import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { Typography, TextField, Button, Alert } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import swal from "sweetalert";
import {getCatalogById, editCatalog} from "../../features/catalog/catalogSlice";
 
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
    width: 50%;
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
    width: ${props => props.type === 'link' ? '100%' : '50%'};
    margin: 10px;
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
`;

const AdminEditCatalog = () => {
    const id = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [link, setLink] = useState('');
    const [errorInput, setErrorInput] = useState(false);
    const dataCatalog = useSelector(state => state.catalog);
    const handleSubmit = () => {
        if(name && link){
            setErrorInput(false);
            // const data = new FormData();
            // data.append('name', name.toLowerCase());
            // data.append('link', link);
            const data = {name: name.toLowerCase(), link};
            setLoading(true);
            dispatch(editCatalog({data, id: id.id}));
        }
        else {
            setErrorInput(true);
        }
    }
    useEffect(() => {
        dispatch(getCatalogById(id.id));
    }, []);
    useEffect(() => {
        if(dataCatalog.dataResponse){
            swal("Success!", "Katalog baru berhasil ditambahkan!", "success");
            setLoading(false);
            navigate('/admin/katalog');
        }
    }, [dataCatalog.isSuccess]);
    useEffect(() => {
        if(dataCatalog.dataCatalogById) {
        setName(dataCatalog.dataCatalogById.data.name);
        setLink(dataCatalog.dataCatalogById.data.link);
         }   
    }, [dataCatalog.dataCatalogById]);
  return (
    <Container>
        <Typography variant="h5">EDIT DATA KATALOG</Typography>
        {errorInput &&
        <AlertContainer>
            <Alert severity="error">Semua field harus diisi!</Alert>
        </AlertContainer>        
        }
        <Wrapper>
            <Column> 
            <InputContainer>
                <TextField
                    label="Nama Katalog"
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
            <InputContainer type={'link'}>
                <TextField
                    label="Link Katalog"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='text'
                    autoComplete="off"
                    inputProps={{style: {fontSize: 13,}}}
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                />
            </InputContainer>
            </Column>
        </Wrapper>
        {loading ? 
        <Button variant="contained" disabled color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }}>Loading ....</Button>
        :
        <Button variant="contained" color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }} onClick={handleSubmit} >Edit Katalog</Button>
        }
    </Container>
  )
}

export default AdminEditCatalog;