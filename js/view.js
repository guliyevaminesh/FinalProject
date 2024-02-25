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




const tripdestinations = document.getElementById('tripdestinations')

function locationTurkey(){
    console.log("locationTurkey function called");
    tripdestinations.innerHTML = "";
        axios.get('http://localhost:3000/tours?locations=Turkey')
        .then( res => {
            tours = res.data
            tours.map( item => {
            let tour = document.createElement("div")
            tour.className = "tourDestination col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
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
            tripdestinations.appendChild(tour)
            })
        })
}


function locationSwitzerland(){
    tripdestinations.innerHTML = "";
    axios.get('http://localhost:3000/tours?locations=Switzerland')
    .then( res => {
        tours = res.data
        tours.map( item => {
        let tour = document.createElement("div")
        tour.className = "tourDestination col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
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
        tripdestinations.appendChild(tour)
        })
    })
}


function locationJapan(){
    tripdestinations.innerHTML = "";
    axios.get('http://localhost:3000/tours?locations=Japan')
    .then( res => {
        tours = res.data
        tours.map( item => {
        let tour = document.createElement("div")
        tour.className = "tourDestination col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
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
        tripdestinations.appendChild(tour)
        })
    })
}


function locationGreece(){
    tripdestinations.innerHTML = "";
    axios.get('http://localhost:3000/tours?locations=Greece')
    .then( res => {
        tours = res.data
        tours.map( item => {
        let tour = document.createElement("div")
        tour.className = "tourDestination col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
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
        tripdestinations.appendChild(tour)
        })
    })
}


function locationAmerica(){
    tripdestinations.innerHTML = "";
    axios.get('http://localhost:3000/tours?locations=America')
    .then( res => {
        tours = res.data
        tours.map( item => {
        let tour = document.createElement("div")
        tour.className = "tourDestination col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
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
        tripdestinations.appendChild(tour)
        })
    })
}

function locationDubai(){
    tripdestinations.innerHTML = "";
    axios.get('http://localhost:3000/tours?locations=Dubai')
    .then( res => {
        tours = res.data
        tours.map( item => {
        let tour = document.createElement("div")
        tour.className = "tourDestination col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
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
        tripdestinations.appendChild(tour)
        })
    })
}


function locationFrance(){
    tripdestinations.innerHTML = "";
    axios.get('http://localhost:3000/tours?locations=France')
    .then( res => {
        tours = res.data
        tours.map( item => {
        let tour = document.createElement("div")
        tour.className = "tourDestination col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
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
        tripdestinations.appendChild(tour)
        })
    })
}


function locationGermany(){
    tripdestinations.innerHTML = "";
    axios.get('http://localhost:3000/tours?locations=Germany')
    .then( res => {
        tours = res.data
        tours.map( item => {
        let tour = document.createElement("div")
        tour.className = "tourDestination col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4"
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
        tripdestinations.appendChild(tour)
        })
    })
}



window.onload = function() {
    const params = new URLSearchParams(window.location.search);
    const location = params.get('location');
    if(location == "turkey"){
        locationTurkey();
    }else if(location == "switzerland"){
        locationSwitzerland()
    }else if(location == "japan"){
        locationJapan()
    }else if(location == "greece"){
        locationGreece()
    }else if(location == "america"){
        locationAmerica()
    }else if(location == "dubai"){
        locationDubai()
    }else if(location == "france"){
        locationFrance()
    }else if(location == "germany"){
        locationGermany()
    }
}



function gotoExplore(id){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
     exploretours.push(tours.find(item => item.id == id))
     const maxexploreTours = 1;
     if(exploretours.length > maxexploreTours ) {
        exploretours.shift();
     }
    localStorage.setItem("exploretours",JSON.stringify(exploretours))
}



