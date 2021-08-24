
//deposit
function getinputValue(inputId){
    const inputFiled= document.getElementById(inputId);
    const textValue = inputFiled.value;
    const value = parseFloat(textValue);
    inputFiled.value ="";
    return value;
}
//deposit update

function depositUpdate(inputId, amount){
    const totalDeopsit = document.getElementById(inputId);
    const previousTotalText = totalDeopsit.innerText;
    const previousTotal = parseFloat(previousTotalText);
    const currentTotal = previousTotal + amount;
    totalDeopsit.innerText = currentTotal;

}

//updateBalance
function updateBalance(amount, isadd){
    const totalBalance = document.getElementById('balance-total');
    const balanceText = totalBalance.innerText;
    const previousBalance = parseFloat(balanceText);
    let currentBalance;
    if(isadd == true){
        currentBalance = previousBalance + amount;
    }else{
        currentBalance = previousBalance - amount;
    }
    
    totalBalance.innerText = currentBalance;
}
document.getElementById('deposit-button').addEventListener('click', function(){
   const amount = getinputValue('deposit-input');

   //error handling
   if(amount >0)
   {
    depositUpdate('deposit-total', amount);
    updateBalance(amount, true);
   }
  
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getinputValue('withdraw-input');
    if(amount > 0){
        depositUpdate('withdraw-total', amount);
    updateBalance(amount, false);
    }
    
})