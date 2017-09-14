$(document).ready(function() {
    var userHeight = parseInt(prompt("What is your height in inches? \n *be honest"));

    $('#opener').fadeOut(1000);
    $('ul').fadeIn(1500);

    if (userHeight <= 64) {
        $('#shortPanel').fadeIn(3000);
        $('.short').css("text-decoration", "underline");
    } else if (userHeight >= 77) {
        $('#tallPanel').fadeIn(3000);
    } else {
        $('#normalPanel').fadeIn(3000);
    }


});
