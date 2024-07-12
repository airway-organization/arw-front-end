import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();



export default function SignIn() {





  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    console.log(email);
    console.log(password);
    event.currentTarget.reset();
  };



  return (
    <ThemeProvider theme={defaultTheme}>

      <Box sx={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '-100px', marginTop: '80px'
        ,
        '@media (max-width: 400px)': {
          marginBottom: '-70px',
          marginTop: '20px'
        },
        flexDirection: 'column'
      }} >
        <Typography component="h1" variant="h5" sx={{ fontSize: '30px', fontWeight: 600 }} >
          Login
        </Typography>

        <Typography component='h1' >
          Enter your email & password
        </Typography>
      </Box>

      <Container component="main" maxWidth="xs"  sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'auto',
        border: '1px solid lightGray',
        marginTop: '8%',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.24)',
        '@media (max-width: 900px)': {
          border: 'none',
          boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
          padding: '10px',
        }
      }} >
        <CssBaseline />
        <Box

          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          
        >


          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Box className="flex items-end justify-end" >
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>

          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}