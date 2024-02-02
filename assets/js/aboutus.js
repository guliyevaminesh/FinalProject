


$(document).ready(function () {
    // Başlangıçta tüm başlıkları ve paragrafları gizle
    $(".discoversailuxetext h2, .discoversailuxetext p").css({
        opacity: 0,
        transform: "translateY(20px)",
        transition: "opacity 0.8s ease, transform 0.8s ease"
    });

    // Trigger animation when the section comes into view
    $(window).on("scroll", function () {
        var windowHeight = $(window).height();
        var scrollPos = $(window).scrollTop();
        var elementPos = $("#discoversailuxe").offset().top;

        if (scrollPos > elementPos - windowHeight + 100) {
            // Sırasıyla her başlık ve paragrafı göster
            $(".discoversailuxetext h2, .discoversailuxetext p").each(function (index) {
                var delay = index * 200; // Her öğe için bir gecikme ekleyin (ms cinsinden)
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
                var delay = index * 200; // Her öğe için bir gecikme ekleyin (ms cinsinden)
                $(this).delay(delay).queue(function () {
                    $(this).addClass("show").dequeue();
                });
            });
        }
    });
});