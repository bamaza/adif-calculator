import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import {TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import * as PropTypes from "prop-types";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Calculadora de cánones ADIF
        </Typography>
        <ProTip />
        {/*<Copyright />*/}
      </Box>
    </Container>
  );
}
