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

// create li element and append them in the ul tag
    var li = document.createElement ("li");
    
    li.innerText= description + " : " + value;

    var ul = document.querySelector(".incomeList");

    ul.appendChild(li);

    


}


else if (options.value === "-") {

    var li = document.createElement ("li");

    var ul = document.querySelector(".expenseList");

    ul.appendChild(li);

    li.innerText= description + " : " + value;


}

var summary = 0
for ( var i=0; i<valueList.length; i++) {
     summary += valueList[i];
}
var totalSum = document.querySelector("totalData");

}

var btn_add = document.querySelector(".add");

btn_add.addEventListener("click", countBudget);