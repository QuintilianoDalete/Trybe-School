const states = document.getElementById("states");
const submit = document.querySelector("#submit");
const consolidation = document.querySelector("#consolidation");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const cpf = document.querySelector("#cpf");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const state = document.querySelector("#states");
const home = document.getElementsByName("home");
const resume = document.querySelector("#resume");
const position = document.querySelector("#position");
const date = document.querySelector("#startDate");
const brazilianStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa',  'Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

function stateslist() {
  for(let index = 0; index < brazilianStates.length; index += 1) {
    let state = brazilianStates[index];
    let statesItem = document.createElement("option");
    statesItem.innerText = state;
    states.appendChild(statesItem);
  }
}

submit.addEventListener("click", function (event) {
  event.preventDefault();

  let nameItem = document.createElement("p");
  nameItem.innerText = `Name: ${name.value}`;
  nameItem.className = "cons";
  consolidation.appendChild(nameItem);

  let emailItem = document.createElement("p");
  emailItem.innerText = `email: ${email.value}`;
  emailItem.className = "cons";
  consolidation.appendChild(emailItem);

  let cpfItem = document.createElement("p");
  cpfItem.innerText = `CPF: ${cpf.value}`;
  cpfItem.className = "cons";
  consolidation.appendChild(cpfItem);

  let addressItem = document.createElement("p");
  addressItem.innerText = `Address: ${address.value}`;
  addressItem.className = "cons";
  consolidation.appendChild(addressItem);

  let cityItem = document.createElement("p");
  cityItem.innerText = `City: ${city.value}`;
  cityItem.className = "cons";
  consolidation.appendChild(cityItem);

  let stateItem = document.createElement("p");
  stateItem.innerText = `State: ${state.value}`;
  stateItem.className = "cons";
  consolidation.appendChild(stateItem);

  let homeItem = document.createElement("p");
  homeItem.innerText = `Home type: ${home.value}`;
  homeItem.className = "cons";
  consolidation.appendChild(homeItem);

  let resumeItem = document.createElement("p");
  resumeItem.innerText = `Curriculum Sumary: ${resume.value}`;
  resumeItem.className = "cons";
  consolidation.appendChild(resumeItem);

  let positionItem = document.createElement("p");
  positionItem.innerText = `Position Description: ${position.value}`;
  positionItem.className = "cons";
  consolidation.appendChild(positionItem);

  let dateItem = document.createElement("p");
  dateItem.innerText = `Start Date: ${date.value}`;
  dateItem.className = "cons";
  consolidation.appendChild(dateItem);
});

 function clear() {
  let cons = document.querySelectorAll(".cons")
  for (let i = 0; i < cons.length; i += 1) {
    let line = cons[i];
    consolidation.removeChild(line);
  }
};

reset.addEventListener("click", function () {
  clear();
});
