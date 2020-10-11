import React, { Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

function App() {
  return (
    <Fragment>
      <h1>Formulário de Cadastro</h1>
      <FormularioCadastro placeholder={"Eu sou um form!"} />
    </Fragment>
  );
}

export default App;
