$('p.a').click(function () {
    $('p.b').toggle('slow');
    $('p.c').toggle('slow');
});

$('.b').click(function () {
    $('body').css("background-color", "#0099a4");

})
$('.c').click(function () {
    $('body').css("background-color", "#00ffa8");

})