$(document).ready(function() {
  var page_historia = 1;
  var page_portafolio = 1;
  if (!window.localStorage.key("theme")) {
    $(".theme ul li button").addClass("dark");
    $(".function_box ul li a").addClass("dark");
    darkTheme();
    localStorage.setItem("theme", $(".theme ul li button").attr("class"));
  } else {
    let theme = localStorage.getItem("theme");
    $(".theme ul li button").addClass(theme);
    $(".function_box ul li a").addClass(theme);
    if (theme == "dark") {
      darkTheme();
    } else {
      ligthTheme();
    }
  }

  $(".sel").hover(
    function() {
      $(".cosa")
        .not($(this).children()) //PRIMERA ANIMACION
        .addClass("blur");

      $(".centro").css("opacity", ".3");
      let that = $(this).children();

      that.css("width", $(window).width() / 2 + "px").css("z-index", "3");

      setTimeout(function() {
        if (
          Math.ceil(parseFloat(that.css("width"))) ==
          Math.ceil($(window).width() / 2)
        ) {
          that.css("height", "400%");

          that.children("button").fadeIn(); //SEGUNDA ANIMACION comprueba si la primera se completó
          that.children(".muestra_contenido").fadeIn();

          that
            .children(".muestra_contenido")
            .children(".bocado")
            .fadeIn();
        }
      }, 1200);
    },
    function() {
      let that = $(this).children();
      that.children(".muestra_contenido").fadeOut();
      that.css("height", "70%");
      that.css("width", "100%");
      that.children("button").fadeOut();

      //  console.log(that, that.parent(), that.parent().parent()); //AGRANDA TODO EL DIV

      that.parent().css("height", "auto");
      $("header").css("height", "20%");
      $("footer").css("height", "30%");

      that
        .parent()
        .parent()
        .css("height", "50%");
      $(".cosa")
        .not($(this).children()) //REGRESA AL ESTADO INICIAL
        .removeClass("blur");
      that.css("z-index", "0");
      $(".centro").css("opacity", "1");
      $(".contenido").fadeOut();
    }
  );

  $(".ver_mas").click(function() {
    //ANIMA AL CLICK

    let that = $(this).parent();

    $("header, footer").css("height", "0%");
    that.css("width", $(window).width());
    that.css("height", "100%");
    that.parent().css("height", "100%");
    that
      .parent() //AGRANDA TODO EL DIV HASTA SER DEL TAMAÑO DEL BODY
      .parent()
      .css("height", "100%");
    $(this).fadeOut();
    $(".bocado").fadeOut();
    $(".contenido").fadeIn();
  });

  $(".theme ul li button").click(function() {
    let that = $(this);

    if (that.hasClass("ligth")) {
      that.removeClass("ligth");
      $(".function_box ul li a").removeClass("ligth");
      that.addClass("dark");
      $(".function_box ul li a").addClass("dark");
      darkTheme();
      localStorage.setItem("theme", $(".theme ul li button").attr("class"));
    } else {
      that.addClass("ligth");
      $(".function_box ul li a").addClass("ligth");
      that.removeClass("dark");
      $(".function_box ul li a").removeClass("dark");
      ligthTheme();
      localStorage.setItem("theme", $(".theme ul li button").attr("class"));
    }
  });

  function darkTheme() {
    //TODO: colocar tema con css
    /*  $(".css-theme").attr("href", "css/theme/darktheme"); */

    $(".container-fluid").css(
      "background",
      "radial-gradient(ellipse at center,rgba(76, 76, 76, 1) 0%,rgba(89, 89, 89, 1) 0%,rgba(29, 29, 29, 1) 97%,rgba(28, 28, 28, 1) 99%,rgba(0, 0, 0, 1) 100%)"
    );
    $(".cosa")
      .css(
        "background",
        " radial-gradient(ellipse at center,rgba(73, 155, 234, 1) 0%,rgba(57, 77, 138, 1) 100%)"
      )
      .css("box-shadow", "4px 3px 18px 0px #272727");
    $(".centro").css("background", "rgba(0, 0, 0, 0.062)");
    $(".description").css("color", "#ece9e6");
    $(".tittle").css("color", "rgb(243, 241, 255)");
    $(".nombre")
      .css("color", "#00c6ff")
      .css("text-shadow", "2px 3px 20px  rgb(37, 37, 37)");
    $(".function_box").css("background", "rgba(255, 255, 255, 0.062)");
  }

  function ligthTheme() {
    //TODO: colocar tema con css
    /*  $(".css-theme").attr("href", "css/theme/ligthteme"); */
    $(".container-fluid").css(
      "background",
      "radial-gradient(ellipse at center, rgba(254,254,254,1) 0%, rgba(219,219,219,1) 96%, rgba(209,209,209,1) 100%)"
    );
    $(".cosa")
      .css("background", "linear-gradient(to right, #cb2d3e, #ef473a)")
      .css("box-shadow", "-4px 3px 18px 0px #ababab");
    $(".centro").css("background", "rgba(0, 0, 0, 0.03)");
    $(".description").css("color", "#3c3937");
    $(".tittle").css("color", "#4b5054");
    $(".nombre")
      .css("color", "#ff6800")
      .css("text-shadow", "2px 3px 20px #cacaca");
    $(".function_box").css("background", "#00000010");
  }

  $(".cv").click(() => {
    alert("descargar");
  });

  $(".historia .next").click(function() {
    let that = $(this);

    paginacion(5, "derecha", "historia", that);
  });

  $(".historia .prev").click(function() {
    let that = $(this);
    paginacion(5, "izquierda", "historia", that);
  });

  $(".portafolio .next").click(function() {
    let that = $(this);
    paginacion(3, "derecha", "portafolio", that);
  });

  $(".portafolio .prev").click(function() {
    let that = $(this);
    paginacion(3, "izquierda", "portafolio", that);
  });

  function paginacion(max, flecha, contexto, that) {
    let page;
    if (contexto == "historia") {
      page = page_historia;
    }
    if (contexto == "portafolio") {
      page = page_portafolio;
    }

    if (flecha == "derecha") {
     /*  console.log("anterior " + page); */

      if (page < max) {
        page++;
        if (page > 1) {
          that.siblings(".prev").css("opacity", "1");
        }
        that.css("opacity", "1");
        that
          .parent()
          .siblings(".page-" + (page - 1))
          .fadeOut(50, function() {
            that
              .parent()
              .siblings(".page-" + page)
              .fadeIn();

            if (page == max) {
              that.css("opacity", "0");
            }
            /* console.log("actual " + page); */
          });
      }
    }

    if (flecha == "izquierda") {
      if (page > 1) {
        page--;
        if (page < max) {
          that.siblings(".next").css("opacity", "1");
        }
        that.css("opacity", "1");
        that
          .parent()
          .siblings(".page-" + (page + 1))
          .fadeOut(50, function() {
            that
              .parent()
              .siblings(".page-" + page)
              .fadeIn();

            if (page == 1) {
              that.css("opacity", "0");
            }
          /*   console.log("actual " + page); */
          });
      }
    }
    if (contexto == "historia") {
      page_historia = page;
    }
    if (contexto == "portafolio") {
      page_portafolio = page;
    }
 /*    console.log("esto es : " + page_historia + " " + page_portafolio); */
  }

 

});
