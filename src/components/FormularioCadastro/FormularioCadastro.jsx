import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);

  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } })

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar({
        nome,
        sobrenome,
        cpf,
        novidades,
        promocoes
      })

      // Volta o form pro estado original
      setNome("")
      setSobrenome("")
      setCpf("")

    }}>
      <TextField // NOME
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
      <TextField // SOBRENOME
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

      <TextField // CPF
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const isValid = validarCPF(cpf)
          setErros({ cpf: isValid })
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        id="CPF"
        margin="normal"
        label="CPF"
        variant="outlined"
        fullWidth
      />

      <FormControlLabel // PROMOCOES
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

      <FormControlLabel // NOVIDADES
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

      <Button // CADASTRAR
        variant="contained"
        color="primary"
        type="submit">Cadastrar
      </Button>
    </form>
  )
}

export default FormularioCadastro;