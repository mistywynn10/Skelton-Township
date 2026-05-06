const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-open');
  });
}

emailjs.init({
  publicKey: "9PRTO1LVnojJ3g_2F",
});

const form = document.getElementById("request-form");
const statusMessage = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusMessage.textContent = "Sending...";

  emailjs
    .sendForm("service_5incw5c", "template_stzekkt", this)
    .then(() => {
      statusMessage.textContent = "Your request has been sent successfully.";
      form.reset();
    })
    .catch(() => {
      statusMessage.textContent = "Sorry, something went wrong. Please try again.";
    });
});