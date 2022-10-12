import * as React from 'react';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";
import {InputAdornment, TextField} from "@mui/material";

function LightBulbIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/>
    </SvgIcon>
  );
}


const modalidadA = {
  vl1: {
    lineaA: 1.6767,
    lineaNoA: 0.5082,
  },
  vl2: {
    lineaA: 1.4873,
    lineaNoA: 0.5133,
  },
  vl3: {
    lineaA: 1.7350,
    lineaNoA: 0.5118,
  },
  vcm: {
    lineaA: 1.6069,
    lineaNoA: 1.3851,
  },
  vot: {
    lineaA: 1.7776,
    lineaNoA: 0.4110,
  },
  m: {
    lineaA: 0.4446,
    lineaNoA: 0.0724,
  }
};

const Item = styled(Paper)(({theme}) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ProTip() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Item>
            <Typography variant="h6" component="h2" gutterBottom>
              Parámetros
            </Typography>
            <Box
              component="form"
              sx={{
                '& > :not(style)': {m: 1, width: '25ch'},
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="route-km" label="Longitud del trayecto" variant="outlined"
                         helperText="Trayecto que cubre el tren, en kilómetros" InputProps={{
                endAdornment: <InputAdornment position="end">km</InputAdornment>,
              }}/>
              <TextField id="train-seats" label="Asientos disponibles" variant="outlined"/>
            </Box>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <Typography variant="h6" component="h2" gutterBottom>
              Modalidad A
            </Typography>
            <Typography>
              {modalidadA.vl1.lineaA} x 3.4 = 121
            </Typography>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <Typography variant="h6" component="h2" gutterBottom>
              Modalidad B
            </Typography>
          </Item>
        </Grid>
        <Grid item xs>
          <Item>
            <Typography variant="h6" component="h2" gutterBottom>
              Modalidad C
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
