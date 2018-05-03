$(document).ready(function(){
    $("#email,#password").focus(function(){
      $("#email~.form__label .form__label__content").addClass("floatUp");
      $("#password~.form__label .form__label__content").addClass("floatUpP");
    });
    $("#email,#password").focusout(function(){
        if( $("#email").val() === "" && $("#password").val() === ""  ) {
            $("#email~.form__label .form__label__content").removeClass("floatUp");
            $("#password~.form__label .form__label__content").removeClass("floatUpP");
        }
    });
    $(".btn").focus(function(){
        $(".btn").addClass("animated pulse");
    });
    $(".btn").focusout(function(){
        $(".btn").removeClass("animated pulse");
    });
});