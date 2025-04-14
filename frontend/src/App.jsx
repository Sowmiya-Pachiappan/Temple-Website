import { ThemeProvider } from '@emotion/react';
import './App.css';
import { createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/montserrat';
import { Route, Routes } from 'react-router';

import AppLayout from './layouts/AppLayout';
import Home from './pages/home/Home';
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import AuthLayout from './layouts/AuthLayout';
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#F97F54',
      },
    },
    typography: {
      fontFamily: 'Montserrat',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path='/'>
          <Route element={<AppLayout />}>
            <Route index element={<Home />}></Route>
          </Route>
          <Route element={<AuthLayout />}>
            <Route
              path='register'
              element={<Register />}
            ></Route>
            <Route path='login' element={<Login />}></Route>
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
