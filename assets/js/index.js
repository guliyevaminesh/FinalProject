const dashboardButton = document.querySelector('.dashboard');

dashboardButton.addEventListener('click', function() {
    window.location.href = './dashboard.html';
});

document.addEventListener("DOMContentLoaded", function() {
    var luxuryachts = document.querySelectorAll(".luxuryachts");
    
    luxuryachts.forEach(function(item, index) {
      item.style.opacity = 0;
      item.style.transform = "translateY(50px)"; // Başlangıçta aşağıdan gelsin
  
      setTimeout(function() {
        item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }, 500 * index); // Her bir öğe için gecikme
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var unveilingtext = document.querySelector(".unveilingtext");
    setTimeout(function() {
      unveilingtext.classList.add("show");
    }, 800); // 500 milisaniye gecikme
  });

  document.addEventListener("DOMContentLoaded", function() {
    var collaborationtext = document.querySelector(".collaborationtext");
    setTimeout(function() {
      collaborationtext.classList.add("show");
    }, 800); // 500 milisaniye gecikme
  });

  const experiencesform = document.getElementById('experiencesform')
const fullname = document.getElementById('fullname')
const emailaddress = document.getElementById('emailaddress')
const phonenumber = document.getElementById('phonenumber')
const yourdescription = document.getElementById('yourdescription')

experiencesform.addEventListener('submit',function(e){
    e.preventDefault();
    axios.post('https://65680f2a9927836bd97406ef.mockapi.io/sailuxe/experiencesform',{
    fullname: fullname.value,
    emailaddress: emailaddress.value,
    phonenumber: phonenumber.value,
    yourdescription: yourdescription.value
})
experiencesform.reset()
})

  document.addEventListener('DOMContentLoaded', function () {
    // Sayfa yüklendiğinde tetikle
    setTimeout(function () {
      document.getElementById('bespokeHeader').classList.add('show');
      document.getElementById('experiencesform').classList.add('show');
      document.querySelector('.adventurecontact').classList.add('show');
    }, 1000); // Belirli bir süre (örneğin, 1000ms = 1s) sonra animasyonu başlat
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