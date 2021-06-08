$("button").click(function() {
    let answer1 = $(".answer1").val();
    let answer2 = $(".answer2").val();
    $(".answer").append("<p>" + "you are" + answer1 + " years old, and you" + answer2 + "sleep in class" + "</p>");

});