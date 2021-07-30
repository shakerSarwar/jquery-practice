document.write("helloooooo")

$(document).ready(function() {
    $("div").click(function() {
        console.log("Div is Clicked")
    });
});
/*
$(document).ready(function() {
    $("id,class,tag etc").click(function() {

    });
});



/*First Element 
$(document).ready(function() {
    $("id or class:first").click(function() {
        console.log('')
    });
});

//even = 2,4,6,8,10,-------
//odd= 1,3,5,7,9,11--------
/*
$(document).ready(function() {
    $("id or class:odd/even").click(function() {
        console.log('')
    });
});*/

/* Get Attribute */
$(document).ready(function() {
    var titlebar = $("div").attr("title");
    console.log(titlebar);
});
/* Set Attribute */
$(document).ready(function() {
    $("button").attr("class", "btn-primary")
});

/* Set Multiple  Attribute */
$(document).ready(function() {
    $("h1").attr({
        "class": "btn-danger",
        "name": "Sourav"
    });
});

$(document).ready(function() {
    $(".btn-danger").css("color", "orange");
})

/* Remove Attribute */
$(document).ready(function() {
    $("p").click(function() {
        $("p").removeAttr("class");
    });
});

$(document).ready(function() {
    $("button").click(function() {
        var Val = $("#simpleID").val();
        console.log(Val);
        //  document.write(Val);
    });
});


/* Events-------------------------------------- */

//propagation

$(document).ready(function() {
    $("#red").click(function() {
        console.log("red button clicked");
    });

    $("#yellow").click(function() {
        console.log("yellow button clicked");
        event.stopPropagation();
    });

});

//prevent default
$(document).ready(function() {
    $("#SubmitButton").click(function() {
        event.preventDefault();
    });
});

//mouse double click
$(document).ready(function() {
    $("#red").dblclick(function() {
        console.log("double clicked");
    });
});

$(document).ready(function() {
    $("h3").mouseenter(function() {
        console.log("Entered Mouse");
        $(this).css("color", "blue");
    });
});


$(document).ready(function() {
    $("h3").mouseleave(function() {
        console.log("Leaved Mouse");
        $(this).css("color", "aqua");
    });
});

$(document).ready(function() {
    $("h2").hover(function() {
        console.log("Entered Mouse");
        $(this).css("color", "#339966");
    });
});

$(document).ready(function() {
    $("h4").mousedown(function() {
        console.log("down Mouse");
        $(this).css("color", "green");
    });
});

$(document).ready(function() {
    $("h5").mouseup(function() {
        console.log("Mouse Up");
        $(this).css("color", "brown");
    });
});


$(document).ready(function() {
    $("#keydown").keydown(function() {
        console.log("keydown");
    });
});


$(document).ready(function() {
    $("#keyup").keyup(function() {
        console.log("keyup");
    });
});


$(document).ready(function() {
    $("#keyup").keypress(function() {
        console.log("key pressed");
    });
});

$(document).ready(function() {
    $("#form").submit(function() {
        alert("Form submitted");
    });
});


/* Html And Css */

$(document).ready(function() {
    $("#color").click(function() {
        $(this).css({ "color": "white", "font-size": "40px" });
    });
});


$(document).ready(function() {
    $("#addClassbtn").click(function() {
        $("#element").addClass("blue");
    });

    $("#removeClassbtn").click(function() {
        $("#element").removeClass("blue")
    });

    $("#toggleClassbtn").click(function() {
        $("#element").toggleClass("blue")
    });
});

// Adding Elements Using Append, Prepend, After and Before
$(document).ready(function() {
    $("#appendButton").click(function() {
        $("#epicDiv").append("<p><b>Append</b></p>");
    });

    $("#prependButton").click(function() {
        $("#epicDiv").prepend("<p><b>Prepend</b></p>");
    });

    $("#afterButton").click(function() {
        $("#epicDiv").after("<p><b>After</b></p>");
    });

    $("#beforedButton").click(function() {
        $("#epicDiv").before("<p><b>Before</b></p>");
    });
});

$(document).ready(function() {

    $("#removeButton").click(function() {
        $("div").remove();
    });

    $("#emptyButton").click(function() {
        $("div").empty();
    });
});

//Traversing---------------------------------
/*
$(document).ready(function() {
    $(".tra").eq(3).addClass("red");
});

$(document).ready(function() {
    $("#parent-tra").children().addClass("red");
});


$(document).ready(function() {
    $(".child").parent().addClass("blue");
});
*/

$(document).ready(function() {
    $("#sib").siblings().addClass("blue");
});


$(document).ready(function() {
    //select everything
    //$(".food").addClass("red");

    //select fisrt item
    //$(".food").first().addClass("color").

    //select last item
    //$(".food").last().addClass("color");

    //select by index
    //$(".food").eq(2).addClass("color");

    //select by filter based on condition
    $(".food").filter(".filter").addClass("color");


});