import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

dollar.code = '5';
console.log(dollar.displayFullCurrency());
