$(document).ready(function() {
  $(".sel").hover(
    function() {
      $(".cosa")
        .not($(this).children()) //PRIMERA ANIMACION
        .addClass("blur");

      $(".a").css("opacity", ".3");
      var that = $(this).children();

      that.css("width", $(window).width() / 2 + "px").css("z-index", "3");

      setTimeout(function() {
        if (
          Math.ceil(parseFloat(that.css("width"))) ==
          Math.ceil($(window).width() / 2)
        ) {
          that.css("height", "400%");
          if ($(window).width() <= 1024) {
          }
          that.children("button").fadeIn(); //SEGUNDA ANIMACION comprueba si la primera se completó
          that.children(".muestra_contenido").fadeIn();
          console.log(
            that
              .children(".muestra_contenido")
              .children()
              .children(".description")
          );

          that
            .children(".muestra_contenido")
            .children()
            .children(".description")
            .fadeIn();
          that
            .children("muestra_contenido")
            .children(".contenido")
            .fadeIn();
        }
      }, 1200);
    },
    function() {
      var that = $(this).children();
      that.children(".muestra_contenido").fadeOut();
      that.css("height", "70%");
      that.css("width", "100%");
      that.children("button").fadeOut();

      //  console.log(that, that.parent(), that.parent().parent()); //AGRANDA TODO EL DIVP

      that.parent().css("height", "auto");
      $(".vacio").css("height", "20%");
      that
        .parent()
        .parent()
        .css("height", "50%");
      $(".cosa")
        .not($(this).children()) //REGRESA AL ESTADO INICIAL
        .removeClass("blur");
      that.css("z-index", "0");
      $(".a").css("opacity", "1");
      $(".contenido").fadeOut();
    }
  );

  $(".ver_mas").click(function() {
    //ANIMA AL CLICK

    var that = $(this).parent();

    $(".vacio").css("height", "0%");
    that.css("width", $(window).width());
    that.css("height", "100%");
    that.parent().css("height", "100%");
    that
      .parent() //AGRANDA TODO EL DIV HASTA SER DEL TAMAÑO DEL BODY
      .parent()
      .css("height", "100%");
    $(this).fadeOut();
    $(".muestra_contenido .description").fadeOut();
    $(".contenido").fadeIn();
  });
});
