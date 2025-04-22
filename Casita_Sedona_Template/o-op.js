//Constructor for contacts
function contacts(name, email, phone) {
    this.name = name;
    this.email = email;
    this.phone = phone;
}
//Method to display the inputed info
this.displayInfo = function () {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Phone: ${this.phone}`);
};
//Objects for the contacts constructor
let contact1 = new contacts("Gary Hembree", "gbhembree22@amarillocollege.com", "718-934-6675");
let contact2 = new contacts("Mason James", "mason.james@amarillocollege.com", "923-987-0201");
let contact3 = new contacts("John Doe", "Johndoe123@amarillocollege.com", "777-666-5432");
//Displays the info for all 3 contacts
contact1.displayInfo();
contact2.displayInfo();
contact3.displayInfo();