"use strict";

const write = document.querySelector(".write");
const overlay = document.querySelector(".overlay");
const btnCloseWrite = document.querySelector(".close-write");
const btnOpenWrite = document.querySelector(".show-report");

const openWrite = function () {
  write.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeWrite = function () {
  write.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenWrite.addEventListener("click", openWrite);
btnCloseWrite.addEventListener("click", closeWrite);
overlay.addEventListener("click", closeWrite);
