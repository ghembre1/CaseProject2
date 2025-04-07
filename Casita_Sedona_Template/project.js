//Project.js file for Case Project

//Gets my form and adds an event for when the user hits submit. The 'e' is for when the user hits submit on the form.
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // This prevents the default form submission when you hit submit
    // Clears and error messages when page is either refreshed or opened for the first time
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';

    try {
      let valid = true;
      //Gets users inputs from the form
      const name = document.getElementById('myName').value;
      const email = document.getElementById('myEmail').value;
      const phone = document.getElementById('myPhone').value;
      //This is the pattern the email needs to follow. I had to google how to get this pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      //This is the pattern the phone needs to follow. I also had to google this pattern since it was already in my original website
      const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
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