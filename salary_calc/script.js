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
  monthlyCost(allEmployees);
  averageMonth(monthlyCost(allEmployees));
  emptyInputs();

});//end submitEmployee button function

$( '#listOfEmployees' ).on( 'click', '.removeEmployee', function(){
var employee = $(this).data( 'id' );
var deletedEmployee = allEmployees.splice( employee, 1 );
console.log( deletedEmployee[0] );
displayAllEmployees();
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

function monthlyCost(employees){
  console.log('in monthlycost');
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

function emptyInputs(){
  console.log('in emptyInputs');
  $( '#firstNameIn' ).val( '' );
  $( '#lastNameIn' ).val( '' );
  $( '#idNumberIn' ).val( '' );
  $( '#jobTitleIn' ).val( '' );
  $( '#salaryIn' ).val( '' );

}
