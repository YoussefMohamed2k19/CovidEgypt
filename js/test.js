$(document).ready(function(){
    
    $('#firstCase').hide();
    $('#secondCase').hide();
    $('#thirdCase').hide();
    $('#buttonn').click(results);
    
});


function results() {
    event.preventDefault();
    var score = 0;
    $(".input-hidden:checked").each(function(){
        score+=parseInt($(this).val(),10);
    }); 
    document.getElementById("section-heading2").style.marginBottom = "50px";

    if (score > 0 && score <= 20) {
        $('#form').hide();
        $('#firstCase').show();
        $('html, body').animate({
            scrollTop: $(".what-we-do").offset().top
        }, 2000);
    }
    else if (score >= 20 && score <= 40) {
        $('#form').hide();
        $('#secondCase').show();
        $('html, body').animate({
            scrollTop: $(".what-we-do").offset().top
        }, 2000);
    }
    else if (score >= 40 && score <= 60) {
        $('#form').hide();
        $('#thirdCase').show();
        $('html, body').animate({
            scrollTop: $(".what-we-do").offset().top
        }, 2000);
    }
}
