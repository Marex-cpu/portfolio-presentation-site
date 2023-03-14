//Portfolio Page

//select items
const tabcontentData = document.getElementsByClassName("tabcontent-data");
const tabLinks = document.getElementsByClassName("tablink");
const slider = document.getElementById("slider");

const openTab = (evt, uniqueId, sliderIndex) => {
  const mediaQ = window.matchMedia("(max-width: 768px)");
  let i;

  for (i = 0; i < tabcontentData.length; i++) {
    tabcontentData[i].style.display = "none";
  }

  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(uniqueId).style.display = "block";
  evt.currentTarget.className += " active";

  // If media query matches
  if (!mediaQ.matches) {
    slider.style.transform = `translateY(calc(${sliderIndex} * 42px))`;
  } else {
    slider.style.transform = `translateX(calc(${sliderIndex} * 150px))`;
  }
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
