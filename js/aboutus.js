
$(document).ready(function () {
    $(".discoversailuxetext h2, .discoversailuxetext p").css({
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease"
    });


    $(window).on("scroll", function () {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        var elementPos = $("#discoversailuxe").offset().top;

        if (scrollPos > elementPos - windowHeight + 100) {
            $(".discoversailuxetext h2, .discoversailuxetext p").each(function (index) {
                var delay = index * 200;
                $(this).delay(delay).queue(function () {
                    $(this).css({
                        opacity: 1,
                        transform: "translateY(0)"
                    }).dequeue();
                });
            });
        }
    });
});

$(document).ready(function () {
    $(window).on("scroll", function () {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        var elementPos = $("#sailuxeadvantages").offset().top;

        if (scrollPos > elementPos - windowHeight + 100) {
            $("#sailuxeadvantages").addClass("show");
            $(".advantages, .expertise").each(function (index) {
                var delay = index * 200; 
                $(this).delay(delay).queue(function () {
                    $(this).addClass("show").dequeue();
                });
            });
        }
    });
});