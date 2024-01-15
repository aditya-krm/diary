// mood javaScript
let mood = document.querySelector("#mood");
let selectedButton = null;

mood.addEventListener("click", (e) => {
  if (e.target.classList.contains("mood-item")) {
    let moodValue = e.target.textContent;
    updateMoodStatus(e.target);
    localStorage.setItem("moodValue", moodValue);
  }
});

function updateMoodStatus(clickedButton) {
  if (selectedButton) {
    selectedButton.classList.remove("selected");
  }

  selectedButton = clickedButton;
  selectedButton.classList.add("selected");
}

// Load initial mood status from localStorage if available
function loadInitialMoodStatus() {
  let moodValue = localStorage.getItem("moodValue");
  if (moodValue) {
    let buttons = document.querySelectorAll(".mood-item");
    for (let button of buttons) {
      if (button.textContent === moodValue) {
        updateMoodStatus(button);
        break;
      }
    }
  }
}
loadInitialMoodStatus();

// day,Time,Date,year

const dateObj = new Date();
const month   = dateObj.getUTCMonth() + 1;
const date     = dateObj.getUTCDate();
const year    = dateObj.getUTCFullYear();
const newDate = `${date}/${month}/${year}`;
// dom
let fullDate = document.querySelector("#date");
let day = document.querySelector("#dayy");
let fest = document.querySelector("#fest");


days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
fullDate.innerHTML = (newDate);
const today = dateObj.getDay();
day.innerHTML = days[today];

if(today == 0){
    fest.innerHTML = "HoliDay"
}
