
document.getElementById('calculate-button').addEventListener('click', function () {
    console.log('hello shipon');
})

function calculate() {
    const incomeInput = document.getElementById("income-filed").value;
    const incomeText = parseInt(incomeInput);
    console.log(incomeText);
}