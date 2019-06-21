$(document).ready(function() {
  $(".sel").hover(
    function() {
      $(".cosa")
        .not($(this).children()) //PRIMERA ANIMACION
        .addClass("blur");
      var that = $(this).children();
      that.css("width", $(window).width() / 2);

      setTimeout(function() {
        if (parseFloat(that.css("width")) == $(window).width() / 2) {
          that.css("height", "400%").css("z-index", "1");
          that.children("button").fadeIn(); //SEGUNDA ANIMACION comprueba si la primera se completó
        }
      }, 1200);
    },
    function() {
      var that = $(this).children();
      that.css("height", "70%");
      that.css("width", "100%").css("z-index", "0");
      that.children("button").fadeOut();
      
      console.log(that, that.parent(), that.parent().parent()); //AGRANDA TODO EL DIVP
      
      that.parent().css("height", "auto");
      $(".vacio").css("height", "20%");
      that.parent().parent().css("height", "50%");
      $(".cosa")
        .not($(this).children()) //REGRESA AL ESTADO INICIAL
        .removeClass("blur");
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
  });
});
