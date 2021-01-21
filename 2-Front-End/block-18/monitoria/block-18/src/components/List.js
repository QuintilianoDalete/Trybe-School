import React, { useContext } from 'react';
import meuContexto from '../context/Context';

function List(){
  const { tarefasSalvas } = useContext(meuContexto);

  return(
    <ul>
      {tarefasSalvas.map((item) => <li>{item}</li>)}
    </ul>
  )
}

export default List;
