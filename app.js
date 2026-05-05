const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
  });
}

emailjs.init({
  publicKey: "YOUR_PUBLIC_KEY",
});

const form = document.getElementById("request-form");
const statusMessage = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusMessage.textContent = "Sending...";

  emailjs
    .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      statusMessage.textContent = "Your request has been sent successfully.";
      form.reset();
    })
    .catch(() => {
      statusMessage.textContent = "Sorry, something went wrong. Please try again.";
    });
});