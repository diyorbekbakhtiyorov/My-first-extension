const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const greeting = document.querySelector(".welcomeName");
const remove = document.querySelector(".removeName");

const userLS = "currentUser";
const showClassName = "showing";

function askName() {
  form.classList.add(showClassName);
  form.addEventListener("submit", handleSubmit);
}

function printName(text) {
  form.classList.remove(showClassName);
  remove.classList.add(showClassName);
  greeting.classList.add(showClassName);
  greeting.innerHTML = `${text}!`;
}

function saveName(text) {
  localStorage.setItem(userLS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  printName(currentValue);
  saveName(currentValue);
}

function removeItem() {
  localStorage.removeItem(userLS);
}

function loadName() {
  const currentUser = localStorage.getItem(userLS);
  if (currentUser === null) {
    askName();
  } else {
    printName(currentUser);
  }
}

loadName();
