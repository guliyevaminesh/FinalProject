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
    event.preventDefault(); // Sayfanın yenilenmesini önlemek için formun varsayılan davranışını durduruyoruz

    // Kullanıcı adı ve şifreyi formdan alalım
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // POST isteği için gerekli bilgileri hazırlayalım
    var data = {
        username: username,
        email: email,
        password: password
    };

    // API'ye giriş bilgilerini kontrol etmek için GET isteği yapalım
    axios.get('https://65680f2a9927836bd97406ef.mockapi.io/sailuxe/dashboard')
    .then(function(response) {
        // API'den gelen kullanıcı bilgileri
        var userData = response.data;

        // Kullanıcı adı ve şifreyi kontrol et
        var matchedUser = userData.find(user => user.regiterusername === username && user.registeremail === email && user.registerpassword === password);

        if (matchedUser) {
            // Kullanıcı doğrulandı, başarılı giriş
            console.log('Giriş başarılı:', matchedUser);
            // Kullanıcıyı index.html sayfasına yönlendir
            window.location.href = "index.html";
        } else {
            // Kullanıcı doğrulanamadı, hatalı giriş
            console.error('Kullanıcı adı veya şifre hatalı!');
            // Kullanıcıya bir hata mesajı göster
            alert("Kullanıcı adı veya şifre hatalı!");
        }
    })
    .catch(function(error) {
        // API'ye erişim hatası
        console.error('API\'ye erişim hatası:', error);
        // Kullanıcıya bir hata mesajı göster
        alert("API'ye erişim hatası!");
    });
});
