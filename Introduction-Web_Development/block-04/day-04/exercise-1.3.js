// Printing the keys

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  info.recorrente = "Sim";

  for (properties in info) {
      console.log(properties);
  }