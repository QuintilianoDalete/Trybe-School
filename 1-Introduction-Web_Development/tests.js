function doisOuUm () {
  const components = ['Carlos', 'Daniel', 'Gusta', 'Quintiliano']

  for (let i = 0; i < 4; i++) {
    console.log('-----------------------');
    console.log(`Requisito ${12 + i}`);

    const index = Math.floor(Math.random() * components.length);
    console.log(components[index]);
    components.splice(index, 1)
  }

}

doisOuUm(); 