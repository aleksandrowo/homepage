console.log("Hello world! :)")

let button = document.querySelector(".button");
let contact = document.querySelector(".footer__contact");
let hide = document.querySelector(".footer__hide");

button.addEventListener("click", function () {
    contact.classList.toggle("footer__hide");
    button.innerText = contact.classList.contains("footer__hide") ? "Kontakt" : "Ukryj kontakt";
});