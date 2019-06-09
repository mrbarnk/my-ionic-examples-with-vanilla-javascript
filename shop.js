const inputReason = document.querySelector('#input-reason');
const inputAmount = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#cancel');
const confirmBtn = document.querySelector('#confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');

const ctrAlrt = document.querySelector('ion-alert-controller');

let totalExpenses = 0;
const clear = () => {
    inputReason.value = '';
    inputAmount.value = '';
}
confirmBtn.addEventListener('click', () => {
    const enteredReason = inputReason.value;
    const enteredAmount = inputAmount.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
        ctrAlrt.create({
            header: "Action requires",
            message: "Please entered a valid reason and amount",
            buttons: ['Okay']
        }).then(alertEl => {
            alertEl.present();
        });
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    totalExpenses += +enteredAmount;

    totalExpensesOutput.textContent = totalExpenses;
    expensesList.prepend(newItem)
    clear();

});

cancelBtn.addEventListener('click', clear);