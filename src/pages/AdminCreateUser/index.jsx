import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import { Typography, TextField, Button, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import swal from "sweetalert";
import {register} from "../../features/user/userSlice";
 
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
    width: 40%;
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
    width: 100%;
    margin: 10px;
    input[type=number]::-webkit-inner-spin-button, 
    input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
    }
`;

const AdminCreateUser = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [errorInput, setErrorInput] = useState(false);
    const dataUser = useSelector(state => state.user);
    const handleSubmit = () => {
        if(email && name){
            setErrorInput(false);
            const data = {email, name: name.toLowerCase()};
            setLoading(true);
            dispatch(register(data));
        }
        else {
            setErrorInput(true);
        }
    }
    useEffect(() => {
        if(dataUser.dataResponse){
            swal("Success!", "User baru berhasil ditambahkan!", "success");
            setLoading(false);
            navigate('/admin/user');
        }
    }, [dataUser.isSuccess])
  return (
    <Container>
        <Typography variant="h5">TAMBAH DATA USER</Typography>
        {errorInput &&
        <AlertContainer>
            <Alert severity="error">Semua field harus diisi!</Alert>
        </AlertContainer>        
        }
        <Wrapper>
            <Column> 
            <InputContainer>
                <TextField
                    label="Email User"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='email'
                    autoComplete="off"
                    inputProps={{style: {fontSize: 13,}}}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <TextField
                    label="Nama User"
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
            </Column>
        </Wrapper>
        {loading ? 
        <Button variant="contained" disabled color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }}>Loading ....</Button>
        :
        <Button variant="contained" color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }} onClick={handleSubmit} >Tambah User Baru</Button>
        }
    </Container>
  )
}

export default AdminCreateUser;