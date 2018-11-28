var x = $("#scrollx").offset().left;

$("#scrollToLeft").click(function () {
    console.log("asd" + $("#scrollx").offset().left);
    $('#scrollx2').animate({
        scrollLeft: x - $("#scrollx").offset().left - 150
    }, 300);
    return false;
});

$("#scrollToRight").click(function () {
    console.log($("#scrollx").offset().left);
    $('#scrollx2').animate({
        scrollLeft: x - $("#scrollx").offset().left + 150
    }, 300);
    return false;
});

var tmpX = $("#scrollx").scrollLeft;
jQuery(function () {
    $("#scrollx")
        .bind('mousewheel', function (event, delta) {

            console.log($("#scrollx").offset().left);
            // if (delta < 0&&(((x - $("#scrollx").offset().left)%150<30)||Math.abs(($("#scrollx").offset().left+309.890625)%150)<30)) {
            if (delta < 0) {
                console.log("right");
                $('#scrollx2').scrollLeft(x - $("#scrollx").offset().left + 100);
                // } else if (delta > 0&&(((x - $("#scrollx").offset().left)%150<30)||Math.abs(($("#scrollx").offset().left+309.890625)%150)<30)) {
            } else if (delta > 0) {
                console.log("left");
                $('#scrollx2').scrollLeft(x - $("#scrollx").offset().left - 100);
            }
            return false;
        });
});




console.log(document.documentElement.scrollTop);

$(".vertical-scroll").css("height", window.innerHeight + "px");
$(".commentDiv").css("height", window.innerHeight + "px");
$(".bg").css("height", window.innerHeight + "px");


var mywidths = new Array("0", "33%", "63%", "90%", "63%", "33%", "0");
var fullheight = window.innerHeight;
var myheights = new Array(0,0.11,0.22,0.33,0.22,0.11,0);
jQuery(function(){
    for(var i = 1 ; i<= 5 ; i++){
        $("#img" + i + " img").css("height", myheights[i]*fullheight+"px");
    }
});

$("#img1").click(function () {

});

$("div").delegate("#img2", "click", function () {
    for (var i = 1; i <= 5; i++) {
        $("#img" + i + " img").css("width", mywidths[i + 1]);
        $("#img" + i + " img").css("height", myheights[i+1]*fullheight+"px");
    }

    for (var i = 5; i >= 1; i--) {
        $("#img" + i).attr("id", "img" + (i + 1));
    }

    var imgsrc = $("#img6 img").attr("src");
    $(".vertical-scroll ul").prepend('<div id="img1" style = "height:0"><a href="javascript:void(0)"><img src="' + imgsrc + '" alt="..." style="width: 0px;height:0px"></a></div>');
    $("#img1").css("height", "auto");
    $("#img1 img").css("width", "33%");
    $("#img1 img").css("height", 0.11*fullheight+"px");

    setTimeout(() => {
        $("#img6 img").remove();
    }, 800);
});

$("#img3").click(function () {

});

$("div").delegate("#img4", "click", function () {
    for (var i = 1; i <= 5; i++) {
        $("#img" + i + " img").css("width", mywidths[i - 1]);
        $("#img" + i + " img").css("height",myheights[i-1]*fullheight+"px");
    }

    for (var i = 1; i <=5 ; i++) {
        $("#img" + i).attr("id", "img" + (i - 1));
    }

    var imgsrc = $("#img0 img").attr("src");
    $(".vertical-scroll ul").append('<div id="img5"><a href="javascript:void(0)"><img src="' + imgsrc + '" alt="..." style="width: 0%;height:0"></a></div>');
    $("#img5 img").css("width", "33%");
    $("#img5 img").css("height",0.11*fullheight+"px");

    setTimeout(() => {
        $("#img0 img").remove();
    }, 800);
});

function drawDown() {
    var c = document.getElementById("downCanvas"),
        cxt = c.getContext("2d");
    cxt.beginPath();
    cxt.moveTo(5, 20);
    cxt.lineTo(25, 45);
    cxt.lineTo(45, 20);
    cxt.lineWidth = 5;
    cxt.strokeStyle = "gray";
    cxt.lineCap = 'round';
    cxt.lineJoin = "round";
    cxt.stroke();
    cxt.moveTo(5, 5);
    cxt.lineTo(25, 30);
    cxt.lineTo(45, 5);
    cxt.lineWidth = 5;
    cxt.strokeStyle = "gray";
    cxt.lineCap = 'round';
    cxt.lineJoin = "round";
    cxt.stroke();
}
drawDown();

$('.turnToContent').click(function () {
    // $('html, body').animate({
    //     // scrollTop: $($.attr(this, 'href')).offset().top
    //     scrollTop: ($($.attr(this, 'href')).offset().top)
    // }, 500);
    $.scrollify.next();
    console.log($.scrollify.current());
    return false;
});


