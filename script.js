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
