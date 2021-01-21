import React, { useContext, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import meuContexto from './context/Context';

function App(){
  // const meuEstado = useState('') // useState('valor inicial do estado') retorna um array [nomeDoestado, UNICA FUNCAO NO MUNDO que modifica este estado]
  // console.log(meuEstado);
  // const [tarefa, setTarefa] = meuEstado;

  return(
    <div>
      <Form />
      <List />
    </div>
  )
}

export default App;
