const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Exercise 1:

const addShift = (obj, key, value) => {
  obj[key] = value;  
};
addShift(lesson2, 'turno', 'manha');

// Exercise 2:

const keysList = (obj) => Object.keys(obj);
console.log(keysList(lesson2));

// Exercise 3:

const objectSize = (obj) => Object.keys(obj).length;
console.log(objectSize(lesson1));

// Exercise 4:

const valuesList = (obj) => Object.values(obj);
console.log(valuesList(lesson1));

// Exercise 5:

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3});
console.log(allLessons);

// Exercise 6:

const studentNumber = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroEstudantes;  
  }
  return total;
};
console.log(studentNumber(allLessons));

// Exercise 7:

const valueByPosition = (obj, position) => Object.values(obj)[position];
console.log(valueByPosition);

// Exercise 8:

const existenceVerification = (obj, key, value) => {
  const objToCheck = Object.entries(obj);
  let result = false;
  for (let i in objToCheck) {
    if (objToCheck[i][0] === key && objToCheck[i][1] === value) result = true;
  }
  return result;
};
console.log(existenceVerification(lesson2, 'materia', 'História'));


