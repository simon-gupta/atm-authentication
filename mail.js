const firebaseConfig = {
apiKey: "AIzaSyBpeYB8Om12ogbFUmrGO3AWEKUSohWik8Q",
authDomain: "contact-form-13a89.firebaseapp.com",
databaseURL: "https://contact-form-13a89-default-rtdb.firebaseio.com",
projectId: "contact-form-13a89",
storageBucket: "contact-form-13a89.appspot.com",
messagingSenderId: "343018464263",
appId: "1:343018464263:web:96681f6393407632bc76a2"

};

firebase.initializeApp(firebaseConfig);

// Reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    
    // Get the password separately
    const password = document.getElementById("password").value;

    // Register user with email and password
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // User registered successfully
            // Save user details to database
            saveMessages(firstName, lastName, email, phoneNumber);

            // Display success message
            alert("Registration Successful!");
            window.location.href="login.html";


            // Remove the alert after 3 seconds
            setTimeout(() => {
                document.querySelector(".alert").style.display = "none";
            }, 3000);

            // Reset the form
            document.getElementById("contactForm").reset();
        })
        .catch((error) => {
            // Handle errors
            console.error("Registration error:", error.message);
            alert(error.message);
        });
}

const saveMessages = (firstName, lastName, email, phoneNumber) => {
  console.log("Saving messages to database:", firstName, lastName, email, phoneNumber);
  var newContactForm = contactFormDB.push();

  newContactForm.set({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber
  }).then(() => {
      console.log("Data saved successfully");
  }).catch((error) => {
      console.error("Error saving data:", error);
  });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};