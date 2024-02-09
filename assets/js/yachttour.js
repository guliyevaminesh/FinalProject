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

const priceSlider = document.getElementById('priceSlider'); 

function rangePrice() {
    yachttours.innerHTML = ""; 
    const minPrice = 378; // Minimum fiyat
    const maxPrice = parseInt(priceSlider.value); // Seçilen maksimum fiyat

    axios.get(`http://localhost:3000/tours?minPrice=${minPrice}&maxPrice=${maxPrice}`)
        .then(res => {
            tours = res.data;
            tours.map(item => {
                const tour = document.createElement("div");
                tour.className = "tourPacket col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4";
                tour.innerHTML = `
                    <img src="${item.thumbnailUrl}" alt="">
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
                    </div>`;
                yachttours.appendChild(tour);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

searchbutton.addEventListener('click', rangePrice); // searchbutton dinleyicisi ekle

const triptypes = document.getElementById('triptypes')

function triptypeHoliday(){
    yachttours.innerHTML = ""
    let selectvalue = triptypes.value
    if(selectvalue === "1"){
        axios.get('http://localhost:3000/tours?triptype=Holiday')
        .then( res => {
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
}}
triptypes.addEventListener("change",triptypeHoliday)

function triptypeParty(){
    yachttours.innerHTML = ""
    let selectvalue = triptypes.value
    if(selectvalue === "2"){
        axios.get('http://localhost:3000/tours?triptype=Party')
        .then( res => {
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
}}
triptypes.addEventListener("change",triptypeParty)

function triptypeYacht(){
    yachttours.innerHTML = ""
    let selectvalue = triptypes.value
    if(selectvalue === "3"){
        axios.get('http://localhost:3000/tours?triptype=Yacht Travel')
        .then( res => {
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
}}
triptypes.addEventListener("change",triptypeYacht)


function triptypeAll(){
    yachttours.innerHTML = ""
    let selectvalue = triptypes.value
    if(selectvalue === "0"){
        axios.get('http://localhost:3000/tours?')
        .then( res => {
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
}}
triptypes.addEventListener("change",triptypeAll)


const locations = document.getElementById('locations')

function locationAmerica(){
    yachttours.innerHTML = ""
    let selectvalue = locations.value
    if(selectvalue === "1"){
        axios.get('http://localhost:3000/tours?locations=America')
        .then( res => {
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
}}
locations.addEventListener("change",locationAmerica)

function locationDubai(){
    yachttours.innerHTML = ""
    let selectvalue = locations.value
    if(selectvalue === "2"){
        axios.get('http://localhost:3000/tours?locations=Dubai')
        .then( res => {
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
}}
locations.addEventListener("change",locationDubai)

function locationAll(){
    yachttours.innerHTML = ""
    let selectvalue = locations.value
    if(selectvalue === "0"){
        axios.get('http://localhost:3000/tours')
        .then( res => {
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
}}
locations.addEventListener("change",locationAll)

function locationFrance(){
    yachttours.innerHTML = ""
    let selectvalue = locations.value
    if(selectvalue === "3"){
        axios.get('http://localhost:3000/tours?locations=France')
        .then( res => {
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
}}
locations.addEventListener("change",locationFrance)

function locationGreece(){
    yachttours.innerHTML = ""
    let selectvalue = locations.value
    if(selectvalue === "4"){
        axios.get('http://localhost:3000/tours?locations=Greece')
        .then( res => {
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
}}
locations.addEventListener("change",locationGreece)

function locationJapan(){
    yachttours.innerHTML = ""
    let selectvalue = locations.value
    if(selectvalue === "5"){
        axios.get('http://localhost:3000/tours?locations=Japan')
        .then( res => {
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
}}
locations.addEventListener("change",locationJapan)

function locationSwitzerland(){
    yachttours.innerHTML = ""
    let selectvalue = locations.value
    if(selectvalue === "6"){
        axios.get('http://localhost:3000/tours?locations=Switzerland')
        .then( res => {
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
}}
locations.addEventListener("change",locationSwitzerland)

function locationTurkey(){
    yachttours.innerHTML = ""
    let selectvalue = locations.value
    if(selectvalue === "7"){
        axios.get('http://localhost:3000/tours?locations=Turkey')
        .then( res => {
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
}}
locations.addEventListener("change",locationTurkey)


