// code start


//Array of inputs
var valueList = [];

//function count budget
function countBudget(e) {
e.preventDefault()

//chooze the select-option
var options = document.querySelector("#selectOption");

// if-statement == +
if (options.value === "+")
{

//chooze the value of description and number
var description = document.querySelector("#description").value;
var value = document.querySelector("#value").value;

//push the value and convert to number
valueList.push( Number(value)    );

// create li element and append them in the ul tag
    var li = document.createElement ("li");
    
    li.innerText= description + " : " + value;
    // chooze the expenselist
    var ul = document.querySelector(".incomeList");
    
    ul.appendChild(li);

    

    


}


else if (options.value === "-") {

//chooze the value of description and number
var description = document.querySelector("#description").value;
var value = document.querySelector("#value").value;

// pushed the value into the array and converted value to number, minus for the expenses
valueList.push( Number(-value)    );
    // Created element "li" for the 
    var li = document.createElement ("li");
    // chooze the expenselist
    var ul = document.querySelector(".expenseList");
    // append li to Ul
    ul.appendChild(li);
    // added description plus Value
    li.innerText= description + " : " + value;


}



// clear the fields
var summary = 0
for ( var i=0; i<valueList.length; i++) {
     summary += valueList[i];
}
var totalSum = document.querySelector(".totalData");
totalSum.innerText = summary;

}


// clear the fields
function reload() {
location.reload();
}

// chooze the add button
var btn_add = document.querySelector(".add");

// added event listner to add-button with the main function Count budget
btn_add.addEventListener("click", countBudget);


// Chooze the clear button
var btn_clear = document.querySelector(".clear");


// added event listner to add-button with second function reload
btn_clear.addEventListener("click", reload);