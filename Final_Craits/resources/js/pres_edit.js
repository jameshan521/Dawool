"use strict";

const edit = document.querySelector(".edit");
const overlay2 = document.querySelector(".overlay2");
const btnCloseEdit = document.querySelector(".close-edit");
const btnOpenEdit = document.querySelector(".show-edit");

const openEdit = function () {
  edit.classList.remove("hidden");
  overlay2.classList.remove("hidden");
};

const closeEdit = function () {
  edit.classList.add("hidden");
  overlay2.classList.add("hidden");
};

btnOpenEdit.addEventListener("click", openEdit);
btnCloseEdit.addEventListener("click", closeEdit);
overlay2.addEventListener("click", closeEdit);
