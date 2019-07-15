//오른쪽 이동
$(document).ready(function () {
    $("#right").click(function () {
        $("div").animate({
            left: '+=150px'
        });
    });
});
//왼쪽이동
$(document).ready(function () {
    $("#left").click(function () {
        $("div").animate({
            left: '-=150px'
        });
    });
});


//방향 키보드입력시 이동
$("body").keydown(function (e) {
    if (e.keyCode == 37) { // left
        $("div").animate({
            left: "-=100"
        });
    } else if (e.keyCode == 39) { // right
        $("div").animate({
            left: "+=100"
        });



    }


});
//탱글탱글
$(document).ready(function () {
    $("#tangle").click(function () {
        var div = $("div");
        div.animate({
            height: '300px',
            opacity: '0.4'
        }, "fast");
        div.animate({
            width: '300px',
            opacity: '0.8'
        }, "fast");
        div.animate({
            height: '100px',
            opacity: '0.4'
        }, "fast");
        div.animate({
            width: '100px',
            opacity: '0.8'
        }, "fast");

    });
});
//화면비율 100퍼센트
$(document).ready(function () {
    $("#full").click(function () {
        var div = $("div");
        div.animate({
            height: '100%',
            width: '100%',
            opacity: '0.4'
        }, "slow");


    });
});
//최소화
$(document).ready(function () {
    $("#min").click(function () {
        var div = $("div");
        div.animate({
            height: '1%',
            width: '1%',
            opacity: '0.4'
        }, "slow");


    });
});
