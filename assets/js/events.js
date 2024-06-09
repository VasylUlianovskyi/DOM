// обробка подій
const signUpBtn = document.querySelector("#signup");

function eventHandler(event) {
  console.log(event);
  alert("You are regeister");
}

signUpBtn.onclick = eventHandler;

signUpBtn.onclick = null;

const loginBtn = document.querySelector("#login");

const loginEventHandler = (e) => alert("Ви увійшли");

loginBtn.addEventListener("click", loginEventHandler);
loginBtn.removeEventListener("click", loginEventHandler);

const hello = document.querySelector("h1");

hello.onmouseenter = (e) => alert("Welcome");
