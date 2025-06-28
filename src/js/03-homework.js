const carousel = document.querySelector(".carousel");

const pervButton = carousel.querySelector(".pervButton");
const nextButton = carousel.querySelector(".nextButton");
const contentsWrapper = carousel.querySelector(".carousel-list");
const contents = [...carousel.querySelectorAll(".carousel-item")];
const currentPageCount = carousel.querySelector(".current-page");

const MOVED_DISTANCE =
  (parseInt(getComputedStyle(contents[0]).getPropertyValue("inline-size")) +
    16) *
  2;
function translateMoveDistance() {
  contentsWrapper.style.setProperty(
    "transform",
    `translateX(-${MOVED_DISTANCE * currentIndex}px)`
  );
}
allPageCount();

let currentIndex = 1;

function showNextSlide() {
  let currentContent;
  let nextContent;

  currentContent = contents[`${currentIndex}`];
  nextContent = contents[`${currentIndex + 2}`];
  console.log("시작", currentIndex);
  translateMoveDistance();

  currentIndex + 2 > contents.length / 2 ? (currentIndex = 0) : currentIndex++;

  if (currentIndex > contents.length / 3) {
    currentPageCount.textContent = 0;
  } else if (currentIndex === 0) {
    currentPageCount.textContent = 3;
  } else {
    currentPageCount.textContent = currentIndex;
  }
  console.log("끝", currentIndex);
}
function showPrevSlide() {
  if (currentIndex === 2) {
    currentIndex = 2;
  } else if (currentIndex > 2) {
    currentIndex--;
  } else {
    currentIndex++;
  }

  let currentContent;
  let prevContent;
  console.log("시작", currentIndex);

  currentContent = contents[`${currentIndex}`];
  prevContent = contents.at(-`${currentIndex + currentIndex}`);

  translateMoveDistance();

  if (currentIndex > 0) {
    currentIndex -= 2;
  } else if (currentIndex > 2) {
    currentIndex = 0;
  } else {
    currentIndex = 2;
  }

  console.log("끝", currentIndex);
}

nextButton.addEventListener("click", showNextSlide);
pervButton.addEventListener("click", showPrevSlide);

function allPageCount() {
  const AllPageCount = carousel.querySelector(".all-page");
  AllPageCount.textContent = contents.length / 2;
}
