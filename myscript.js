const descriptionInput = document.querySelector("#descriptionInput");
const amountInput = document.querySelector("#amountInput");
// const income = parseInt(document.querySelector("#income").value);
// const expense = parseInt(document.querySelector("#expense").value);
const wrapperOne = document.querySelector(".wrapper");
const wrapperTwo = document.querySelector(".wrapper2");
const wrapperthree =document.querySelector(".wrapper3");
const btnAdd = document.querySelector("#btnAdd");
const transaction = document.querySelector("#transaction");

var personAccount = {
  firstName: "Rachita",
  lastName: "Upreti",
  incomes: [
    {
      description: "freelancingIncome",
      amount: 5000,
      newtime:"3/10/2015 9:46",
      id:7074087,
    },
    { 
        description: "farmIncome", 
        amount: 200,
        newtime:"3/10/2016 9:46",
        id:9080304,
       },
        
        
    {
       description: "forestIncome", 
      amount: 1500,
      newtime:"3/10/2015 9:46",
      id:9080314,
   }
  ],
  
  expenses: [
    { description: "houseExpenses", amount: 200, newtime:"3/11/2015 9:46", id:9090344, },
    { description: "travelExpenses", amount: 100, newtime:"10/10/2016 11:46",id:4080334, },
    { description: "foodExpenses", amount: 500, newtime:"12/12/2017 12:46", id:2047314, }
  ],
  addIncome: function(description, amount) {
    //let description = prompt("Enter new income amount description");
    //let amount = Number(prompt("enter new  income amount"));
    this.incomes.push({ description, amount });
  },

  addExpence: function(description, amount) {
    //let description = prompt ("enter new  expenses description");
    //let amount = Number(prompt("enter new expences amount"));
    this.expenses.push({ description, amount });
  },
  totalExpense: function() {
    let sum = 0;

    for (i = 0; i < this.expenses.length; i++) {
      sum = this.expenses[i].amount+sum;
      //console.log(sum);
    }

    return sum;
    
  },
  totalIncome: function() {
    let sum = 0;

    for (i = 0; i < this.incomes.length; i++) {
      sum = this.incomes[i].amount + sum;
    }

    return sum;
  },

  accountBalance: {},
  accountBal: function() {
    let sum = this.totalIncome() - this.totalExpense();
    return sum;
  },
  accountInfo: {},
  accInfo: function() {
    return `${this.firstName} ${
      this.lastName
    } has ${this.accountBal()} in her Bank account.`;
  }
};


// function for date and time 

 function displayDateTime () {
  var today = new Date();
  var year = today.getFullYear();
  var month = new Array();
  month[0] = "1";
  month[1] = "2";
  month[2] = "3";
  month[3] = "4";
  month[4] = "5";
  month[5] = "6";
  month[6] = "7";
  month[7] = "8";
  month[8] = "9";
  month[9] = "10";
  month[10] = "11";
  month[11] = "12";

  var d = new Date();
  var n = month[d.getMonth()];
 
  var date = today.getDate();
  var hours = today.getHours();
  var minute = today.getMinutes();
  

  var newtime =(`${date}/${n}/${year} ${hours}:${minute} `); 
  return newtime ;
  
}
// console.log(displayDateTime ());
//myTime();


 // ID generator 
 function generateID()
 {
     var number = Math.random(); 
     number.toString(10); 
     var idOutput = number.toString(10).substr(2,7); 
     return idOutput ;
 }
 console.log(generateID())

const displayAccountBalance = account => {
  wrapperOne.innerHTML='';
  wrapperTwo.innerHTML='';
  wrapperthree.innerHTML='';
  var sumIncome = document.createElement("div");
  var sumExpence = document.createElement("div");
  var balanceAccount = document.createElement("div");
  var accountInfo = document.createElement("div");
  //var idCreated = document.createElement("div");

  var ul = document.createElement("ul");
  var ul1 = document.createElement("ul");

  //Header for Incomes
var h2Income = document.createElement("h2");
h2Income.textContent ="Incomes";
wrapperOne.appendChild(h2Income);
  //Header for Expenses
var h2Expense = document.createElement("h2");
h2Expense.textContent ="Expenses";
wrapperTwo.appendChild(h2Expense);

  account.incomes.forEach(element => {
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var newtimeGenera = displayDateTime();
    var idOutput = generateID();
    var description = document.createElement("span");
    var amount = document.createElement("span");
    var timedate = document.createElement("span");
    var idGenerated = document.createElement("span");
    description.textContent = element.description;
    amount.textContent = element.amount;
    if (!element.newtime) {
      timedate.textContent = newtimeGenera ; 
    }
    else {
     timedate.textContent = element.newtime;}
    //idGenerated.textContent =idOutput;
    description.style.cssFloat = "left";
    timedate.style.cssFloat = "right";
    li.appendChild(description);
    li.appendChild(amount);
    li.appendChild(timedate);
    li.appendChild(idGenerated);
    ul.appendChild(li);
    wrapperOne.appendChild(ul);
  });

  
  sumIncome.textContent =`Sum of Income is ${personAccount.totalIncome()}`;
  //console.log(personAccount.totalIncome())
  sumIncome.style.color= "white";
  sumIncome.style.textAlign = "center";
  sumIncome.style.fontSize = "x-large";
  ul.appendChild(sumIncome);
  wrapperOne.appendChild(sumIncome);

  account.expenses.forEach(element => {
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var newtimeGenera = displayDateTime();
    var idOutput = generateID();
    var description = document.createElement("span");
    var amount = document.createElement("span");
    var timedate = document.createElement("span");
    var idGenerated = document.createElement("span");
    description.textContent = element.description;
    amount.textContent = element.amount;
    timedate.textContent = element.newtime;
    description.style.cssFloat = "left";
    timedate.style.cssFloat = "right";
    if (!element.newtime) {
      timedate.textContent = newtimeGenera ; 
    }
    else {
     timedate.textContent = element.newtime;}
    //idGenerated.textContent =idOutput;
    li.appendChild(description);
    li.appendChild(amount);
    li.appendChild(timedate);
    li.appendChild(idGenerated);
    ul.appendChild(li);
    wrapperTwo.appendChild(ul);
  });

  sumExpence.textContent =`Sum of Expense is ${personAccount.totalExpense()}`;
  sumExpence.style.color="white";
  sumExpence.style.textAlign = "center";
  sumExpence.style.fontSize = "x-large";
  console.log(personAccount.totalExpense());
  wrapperTwo.appendChild(sumExpence);

  balanceAccount.textContent = `Balance= ${personAccount.accountBal()}`;
  balanceAccount.style.color="white";
  balanceAccount.style.textAlign = "center";
  balanceAccount.style.fontSize = "x-large"
  wrapperthree.appendChild(balanceAccount);

  accountInfo.textContent = personAccount.accInfo();
  accountInfo.style.color="white";
  accountInfo.style.textAlign = "center";
  accountInfo.style.fontSize = "x-large"
  wrapperthree.appendChild(accountInfo);

};



let transactionType;
transaction.addEventListener("click", e => {
  transactionType = e.target.selectedIndex;
});

btnAdd.addEventListener("click", () => {
  if (transactionType === 0) {
    personAccount.addIncome(descriptionInput.value, parseFloat(amountInput.value));
    displayAccountBalance(personAccount);
    //generateUIIncome(descriptionInput,amountInput );
  } else if (transactionType === 1) {
    // generateUIExpense(descriptionInput,amountInput );
    personAccount.addExpence(descriptionInput.value, parseFloat(amountInput.value));
    displayAccountBalance(personAccount);
  } else {
    personAccount.addIncome(descriptionInput.value, parseFloat(amountInput.value));
    displayAccountBalance(personAccount);
  }
});
