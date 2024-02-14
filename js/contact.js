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

const contactform = document.getElementById('contactform')
const fullname = document.getElementById('fullname')
const emailaddress = document.getElementById('emailaddress')
const phonenumber = document.getElementById('phonenumber')
const yourdescription = document.getElementById('yourdescription')

contactform.addEventListener('submit',function(e){
    e.preventDefault();
    axios.post('https://65680f2a9927836bd97406ef.mockapi.io/sailuxe/experiencesform',{
    fullname: fullname.value,
    emailaddress: emailaddress.value,
    phonenumber: phonenumber.value,
    yourdescription: yourdescription.value
})
contactform.reset()
})