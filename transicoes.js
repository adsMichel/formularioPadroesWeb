var acc = document.getElementsByClassName("questoes");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var respostas = this.nextElementSibling;
    if (respostas.style.display === "block") {
      respostas.style.display = "none";
    } else {
      respostas.style.display = "block";
    }
  });
}
