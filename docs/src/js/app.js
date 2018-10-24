$(document).on("scroll", function () {
  if
  ($(document).scrollTop() > 86) {
    $("#banner").addClass("shrink");
  }
  else {
    $("#banner").removeClass("shrink");
  }
});

/*Para llamar a cada sección del portafolio*/
function aHome() {
  location.href = "#home";
}
function aProyectos() {
  location.href = "#contenedorProyectos";
}
function aMi() {
  location.href = "#aboutMe";
}
function marketPlace() {
  location.href = "#malaMadre";
}
function redSocial() {
  location.href = "#celiBook";
}
function registroPersonas() {
  location.href = "#ifBlanco";
}
function footer() {
  location.href = "#contacto";
}

/* Demo purposes only */
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
