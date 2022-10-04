import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import { TextField, Box, InputAdornment } from '@mui/material';


function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  const [km, setKm] = React.useState(630);
  const [modA, setModA] = React.useState(1.6767);
  const [totModA, setTotModA] = React.useState(0);

  React.useEffect(() => {
      console.log("efecto: ", km)
      console.log("efecto: ", modA)
      setTotModA(km * modA)
  }, [km, modA])

  var kmChanged = (e) => {
    setKm(e.target.value)
    console.log(km)
  }

  return (
    <React.Fragment>
      <Title>Cánones Adif</Title>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        <Typography>Introduce los kilómetros que recorrerá el tren en la infraestructura</Typography>
        <TextField 
          id="outlined-basic" 
          // type="number"
          label="km recorridos"
          variant="outlined"
          InputProps={{
            endAdornment: <InputAdornment position="end">km</InputAdornment>,
          }}
          defaultValue={km}
          onChange={kmChanged}
          sx={{
            width: "15ch",
            m: 1,
          }}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
      <TextField
          id="outlined-read-only-input"
          label="Modalidad A"
          defaultValue={modA}
          variant="standard"
          InputProps={{
            readOnly: true,
            endAdornment: <InputAdornment position="end">€/km</InputAdornment>,
          }}
          sx={{
            width: "15ch",
            m: 1,
          }}
        />
        <TextField
          id="outlined-read-only-input"
          label="Total modalidad A"
          value={totModA}
          variant="standard"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            readOnly: true,
            endAdornment: <InputAdornment position="end">€</InputAdornment>,
          }}
          sx={{
            width: "15ch",
            m: 1,
          }}
        />
      </Box>
    </React.Fragment>
  );
}
