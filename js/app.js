
document.getElementById('calculate-button').addEventListener('click', function () {
    console.log('hello shipon');
})

function calculate() {
    const incomeInput = document.getElementById("income-filed").value;
    const incomeText = parseInt(incomeInput);
    console.log(incomeText);

    // expense

    const foodInput = document.getElementById('food-filed').value;
    const rentInput = document.getElementById('rent-filed').value;
    const clothesInput = document.getElementById('clothes-filed').value;
    const calculateTotal =
        parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothesInput);
    const balanceTotal = incomeText - calculateTotal; 
    document.getElementById('balance').innerText = balanceTotal;
    document.getElementById('')
}