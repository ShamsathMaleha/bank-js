
// function doubleIt(num){
//     const result =num*2;
//     return result;
// }
// const first = doubleIt(5);
// const first = doubleIt(7);

// initial
function getInputValue(id){
    const depositeInput = document.getElementById(id);
    const depositeAmountText = depositeInput.value;
    const depositeAmount =parseFloat(depositeAmountText);
    depositeInput.value='';
    return depositeAmount;
    
}

// update
function updateTotalField(totalFieldId,depositeAmount){
    
    const depositeTotal = document.getElementById(totalFieldId);
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText)
    depositeTotal.innerText = previousDepositeTotal+depositeAmount;
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText =  balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;

}

function updateBalance (depositeAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText =  balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal+depositeAmount;
    const previousBalanceTotal= getCurrentBalance();
    if(isAdd==true){
        balanceTotal.innerText = previousBalanceTotal+depositeAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal-depositeAmount;
    }
}


// deposite


document.getElementById('deposite-button').addEventListener('click',function(){
   
    // initial
    const depositeAmount=getInputValue('deposite-amount');

    if (depositeAmount>0){
         // update
    updateTotalField('deposite-total',depositeAmount);
    updateBalance(depositeAmount,true);
    }

   

    // get current deposite

    // const depositeTotal = document.getElementById('deposite-total');
    // const depositeTotalText = depositeTotal.innerText;
    // const previousDepositeTotal = parseFloat(depositeTotalText)
    // depositeTotal.innerText = previousDepositeTotal+depositeAmount;
    // console.log(depositeTotal)
   

    // clear input

    


    // update balance


    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText =  balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal+depositeAmount;
    // 
    // updateBalance(depositeAmount,true);
    

})




// withdraw


document.getElementById('withdraw-button').addEventListener('click',function(){
//     // get the amounnt
//    const withdrawInput = document.getElementById('withdraw-amount');
//    const newWithdrawAmountText = withdrawInput.value;
//    const newWithdrawAmount =parseFloat(newWithdrawAmountText);

    // const WithdrawAmount=getInputValue('withdraw-amount');
 
//    const withdrawTotal=document.getElementById('withdraw-total');
 
//    const previousWithdrawText=withdrawTotal.innerText;
//    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    
    // withdrawTotal.innerText = previousWithdrawAmount + WithdrawAmount;

    
    // updateTotalField('withdraw-total', WithdrawAmount);
   
   




//    const balaneTotal = document.getElementById('balance-total');
//    const balanceTotalText = balaneTotal.innerText;
//     const previousBalanceTotal =parseFloat(balanceTotalText);
//     const newBalanceTotal = previousBalanceTotal - WithdrawAmount;
        // balaneTotal.innerText=newBalanceTotal;
        const WithdrawAmount=getInputValue('withdraw-amount');
        const CurrentBalance = getCurrentBalance();
        if(WithdrawAmount>0 && WithdrawAmount<CurrentBalance){
            updateTotalField('withdraw-total', WithdrawAmount);
   
            updateBalance(WithdrawAmount,false)
        }
    if (WithdrawAmount>CurrentBalance)
    conssol.log('Sorry Insufficient Balance')
    

   



});

