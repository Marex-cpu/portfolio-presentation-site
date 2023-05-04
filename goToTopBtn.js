const btnToTop = document.getElementById("btn-to-top");

// A function that shows/hides a button based on the distance from the top of the page
function toggleBtnToTop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    btnToTop.classList.add("show");
    btnToTop.classList.remove("hide");
  } else {
    btnToTop.classList.add("hide");
    btnToTop.classList.remove("show");
  }
}

// An event listener that responds to a click and returns the user to the top of the page
btnToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// An event listener that responds to scrolling and shows/hides the button based on the distance from the top of the page
window.addEventListener("scroll", toggleBtnToTop);
