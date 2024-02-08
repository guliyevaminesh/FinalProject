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

const yachttours = document.getElementById('yachttours')

function getTours(){
    axios.get('http://localhost:3000/tours')
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
        <button>Explore</button>
    </div>
        `
        yachttours.appendChild(tour)
        })
    })
}

getTours()

const searchtour = document.getElementById('searchtour')
const searchbutton = document.getElementById('searchbutton')

function seacrhproduct(){
    yachttours.innerHTML = ""

    axios.get('http://localhost:3000/tours')
    .then( res => {
        tours = res.data
        let searchtours = tours.filter( item => item.country.toLowerCase().startsWith(searchtour.value.toLowerCase()))
        searchtours.map( item => {
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
            <button>Explore</button>
        </div>
            `
            yachttours.appendChild(tour)
    })
})
}
searchbutton.addEventListener('click',seacrhproduct)

const triptypes = document.getElementById('triptypes')

