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

//SELECT ITEMS FOR TAB 3 - PROJECT 3
const tabcontentData_2 = document.getElementsByClassName("tabcontent-data_2");
const tabLinks_2 = document.getElementsByClassName("tablink_2");

const openTab_2 = (evt, uniqueId) => {
  const mediaQ = window.matchMedia("(max-width: 768px)");
  let i;

  for (i = 0; i < tabcontentData_2.length; i++) {
    tabcontentData_2[i].style.display = "none";
  }

  for (i = 0; i < tabLinks_2.length; i++) {
    tabLinks_2[i].className = tabLinks_2[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(uniqueId).style.display = "block";
  evt.currentTarget.className += " active";
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen_2").click();

//SELECT ITEMS FOR TAB 4 - PROJECT 4
const tabcontentData_3 = document.getElementsByClassName("tabcontent-data_3");
const tabLinks_3 = document.getElementsByClassName("tablink_3");

const openTab_3 = (evt, uniqueId) => {
  const mediaQ = window.matchMedia("(max-width: 768px)");
  let i;

  for (i = 0; i < tabcontentData_3.length; i++) {
    tabcontentData_3[i].style.display = "none";
  }

  for (i = 0; i < tabLinks_3.length; i++) {
    tabLinks_3[i].className = tabLinks_3[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(uniqueId).style.display = "block";
  evt.currentTarget.className += " active";
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen_3").click();

//SELECT ITEMS FOR TAB 5 - PROJECT 5
const tabcontentData_4 = document.getElementsByClassName("tabcontent-data_4");
const tabLinks_4 = document.getElementsByClassName("tablink_4");

const openTab_4 = (evt, uniqueId) => {
  const mediaQ = window.matchMedia("(max-width: 768px)");
  let i;

  for (i = 0; i < tabcontentData_4.length; i++) {
    tabcontentData_4[i].style.display = "none";
  }

  for (i = 0; i < tabLinks_4.length; i++) {
    tabLinks_4[i].className = tabLinks_4[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(uniqueId).style.display = "block";
  evt.currentTarget.className += " active";
};

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen_4").click();
