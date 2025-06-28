const carousel = document.querySelector(".carousel");

const pervButton = carousel.querySelector(".pervButton");
const nextButton = carousel.querySelector(".nextButton");
const contentsWrapper = carousel.querySelector(".carousel-list");
const contents = carousel.querySelectorAll(".carousel-item");
const currentPageCount = carousel.querySelector(".current-page");

const MOVED_DISTANCE =
  (parseInt(getComputedStyle(contents[0]).getPropertyValue("inline-size")) +
    16) *
  2;

allPageCount();

let currentIndex = 1;
let currentContent;
let nextContent;
console.log(currentIndex);
function showNextSlide() {
  currentContent = contents[`${currentIndex}`];
  nextContent = contents[`${currentIndex + 2}`];

  contentsWrapper.style.setProperty(
    "transform",
    `translateX(-${MOVED_DISTANCE * currentIndex}px)`
  );

  currentIndex + 2 > contents.length / 2 ? (currentIndex = 0) : currentIndex++;

  console.log("끝", currentIndex);
  if (currentIndex > contents.length / 3) {
    currentPageCount.textContent = 0;
  } else if (currentIndex === 0) {
    currentPageCount.textContent = 3;
  } else {
    currentPageCount.textContent = currentIndex;
  }
}

nextButton.addEventListener("click", showNextSlide);

function allPageCount() {
  const AllPageCount = carousel.querySelector(".all-page");
  AllPageCount.textContent = contents.length / 2;
}
