$("#faqs dd").hide();
$("#faqs dt").click(function () {
    $(this).next("#faqs dd").slideToggle(500);
    $(this).toggleClass("expanded");
});