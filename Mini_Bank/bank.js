// Bank account data structure
let accounts = {};

// Function to create an account
function createAccount() {
    const holderName = document.getElementById("accountHolder").value;
    const accountNumber = document.getElementById("accountNumber").value;

    // Check for valid input
    if (holderName && accountNumber) {
        if (!(accountNumber in accounts)) {
            accounts[accountNumber] = {
                holder: holderName,
                balance: 0,
                history: []
            };
            alert(`Account created for ${holderName} with account number: ${accountNumber}`);
            document.getElementById("accountHolder").value = ""; // Clear input
            document.getElementById("accountNumber").value = ""; // Clear input
        } else {
            alert("Account number already exists.");
        }
    } else {
        alert("Please enter valid account details.");
    }
}

// Function to view balance
function viewBalance() {
    const accountNumber = document.getElementById("manageAccountNumber").value;

    if (accountNumber in accounts) {
        const balance = accounts[accountNumber].balance;
        document.getElementById("balance").textContent = balance.toFixed(2);
        updateHistoryDisplay(accountNumber);
    } else {
        alert("Account does not exist.");
    }
}

// Function to deposit money
function deposit() {
    const amount = parseFloat(document.getElementById("amount").value);
    const accountNumber = document.getElementById("manageAccountNumber").value;

    if (amount > 0 && accountNumber in accounts) {
        accounts[accountNumber].balance += amount;
        accounts[accountNumber].history.push(`Deposited $${amount.toFixed(2)}`);
        document.getElementById("balance").textContent = accounts[accountNumber].balance.toFixed(2);
        updateHistoryDisplay(accountNumber);
    } else if (!(accountNumber in accounts)) {
        alert("Account does not exist.");
    } else {
        alert("Enter a valid amount to deposit.");
    }
    document.getElementById("amount").value = ""; // Clear input field
}

// Function to update transaction history display
function updateHistoryDisplay(accountNumber) {
    const historyElement = document.getElementById("history");
    historyElement.innerHTML = ""; // Clear current history

    accounts[accountNumber].history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${accountNumber}: ${item}`;
        historyElement.appendChild(li);
    });
}
