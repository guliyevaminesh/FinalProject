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

const countrynames = document.getElementById('countryname')
function getCountryname(){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
    exploretours.map( (item,index) => {
            let countryname = document.createElement('div')
            countryname.className = "countryname"
            countryname.innerHTML = `
            <h1>${item.country}</h1> 
    `
    countrynames.appendChild(countryname)
} ) 

}

getCountryname()

const countrynameduplicate = document.getElementById('countrynameduplicate')
function getCountrynameduplicate(){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
    exploretours.map( (item,index) => {
            let countryname = document.createElement('span')
            countryname.className = "countryname"
            countryname.innerHTML = `
            <span>${item.country}</span> 
    `
    countrynameduplicate.appendChild(countryname)
} ) 

}

getCountrynameduplicate()

const tourimage = document.getElementById('tourimage')
const tourinformation = document.getElementById('tourinformation')

function tourImage(){
    tourimage.innerHTML = ""

    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
    exploretours.map( (item,index) => {
            let tourimages = document.createElement('div')
            tourimages.className = "tourImages"
            tourimages.innerHTML = `
            <img src=${item.thumbnailUrl} alt="">
    <button onclick="">View Gallery</button> 
    `
    tourimage.appendChild(tourimages)
} )
}
tourImage()

function tourInformation(){
tourinformation.innerHTML = ""
let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
exploretours.map( (item,index) => {
    let tourabout = document.createElement('div')
    tourabout.className = "countryabout col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
    tourabout.innerHTML = `
    <div id="tourinformation">
    <h3>${item.country}</h3>
    <h5>From ${item.price}</h5>

    <div class="triact">

    <div class="triptype">
    <h6>Triptype</h6>
    <span>${item.triptype}</span>
    </div>

    <div class="activities">
    <h6>Activities</h6>
    <span>${item.activities}</span>
    </div>

    </div>

    <div class="groupreview">

    <div class="groupsize">
    <h6>Group Size</h6>
    <span>${item.groupsize}</span>
    </div>

    <div class="review">
    <h6>Reviews</h6>
    <span>${item.reviews}</span>
    </div>

    </div>

    <div class="locationtrip">

    <div class="location">
    <h6>Location</h6>
    <span>${item.locations}</span>
    </div>

    <div class="tripduration">
    <h6>Trip Duration</h6>
    <span>${item.tripduration}</span>
    </div>

    </div>
    <button onclick="">Book Now</button>
    <p>Trip Code <span>${item.tripcode}</span></p>
    </div>
    
    `
    tourinformation.appendChild(tourabout)
} )
}

tourInformation()

const information = document.getElementById('information');
const countrymap = document.getElementById('countrymap');
function getMap(){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
    exploretours.map( (item,index) => {
            let tourmap = document.createElement('div')
            tourmap.className = "tourmap"
            tourmap.innerHTML = `
            <iframe src="${item.map}" frameborder="0"></iframe>
    `
    countrymap.appendChild(tourmap)
})
}
getMap()

function getOverview(){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
    exploretours.map( (item,index) => {
            let touroverview = document.createElement('div')
            touroverview.className = "touroverview"
            touroverview.innerHTML = `
           <p>${item.overview}</p>
    `
    information.appendChild(touroverview)
})
}

function getOutline(){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
    exploretours.map( (item,index) => {
            let touroutline = document.createElement('div')
            touroutline.className = "touroutline"
            touroutline.innerHTML = `
           <p>${item.outline}</p>
    `
    information.appendChild(touroutline)
})
}

function getInclude(){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
    exploretours.map( (item,index) => {
            let tourinclude = document.createElement('div')
            tourinclude.className = "tourinclude"
            tourinclude.innerHTML = `
           <p>${item.includes}</p>
    `
    information.appendChild(tourinclude)
})
}
function getExclude(){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
    exploretours.map( (item,index) => {
            let tourexclude = document.createElement('div')
            tourexclude.className = "tourexclude"
            tourexclude.innerHTML = `
           <p>${item.excludes}</p>
    `
    information.appendChild(tourexclude)
})
}
function getGallery(){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
    exploretours.map( (item,index) => {
            let tourgallery = document.createElement('div')
            tourgallery.className = "tourgallery"
            tourgallery.innerHTML = `
            <img src="${item.gallery1}" alt="">
            <img src="${item.gallery2}" alt="">
            <img src="${item.gallery3}" alt="">
            <img src="${item.gallery4}" alt="">
            <img src="${item.gallery5}" alt="">
    `
    information.appendChild(tourgallery)
})
}
function getReview(){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
    exploretours.map( (item,index) => {
            let tourreview = document.createElement('div')
            tourreview.className = "tourreview"
            tourreview.innerHTML = `
           <p>${item.reviews}</p>
    `
    information.appendChild(tourreview)
})
}
function getFaq(){
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || []
    exploretours.map( (item,index) => {
            let tourfaq = document.createElement('div')
            tourfaq.className = "tourfaq"
            tourfaq.innerHTML = `
           <p>${item.faq}</p>
    `
    information.appendChild(tourfaq)
})
}
document.addEventListener("DOMContentLoaded", function() {
    const overviewButton = document.getElementById('overview');
    const outlineButton = document.getElementById('outline');
    const includeButton = document.getElementById('includes');
    const excludeButton = document.getElementById('excludes');
    const galleryButton = document.getElementById('gallery');
    const reviewButton = document.getElementById('review');
    const faqButton = document.getElementById('faq');
    const itinerariesSection = document.getElementById('itineraries');
    
    overviewButton.addEventListener('click', function() {
        // Önce mevcut getOverview işlemini iptal et
        information.innerHTML = '';
        getOverview();
        itinerariesSection.style.display = 'none';
      });

    outlineButton.addEventListener('click', function() {
        // Önce mevcut getOverview işlemini iptal et
        information.innerHTML = '';
        getOutline();
      });

    includeButton.addEventListener('click', function() {
        // Önce mevcut getOverview işlemini iptal et
        information.innerHTML = '';
        getInclude();
        itinerariesSection.style.display = 'none';
      });

      excludeButton.addEventListener('click', function() {
        // Önce mevcut içeriği temizle
        information.innerHTML = '';
        getExclude();
        itinerariesSection.style.display = 'none';
      });

      galleryButton.addEventListener('click', function() {
        // Önce mevcut içeriği temizle
        information.innerHTML = '';
        getGallery();
        itinerariesSection.style.display = 'none';
      });

      reviewButton.addEventListener('click', function() {
        // Önce mevcut içeriği temizle
        information.innerHTML = '';
        getReview();
        itinerariesSection.style.display = 'none';
      });

      faqButton.addEventListener('click', function() {
        // Önce mevcut içeriği temizle
        information.innerHTML = '';
        getFaq();
        itinerariesSection.style.display = 'none';
      });
  });

  const yourplanone = document.getElementById('yourplanone');
  function getPlanOne() {
      let exploretours = JSON.parse(localStorage.getItem("exploretours")) || [];
      exploretours.forEach((item, index) => { // .map yerine .forEach kullanmanız daha uygun olabilir
          let planone = document.createElement('div');
          planone.className = "planone";
          planone.innerHTML = `<p>${item.planone}</p>`;
          yourplanone.appendChild(planone);
      });
  }

  // getPlanOne fonksiyonunu burada çağırın
  getPlanOne();

  
  const yourplantwo = document.getElementById('yourplantwo');
  function getPlanTwo() {
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || [];
    exploretours.forEach((item, index) => { // .map yerine .forEach kullanmanız daha uygun olabilir
        let plantwo = document.createElement('div');
        plantwo.className = "plantwo";
        plantwo.innerHTML = `<p>${item.plantwo}</p>`;
        yourplantwo.appendChild(plantwo);
    });
}

// getPlanOne fonksiyonunu burada çağırın
getPlanTwo();

  const yourplanthree = document.getElementById('yourplanthree');
  function getPlanThree() {
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || [];
    exploretours.forEach((item, index) => { // .map yerine .forEach kullanmanız daha uygun olabilir
        let planthree = document.createElement('div');
        planthree.className = "planthree";
        planthree.innerHTML = `<p>${item.planthree}</p>`;
        yourplanthree.appendChild(planthree);
    });
}

// getPlanOne fonksiyonunu burada çağırın
getPlanThree();

document.addEventListener("DOMContentLoaded", function() {
    const itinerariesSection = document.getElementById('itineraries');
    const outlineButton = document.getElementById('outline');
    const otherButtons = document.querySelectorAll('.itinerariestext button');
  
    outlineButton.addEventListener('click', function() {
      // Sadece outline düğmesine tıklandığında itineraries bölümünü görünür hale getir
      itinerariesSection.style.display = 'block';
    });
  
    otherButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        // Diğer düğmelere tıklandığında itineraries bölümünü gizle
        itinerariesSection.style.display = 'none';
      });
    });
  });


  
  



