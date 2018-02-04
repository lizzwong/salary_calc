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

  emptyInputs();
}
);
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
        stringToAppend += '</li>';
      employeeList.append(stringToAppend);
      }
}//end displayAllEmployees function

function emptyInputs(){
  $( '#firstNameIn' ).val( '' );
  $( '#lastNameIn' ).val( '' );
  $( '#idNumberIn' ).val( '' );
  $( '#jobTitleIn' ).val( '' );
  $( '#salaryIn' ).val( '' );

}