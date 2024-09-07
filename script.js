const getMarkRead = document.getElementById("mark-read");
const getNotification = document.getElementById("notifications");
const notificationUnRead = document.querySelectorAll(".box-style");
const readMessages = document.querySelectorAll(".box-one-style");
const getDot = document.querySelectorAll(".dot");
const inputText = document.querySelectorAll(".message-input-style");

notificationUnRead.innerText = notificationUnRead.length;
let previousDescription;

notificationUnRead.forEach((message, index) => {
  message.addEventListener("click", (event) => {
    if (inputText[index].style.display === "block") {
      inputText[index].style.display = "none";
      previousDescription = null;
    } else {
      inputText[index].style.display = "block";
      previousDescription = inputText[index];
      const newNotificationUnRead = document.querySelectorAll(".box-style");
      getNotification.innerText = newNotificationUnRead.length;
    }
  });
});
notificationUnRead.forEach((message) => {
  message.addEventListener("click", () => {
    message.classList.remove("box-style");
    const newNotificationUnRead = document.querySelectorAll(".box-style");
    getNotification.innerText = newNotificationUnRead.length;
  });
});

getMarkRead.addEventListener("click", () => {
  notificationUnRead.forEach((message) => {
    message.classList.remove("box-style");
  });
  const newNotificationUnRead = document.querySelectorAll(".box-style");
  getNotification.innerText = newNotificationUnRead.length;
});

getDot.forEach((dot) => {
  dot.addEventListener("click", () => {
    dot.style.display = "none";
  });
});
