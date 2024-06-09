// Атрибути

// const h1 = document.querySelector("h1");

// h1.title = "Its heading";

// h1.style.backgroundColor = "#4afd4a40";
// h1.style.color = "#011222";
// h1.hidden = false;

// const button = document.querySelector("#signup");

// console.log(button);

// // Через методи

// const [section1] = document.querySelectorAll(".news");

// section1.setAttribute("title", "Section");
// section1.setAttribute(
//   "style",
//   "border: 1px solid red; background-color: lightblue;"
// );

// // section1.setAttribute("hidden", true);

// console.log(section1.getAttribute("style"));

// h1.textContent = "New text h1";
// section1.innerHTML = "<span>New text</span>";

// const news = { title: "News  title", body: "some news body" };

// // const newsTitleElement = document.querySelector("#newsTitle");
// // newsTitleElement.textContent = news.title;

// // const newsBodyEl = document.querySelector("#newsBody");

// const article = document.querySelector("#newsItem");

// article.innerHTML = `
//         <h2>${news.title}</h2>
//         <p>${news.body}</p>
// `;

// const catImgEl = document.querySelector("#catImg");

// catImgEl.src = imgAttr.src;
// catImgEl.alt = imgAttr.alt;

// catImgEl.style.width = "300px";

// catImgEl.onmouseenter = (e) => {
//   catImgEl.style.width = "400px";
// };
// catImgEl.onmouseleave = (e) => {
//   catImgEl.style.width = "300px";
// };
const imgAttr = {
  src: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_640.jpg",
  alt: "cat",
};
const button = document.querySelector("button");
const h1 = document.querySelector("h1");
const h2 = document.querySelectorAll("h2");
const images = document.querySelectorAll(".sectionImage");

function eventHandler(event) {
  h1.style.backgroundColor = "red";

  h2.forEach((el) => {
    el.style.fontSize = "20px";
    el.style.color = "green";
  });

  images.forEach((img) => {
    img.src = imgAttr.src;
    img.alt = imgAttr.alt;
    img.style.width = "200px";
    img.style.height = "150px";
  });
}

button.onclick = eventHandler;
