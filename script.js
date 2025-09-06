// this is to collect the income figure
let income,incomeBar;

function setIncomeFigure(){
    income=document.getElementById('income').value;
    incomeBar = document.getElementById('incomeBar')
    incomeBar.max = income;

    // calculate the percentage into variables
    let food,transport,rent,utilitybills,savings;

    food=income*0.16;
    transport=income*0.09;
    rent=income*0.24;
    utilitybills=income*0.12;
    savings=income*0.30;

    let remain,totalexp;
    totalexp=food+transport+rent+utilitybills+savings;
    remain=income-totalexp;

    incomeBar.value = remain;
    // display all result of calulations
    document.getElementById('food').value=food;
    document.getElementById('transport').value=transport;
    document.getElementById('rent').value=rent;
    document.getElementById('utilitybill').value=utilitybills;
    document.getElementById('savings').value=savings;
    document.getElementById('remain').innerText=remain;
}