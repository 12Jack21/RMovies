$(window).scroll(function () {
    if ($(".navbar").offset().top > $(window).height()-150) {
        $(".navbar-fixed-top").addClass("top-nav");

    } else {
        $(".navbar-fixed-top").removeClass("top-nav");
        // $(".navbar-fixed-top a").css("color","#000");
    }
    for (var i = 1; i <= 4; i++) {
        if (($(".navbar").offset().top + $(window).height()) > $("#title" + i).offset().top + 50) {
            $("#title" + i).addClass("move3");
        }
        if (($(".navbar").offset().top + $(window).height()) > $("#content" + i + "_1").offset().top +
            50) {
            $("#content" + i + "_1").addClass("move3");
        }
        if (($(".navbar").offset().top + $(window).height()) > $("#content" + i + "_2").offset().top +
            50) {
            var ii = i;
            if ($("#content" + i + "_1 div").css("margin-top") == "0px") {
                $("#content" + i + "_2").addClass("move3");
            } else {
                setTimeout(() => {
                    myscroll(ii);
                }, 600);
            }
        }
        if($('#content'+i+'_2').offset().top-$(".navbar").offset().top>0){
            $('#bg'+i).css({
                height:$('#content'+i+'_2').offset().top-$(".navbar").offset().top+'px'
            })
        }
    }
    if($(".navbar").offset().top<$(window).height()){
        $('#changebg').css({
            'opacity':(0.8*$(".navbar").offset().top/$(window).height())
        })
    }

    console.log($(".navbar").offset().top);
    console.log($('#content1_2').offset().top-$(".navbar").offset().top+"asdasdsa");
})

function myscroll(i) {
    $("#content" + i + "_2").addClass("move3");
}

$('.turnToContent').click(function () {
    $('html, body').animate({
        // scrollTop: $($.attr(this, 'href')).offset().top
        scrollTop: ($($.attr(this, 'href')).offset().top) - 55
    }, 500);
    return false;
});


//alert($(".galary img").height());
$(".galary div").css("top","-"+(($(".galary img").height()/2)-10)+"px");
$(".galary div").css("height",$(".galary img").height()+"px");

console.log(document.documentElement.scrollTop);

$('.newbg img').css({
    'height':$(window).height()+'px'
})
$('.newbg').css({
    'height':$(window).height()+'px'
})

setTimeout(() => {
    $('.newbg').css({
        opacity:1
    })
    $('.bg').css({
       'background': 'transparent'
    })
}, 1500);

console.log($('#content1_1').height()+"asdasdsa");