// Net salary calculator

let salary = 4800;

let inssDiscount

if (salary <= 1556.94) {
    inssDiscount = salary * 0.92;

} else if (salary >= 1556.95 && salary <= 2594.92) {
    inssDiscount = salary * 0.91;

} else if (salary >= 2594.93 && salary <= 5189.82) {
    inssDiscount = salary * 0.89;

} else {
    inssDiscount = salary - 570.88;
}

let netSalary = inssDiscount
let irDiscount

if (netSalary <= 1903.98) {
    irDiscount = netSalary;

} else if (netSalary >= 1903.99 && netSalary <= 2826.65) {
    irDiscount = (netSalary * 0.925) + 142.8;

} else if (netSalary >= 2826.66 && netSalary <= 3751.05) {
    irDiscount = (netSalary * 0.85) + 354.8;

} else if (netSalary >= 3751.06 && netSalary <= 4664.68) {
    irDiscount = (netSalary * 0.775) + 636.13;

} else {
    irDiscount = (netSalary * 0.0725) + 869.36;
}

console.log('The net salary is: R$',irDiscount);