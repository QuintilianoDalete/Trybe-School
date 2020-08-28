// Product profit calculator

let cost = 11;
let price = 33;

let totalCost = cost * 1.2;
let profit = price - totalCost;
let totalProfit = profit * 1000;

if (cost > 0 && price > 0) {
    console.log(totalProfit);

} else {
    console.log('Add values grater than 0 to cost and price');
};