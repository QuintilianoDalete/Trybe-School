const states = document.getElementById('states');

const brazilianStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa',  'Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function stateslist() {
  for(let index = 0; index < brazilianStates.length; index += 1) {
    let state = brazilianStates[index];
    let statesItem = document.createElement('option');
    statesItem.innerText = state;
    states.appendChild(statesItem);
  }
}