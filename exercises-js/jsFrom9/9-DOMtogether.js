const jsBtn = document.querySelector(".js-btn");

console.log(jsBtn.classList.contains("js-btn"));

/*function gaming() {
  const Gaming = document.querySelector(".js-btn");

  if (!Gaming.classList.contains("new-toggled")) {
    previousBtn();
    Gaming.classList.add("new-toggled");
    Gaming.innerHTML = "Gamed";
  } else {
    Gaming.classList.remove("new-toggled");
    Gaming.innerHTML = "Gaming";
  }
}

function music() {
  const MusicBtn = document.querySelector(".js-btn2");

  if (MusicBtn.innerText === "Music") {
    MusicBtn.innerHTML = "Musiced";
  } else {
    MusicBtn.innerHTML = "Music";
  }

  if (!MusicBtn.classList.contains("new-toggled")) {
    previousBtn();
    MusicBtn.classList.add("new-toggled");
    MusicBtn.innerHTML = "Musiced";
  } else {
    MusicBtn.classList.remove("new-toggled");
    MusicBtn.innerHTML = "Music";
  }
}

function tech() {
  const techBtn = document.querySelector(".js-btn3");

  if (techBtn.innerText === "Tech") {
    techBtn.innerHTML = "Teched";
  } else {
    techBtn.innerHTML = "Tech";
  }

  if (!techBtn.classList.contains("new-toggled")) {
    previousBtn();
    techBtn.classList.add("new-toggled");
    techBtn.innerHTML = "Teched";
  } else {
    techBtn.classList.remove("new-toggled");
    techBtn.innerHTML = "Tech";
  }
}*/

function toggled(selector) {
  const toggledBtn = document.querySelector(selector);

  if (selector === ".js-btn") {
    if (!toggledBtn.classList.contains("new-toggled")) {
      previousBtn();
      toggledBtn.classList.add("new-toggled");
      toggledBtn.innerHTML = "Gamed";
    } else {
      toggledBtn.classList.remove("new-toggled");
      toggledBtn.innerHTML = "Gaming";
    }
  } else if (selector === ".js-btn2") {
    if (!toggledBtn.classList.contains("new-toggled")) {
      previousBtn();
      toggledBtn.classList.add("new-toggled");
      toggledBtn.innerHTML = "Musiced";
    } else {
      toggledBtn.classList.remove("new-toggled");
      toggledBtn.innerHTML = "Music";
    }
  } else if (selector === ".js-btn3") {
    if (!toggledBtn.classList.contains("new-toggled")) {
      previousBtn();
      toggledBtn.classList.add("new-toggled");
      toggledBtn.innerHTML = "Teched";
    } else {
      toggledBtn.classList.remove("new-toggled");
      toggledBtn.innerHTML = "Tech";
    }
  } else if (selector === ".js-btn4") {
    if (!toggledBtn.classList.contains("new-toggled")) {
      previousBtn();
      toggledBtn.classList.add("new-toggled");
      toggledBtn.innerHTML = "Smimmed";
    } else {
      toggledBtn.classList.remove("new-toggled");
      toggledBtn.innerHTML = "swimming";
    }
  }
}

function previousBtn() {
  const previousBtn = document.querySelector(".new-toggled");

  const chTechtext = document.querySelector(".js-btn3");
  const chMusictext = document.querySelector(".js-btn2");
  const chGamingtext = document.querySelector(".js-btn");

  const cyc = document.querySelector(".js-btn5");

  if (previousBtn) {
    previousBtn.classList.remove("new-toggled");
    chTechtext.innerHTML = "Tech";
    chMusictext.innerHTML = "Music";
    chGamingtext.innerHTML = "Gaming";

    cyc.innerHTML = "tmc";
  }
}
