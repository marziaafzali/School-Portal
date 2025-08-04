function greeting() {
  const userName = "Marzia";
  const message = `Welcome, ${userName}!`;
  document.getElementById("welcome-message").textContent = message;
}

// PROFILE PAGE INTERACTIONS
document.addEventListener("DOMContentLoaded", function () {
  const contactInfo = document.getElementById("contact-info");
  const showEmailBtn = document.getElementById("show-email");
  const showPhoneBtn = document.getElementById("show-phone");
  const hideContactBtn = document.getElementById("hide-contact");
  const statusSpan = document.getElementById("status");
  const statusInput = document.getElementById("status-input");
  const updateStatusBtn = document.getElementById("update-status");

  if (showEmailBtn) {
    showEmailBtn.addEventListener("click", () => {
      contactInfo.classList.remove("hidden");
      contactInfo.innerHTML = "<p><strong>Email:</strong> afzalimarzia2004@gmail.com</p>";
    });
  }

  if (showPhoneBtn) {
    showPhoneBtn.addEventListener("click", () => {
      contactInfo.classList.remove("hidden");
      contactInfo.innerHTML = "<p><strong>Phone:</strong> 0712345678</p>";
    });
  }

  if (hideContactBtn) {
    hideContactBtn.addEventListener("click", () => {
      contactInfo.classList.add("hidden");
      contactInfo.innerHTML = "";
    });
  }

  if (updateStatusBtn) {
    updateStatusBtn.addEventListener("click", () => {
      const newStatus = statusInput.value.trim();
      if (newStatus === "Active" || newStatus === "Suspended") {
        statusSpan.innerHTML = newStatus;
        statusInput.value = "";
      } else {
        alert("Please enter 'Active' or 'Suspended'.");
      }
    });
  }
});


