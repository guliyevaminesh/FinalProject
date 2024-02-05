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
  