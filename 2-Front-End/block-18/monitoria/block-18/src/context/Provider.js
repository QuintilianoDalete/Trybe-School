import React, { useState } from 'react';
import Context from './Context'; //Apeertar ctrl + space dentro do {}

// function Provider(props) {
//   const { children } = props; // children is a special props
function Provider({ children }) {
  const [tarefa, setTarefa] = useState('');
  const [tarefasSalvas, setTarefasSalvas] = useState([]);
  const adicionaEZera = (novo) => {
    setTarefasSalvas(novo);
    setTarefa('');
  }

  const batatinha = {
    tarefa,
    setTarefa,
    tarefasSalvas,
    setTarefasSalvas: adicionaEZera,
  }
  return(
      <Context.Provider value={batatinha}>
        {children}
      </Context.Provider>
    )
}

export default Provider;
