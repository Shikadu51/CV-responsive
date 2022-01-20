const message = "Merci de m'avoir contacté.";

document.getElementById("contactForm");
addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});
