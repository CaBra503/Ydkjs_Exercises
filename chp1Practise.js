// Defining constant variables.
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 09.99;
const SPENDING_LIMIT = prompt('How much are you lookin to spend?', '200?');

//Defining variables.
var initialBalance = prompt('What is the current amount of your bank account?', 'over9000');
var accountBalance = Number.parseInt(initialBalance);
var amount;
var tempSalesAmount;
var salesAmountFinal;

//funtion definitions.
function calculateAfterTax() {
  var  amountAfterTax = amountAfterTax + (tempSalesAmount * TAX_RATE);
    return amountAfterTax;
}

function formatAmount(amount) {
    return '$' + amount.toFixed(2);
}

// Logic  and conditionals.
console.log('Your Bank balance is ' + formatAmount(accountBalance));
while (accountBalance > SPENDING_LIMIT) {
    tempSalesAmount = tempSalesAmount + PHONE_PRICE;
     if (accountBalance > tempSalesAmount) {
      tempSalesAmount = tempSalesAmount + PHONE_PRICE + ACCESORIES;
      accountBalance = accountBalance - tempSalesAmount;
      console.log('after adding the accesory to your order, your current balance is ' + formatAmount(accountBalance));

    }
      else (accountBalance < tempSalesAmount)
        console.log('Im sorry the but your card has been declined');
        console.log('currentBalance is ' + formatAmount(accountBalance));

      break;
}

    console.log(calculateAfterTax(tempSalesAmount));






/* Writing function to optimize code.
function buyProduct(){
  while (accountBalance !> SPENDING_LIMIT){
  */
