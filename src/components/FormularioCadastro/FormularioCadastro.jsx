import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function FormularioCadastro() {
  return (
    <form>
      <TextField margin="normal"id="Nome" label="Nome" variant="outlined" fullWidth />
      <TextField margin="normal"id="Sobrenome" label="Sobrenome" variant="outlined" fullWidth />
      <TextField margin="normal"id="CPF" label="CPF" variant="outlined" fullWidth />

      <label>Promoções</label>
      <input type="checkbox" />

      <label>Novidades</label>
      <input type="checkbox" />

      <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
    </form>
  )
}

export default FormularioCadastro;