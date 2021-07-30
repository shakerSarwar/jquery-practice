//Show ,Hide,Toggle-Fast,Slow,Custom
$(document).ready(function() {
    $("#hideButton").click(function() {
        $("div").hide();
    });
});

$(document).ready(function() {
    $("#showButton").click(function() {
        $("div").show();
    });
});

$(document).ready(function() {
    $("#toggleButton").click(function() {
        $("div").toggle();
    });

    $("#slowButton").click(function() {
        $("div").toggle("slow");
    });

    $("#fastButton").click(function() {
        $("div").toggle("fast");
    });

    $("#CustomSpeedButton").click(function() {
        var time = parseInt($("#Time").val());
        $("div").toggle(time);
    });
});

//Fadein,Fadeout ,Fadetoggle ,Fadeto
$(document).ready(function() {

    $("#FadeInButton").click(function() {
        $("#Fade").fadeIn();
    });

    $("#FadeOutButton").click(function() {
        $("#Fade").fadeOut();
    });

    $("#FadeToggleButton").click(function() {
        $("#Fade").fadeToggle();
    });

    $("#FadeToButton").click(function() {
        $("#Fade").fadeTo("slow", 0.5);
    });

});

//slideDown , SlideUp, SlideToggle

$(document).ready(function() {
    $("#flip").click(function() {
        $("#panel").slideDown();
    });

    $("#flip2").click(function() {
        $("#panel").slideUp();
    });

    $("#flip3").click(function() {
        $("#panel").slideToggle();
    });
});

//Animate
$(document).ready(function() {
    $("#animateButton").click(function() {
        $("#DarthVader").animate({
            left: '500px',
            height: '200px',
            width: '200px'
        }, 4000);
    });

    $("#stop").click(function() {
        $("#DarthVader").stop();
    });

});


/* AJAX */
$(document).ready(function() {
    $("#EpicButton").click(function() {
        $("#AJAXDiv").load("demo.txt");
    });
});

/* JSON */
$(document).ready(function() {
    $("#JSONButton").click(function() {
        $.getJSON("favourites.json", function(result) {
            console.log(result);
        });
    });
});

/*data */
$(document).ready(function() {
    $("#dataButton").click(function() {
        $.get("custom.php", function(data, status) {
            console.log(data);
            console.log(status);

            $("#divi").html(data);
        });
    });
});

/* POST */
$(document).ready(function() {
    $("#PostButton").click(function() {
        $.post("custom.php", {
            "game": "Half-Life",
            "food": "Pizza"
        }, function(data, status) {

        });
    });
});