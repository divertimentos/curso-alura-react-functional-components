import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log(`Nome: ${nome}`)
      console.log(`Sobrenome: ${sobrenome}`)
      console.log(`CPF: ${cpf}`)
      console.log(`Promoções: ${promocoes}`)
      console.log(`Novidades: ${novidades}`)

      // Volta o form pro estado original
      setNome("")
      setSobrenome("")
      setCpf("")

    }}>
      <TextField
        value={nome}

        onChange={(event) => {
          setNome(event.target.value);
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
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        value={cpf}
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
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked)
            }}
            name="Promoções"
            margin="normal"
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked)
            }}
            name="Novidades"
            margin="normal"
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