"use strict";

const write2 = document.querySelector(".write2");
const overlay2 = document.querySelector(".overlay2");
const btnCloseWrite2 = document.querySelector(".close-write2");
const btnOpenWrite2 = document.querySelector(".show-write2");

const openWrite2 = function () {
  write2.classList.remove("hidden");
  overlay2.classList.remove("hidden");
};

const closeWrite2 = function () {
  write2.classList.add("hidden");
  overlay2.classList.add("hidden");
};

btnOpenWrite2.addEventListener("click", openWrite2);
btnCloseWrite2.addEventListener("click", closeWrite2);
overlay2.addEventListener("click", closeWrite2);
