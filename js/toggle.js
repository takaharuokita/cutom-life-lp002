$(document).ready(function() {
    $('#slider1').owlCarousel({
        items: 5, //ブラウザの幅が1199px 以上の時 6
        itemsDesktop: [1199, 5], // 1199px から 600px　まで 5つ
        itemsDesktopSmall: false, // betweem 900px and 601px
        itemsTablet: [600, 4], //600px から 479px　まで　4つ
        itemsMobile: [479, 2], // 479px　以下は 2つ
        autoPlay: true,
        stopOnHover: true,
        navigation: true
    });

    $('#slider2').owlCarousel({
        items: 5, //ブラウザの幅が1199px 以上の時 6
        itemsDesktop: [1199, 5], // 1199px から 600px　まで 5つ
        itemsDesktopSmall: false, // betweem 900px and 601px
        itemsTablet: [600, 4], //600px から 479px　まで　4つ
        itemsMobile: [479, 2], // 479px　以下は 2つ
        autoPlay: true,
        stopOnHover: true,
        navigation: true
    });

    $('#slider3').owlCarousel({
        items: 5, //ブラウザの幅が1199px 以上の時 6
        itemsDesktop: [1199, 5], // 1199px から 600px　まで 5つ
        itemsDesktopSmall: false, // betweem 900px and 601px
        itemsTablet: [600, 4], //600px から 479px　まで　4つ
        itemsMobile: [479, 2], // 479px　以下は 2つ
        autoPlay: true,
        stopOnHover: true,
        navigation: true
    });

});

// question001
$(document).ready(function() {
    $(".question001-title").on("click", function() {
        if ($(this).hasClass("act")) {
            $(this).removeClass("act");
            $("#question001 .infoArea").slideUp(200);
        } else {
            $(this).addClass("act");
            $("#question001 .infoArea").slideDown(450);
        }
    });
});

// question002
$(document).ready(function() {
    $(".question002-title").on("click", function() {
        if ($(this).hasClass("act")) {
            $(this).removeClass("act");
            $("#question002 .infoArea").slideUp(200);
        } else {
            $(this).addClass("act");
            $("#question002 .infoArea").slideDown(450);
        }
    });
});

// question003
$(document).ready(function() {
    $(".question003-title").on("click", function() {
        if ($(this).hasClass("act")) {
            $(this).removeClass("act");
            $("#question003 .infoArea").slideUp(200);
        } else {
            $(this).addClass("act");
            $("#question003 .infoArea").slideDown(450);
        }
    });
});
// question004
$(document).ready(function() {
    $(".question004-title").on("click", function() {
        if ($(this).hasClass("act")) {
            $(this).removeClass("act");
            $("#question004 .infoArea").slideUp(200);
        } else {
            $(this).addClass("act");
            $("#question004 .infoArea").slideDown(450);
        }
    });
});

// Question Footer
$(document).ready(function() {
    $(".infoTtl").on("click", function() {
        if ($(this).hasClass("act")) {
            $(this).removeClass("act");
            $("#lpFooter .infoArea").slideUp(200);
        } else {
            $(this).addClass("act");
            $("#lpFooter .infoArea").slideDown(450);
        }
    });
});