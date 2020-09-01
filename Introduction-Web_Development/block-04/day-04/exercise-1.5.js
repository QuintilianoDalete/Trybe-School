// Adding a new character

let info1 = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: "Sim",
};

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
};

for (let properties in info1) {
    if (info1[properties] === info1.recorrente && info1.recorrente === 'Sim' && info2.recorrente === "Sim") {
        console.log('Ambos recorrentes');

    } else {
        console.log(info1[properties] + " e " + info2[properties]);
    }
}
