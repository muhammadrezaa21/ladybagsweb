import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {login} from "../../features/user/userSlice";
import { Typography, TextField, InputAdornment, Button, Alert} from '@mui/material';
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

const AlertContainer = styled.div``;

const LoginPage = () => {
  const [input, setInput] = useState({email: '', password: ''});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataUser = useSelector(state => state.user);
  const [error, setError] = useState(false);
  const [noData, setNoData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(dataUser.dataAuthUser) 
    {
      if(!dataUser.dataAuthUser.data)setNoData(true)
    }
    setIsLoading(false);
    if(dataUser.dataAuthUser.data) navigate('/admin');
  }, [dataUser.dataAuthUser]);

  const handleLogin = (e) => {
    if(input.email && input.password){
      e.preventDefault();
      setIsLoading(true);
      dispatch(login(input));
    }
    else {
      setError(true);
    }
  }
  const handleEnter = (e) => {
    if(e.key === 'Enter'){
      if(input.email && input.password){
        e.preventDefault();
        setIsLoading(true);
        dispatch(login(input));
      }
      else {
        setError(true);
      }
    }
  }
  return (
    <Container>
      <Wrapper>
        <Typography variant="h5">Login</Typography>
        <Typography variant="span">Silahkan Login ke Akun Anda</Typography>
        {noData &&
        <AlertContainer>
            <Alert severity="error">Email atau Password yang anda masukan salah!</Alert>
        </AlertContainer>
        }
        {error &&
        <AlertContainer>
            <Alert severity="error">Semua field harus diisi!</Alert>
        </AlertContainer>
        }
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
            onKeyPress={handleEnter}
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
            onKeyPress={handleEnter}
          />
        </InputContainer>
        <InputContainer>
           {isLoading ? 
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