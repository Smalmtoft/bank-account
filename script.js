//Let's create a bank account!

//Create an object called account that has the following properties: 

// -accountName, should be the data type string . This property should contain the name of the account holder. 
// - balance, should be the data type number. This property should contain the total amount of the account. 

 const account ={
    accountName: "Anna Andersson",
    accountBalance: 10000,

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
        this.accountError(`Not enough on account to withdraw ${withdraw}`);
        return;
    }
    this.accountBalance -= withdraw;
    alert(`You withdrew ${withdraw}. Your new balance is ${this.accountBalance}`);
},

accountError: function (message) {
    alert(`Error! ${message}`);
  },


}

// console.log(account.accountName);
// console.log(account.accountBalance);