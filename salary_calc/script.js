var allEmployees = [];


$( document ).ready(function(){
$( '#submitEmployee' ).on( 'click', function(){
  //get employee input
  var newEmployee = {
    firstName: $( '#firstNameIn' ).val(),
    lastName: $( '#lastNameIn' ).val(),
    idNumber: $( '#idNumberIn' ).val(),
    jobTitle: $( '#jobTitleIn' ).val(),
    salary: $( '#salaryIn' ).val(),

  }; //end newemployee object
  console.log('adding: ', newEmployee );
  //push into allEmployees array
  allEmployees.push(newEmployee);
  //display allEmployees
  displayAllEmployees();
  displayMonthlyTotal();
  emptyInputs();
  console.log(averageMonth(totalAnnualCost(allEmployees)));
});//end submitEmployee button function

$( '#listOfEmployees' ).on( 'click', '.removeEmployee', function(){
var employee = $(this).data( 'id' );
var deletedEmployee = allEmployees.splice( employee, 1 );
console.log( deletedEmployee[0] );
displayAllEmployees();
displayMonthlyTotal();
});//removeEmployee button

}); //end document load function.


function  displayAllEmployees(){
console.log('in displayAllEmployees');
//store submitted employee in ul
var employeeList = $( '#listOfEmployees' );
//empty ul
employeeList.empty();

for (var i=0; i<allEmployees.length; i++){
//append each employee to ul element
    var stringToAppend = '<li>';
        stringToAppend += allEmployees[ i ].firstName + ' ';
        stringToAppend += allEmployees[ i ].lastName + ' ';
        stringToAppend += allEmployees[ i ].idNumber + ' ';
        stringToAppend += allEmployees[ i ].jobTitle + ' ';
        stringToAppend += allEmployees[ i ].salary;
        stringToAppend +=' <button class="removeEmployee" data-id="' + i + '">Remove Employee</button>';
        stringToAppend += '</li>';
      employeeList.append(stringToAppend);
    }//end employees on dom


}//end displayAllEmployees function

function totalAnnualCost(employees){
  console.log('in totalAnnualCost');
//empty array of employee's salaries
var listOfSalaries = [];
for(var i=0; i<employees.length; i++){
listOfSalaries.push(parseInt(employees[ i ].salary));
}
return listOfSalaries;
}//end salary array

function averageMonth(cost){
console.log('in averageMonth');
var totalCost = 0;
for ( var i = 0; i < cost.length; i++ ){
    totalCost += cost[i];
}
costPerMonth = (totalCost/12);

return costPerMonth;
}//end average of all salaries

function displayMonthlyTotal(){
  console.log( 'in displayAllEmployees' );

var monthCost = $( '#putMonthCostHere' );
    monthCost.empty();

var costToAppend = '<li>';
    costToAppend += ('$' + averageMonth(totalAnnualCost(allEmployees)));
    costToAppend += '</li>';
    monthCost.append( costToAppend );
}

function emptyInputs(){
  console.log('in emptyInputs');
  $( '#firstNameIn' ).val( '' );
  $( '#lastNameIn' ).val( '' );
  $( '#idNumberIn' ).val( '' );
  $( '#jobTitleIn' ).val( '' );
  $( '#salaryIn' ).val( '' );

}
