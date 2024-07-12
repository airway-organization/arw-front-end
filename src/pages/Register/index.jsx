import { React, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props} >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    mobile: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setFormData({
      username: data.get('username'),
      email: data.get('email'),
      password: data.get('password'),
      age: data.get('age'),
      gender: data.get('gender'),
      mobile: data.get('mobile'),
    });

    console.log(formData);

    // Reset the form data
    setFormData({
      username: '',
      email: '',
      password: '',
      age: '',
      gender: '',
      mobile: ''
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (

    <ThemeProvider theme={defaultTheme}  >

      <Box sx={{marginBottom:"50px"}}>
        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '-100px', marginTop: '80px'
          ,
          '@media (max-width: 400px)': {
            marginBottom: '-70px',
            marginTop: '20px'
          }
        }} >
          <Typography sx={{ fontSize: '30px', fontWeight: 600 }} >
            Registration
          </Typography>
        </Box>

        <Container component="main" maxWidth="md" sx={{
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
        }}
        >



          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={{ xs: 2, md: 10 }}  >
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="username"
                    name="username"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    autoFocus
                    value={formData.username}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="age"
                    label="Age"
                    name="age"
                    type="number"
                    autoComplete="age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="gender"
                    label="Gender"
                    name="gender"
                    autoComplete="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile No."
                    name="mobile"
                    autoComplete="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <Box className={'flex items-end justify-end'} >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 6, mb: 2 }}>
                  Sign up
                </Button>
              </Box>

              <Grid container justifyContent="flex-start">
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Already have an account?"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>



    </ThemeProvider>
  );
}
