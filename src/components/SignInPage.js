import React from 'react';
import { Grid, Paper, Typography, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

const SignInContainer = styled('div')({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f0f0f0',
  background: 'var(--main-color, linear-gradient(90deg, #1FBBC2 0%, #67D1AB 100%))'
});

const SignInForm = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(7),
  borderRadius: 10,
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  color: 'var(--primary, #25282B)',
  textAlign: 'center',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '28px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  marginBottom: '20px',
}));

const NameTypography = styled(Typography)(({ theme }) => ({
  color: '#FFF',
  textAlign: 'center',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '44px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  marginBottom: theme.spacing(12),
}));

const FormLabelTypography = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: 'var(--primary, #25282B)',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 590,
  lineHeight: 'normal',
}));

const FormField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  width: '362px',
  height: '49px',
  flexShrink: 0,
}));

const RoundedButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  width: '362px',
  padding: '15px 0px',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '35px',
  background: 'var(--main-color, linear-gradient(90deg, #1FBBC2 0%, #67D1AB 100%))',
  fontFamily: 'SF Pro, sans-serif',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: 510,
  lineHeight: 'normal',
  marginTop: '50px',
}));

const SignInPage = () => {
  return (

    <SignInContainer>
      <Grid spacing={2} direction="column">
      <Grid item>
        <NameTypography variant="h4">
          Kadom
        </NameTypography>
      </Grid>
      <Grid item>
      <SignInForm>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TitleTypography variant="h6" color="primary">Sign In</TitleTypography>
          </Grid>
          <Grid item>
            <FormLabelTypography>Email Address</FormLabelTypography>
            <FormField label="Email" fullWidth />
          </Grid>
          <Grid item>
            <FormLabelTypography>Password</FormLabelTypography>
            <FormField type="password" label="Password" fullWidth />
          </Grid>
          <Grid item>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item>
                <Typography variant="body2" color="primary">
                  Forgot Password?
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <RoundedButton variant="contained" color="primary" fullWidth>
              Sign In
            </RoundedButton>
          </Grid>
        </Grid>
      </SignInForm>
      </Grid>
      </Grid>
    </SignInContainer>
  );
};

export default SignInPage;
