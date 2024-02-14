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

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const showRegisterForm = document.getElementById('showRegisterForm');
const showLoginForm = document.getElementById('showLoginForm');

showRegisterForm.addEventListener('click', function() {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

const regiterusername = document.getElementById('regiterusername')
const registeremail = document.getElementById('registeremail')
const registerpassword = document.getElementById('registerpassword')

registerForm.addEventListener('submit',function(e){
    e.preventDefault();
    axios.post('https://65680f2a9927836bd97406ef.mockapi.io/sailuxe/dashboard',{
        regiterusername: regiterusername.value,
        registeremail: registeremail.value,
        registerpassword: registerpassword.value
})
registerForm.reset()
})


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

   
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    var data = {
        username: username,
        email: email,
        password: password
    };

   
    axios.get('https://65680f2a9927836bd97406ef.mockapi.io/sailuxe/dashboard')
    .then(function(response) {
        var userData = response.data;
        var matchedUser = userData.find(user => user.regiterusername === username && user.registeremail === email && user.registerpassword === password);

        if (matchedUser) {
            console.log('Giriş başarılı:', matchedUser);
            window.location.href = "index.html";
        } else {
            console.error('Kullanıcı adı veya şifre hatalı!');
            alert("Kullanıcı adı veya şifre hatalı!");
        }
    })
    .catch(function(error) {
        console.error('API\'ye erişim hatası:', error);
        alert("API'ye erişim hatası!");
    });
});
