let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 7000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 7000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};
let isHovered = false;

slider.addEventListener("mouseover", function () {
  isHovered = true;
  clearInterval(refreshInterval);
});

slider.addEventListener("mouseout", function () {
  isHovered = false;
  refreshInterval = setInterval(() => {
    next.click();
  }, 7000);
});
let overlayButtons = document.querySelectorAll(".btn-hover");

overlayButtons.forEach((button) => {
  button.addEventListener("click", function () {
    window.location.href = "home.html";
  });
});
function Hoho(){
   window.open(
      "https://vr3d.com.vn/vnpt-na2/7/nhathohoho/"
    );
}
function lamson(){
   window.open(
      "https://vr3d.com.vn/vnpt-na2/3/chualamson/"
    );
}
function quynhdoi(){
   window.open(
      "https://vr3d.com.vn/vnpt-na2/3/quynhdoi/"
    );
}
function hotungmau(){
   window.open(
      "https://vr3d.com.vn/vnpt-na2/7/hotungmau/"
   );
}
function denthuong(){
   window.open(
      "https://vr3d.com.vn/vnpt-na2/3/denthuong/"
    );
}
