const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const imageScroll = document.querySelector(".image-list");

imageScroll.addEventListener("wheel", (e) => {
  imageScroll.scrollLeft += e.deltaY;
});

nextBtn.addEventListener("click", () => {
  imageScroll.style.scrollBehavior = "smooth";
  imageScroll.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  imageScroll.style.scrollBehavior = "smooth";
  imageScroll.scrollLeft -= 900;
});