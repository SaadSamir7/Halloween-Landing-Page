// header

let header = document.querySelector(".header");
let navbar = document.querySelector(".header .navbar");
let menu = document.querySelector("#menu-btn");

menu.onclick = () => {
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-xmark");
  navbar.classList.remove("active");

  if (window.scrollY > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

var dateOffset = 24 * 60 * 60 * 1000 * 70;
let countDate = new Date().getTime() + dateOffset;

function countDown() {
  let now = new Date().getTime();
  let gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / day);
  let h = Math.floor((gap % day) / hour);
  let m = Math.floor((gap % hour) / minute);
  let s = Math.floor((gap % minute) / second);

  document.getElementById("day").innerText = d;
  document.getElementById("hour").innerText = h;
  document.getElementById("minute").innerText = m;
  document.getElementById("second").innerText = s;
}

setInterval(() => countDown(), 1000);
