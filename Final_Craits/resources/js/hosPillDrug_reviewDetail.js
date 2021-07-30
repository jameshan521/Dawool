"use strict";

const write2 = document.querySelector(".write2");
const overlay2 = document.querySelector(".overlay2");
const btnCloseWrite2 = document.querySelector(".close-write2");
const btnOpenWrite2 = document.querySelector(".change-request");

const openWrite2 = function () {
  write2.classList.remove("hidden2");
  overlay2.classList.remove("hidden2");
};

const closeWrite2 = function () {
  write2.classList.add("hidden2");
  overlay2.classList.add("hidden2");
};

btnOpenWrite2.addEventListener("click", openWrite2);
btnCloseWrite2.addEventListener("click", closeWrite2);
overlay2.addEventListener("click", closeWrite2);
