// Printing the key values

let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  info.recorrente = "Sim";

for (let properties in info) {
    console.log(info[properties]);
}
