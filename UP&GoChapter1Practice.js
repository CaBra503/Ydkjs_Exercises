// Defining constant variables.
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 09.99;
const SPENDING_LIMIT = Number.parseInt(prompt('What is your limit?', '200'));

//Defining variables.
var initialBalance = prompt('What Your Balance?', '9000');
var accountBalance = Number.parseInt(initialBalance);

var tempSalesAmount;

//funtion definitions.

/* function calculateFormatAmount(){
var  amountAfterTax = Number.parseInt(tempSalesAmount + (tempSalesAmount * TAX_RATE));
  return '$' + amountAfterTax;
}*/
function calculateAfterTax() {
  var  amountAfterTax = Number.parseInt(tempSalesAmount + (tempSalesAmount * TAX_RATE));
    return '$' + amountAfterTax.toFixed(2);
}

function formatAmount(amount) {
    return '$' + amount.toFixed(2);
}

// Logic  and conditionals.
while (accountBalance > SPENDING_LIMIT) {
  console.log('Welcome to AT&T, You say you only want to spend ' + formatAmount(SPENDING_LIMIT) + '?');
  tempSalesAmount = PHONE_PRICE;
  console.log('Well Lookey here, This beautiful Samsung is only $500.. This zte is ' + PHONE_PRICE + ' Thats more within your budget, Isnt it.')
    if (accountBalance > tempSalesAmount) {
      tempSalesAmount = tempSalesAmount + PHONE_PRICE + ACCESSORY_PRICE;
      console.log('after adding the accesory to your order, your current balance is ' + formatAmount(tempSalesAmount));
      accountBalance = accountBalance - tempSalesAmount;
      console.log("After Taxes that comes to " + calculateAfterTax(tempSalesAmount));

    }
      else if (accountBalance < SPENDING_LIMIT)
        console.log('Im sorry the but your card has been declined');
        console.log('currentBalance is ' + formatAmount(accountBalance));

}

  console.log("Thank you for shopping with us, come back soon, ya here!")






/* Writing function to optimize code.
function buyProduct(){
  while (accountBalance !> SPENDING_LIMIT){
  */
