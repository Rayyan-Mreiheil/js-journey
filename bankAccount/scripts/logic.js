
/*
Time Complexity (All Methods): O(1)
- All methods in this class are O(1) – they do not depend on input size
- All operations are constant-time: arithmetic, string creation, array push, property access.
- No loops or recursive calls.
*/

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

    getSummary(){
        return this.ownerName + "'s balance is $" + this.initialBalance; // O(1) – simple string + number
        // OR: return `${this.ownerName}'s balance is $${this.initialBalance}`;
    }

    printHistory(){
        return this.history; // O(1) – returns a reference to the array
        // Note: if we iterate over this elsewhere, that iteration is O(h) where h = number of history entries
    }

}


// Sample Example for Testing

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300); 
console.log(acc1.transferTo(acc2, 200)); 
console.log(acc1.getSummary()); // John's balance is $300 
console.log(acc2.getSummary()); // Sara's balance is $500 
console.log(acc1.printHistory()); // Shows full history


acc1.deposit(600);
acc1.withdraw(200);
console.log(acc1.printHistory()); // Shows full history
console.log(acc1.getSummary()); // John's balance is $600 
console.log(acc2.printHistory()); // Shows full history