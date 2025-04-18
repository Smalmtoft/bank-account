//Let's create a bank account!

//Create an object called account that has the following properties: 

// -accountName, should be the data type string . This property should contain the name of the account holder. 
// - balance, should be the data type number. This property should contain the total amount of the account. 

const account ={
    accountName: "Anna Andersson",
    accountBalance: 10000,
    signIn: true,

// - getBalance, should be a function 

getBalance: function () {
    alert(`Your account balance is: ${this.accountBalance}`);
},

// - getAccountName, should be a function
getAccountName: function () {
    alert(`Your account name is ${this.accountName}`);
}, 


//deposit, function
deposit: function (deposit) {
    this.accountBalance += deposit;
    alert(`You deposited ${deposit}. Your account balance is now ${this.accountBalance}`);
},

//withdrawal, function
withdrawal: function (withdraw) {
    if (withdraw >= this.accountBalance){
        this.accountError(`Not enough on account to withdraw ${withdraw}. Your current balance is ${this.accountBalance}`);
        return;
    }
    this.accountBalance -= withdraw;
    alert(`You withdrew ${withdraw}. Your new balance is ${this.accountBalance}`);
},

accountError: function (message) {
    alert(`Error! ${message}`);
  },

exit: function () {
    this.signIn = false;
}

}

function atm(){
    while(account.signIn){
        const message = parseFloat(prompt("Select one of the following choices: 1. See balance 2. Make a deposit 3. Make a withdrawal 4. Get account name 5. Exit"));

    
        switch(message){
            case 1: 
                account.getBalance();
                continue;
            case 2:
                const depositAmount = parseFloat(prompt("Enter amount to deposit"));
                if (!isNaN(depositAmount) && depositAmount > 0) {
                    account.deposit(depositAmount);
                } else {
                    account.accountError("Invalid deposit amount");
                }
                continue;
            case 3:
                const withdrawAmount = parseFloat(prompt("Enter amount to withdraw"));
                if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
                    account.withdrawal(withdrawAmount);
                } else {
                    account.accountError("Invalid withdrawal amount");
                }
                continue;
            case 4:
                account.getAccountName();
                continue;
            case 5:
                account.exit();
                continue;
            default: 
                account.accountError("Invalid menu choice");
                continue;
            
        }
    }


}

atm();

console.log(account);
