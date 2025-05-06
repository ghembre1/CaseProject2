//Project.js file for Case Project

//Gets my form and adds an event for when the user hits submit. The 'e' is for when the user hits submit on the form.
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // This prevents the default form submission when you hit submit
    // Clears the error messages when page is either refreshed or opened for the first time
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    
    try {
      let valid = true;
      //Gets users inputs from the form
      let name = document.getElementById('myName').value;
      let email = document.getElementById('myEmail').value;
      let phone = document.getElementById('myPhone').value;
      //Restricts emails that end with @gmail.com
      let restrictedDomainPattern = /@gmail\.com$/i;
      //This is the pattern the email needs to follow. I had to google how to get this pattern
      let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      //This is the pattern the phone needs to follow. I also had to google this pattern since it was already in my original website
      let phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
      //If name is empty it will print'Name is required into the nameError space I provided up top
      if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false; //If it is false it goes to the next if
      }
      //If the email the user input is not in the right format it will print 'Enter a valid email address.' in the emailError space
      if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Enter a valid email address.';
        valid = false; //If it is false it goes to the next if
      }
      //Test to see if email ends in @gmail.com and if it does it will print out the email error ' Emails from gmail.com are not allowed.'
      else if (restrictedDomainPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Emails from gmail.com are not allowed.';
        valid = false;
      }
      //If the phone the user input is not in the right format it will print 'Enter a valid phone address.' in the emailError space
      if (!phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Enter a valid phone number.';
        valid = false;
      }
      if (valid) {
        this.submit(); // If all are true it submits the form
      }
    } 
    //Catch is here if the user somehow inputs something in the boxes that breaks the try code. It will print the error the user gets
    //Catch also helps to prevent your website from crashing from whatever error the user would get
    catch(err) {
  message.innerHTML = "Error: " + err + ".";
    }
})


// JS Code for the Zip Code API
document.getElementById('myZip').addEventListener('input', function () {
  // sets up zipInput
  let zipInput = this.value;
  // sets up the zipError
  let zipError = document.getElementById('zipError');
  // goes through the zipInput and checks for the length and numbers and starts the test of verifying
  if (zipInput.length === 5 && /^[0-9]{5}$/.test(zipInput)) {
    // Replace 'us' with your desired country code if needed
    let url = `http://api.zippopotam.us/us/${zipInput}`;
    // fetches the url for the api
    fetch(url)
      .then(response => {
          // if input is good it will approve
        if (response.ok) {
          zipError.textContent = '';
            // if input is not okay it will display ZIP code not found
        } else {
          zipError.textContent = 'ZIP code not found.';
        }
      })
        // if an error occurs it catches it here
      .catch(error => {
        console.error('ZIP API error:', error);
        zipError.textContent = 'Error checking ZIP code.';
      });
});
