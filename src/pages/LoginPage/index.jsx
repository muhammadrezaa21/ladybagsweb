import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {login} from "../../features/user/userSlice";
import { Typography, TextField, InputAdornment, Button} from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AccountCircle, Key} from '@mui/icons-material';

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const Wrapper = styled.div`
  background-color: white;
  padding: 30px;
`;

const InputContainer = styled.div`
  margin: 20px 0;
  width: 100%;
`;

const LoginPage = () => {
  const [input, setInput] = useState({email: '', password: ''});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataUser = useSelector(state => state.user);

  useEffect(() => {
    if(dataUser.dataAuthUser) navigate('/admin');
  }, [dataUser.dataAuthUser])

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(login(input));
  }

  return (
    <Container>
      <Wrapper>
        <Typography variant="h5">Login</Typography>
        <Typography variant="span">Silahkan Login ke Akun Anda</Typography>
        <InputContainer>
          <TextField
            label="Email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            fullWidth
            size='normal'
            type='email'
            value={input.email}
            autoComplete="true"
            inputProps={{style: {fontSize: 13}}}
            onChange={(e) => setInput({...input, email: e.target.value})}
          />
        </InputContainer>
        <InputContainer>
          <TextField
            label="Password"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Key />
                </InputAdornment>
              ),
            }}
            type="password"
            variant="outlined"
            fullWidth
            size='normal'
            onChange={(e) => setInput({...input, password: e.target.value})}
          />
        </InputContainer>
        <InputContainer>
           {dataUser.isLoading ? 
              <Button variant="contained" sx={{ width: '100%' }} disabled >Loading ...</Button>
              :
              <Button variant="contained" sx={{ width: '100%' }} onClick={handleLogin} >Login</Button>
            } 
        </InputContainer>
      </Wrapper>
    </Container>
  );
}

export default LoginPage;