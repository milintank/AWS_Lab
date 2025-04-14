document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if (name && email.includes("@")) {
        message.innerText = `Thank you, ${name}! We'll contact you soon at ${email}. 🎉`;
        message.style.color = "green";
    } else {
        message.innerText = "Please enter a valid name and email!";
        message.style.color = "red";
    }
});