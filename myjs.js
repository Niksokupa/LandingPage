$(document).ready(function () {

    $(function () {
        $("#loginform").hide();
        $(".center").hide().delay(800).fadeIn(3000);
    });



    $("#login").click(function () {
        $('#ciudades').fadeToggle(1000, function () {
            $('#ciudades').remove();
        });
        $('#loginform').delay(1200).fadeToggle(1000);

    });

    $("#registro").click(function () {
        $('#loginform').fadeToggle(1000, function () {
            $('#loginform').remove();
            $(".center").animate({
                height: 550,
            }, 500);
        });
        $('#registroform').delay(1200).fadeToggle(1000);

    });

});