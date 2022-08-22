let item;

// attrappe un élèment qu'on identifie, stocker dans item
document.addEventListener("dragstart", (e) => {
  //   console.log(e.target);
  item = e.target;
});

document.addEventListener("dragover", (e) => {
  e.preventDefault(); // se prémunir du comportement par défault
});

// e.target est la division par dessus laquelle on est, pour relacher
document.addEventListener("drop", (e) => {
  if (e.target.getAttribute("data-draggable") == "target") {
    e.preventDefault(e);
    //   console.log(e.target);
    e.target.appendChild(item);
  }
});

// quand on a fini le drag, je te passe null
document.addEventListener("dragend", () => (item = null));
