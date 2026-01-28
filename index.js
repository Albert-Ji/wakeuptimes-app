const calcBtn = document.getElementById("calc-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div"); // 👀 Add this

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
    cycleDiv.setAttribute("id", `cycle-${i}`);
    cycleDiv.textContent = timeString;
    wakeUpHoursDiv.appendChild(cycleDiv);
  }
}


calcBtn.onclick = calcWakeUpTimes;
