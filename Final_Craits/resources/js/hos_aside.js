function openCloseToc() {
  if (document.getElementById("toc-content").style.display === "block") {
    document.getElementById("toc-content").style.display = "none";
    document.getElementById("toc-toggle").textContent = "더보기";
  } else {
    document.getElementById("toc-content").style.display = "block";
    document.getElementById("toc-toggle").textContent = "숨기기";
  }
}

function changeBorder() {
  document.getElementById("aside-menu-border").style.height = "2690px";
  document.getElementById("main-1").style.marginTop = "-2675px";
  if (document.getElementById("toc-content").style.display == "none") {
    document.getElementById("aside-menu-border").style.height = "1206px";
    document.getElementById("main-1").style.marginTop = "-1170px";
  }
}

function openCloseToc2() {
  if (document.getElementById("toc-content2").style.display === "block") {
    document.getElementById("toc-content2").style.display = "none";
    document.getElementById("toc-toggle2").textContent = "더보기";
  } else {
    document.getElementById("toc-content2").style.display = "block";
    document.getElementById("toc-toggle2").textContent = "숨기기";
  }
}

function changeBorder2() {
  document.getElementById("aside-menu-border").style.height = "4150px";
  document.getElementById("main-1").style.marginTop = "-4163px";
  if (document.getElementById("toc-content2").style.display == "none") {
    document.getElementById("aside-menu-border").style.height = "2800px";
    document.getElementById("main-1").style.marginTop = "-2673px";
  }
}

function openCloseToc3() {
  if (document.getElementById("toc-content3").style.display === "block") {
    document.getElementById("toc-content3").style.display = "none";
    document.getElementById("toc-toggle3").textContent = "더보기";
  } else {
    document.getElementById("toc-content3").style.display = "block";
    document.getElementById("toc-toggle3").textContent = "숨기기";
  }
}

function changeBorder3() {
  document.getElementById("aside-menu-border").style.height = "4470px";
  document.getElementById("main-1").style.marginTop = "-4515px";
  if (document.getElementById("toc-content3").style.display == "none") {
    document.getElementById("aside-menu-border").style.height = "4140px";
    document.getElementById("main-1").style.marginTop = "-4188px";
  }
}
