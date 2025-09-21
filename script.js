// // this is to collect the income figure
// let income,food,transport,rent,utilitybills,savings,remain,totalexp;
// let incomeBar = document.getElementById('incomeBar')
// function setIncomeFigure(){
//     income=document.getElementById('income').value;
//     incomeBar.max = income;

//     // calculate the percentage into variables
//     food=income*0.16;
//     transport=income*0.09;
//     rent=income*0.24;
//     utilitybills=income*0.12;
//     savings=income*0.30;

//     totalexp=food+transport+rent+utilitybills+savings;
//     remain=income-totalexp;

//     incomeBar.value = remain;
//     // display all result of calulations
//     document.getElementById('food').value=food;
//     document.getElementById('transport').value=transport;
//     document.getElementById('rent').value=rent;
//     document.getElementById('utilitybill').value=utilitybills;
//     document.getElementById('savings').value=savings;
//     document.getElementById('remain').innerText=remain;
// }

// function checker(){
//     // collecting all variables
//     food=document.getElementById('food').value;
//     transport=document.getElementById('transport').value;
//     rent=document.getElementById('rent').value;
//     utilitybills=document.getElementById('utilitybill').value;
//     savings=document.getElementById('savings').value;
    
//     // calculating remains
//     totalexp=food+transport+rent+utilitybills+savings;
//     remain=income-totalexp;
//     // incomeBar.value=remain;
//     document.getElementById('remain').innerText=remain;


// }

let Username,UserBalance,UserIncome,UserExpense,expinc;
function CollectUserInfo(){
    Username = document.getElementById('UserNameInput').value;
    UserBalance = document.getElementById('UserBalanceInput').value;

    document.getElementById('UserName').innerText=Username;
    document.getElementById('UserBalance').value=UserBalance;
    document.getElementById('UserIncome').value=UserBalance;

    document.getElementById('UserInfo').style.display="none";
}

function AddTransaction(){
    expinc=document.getElementById('ExpInc').value;
    UserExpense=document.getElementById('UserExpenses').value;
    UserBalance=document.getElementById('UserBalance').value;
    if(expinc==='expense'){
        let TransactionAmount=document.getElementById('TransactionAmount').value;
        
        let newBalance=(eval(UserBalance-TransactionAmount));
        console.log(newBalance);
        document.getElementById('UserBalance').value=newBalance;

        Number(UserExpense);
        let newExpense=(eval(UserExpense+TransactionAmount));
        document.getElementById('UserExpenses').value=newExpense;
    }
    document.getElementById('TransactionAmount').value="";
}