// Which one is the biggest name?

function biggestName(names) {

  //  let names = [];
    let comp1 = [];
    let comp2 = [];

    for (let i =0; i < names.length; i += 1) {

        comp1.push(names[i]);

        comp2.push(names[i + 1]);

        
        
    }

    return comp1;
}

console.log(biggestName([ana, clara]));