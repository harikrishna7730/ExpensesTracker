var d=window.localStorage.getItem("sal")
var dd=JSON.parse(d)
var incomee=document.getElementsByClassName("income")
incomee[0].innerText=dd.key;

var table=document.getElementsByTagName("table")
var total=0;
var balance=0;
var arr=[]
var arr2=[]
var max=0;
var maxExp=0;
var maxCat="";
document.forms[0].addEventListener("submit",(e)=>{
 e.preventDefault();

   // console.log("category:",e.target[0].value)
    //console.log("Amount:",e.target[1].value)
    var expenses=parseFloat(e.target[1].value)
    expenses.innerText="amount";
    
   
    //amount validation
    if(isNaN(expenses) || expenses<=0){
        alert("Enter a valid Amount")
        return;
    }
    
    arr.push(expenses)
     //table row
    var trr=document.createElement("tr")
    table[1].appendChild(trr)

        //Categorycell
    var Catagory=document.createElement("td")
    Catagory.innerText=e.target[0].value;
    trr.appendChild(Catagory)

        //amountcell
    var amount=document.createElement("td")
    amount.innerText=e.target[1].value;
    trr.appendChild(amount)
    
        //totalcell
    total=total+Number(e.target[1].value)
    var totalCell=document.createElement("td")
    totalCell.innerText=total
    trr.appendChild(totalCell)

        //balance
  balance=dd.key-total
  var Balance=document.getElementById("balancee")
  Balance.innerText=balance

    //deletebtn
var deleteCell=document.createElement("td")
var deleteBtn=document.createElement("img")
deleteBtn.setAttribute("src","./trash.png")
deleteBtn.setAttribute("id","btnImg")
deleteCell.appendChild(deleteBtn)
trr.appendChild(deleteCell)

deleteBtn.addEventListener("click",(e)=>{
 balance=balance+Number(amount.innerText)
total=dd.key-balance

document.getElementById("balancee").innerText=balance
document.getElementById("total").innerText=total
trr.remove();

var totall=document.getElementById("total")
totall.innerText="Total"
 

})

for(i of arr){
    if(i>max){
        max=i
    }
}
document.getElementById("expenses2").innerText=`Expenses:${max}`

 if (expenses > maxExp) {
    maxExp = expenses;
    maxCat = Catagory;

    document.getElementById("category2").innerText=`Category: ${Catagory.innerText}`;
    
}


 })






























// var d = window.localStorage.getItem("sal");
// var dd = JSON.parse(d);
// var incomee = document.getElementsByClassName("income");
// incomee[0].innerText = dd.key;

// var table = document.getElementsByTagName("table");
// var total = 0;
// var balance = 0;
// var maxExpense = 0;
// var maxCategory = "";

// document.forms[0].addEventListener("submit", (e) => {
//     e.preventDefault();

//     var category = e.target[0].value;
//     var expenses = parseFloat(e.target[1].value);

//     if (isNaN(expenses) || expenses <= 0) {
//         alert("Enter a valid Amount");
//         return;
//     }

//     // Update total expenses
//     total += expenses;

//     // Update balance
//     balance = dd.key - total;
//     var Balance = document.getElementById("balancee");
//     Balance.innerText = balance;

//     // Check if current expenses are maximum
//     if (expenses > maxExpense) {
//         maxExpense = expenses;
//         maxCategory = category;

//         // Update the display of max expense and category
//         document.getElementById("category2").innerText = `Category: ${maxCategory}`;
//         document.getElementById("expenses2").innerText = `Expenses: ${maxExpense}`;
//     }

//     // Add new row to the table
//     var trr = document.createElement("tr");
//     table[1].appendChild(trr);

//     // Add category cell
//     var Catagory = document.createElement("td");
//     Catagory.innerText = category;
//     trr.appendChild(Catagory);

//     // Add amount cell
//     var amount = document.createElement("td");
//     amount.innerText = expenses;
//     trr.appendChild(amount);

//     // Add total cell
//     var totalCell = document.createElement("td");
//     totalCell.innerText = total;
//     trr.appendChild(totalCell);

//     // Add delete button cell
//     var deleteCell = document.createElement("td");
//     var deleteBtn = document.createElement("img");
//     deleteBtn.setAttribute("src", "./trash.png");
//     deleteBtn.setAttribute("id", "btnImg");
//     deleteCell.appendChild(deleteBtn);
//     trr.appendChild(deleteCell);

//     // Event listener for delete button
//     deleteBtn.addEventListener("click", (e) => {
//         balance += expenses;
//         total = dd.key - balance;
//         Balance.innerText = balance;
//         trr.remove();
//     });
// });




