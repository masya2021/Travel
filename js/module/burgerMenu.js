const burgerMenu = document.querySelector(".burger");
const menu = document.querySelector(".header__navigation");
const closeBtnBurger = document.querySelector(".close__btn-burger ");

burgerMenu.addEventListener("click", () => {
  menu.classList.add("show");
  burgerMenu.classList.add("burger-close");
  opacity.classList.add("popups");
});

closeBtnBurger.addEventListener("click", () => {
  console.log(closeBtnBurger);
  menu.classList.remove("show");
  opacity.classList.remove("popups");
  burgerMenu.classList.remove("burger-close");
});

console.log(closeBtnBurger);

const popup = document.querySelector(".popup__content");
const opacity = document.querySelector(".background__popup");

opacity.addEventListener("click", (event) => {
  if (event.target.classList.contains("background__popup")) {
    opacity.classList.remove("popups");
    menu.classList.remove("show");
    burgerMenu.classList.remove("burger-close");

    popup.classList.remove("active");

    signPopup.classList.remove("active");
    popup.classList.remove("change");
  }
});

const listsMenu = document.querySelectorAll(".navigation__item");

listsMenu.forEach((listMenu) => {
  console.log(listMenu);
  listMenu.addEventListener("click", () => {
    // console.log(listMenu, i);
    menu.classList.remove("show");
    burgerMenu.classList.remove("burger-close");
    opacity.classList.remove("popups");
  });
});

const login = document.querySelector(".header__btn");

login.addEventListener("click", () => {
  popup.classList.add("active");
  opacity.classList.add("popups");

  // console.log(login);
});

const account = document.querySelector(".navigation__item-login");

account.addEventListener("click", () => {
  // alert("прівет!");
  popup.classList.add("active");
  opacity.classList.add("popups");
  menu.classList.remove("show");
});

const logInAccount = document.querySelector(".popup__account-register");
const createAccount = document.querySelector(".popup__account-register2");

const signPopup = document.querySelector(".sign__popup");

logInAccount.addEventListener("click", () => {
  // console.log(registration);
  popup.classList.toggle("change");
  signPopup.classList.toggle("active");
  opacity.classList.remove("active");
});

createAccount.addEventListener("click", () => {
  console.log(createAccount);
  signPopup.classList.toggle("active");
  popup.classList.toggle("change");
});

const formPopup = document.querySelector(".form1"); //
const formSignPopup = document.querySelector(".form2"); //

formPopup.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = Array.from(event.target.elements).find(
    (el) => el.className === "form__popup-input form__popup-input--style"
  );
  const password = Array.from(event.target.elements).find(
    (el) => el.className === "form__popup-input form__popup-input--password"
  );
  if (!email.value || !password.value) {
    alert("заполните поле Email и Password");
  } else {
    alert(`email: ${email.value} \n password: ${password.value}`);
    popup.classList.remove("active");
    opacity.classList.remove("active");
    opacity.classList.remove("popups");
    email.value = "";
    password.value = "";
  }
});

formSignPopup.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = Array.from(event.target.elements).find(
    (el) =>
      el.className === "form__popup-input form__popup-input--styleup style"
  );
  const password = Array.from(event.target.elements).find(
    (el) => el.className === "form__popup-input form__popup-input--passwordup"
  );
  if (!email.value || !password.value) {
    alert("заполните поле Email и Password");
  } else {
    alert(`email: ${email.value} \n password: ${password.value}`);
    signPopup.classList.remove("active");
    opacity.classList.remove("active");
    opacity.classList.remove("popups");
    email.value = "";
    password.value = "";
  }
});
