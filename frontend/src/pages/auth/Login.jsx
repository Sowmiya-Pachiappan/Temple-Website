import { useEffect, useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Grid,
  Alert,
  Snackbar,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
} from '@mui/icons-material';
import { login } from '@/api/authApi';
import { useNavigate } from 'react-router';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await login(formData);
      const { user, token } = res.data;
      await localStorage.setItem(
        'user',
        JSON.stringify(user)
      );
      await localStorage.setItem('token', token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };
  const closeHandler = () => {
    setOpen(false);
  };
  useEffect(() => {
    if (error) {
      setOpen(true);
    }
  }, [error]);
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={'center'}
      className='h-full'
      style={{ minHeight: '100vh' }}
    >
      <Grid size={4}>
        <Box component='form' onSubmit={handleSubmit}>
          <Typography
            variant='h4'
            align='center'
            gutterBottom
          >
            Welcome Back
          </Typography>

          <Snackbar
            open={open}
            autoHideDuration={3000}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            onClose={closeHandler}
          >
            <Alert
              severity='error'
              className='mb-10'
              onClose={closeHandler}
            >
              {error}
            </Alert>
          </Snackbar>

          <TextField
            size={'small'}
            name='email'
            label='Email Address'
            fullWidth
            variant='outlined'
            type='email'
            required
            value={formData.email}
            onChange={handleChange}
            className='mb-5'
          />

          <TextField
            size={'small'}
            name='password'
            label='Password'
            fullWidth
            variant='outlined'
            required
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange}
            className='mb-5'
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    edge='end'
                  >
                    {showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button
            type='submit'
            variant='contained'
            fullWidth
            size='small'
            className='text-white font-semibold'
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
