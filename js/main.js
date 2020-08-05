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
    setTimeout(function () {
      div.style.display = "none";
    }, 600);
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

const notification = document.getElementById("notification-icon");
notification.addEventListener("click", function () {
  const popup = document.getElementById("popup-container");
  popup.style.visibility = "visible";
});

/* Local Storage Settings */

const timezone = document.getElementById("timezone-select");
const save = document.getElementById("save-button");
const cancel = document.getElementById("cancel-button");
const switch1 = document.getElementById("email-settings");
const switch2 = document.getElementById("profile-settings");

save.addEventListener("click", function () {
  localStorage.setItem("timezone", timezone.value);
  localStorage.setItem("switch1", switch1.checked);
  localStorage.setItem("switch2", switch2.checked);
});

cancel.addEventListener("click", function () {
  localStorage.clear();
  timezone.value = "";
  switch1.checked = false;
  switch2.checked = false;
});

window.onload = function () {
  timezone.value = localStorage.getItem("timezone") || "";
  switch1.checked = JSON.parse(localStorage.getItem("switch1"));
  switch2.checked = JSON.parse(localStorage.getItem("switch2"));
};

/* Notifications pop-up */

const notificationIcon = document.getElementById("notification-icon");

notificationIcon.addEventListener("click", function () {});

/* Message user widget*/

const send = document.getElementsByClassName("submit-message")[0];
const user = document.getElementById("input-search");
const message = document.getElementById("input-message");

send.addEventListener("click", function () {
  if (user.value && message.value) {
    // alert("Your message was sent successfully!");
    // user.value = "";
    // message.value = "";
    const span = document.createElement("span");
    span.innerHTML = "Your message was sent successfully!";
  } else if (!user.value) {
    const alertP = document.createElement("p");
    alertP.innerHTML = "Please select a user";

    const userSearch = document.getElementById("input-search");
    const parentDiv = userSearch.parentNode;
    parentDiv.insertBefore(alertP, userSearch);
  } else if (!message.value) {
    alert("Please enter a message");
  }
});

/* Autocomplete search user*/
var tags = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver"];
$("#input-search").autocomplete({ source: tags });
