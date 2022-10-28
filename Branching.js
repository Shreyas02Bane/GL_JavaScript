var costPrice = 30000, accountBalance = 35000, creditLimit = 5000;

//var canIBuy = costPrice < accountBalance ? 'Yes': 'No';
var canIBuy = 'Yes';

if(costPrice <= accountBalance){
    console.log('Price is less than account balance');
}else if(costPrice <= (accountBalance + creditLimit)){
    console.log('Bank Balance is not enough, using Bank Balance + Credit Card');
}else{
    canIBuy = 'No';
}

if(canIBuy === 'No'){
    console.log('Can I buy the phone?: ',canIBuy);
    console.log('You need '+(costPrice-(accountBalance+creditLimit))+' rupees more to buy phone!')
}else{
    console.log('Can I buy the phone?: ',canIBuy);
}
