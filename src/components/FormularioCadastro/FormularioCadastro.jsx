import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(`Nome: ${nome}`)
      console.log(`Sobrenome: ${sobrenome}`)

    }}>
      <TextField
        value={nome}

        onChange={(event) => {
          let tmpNome = event.target.value;
          if (tmpNome.length >= 3) {
            tmpNome = tmpNome.substr(0, 3);
          }
          setNome(tmpNome);
        }} 

        id="Nome"
        margin="normal"
        label="Nome"
        variant="outlined"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="Sobrenome"
        margin="normal"
        label="Sobrenome"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="CPF"
        margin="normal"
        label="CPF"
        variant="outlined"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="Promoções"
            margin="normal"
            defaultChecked={true}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="Novidades"
            margin="normal"
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