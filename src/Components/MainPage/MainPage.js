import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [inputName, setInputName] = useState('');
  const [inputIdade, setInputIdade] = useState('');
  const [inputEmail, setEmail] = useState('');
  const [inputSenha, setSenha] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');

  const atualizaNome = (event) => {
    setInputName(event.target.value);
  }

  const atualizaIdade = (e) => {
    setInputIdade(e.target.value);
  }

  /*   const atualizaEmail = (e) => {
      setInputEmail(e.target.value);
    }
  
    const atualizaSenha = (e) => {
      setInputSenha(e.target.value);
    } */

  const atualizaEstadoCivil = (event) => {
    setEstadoCivil(event.target.value);
  };

  const imprimirValorInputs = (event) => {
    event.preventDefault();
    console.log(inputName, inputIdade, inputEmail, inputSenha, estadoCivil);
    limpaCampos();
  }

  const limpaCampos = () => {
    setInputName("")
    setInputIdade("")
    setEmail("")
    setSenha("")
    setEstadoCivil("")
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={imprimirValorInputs}>
        <label>
          Nome:
          <Input value={inputName} onChange={atualizaNome} />
        </label>
        <label>
          Idade:
          <Input value={inputIdade} onChange={atualizaIdade} />
        </label>
        <label>
          Email:
          <Input type="email" value={inputEmail} onChange={(event) => (setEmail(event.target.value))} />
        </label>
        <label>
          Senha:
          <Input type="password" value={inputSenha} onChange={(event) => (setSenha(event.target.value))} />
        </label>
        <select value={estadoCivil} onChange={atualizaEstadoCivil}>
          <option></option>
          <option>Solteiro(a)</option>
          <option>Casado(a)</option>
          <option>Viúvo(a)</option>
          <option>Divorciado(a)</option>
        </select>
        <button>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
