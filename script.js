//Portfolio Page

//SELECT ITEMS FOR TAB 1 - PROJECT 1
const tabcontentData = document.getElementsByClassName("tabcontent-data_0");
const tabLinks = document.getElementsByClassName("tablink_0");

const openTab = (evt, uniqueId) => {
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
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//SELECT ITEMS FOR TAB 2 - PROJECT 2
const tabcontentData_1 = document.getElementsByClassName("tabcontent-data_1");
const tabLinks_1 = document.getElementsByClassName("tablink_1");

const openTab_1 = (evt, uniqueId) => {
  const mediaQ = window.matchMedia("(max-width: 768px)");
  let i;

  for (i = 0; i < tabcontentData_1.length; i++) {
    tabcontentData_1[i].style.display = "none";
  }

  for (i = 0; i < tabLinks_1.length; i++) {
    tabLinks_1[i].className = tabLinks_1[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(uniqueId).style.display = "block";
  evt.currentTarget.className += " active";
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen_1").click();
