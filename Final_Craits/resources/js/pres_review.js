"use strict";

const review = document.querySelector(".review");
const overlay = document.querySelector(".overlay");
const btnCloseReview = document.querySelector(".close-review");
const btnOpenReview = document.querySelector(".show-review");

const openReview = function () {
  review.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeReview = function () {
  review.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenReview.addEventListener("click", openReview);
btnCloseReview.addEventListener("click", closeReview);
overlay.addEventListener("click", closeReview);
