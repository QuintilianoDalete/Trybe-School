import React, { useContext } from 'react';
import meuContexto from '../context/Context';

function Form(){
  const { tarefa, setTarefa, setTarefasSalvas, tarefasSalvas } = useContext(meuContexto);
  return(
    <div>
      <input
        value={tarefa}
        onChange={(event) => {setTarefa(event.target.value)}}
      />
      <button
        onClick={() => {setTarefasSalvas([...tarefasSalvas, tarefa])}}
      >
        Adicionar
      </button>
    </div>
  )
}

export default Form;
