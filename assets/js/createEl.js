"use strict";

const USERS_URL = "https://randomuser.me/api/?results=5";
const rootEl = document.querySelector("#root");

fetch(USERS_URL)
  .then((response) => response.json())
  .then(({ results }) => genSingleUser(results[0]))
  .catch((err) => console.log(err));

function genSingleUser({
  picture: { large: imgSrc },
  name: { first, last },
  dob: { age },
}) {
  const userCard = document.createElement("article");
  rootEl.append(userCard);
  userCard.classList.add("userCard");

  const userImg = document.createElement("img");
  userImg.classList.add("userImg");
  userImg.src = imgSrc;

  const userName = document.createElement("h2");
  userName.textContent = `${first} ${last}`;
  userName.classList.add("userName");

  const userAge = document.createElement("p");
  userAge.textContent = age;
  userAge.classList.add("userAge");

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("trashIcon");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  userCard.append(userImg, userName, userAge, deleteButton);
}
