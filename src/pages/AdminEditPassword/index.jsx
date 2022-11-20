import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import { Typography, TextField, Alert, Button } from '@mui/material';
import { setDefaultDataResponse, changePassword } from '../../features/user/userSlice';

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

const AdminEditPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [errorInput, setErrorInput] = useState(false);
    const [macth, setMacth] = useState(true);
    const [oldPassword, setOldPassword] = useState(true);
    const dataUser = useSelector(state => state.user); 

    const handleSubmit = () => {
        if(currentPassword && newPassword && confirmNewPassword){
            setErrorInput(false);
            if(newPassword !== confirmNewPassword) {
                setMacth(false)
            }
            else {
                setMacth(true)
                const data = {currentPassword, newPassword};
                setLoading(true);
                dispatch(changePassword({data, id: dataUser.dataAuthUser.data._id}));
            }
        }
        else {
            setErrorInput(true);
        }
    };
    console.log(currentPassword);
    console.log(newPassword);
    console.log(confirmNewPassword);
    console.log(dataUser.dataResponse);
    useEffect(() => {
        if(dataUser.dataResponse){
            if(!dataUser.dataResponse.data) {
                setOldPassword(false);
                setLoading(false);
            }   
            if(dataUser.dataResponse.data) {
                swal("Success!", "Password berhasil dirubah", "success");
                setLoading(false);
                dispatch(setDefaultDataResponse());
                navigate('/admin');
            }
        }
    }, [dataUser.isSuccess]);
  return (
    <Container>
        <Typography variant="h5">EDIT PASSWORD</Typography>
        {errorInput &&
        <AlertContainer>
            <Alert severity="error">Semua field harus diisi!</Alert>
        </AlertContainer>        
        }
        {!macth &&
        <AlertContainer>
            <Alert severity="error">Konfirmasi password baru tidak sesuai</Alert>
        </AlertContainer>        
        }
        {!oldPassword &&
        <AlertContainer>
            <Alert severity="error">Password lama yang anda masukan salah</Alert>
        </AlertContainer>        
        }
        <Wrapper>
            <Column>
            <InputContainer>
                <TextField
                    label="Password Lama"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='password'
                    autoComplete="off"
                    inputProps={{style: {fontSize: 13,}}}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <TextField
                    label="Password Baru"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='password'
                    autoComplete="off"
                    inputProps={{style: {fontSize: 13,}}}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
            </InputContainer>
            <InputContainer>
                <TextField
                    label="Konfirmasi Password Baru"
                    variant="filled"
                    fullWidth
                    size='normal'
                    type='password'
                    autoComplete="off"
                    inputProps={{style: {fontSize: 13,}}}
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
            </InputContainer>
            </Column>
        </Wrapper>
        {loading ? 
        <Button variant="contained" disabled color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }}>Loading ....</Button>
        :
        <Button variant="contained" color="success" sx={{ width: '25%', marginLeft: '30px', marginTop: '20px' }} onClick={handleSubmit} >Edit Password</Button>
        }
    </Container>
  )
}

export default AdminEditPassword;