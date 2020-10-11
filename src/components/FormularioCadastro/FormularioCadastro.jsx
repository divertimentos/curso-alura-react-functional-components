import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
  let nome = "";
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(nome)

    }}>
      <TextField
        onChange={event => {
          nome = event.target.value
        }}
        margin="normal"
        id="Nome"
        label="Nome"
        variant="outlined"
        fullWidth
      />
      <TextField
        margin="normal"
        id="Sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
      />
      <TextField
        margin="normal"
        id="CPF"
        label="CPF"
        variant="outlined"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            margin="normal"
            name="Promoções"
            defaultChecked={true}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            margin="normal"
            name="Novidades"
            defaultChecked={true}
            color="primary"
          />
        }
      />

      <Button
        variant="contained"
        color="primary"
        type="submit">Cadastrar
      </Button>
    </form>
  )
}

export default FormularioCadastro;