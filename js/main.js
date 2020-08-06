// Fade out alert button

// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function () {
    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    setTimeout(
      function () {
        div.style.display = "none";
      },

      600
    );
  };
}

/* Mobile Navigation*/
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
const hamburgerNav = document.getElementById("hamburger-link");

hamburgerNav.addEventListener("click", function () {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    const popup = document.getElementById("popup-container");
    popup.style.visibility = "hidden";
  }
});

/* Display notifications when user clicks on bell icon*/

const notificationBell = document.getElementById("notification-icon");
const popupContainer = document.getElementById("popup-container");

function createAndAddNotificationCard(notificationMessage) {
  // Create div of class "pop-up"
  const div = document.createElement("div");
  div.className = "pop-up";
  // Create span of class "popup-message"
  const span = document.createElement("span");
  span.className = "popup-message";
  span.textContent = notificationMessage;
  // Create span of class "closebtn-popup"
  const spanButton = document.createElement("span");
  spanButton.className = "closebtn-popup";
  spanButton.innerHTML = "&times;";
  spanButton.addEventListener("click", function () {
    div.style.display = "none";
  });

  div.appendChild(span);
  div.appendChild(spanButton);

  popupContainer.appendChild(div);
}

notificationBell.addEventListener("click", function () {
  // Make popup-container visible
  if (popupContainer.style.display === "flex") {
    popupContainer.style.display = "none";
  } else {
    popupContainer.style.display = "flex";
  }
});

/* Local Storage Settings */

const timezone = document.getElementById("timezone-select");
const save = document.getElementById("save-button");
const cancel = document.getElementById("cancel-button");
const switch1 = document.getElementById("email-settings");
const switch2 = document.getElementById("profile-settings");
const savingsMessage = document.getElementById("savings-message");

save.addEventListener("click", function () {
  localStorage.setItem("timezone", timezone.value);
  localStorage.setItem("switch1", switch1.checked);
  localStorage.setItem("switch2", switch2.checked);
  savingsMessage.textContent = "Your settings have been saved!";
});

cancel.addEventListener("click", function () {
  localStorage.clear();
  timezone.value = "";
  switch1.checked = false;
  switch2.checked = false;
  savingsMessage.textContent = "Your settings preferences have been canceled!";
});

window.onload = function () {
  timezone.value = localStorage.getItem("timezone") || "";
  switch1.checked = JSON.parse(localStorage.getItem("switch1"));
  switch2.checked = JSON.parse(localStorage.getItem("switch2"));

  // Create 3 notification cards and add them to popup-container
  createAndAddNotificationCard("You have 6 unread messages.");
  createAndAddNotificationCard("You have 3 new followers.");
  createAndAddNotificationCard("Your password expires in 7 days.");
};

/* Notifications pop-up */

const notificationIcon = document.getElementById("notification-icon");

notificationIcon.addEventListener("click", function () {});

/* Message user widget*/

const send = document.getElementsByClassName("submit-message")[0];
const user = document.getElementById("input-search");
const message = document.getElementById("input-message");
const spanSubmit = document.getElementById("user-message-submit");
const spanUser = document.getElementById("user");
const spanMessage = document.getElementById("user-message");
const overlay = document.getElementById("overlay");

send.addEventListener("click", function () {
  if (user.value && message.value) {
    spanSubmit.textContent = "Your message was sent successfully!";
    overlay.style.display = "flex";
  } else if (!user.value) {
    spanUser.style.display = "block";
    spanUser.textContent = "Please select a user:";
  } else if (!message.value) {
    spanMessage.style.display = "block";
    spanMessage.textContent = "Please enter a message:";
  }
});

const overlayButton = document.getElementById("overlay-button");
overlayButton.addEventListener("click", function () {
  overlay.style.display = "none";
  user.value = "";
  message.value = "";
  spanUser.style.display = "none";
  spanMessage.style.display = "none";
});

/* Autocomplete search user*/
var tags = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];

$("#input-search").autocomplete({
  source: tags,
});
