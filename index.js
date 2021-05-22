const data = [
  {
    image: "images/desktop-image-hero-1.jpg",
    heading: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    image: "images/desktop-image-hero-2.jpg",
    heading: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: "images/desktop-image-hero-3.jpg",
    heading: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

const next = document.getElementById("next");
const previous = document.getElementById("previous");
const section1 = document.querySelector(".section1");
const heading = document.querySelector(".heading");
const text = document.querySelector(".text");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");

let index = 0;

setInterval(() => {
  if (index == data.length - 1) {
    index = 0;
  }
  index++;

  section1.style.backgroundImage = `url(${data[index].image})`;
  heading.innerHTML = data[index].heading;
  text.innerHTML = data[index].text;
}, 1000 * 20);

next.addEventListener("click", () => {
  if (index < data.length - 1) {
    index++;
    section1.style.backgroundImage = `url(${data[index].image})`;
    heading.innerHTML = data[index].heading;
    text.innerHTML = data[index].text;
  }
});

previous.addEventListener("click", () => {
  if (index > 0) {
    index--;
    section1.style.backgroundImage = `url(${data[index].image})`;
    heading.innerHTML = data[index].heading;
    text.innerHTML = data[index].text;
  }
});

hamburger.addEventListener("click", () => {
  document.querySelector(".mobile-nav").style.display = "flex";
});

close.addEventListener("click", () => {
  document.querySelector(".mobile-nav").style.display = "none";
});
