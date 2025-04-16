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

    transferTo(anotherAccount, amount){
        if (this.initialBalance >= amount){
            anotherAccount.initialBalance += amount; // O(1)
            this.initialBalance -= amount; // O(1)
            this.history.push(`Transfered $${amount} to ${anotherAccount.ownerName}`); // O(1)
            anotherAccount.history.push(`Received $${amount} from ${this.ownerName}`); // O(1)
        } else {
            return("There is not enough money to transfer!") // O(1)
        }
    }

    

}