console.log('JS is sourced, you may proceed')

$(document).ready(readyNow);

function readyNow() {
    console.log('DOM is loaded!!');
    $('#infoSubmitButton').on('click', submitEmployeeInfo);
    
}

//create an array to hold info obtained from field inputs
let employeeFormInputs = [];

//array items should be an object with the follwing properties:
/*  -employee firstname:
    -employee lastname:
    -ID number:
    -job title:
    -annual salary:
*/

function submitEmployeeInfo() {
console.log('hey, you clicked the submit button!!') 
   
    //creating variables to store values from the input fields:
    const employeeFirstName = $('#firstNameInput').val();
    const employeeLastName = $('#lastNameInput').val();
    const employeeIDnumber = $('#idNumberInput').val();
    const employeeJobTitle = $('#titleInput').val();
    const employeeAnnualSalary = $('#annualSalaryInput').val();

    //create a new object from the input fields with following properties:
    // -employee lastname:
    // -ID number:
    // -job title:
    // -annual salary:
    let newEmployeeObject = {
        firstName:employeeFirstName,
        lastName:employeeLastName,
        IDnumber:employeeIDnumber,
        JobTitle:employeeJobTitle,
        AnnualSalary:employeeAnnualSalary
    }
    //add new object to the employeeFormInputs array
    employeeFormInputs.push(newEmployeeObject);   
    
    //empty input fields
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idNumberInput').val('');
    $('#titleInput').val('');
    $('#annualSalaryInput').val('');

    monthlyCostTracker();
}   // end submitEmployeeInfo

// To-Do:
function monthlyCostTracker(){
    console.log('in monthlyCostTracker');
    let totalSalaries = 0;
    //obtain values from employees monthly salarys with for loop
    for(let i = 0; i < employeeFormInputs.length; i++){
        totalSalaries += Number(employeeFormInputs[i].AnnualSalary)
        
        
    }   //end for loop
    let totalSalariesMonthly = (totalSalaries/12)   //new var for sum of salaries then divided by 12
    console.log('total cost per month is', totalSalariesMonthly)

    let el = $('#totalMonthlyDisplay'); //target html element
    el.empty();                         //empty out 
    el.append(totalSalariesMonthly);    //update totalmonthly cost to DOM
        //add the salaries up then divide by 12 "employeesalaries/12= totalMonthly"
        
        //If the total monthly cost exceeds $20,000, add a red 
        // background color to the total monthly cost.
        if(totalSalariesMonthly > 20000){
            $('#totalMonthlyDisplay').css('background-color', 'red');
        }

       displayEmployeeInfo();   //call in next function to display employee info in DOM
}

function displayEmployeeInfo(){
    console.log('in displayEmployeeInfo');

    //target output by ID
    let el = $('#employeeInfoDisplayOut');

    //empty
    el.empty();

    //loop through employeeFormInputs
for (let employee of employeeFormInputs ){
    //for each submission create a list item row 
el.append(`<li>` + employee.firstName + employee.lastName + employee.IDnumber + employee.JobTitle + employee.AnnualSalary + `</li>`);
}   //end for of loop

    //for each submission create a list item row 
}   //end displayEmployeeInfo

/*
A 'Submit' button should collect the form information, store the information 
to calculate monthly costs, append information to the DOM and clear the input 
fields. Using the stored information, calculate monthly costs and append this
 to the to DOM. If the total monthly cost exceeds $20,000, add a red 
 background color to the total monthly cost.
 Need

 To Do:
-next step is to add the appending employeeFormInputs to the DOM ✅
-add a row to the employees table containing the inputed employee information✅
-add a delete button to the right of the displayed employeeFormInputs on DOM
-relocate the total monthly display to bottom right of the page
-If the total monthly > $20,000, add a red background color to the total monthly cost.✅

*/

