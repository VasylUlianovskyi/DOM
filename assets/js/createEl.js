"use strict";

const newsItem = {
  title: "News Title",
  body: "News Body News Body News Body News Body News Body News Body News Body News Body News Body",
  date: "2024-05-10",
};

const sectionEl = document.querySelector(".section");

const articleEl = document.createElement("article");

sectionEl.append(articleEl);

// const h3El = document.createElement("h3");
// h3El.textContent = newsItem.title;
const h3El = createNewElement("h3", newsItem.title);
const pEl = createNewElement("p", newsItem.body);
const dateEl = createNewElement("p", newsItem.date);

// const pEl = document.createElement("p");
// pEl.textContent = newsItem.body;

articleEl.append(h3El, pEl, dateEl);

function createNewElement(type, content) {
  const newElement = document.createElement(type);
  newElement.textContent = content;
  return newElement;
}
