"use strict";

const btn_header = document.querySelector(".header_p");
const notifications = document.querySelector(".notifications");

const dots = document.querySelectorAll(".dot");
const firstDot = document.querySelector(".first_dot");
const secondDot = document.querySelector(".second_dot");
const thirdDot = document.querySelector(".third_dot");

const posts = document.querySelectorAll(".post");
const firstPost = document.querySelector(".one");
const secondPost = document.querySelector(".two");
const thirdPost = document.querySelector(".three");

notifications.value = dots.length;

var today = new Date();
var date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

btn_header.addEventListener("click", function () {
  notifications.value = 0;
  btn_header.style.color = "hsl(219, 14%, 63%)";

  dots.forEach((dot) => {
    dot.classList.add("hidden");
  });

  posts.forEach((post) => {
    post.style.backgroundColor = "hsl(0, 0%, 100%)";
    post.style.cursor = "default";
  });
});

const allNotifications = function (post, dot) {
  post.disabled = true;
  dot.classList.add("hidden");
  post.style.backgroundColor = "hsl(0, 0%, 100%)";
  post.style.cursor = "default";
  if (notifications.value <= 1) {
    notifications.value = 0;
    btn_header.style.color = "hsl(219, 14%, 63%)";
  } else {
    notifications.value -= 1;
    post.classList.add("avoid_clicks");
  }
};

firstPost.addEventListener("click", function () {
  allNotifications(firstPost, firstDot);
});

secondPost.addEventListener("click", function () {
  allNotifications(secondPost, secondDot);
});

thirdPost.addEventListener("click", function () {
  allNotifications(thirdPost, thirdDot);
});
