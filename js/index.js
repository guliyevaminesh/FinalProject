
document.addEventListener("DOMContentLoaded", function() {
    var luxuryachts = document.querySelectorAll(".luxuryachts");
    
    luxuryachts.forEach(function(item, index) {
      item.style.opacity = 0;
      item.style.transform = "translateY(50px)";
  
      setTimeout(function() {
        item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        item.style.opacity = 1;
        item.style.transform = "translateY(0)";
      }, 500 * index); 
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var exquisitetext = document.querySelector(".exquisitetext");
    exquisitetext.classList.add("show");
});

  document.addEventListener("DOMContentLoaded", function() {
    var splendortext = document.querySelector(".splendortext");
    splendortext.classList.add("show");
});

  document.addEventListener("DOMContentLoaded", function() {
    var unveilingtext = document.querySelector(".unveilingtext");
    setTimeout(function() {
      unveilingtext.classList.add("show");
    }, 800); 
  });

  document.addEventListener("DOMContentLoaded", function() {
    var collaborationtext = document.querySelector(".collaborationtext");
    setTimeout(function() {
      collaborationtext.classList.add("show");
    }, 800); 
  });
  document.addEventListener("DOMContentLoaded", function() {
    var sailuxesailstext = document.querySelector(".sailuxesailstext");
    setTimeout(function() {
      sailuxesailstext.classList.add("show");
    }, 800); 
  });

  function showTours(location) {
    window.location.href = `view.html?location=${location}`;
}


  
  const exquisitetour = document.getElementById('exquisitetour')
  
  function getTours(){
    exquisitetour.innerHTML = "";
    let limit = 3;
    axios.get(`http://localhost:3000/tours?_limit=${limit}`)
    .then(res => {
        tours = res.data
        tours.map( item => {
        let tour = document.createElement("div")
        tour.className = "tourPacket col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
        tour.innerHTML = `
        <img src=${item.thumbnailUrl} alt="">
        <div class="tourstext">
        <p>${item.tripcode}</p>
        <h5>${item.country}</h5>
        <div class="times">
            <div class="time">
            <i class="fa-regular fa-clock fa-sm" style="color: #000000;"></i>
            <p>${item.tripduration}</p>
            </div>
  
            <div class="time">
            <i class="fa-solid fa-location-dot fa-sm" style="color: #000000;"></i>
            <p>${item.locations}</p>
            </div>
  
            <div class="time">
            <i class="fa-solid fa-people-group fa-sm" style="color: #000000;"></i>
            <p>${item.groupsize}</p>
            </div>
        </div>
        <h5>${item.price}</h5>
        <a href="./explore.html"><button onclick="gotoExplore(${item.id})">Explore</button></a>
        
    </div>
        `
        exquisitetour.appendChild(tour)
        })
    })
  }
  getTours();
  
  function gotoExplore(id){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
     exploretours.push(tours.find(item => item.id == id))
     const maxexploreTours = 1;
     if(exploretours.length > maxexploreTours ) {
        exploretours.shift();
     }
    localStorage.setItem("exploretours",JSON.stringify(exploretours))
  }

  const sailuxesailstour = document.getElementById('sailuxesailstour');
  function getsailTours(){
    sailuxesailstour.innerHTML = "";

    axios.get('http://localhost:3000/tours')
    .then(res => {
        let tours = res.data;
        let filteredTours = tours.filter(item => {
            return item.sales !== "$0" && item.offer !== "%0";
        });
        filteredTours.map(item => {
            let tour = document.createElement("div");
            tour.className = "tourPacket col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4";
            tour.innerHTML = `
                <img src=${item.thumbnailUrl} alt="">
                <div class="tourstext">
                    <p>${item.tripcode}</p>
                    <h5>${item.country}</h5>
                    <div class="times">
                        <div class="time">
                            <i class="fa-regular fa-clock fa-sm" style="color: #000000;"></i>
                            <p>${item.tripduration}</p>
                        </div>

                        <div class="time">
                            <i class="fa-solid fa-location-dot fa-sm" style="color: #000000;"></i>
                            <p>${item.locations}</p>
                        </div>

                        <div class="time">
                            <i class="fa-solid fa-people-group fa-sm" style="color: #000000;"></i>
                            <p>${item.groupsize}</p>
                        </div>
                    </div>
                    <h5>${item.offer} Off ${item.sales}</h5>
                    <button onclick="gotoExplore(${item.id})">Explore</button>
                </div>
            `;
            sailuxesailstour.appendChild(tour);
        });
    });
}
getsailTours();


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

    setTimeout(function () {
      document.getElementById('bespokeHeader').classList.add('show');
      document.getElementById('experiencesform').classList.add('show');
      document.querySelector('.adventurecontact').classList.add('show');
    }, 1000); 
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



