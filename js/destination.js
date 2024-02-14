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

document.getElementById("turkey").addEventListener("click", function() {
    locationTurkey();
  });
  
  document.getElementById("switzerland").addEventListener("click", function() {
    locationSwitzerland();
  });
  
  document.getElementById("japan").addEventListener("click", function() {
    locationJapan();
  });
  
  document.getElementById("greece").addEventListener("click", function() {
    locationGreece();
  });

  document.getElementById("america").addEventListener("click", function() {
    locationAmerica();
  });
  
  document.getElementById("dubai").addEventListener("click", function() {
    locationDubai();
  });
  
  document.getElementById("france").addEventListener("click", function() {
    locationFrance();
  });
  
  document.getElementById("germany").addEventListener("click", function() {
    locationGermany();
  });