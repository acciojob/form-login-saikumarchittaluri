function getFormvalue() {
    //Write your code here
// Get the form element by its ID
    var form = document.getElementById("form1");
    
    // Get the values of the first name and last name input fields
    var firstName = form.fname.value;
    var lastName = form.lname.value;
    
    // Display an alert with the first and last names
    // alert( firstName + lastName);
	 alert("First Name: " + firstName + "\nLast Name: " + lastName);
    
    // Prevent the form from submitting normally
    return false;
}
