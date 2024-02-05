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


document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-answer');
    const answerDivs = document.querySelectorAll('.answer');
  
    toggleButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        const answerDiv = answerDivs[index];
  
        // Toggle (aç/kapa) işlemi
        if (answerDiv.style.display === 'none' || answerDiv.style.display === '') {
          answerDiv.style.display = 'block';
          button.textContent = 'x';
        } else {
          answerDiv.style.display = 'none';
          button.textContent = '+';
        }
      });
    });
  });