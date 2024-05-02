const addExpense = document.querySelector('#addExpense');
const areaOfExpenses = document.querySelector('#expenseArea');

function createExpenseElement(name, value) {
    const expenseElement = document.createElement('div');
    expenseElement.classList.add('expense');

    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Despesa: ';
    const nameSpan = document.createElement('span');
    nameSpan.textContent = name;
    nameLabel.appendChild(nameSpan);

    const valueLabel = document.createElement('label');
    valueLabel.textContent = ' | Valor: R$ ';
    const valueSpan = document.createElement('span');
    valueSpan.textContent = value;
    valueLabel.appendChild(valueSpan);

    expenseElement.appendChild(nameLabel);
    expenseElement.appendChild(valueLabel);

    return expenseElement;
}

addExpense.addEventListener('click', () => {
    const expenseNameInput = document.querySelector('input[name="expenseName"]');
    const expenseValueInput = document.querySelector('input[name="expenseValue"]');

    const expenseName = expenseNameInput.value.trim();
    const expenseValue = parseFloat(expenseValueInput.value);

    if (expenseName !== '' && !isNaN(expenseValue)) {
        const expenseElement = createExpenseElement(expenseName, expenseValue.toFixed(2));
        areaOfExpenses.appendChild(expenseElement);

        // Limpa os campos de entrada após adicionar a despesa
        expenseNameInput.value = '';
        expenseValueInput.value = '';
    } else {
        alert('Por favor, preencha os campos corretamente.');
    }
});