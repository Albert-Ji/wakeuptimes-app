const calcBtn = document.getElementById("calc-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div"); // 👀 Add this
const resultSection = document.getElementById("result-section");
const promptSection = document.getElementById("prompt-section");
const returnBtn = document.getElementById("return-btn");
const refreshBtn = document.getElementById("refresh-btn");

returnBtn.onclick = goBack;
calcBtn.onclick = calcWakeUpTimes;
refreshBtn.onclick = calcWakeUpTimes;


function calcWakeUpTimes() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);

  const wakeUpTime = new Date(fallAsleepTime);
  wakeUpHoursDiv.innerHTML = ""; // 👀 Clear previous results

  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const timeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });

    // 👀 Create a div for each time
    const cycleDiv = document.createElement("div");
    cycleDiv.setAttribute("class", "cycle");
    cycleDiv.setAttribute("id", `cycle-${i}`);
    cycleDiv.textContent = timeString;
    wakeUpHoursDiv.appendChild(cycleDiv);
  }
  promptSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
}

function goBack() {
  promptSection.classList.remove("hidden");
  resultSection.classList.add("hidden");
}





