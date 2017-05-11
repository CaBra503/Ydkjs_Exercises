/*
    Program calculates the cost of a sale. Takes cost of purchase tests to see
    if the funds are available.
*/
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 09.99;
const SPENDING_LIMIT = promp('How much are you lookin to spend?', '200?');
// Bonus credit: User imput via prompt.

var initialBalance = prompt('What is the current amount of your bank account?', 'over9000');
var accountBalance = initialBalance;
var purchaseAmount;
var salesAmountFinal;

//funtion definitions.
function calculateAfterTax(){
  amtTax = amtTax + (purchaseAmount * TAX_RATE);
    return amtTax;
}

function formatAmount(amt){
  return '$' + amt.toFixed(2);
}

/*  ToDo implement loop and functions 5/4
5/8
*/
while (accountBalance > purchaseAmount){
  console.log("Your initial balance is " + formatAmount(accountBalance));
  purchaseAmount = PHONE_PRICE;
   console.log("The phone youre after is " + formatAmount(purchaseAmount));

  if (accountBalance > purchaseAmount){
  	console.log("Funds available");
  	if (accountBalance > purchaseAmount){
  		accountBalance = accountBalance - purchaseAmount;
  console.log("Youve bought the phone, your current balance is " + formatAmount(accountBalance));

  	}

    console.log('How about some Accesories?')
  	purchaseAmount = purchaseAmount + ACCESORIES;
  	if (accountBalance > purchaseAmount){
  		accountBalance = accountBalance - purchaseAmount;
  console.log("after adding the accesory to your purchase, your total is " + formatAmount(accountBalance));
  	}
  } else if (accountBalance < purchaseAmount){
  	console.log("Im sorry the funds arent available");
  console.log("currentBalance is " + formatAmount(accountBalance));

  }

}




/* Writing function to optimize code.
function buyProduct(){
  while (accountBalance !> SPENDING_LIMIT){
  */
