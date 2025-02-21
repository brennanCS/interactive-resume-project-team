$(".resume-part h2").click(function(){
    if($(this).hasClass("active")){
        $(this.parent().children("resume-item").hide("slow"));
    }
    else{
        $(this).parent().children(".resume-item").show("slow");
        $(this).parent().children(".resume-item").addClass("active");
    }

});