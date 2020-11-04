// Movement animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// items
const title = document.querySelector(".title");
const lion = document.querySelector(".lion img");
const info = document.querySelector(".info h3");
const visitSite = document.querySelector(".visitSite button");

// Moving animation event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  // popout
  title.style.transform = "translateZ(50px)";
  lion.style.transform = "translateZ(50px) rotateZ(-25deg)";
  info.style.transform = "translateZ(30px)";
  visitSite.style.transform = "translateZ(50px)";
});

// Animate out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  // popback
  title.style.transform = "translateZ(0px)";
  lion.style.transform = "translateZ(0px) rotate(0deg)";
  info.style.transform = "translateZ(0px)";
  visitSite.style.transform = "translateZ(0px)";
});
