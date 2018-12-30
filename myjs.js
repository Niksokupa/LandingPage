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

});