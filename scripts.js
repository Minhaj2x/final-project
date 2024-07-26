// Function to handle adding a new transaction
async function addTransaction(event) {
    event.preventDefault();

    const date = document.getElementById('date').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;

    // Example logic for updating the UI; replace with actual data handling
    const transactionList = document.getElementById('transaction-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${date}</td>
        <td>${category}</td>
        <td>$${amount.toFixed(2)}</td>
        <td>${description}</td>
    `;
    transactionList.appendChild(row);

    // Example Firebase integration (remove comments and replace with actual config and logic if needed)
    /*
    try {
        await addDoc(collection(db, "transactions"), {
            date,
            amount,
            category,
            description
        });
        console.log("Transaction added successfully");
    } catch (e) {
        console.error("Error adding transaction: ", e);
    }
    */
}

// Function to handle adding a new budget
function setBudget(event) {
    event.preventDefault();

    const name = document.getElementById('budget-name').value;
    const amount = parseFloat(document.getElementById('budget-amount').value);
    const period = document.getElementById('budget-period').value;

    // Example logic for updating the UI; replace with actual data handling
    const budgetList = document.getElementById('budget-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>$${amount.toFixed(2)}</td>
        <td>$0.00</td> <!-- Placeholder for spent amount -->
        <td>Active</td> <!-- Placeholder for status -->
    `;
    budgetList.appendChild(row);
}

// Function to update dashboard values dynamically
function updateDashboard() {
    document.getElementById('total-income').textContent = `$${getTotalIncome().toFixed(2)}`;
    document.getElementById('total-expenses').textContent = `$${getTotalExpenses().toFixed(2)}`;
    document.getElementById('budget-progress').textContent = `${getBudgetProgress()}%`;
}

// Example functions to retrieve data (replace with actual data handling)
function getTotalIncome() {
    return 1200.00; // Replace with actual calculation
}

function getTotalExpenses() {
    return 800.00; // Replace with actual calculation
}

function getBudgetProgress() {
    return 66; // Replace with actual calculation
}

// Function to handle filter updates on transactions
function updateTransactionFilters() {
    const filterDate = document.getElementById('filter-date').value;
    const filterCategory = document.getElementById('filter-category').value;

    // Example logic for filtering transactions; replace with actual data handling
    console.log(`Filtering transactions: Date ${filterDate}, Category ${filterCategory}`);
}

// Event listeners for forms and filters
document.addEventListener('DOMContentLoaded', () => {
    const transactionForm = document.getElementById('transaction-form');
    const budgetForm = document.getElementById('budget-form');

    if (transactionForm) {
        transactionForm.addEventListener('submit', addTransaction);
    }

    if (budgetForm) {
        budgetForm.addEventListener('submit', setBudget);
    }

    const filterDate = document.getElementById('filter-date');
    const filterCategory = document.getElementById('filter-category');

    if (filterDate) {
        filterDate.addEventListener('change', updateTransactionFilters);
    }

    if (filterCategory) {
        filterCategory.addEventListener('input', updateTransactionFilters);
    }

    updateDashboard(); // Update dashboard on page load
});
