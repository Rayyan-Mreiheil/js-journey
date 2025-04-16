class BankAccount {
    constructor(ownerName, initialBalance){
        this.ownerName = ownerName;  // O(1)
        this.initialBalance =initialBalance;  // O(1)
        this.history = []; // O(1) – empty array initialization
    }

    deposit(amount){
        this.initialBalance += amount; // O(1)
        // push deposite amount to history array
        this.history.push(`Deposited $${amount}`); // O(1) – push to array
    }

    withdraw(amount){
        this.initialBalance -= amount;  // O(1)
        // push withdraw amount to history array
        this.history.push(`Withdrew $${amount}`);  // O(1)
    }

    
}