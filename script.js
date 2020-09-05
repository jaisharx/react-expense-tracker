const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
];

// restoring from localstorage
const localStorageTranscation = JSON.parse(localStorage.getItem('transcation'));
let transactions = localStorage.getItem('transcation') ? localStorageTranscation : [];

// adding transaction obj
function addTransaction(e) {
    e.preventDefault();

    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('Please add Text and Amount');
    } else {
        const transaction = {
            id: generateRandomID(),
            text: text.value,
            amount: +amount.value,
        };

        transactions.push(transaction);
        addTransactionDOM(transaction);
        udpateValues();
        updateLocalStorage();

        text.value = ``;
        amount.value = ``;
    }
}

// add transaction to the DOM
function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
    item.innerHTML = `
        ${transaction.text} <span>${sign}${formatNumberToMoney(Math.abs(transaction.amount))}</span>
        <button class="delete-btn" onClick="removeTransaction(${transaction.id})">X</button>
    `;

    list.appendChild(item);
}

// removing transaction obj
function removeTransaction(id) {
    transactions = transactions.filter((transaction) => transaction.id !== id);
    updateLocalStorage();
    init();
}

// update the balance, income and expense
function udpateValues() {
    const amounts = transactions.map((transaction) => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const income = amounts
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense =
        amounts
            .filter((item) => item < 0)
            .reduce((acc, item) => (acc += item), 0)
            .toFixed(2) * -1;

    balance.innerText = `${formatNumberToMoney(+total)}`;
    money_plus.innerText = `${formatNumberToMoney(+income)}`;
    money_minus.innerText = `${formatNumberToMoney(+expense)}`;
}

function updateLocalStorage() {
    localStorage.setItem('transcation', JSON.stringify(transactions));
}

function formatNumberToMoney(number) {
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function generateRandomID() {
    return Math.floor(Math.random() * 1000000);
}

// init
function init() {
    list.innerHTML = '';
    transactions.forEach(addTransactionDOM);
    
    udpateValues(); // updating dom values
}
init();

// event listeners
form.addEventListener('submit', addTransaction);