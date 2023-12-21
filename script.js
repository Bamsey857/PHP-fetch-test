document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    fetch("main.php")
      .then((response) => response.text())
      .then((data) => {
        const currentTime = data.trim();
        document.getElementById("main").innerHTML = currentTime;
        const [datePart, timePart] = currentTime.split(" ");
        const [hour, minutes, seconds] = timePart.split(":");
        const currentHour = parseInt(hour, 10);
        if (currentHour >= 18) {
          document.body.classList.add("dark-mode-transition");
          document.body.style.backgroundColor = "#000";
          document.body.style.color = "#fff";
        } else {
          document.body.classList.remove("dark-mode-transition");
          document.body.style.backgroundColor = "#edeef0";
          document.body.style.color = "#000";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, 1000);

  const currentDate = new Date();
  const dayOfWeek = currentDate.toLocaleString("en-US", {
    weekday: "long",
  });
  const motiv = document.getElementById("motiv");

  const messages = {
    monday: "Ignite the week with purpose and drive.",
    tuesday: "Embrace challenges, turning hurdles into stepping stones.",
    wednesday: "Midweek push—unleash your potential.",
    thursday: "Persist, progress thrives in consistency.",
    friday: "Celebrate victories, big or small.",
    saturday: "Fuel your passions, recharge your spirit.",
    sunday: "Reflect, renew, and prepare for new beginnings.",
  };

  const output = messages[dayOfWeek.toLowerCase()] || "Invalid day";
  setInterval(() => {
    motiv.innerHTML = output;
  }, 1500);




  const loadingbox = document.getElementById('loading');

  function showLoading() {
    loadingbox.style.display = 'flex';
  }

  function hideLoading() {
    loadingbox.style.display = 'none';
  }
  if (dayOfWeek.toLowerCase() == "saturday") {
    document.querySelector(".sat").style.display = "flex";
    document.querySelector('.centre').classList.remove("others");
    const btn = document.getElementById("btn");
    function bored() {
      showLoading();
      fetch("https://www.boredapi.com/api/activity")
        .then((response) => response.json())
        .then((data) => {
          document.getElementById("activity").innerHTML = data.activity;
        }).catch(error => {
          console.log("Failed to: ", error);
        }).finally(() => {
          hideLoading()
        })
    }

    btn.addEventListener("click", bored);
  } else {
    document.querySelector('.centre').classList.add("others");
  }
});