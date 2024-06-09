console.log("document :>> ", document);

//прямий доступ
console.dir(document);

console.log(document.body);

// getElement(s)By

console.log(
  'document.getElementsByTagName("h1") :>> ',
  document.getElementsByTagName("h1")
);

console.log(
  'document.getElementsByTagName("section") :>> ',
  document.getElementsByTagName("section")
);

console.log("document.getElementById :>> ", document.getElementById("root"));

// querySelector(All)

const h1 = document.querySelector("h1");

const sectionElements = document.querySelectorAll(".news");
console.log(sectionElements);

console.log(sectionElements[0]);
console.log(sectionElements[1]);

const [section1, section2] = document.querySelectorAll(".news");

console.log("section1 :>> ", section1);

console.log(document.querySelector("#root"));
