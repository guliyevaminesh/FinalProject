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
    <button onclick="getGallery()">View Gallery</button> 
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
    <button id="booksnow">Book Now</button>
    <p>Trip Code <span>${item.tripcode}</span></p>
    </div>
    
    `
    tourinformation.appendChild(tourabout)
} )
}

tourInformation()

const information = document.getElementById('information');
const details = document.getElementById('details');
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
    details.appendChild(touroverview)

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
    details.appendChild(touroutline)
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
    details.appendChild(tourinclude)
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
    details.appendChild(tourexclude)
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
    details.appendChild(tourgallery)
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
    details.appendChild(tourreview)
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
    details.appendChild(getFaq)
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
       details.innerHTML = '';
        information.style.display = 'none'; 
        getOverview();

      });

    outlineButton.addEventListener('click', function() {
        details.innerHTML = '';
        information.style.display = 'none'; 
        getOutline();
      });

    includeButton.addEventListener('click', function() {
        details.innerHTML = '';
        itinerariesSection.style.display = 'none';
        information.style.display = 'none'; 
        getInclude();
      });

      excludeButton.addEventListener('click', function() {
        details.innerHTML = '';
          itinerariesSection.style.display = 'none';
          information.style.display = 'none'; 
        getExclude();
      });

      galleryButton.addEventListener('click', function() {
        details.innerHTML = '';
        information.style.display = 'none'; 
        getGallery();
        itinerariesSection.style.display = 'none';
      });

      reviewButton.addEventListener('click', function() {
        details.innerHTML = '';
        information.style.display = 'none'; 
        getReview();
        itinerariesSection.style.display = 'none';
      });

      faqButton.addEventListener('click', function() {
          details.innerHTML = '';
          information.style.display = 'none'; 
        getFaq();
        itinerariesSection.style.display = 'none';
      });
  });

  const yourplanone = document.getElementById('yourplanone');
  function getPlanOne() {
      let exploretours = JSON.parse(localStorage.getItem("exploretours")) || [];
      exploretours.forEach((item, index) => { 
          let planone = document.createElement('div');
          planone.className = "planone";
          planone.innerHTML = `<p>${item.planone}</p>`;
          yourplanone.appendChild(planone);
      });
  }
  getPlanOne();

  
  const yourplantwo = document.getElementById('yourplantwo');
  function getPlanTwo() {
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || [];
    exploretours.forEach((item, index) => { 
        let plantwo = document.createElement('div');
        plantwo.className = "plantwo";
        plantwo.innerHTML = `<p>${item.plantwo}</p>`;
        yourplantwo.appendChild(plantwo);
    });
}

getPlanTwo();

  const yourplanthree = document.getElementById('yourplanthree');
  function getPlanThree() {
    let exploretours = JSON.parse(localStorage.getItem("exploretours")) || [];
    exploretours.forEach((item, index) => { 
        let planthree = document.createElement('div');
        planthree.className = "planthree";
        planthree.innerHTML = `<p>${item.planthree}</p>`;
        yourplanthree.appendChild(planthree);
    });
}

getPlanThree();

document.getElementById('special').addEventListener('click', function() {
    document.querySelectorAll('.paxselector').forEach(function(el) {
        el.style.display = 'none';
    });
    document.getElementById('paxselectorspecial').style.display = 'block';
});

document.getElementById('family').addEventListener('click', function() {
    document.querySelectorAll('.paxselector').forEach(function(el) {
        el.style.display = 'none';
    });
    document.getElementById('paxselectorfamily').style.display = 'block';
});

document.getElementById('honeymoon').addEventListener('click', function() {
    document.querySelectorAll('.paxselector').forEach(function(el) {
        el.style.display = 'none';
    });
    document.getElementById('paxselectorhoneymoon').style.display = 'block';
});

document.getElementById('booking').addEventListener('click', function() {
    details.innerHTML = ''
    document.getElementById('information').style.display = 'block';
});
document.getElementById('booksnow').addEventListener('click', function() {
    details.innerHTML = ''
    document.getElementById('information').style.display = 'block';
});
document.addEventListener('DOMContentLoaded', function() {
    const adultCounterElement =  document.querySelector('.paxprice .adultCounter');
    const adultIncreaseBtn = document.querySelector('.paxprice .increaseBtn');
    const adultDecreaseBtn = document.querySelector('.paxprice .decreaseBtn');
    
    let adultCount = 0;

    function updateAdultCounter() {
        adultCounterElement.textContent = adultCount;
    }

    adultIncreaseBtn.addEventListener('click', function() {
        if (adultCount < 7) {
            adultCount++;
            updateAdultCounter();
        }
    });

    adultDecreaseBtn.addEventListener('click', function() {
        if (adultCount > 0) {
            adultCount--;
            updateAdultCounter();
        }
    });

    const counterElement = document.querySelector('.paxprice .counter');
    const increaseBtn = document.querySelector('.paxprice .personprice .increaseBtn');
    const decreaseBtn = document.querySelector('.paxprice .personprice .decreaseBtn');
    
    let count = 0;

    function updateCounter() {
        counterElement.textContent = count;
    }

    increaseBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });

    decreaseBtn.addEventListener('click', function() {
        if (count > 0) {
            count--;
            updateCounter();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Family Pax Selector
    const familyAdultCounterElements = document.querySelectorAll('#paxselectorfamily .adultCounter');
    const familyIncreaseBtns = document.querySelectorAll('#paxselectorfamily .increaseBtn');
    const familyDecreaseBtns = document.querySelectorAll('#paxselectorfamily .decreaseBtn');
    
    let familyAdultCounts = Array.from(familyAdultCounterElements).map(() => 0);

    function updateFamilyAdultCounter(index) {
        familyAdultCounterElements[index].textContent = familyAdultCounts[index];
    }

    familyIncreaseBtns.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (familyAdultCounts[index] < 7) {
                familyAdultCounts[index]++;
                updateFamilyAdultCounter(index);
            }
        });
    });

    familyDecreaseBtns.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (familyAdultCounts[index] > 0) {
                familyAdultCounts[index]--;
                updateFamilyAdultCounter(index);
            }
        });
    });

    // Common Counter
    const counterElements = document.querySelectorAll('.paxprice .counter');
    const increaseBtns = document.querySelectorAll('.paxprice .personprice .increaseBtn');
    const decreaseBtns = document.querySelectorAll('.paxprice .personprice .decreaseBtn');
    
    let commonCount = 0;

    function updateCounter() {
        counterElements.forEach(function(element) {
            element.textContent = commonCount;
        });
    }

    increaseBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            commonCount++;
            updateCounter();
        });
    });

    decreaseBtns.forEach(function(button) {
        button.addEventListener('click', function() {
            if (commonCount > 0) {
                commonCount--;
                updateCounter();
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Pax Selector Honeymoon
    const honeymoonAdultCounterElements = document.querySelectorAll('#paxselectorhoneymoon .adultCounter');
    const honeymoonIncreaseBtns = document.querySelectorAll('#paxselectorhoneymoon .increaseBtn');
    const honeymoonDecreaseBtns = document.querySelectorAll('#paxselectorhoneymoon .decreaseBtn');
    
    let honeymoonAdultCounts = Array.from(honeymoonAdultCounterElements).map(() => 0);

    function updateHoneymoonAdultCounter(index) {
        honeymoonAdultCounterElements[index].textContent = honeymoonAdultCounts[index];
    }

    honeymoonIncreaseBtns.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (honeymoonAdultCounts[index] < 7) {
                honeymoonAdultCounts[index]++;
                updateHoneymoonAdultCounter(index);
            }
        });
    });

    honeymoonDecreaseBtns.forEach((button, index) => {
        button.addEventListener('click', function() {
            if (honeymoonAdultCounts[index] > 0) {
                honeymoonAdultCounts[index]--;
                updateHoneymoonAdultCounter(index);
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const specialBtn = document.getElementById('special');
    const familyBtn = document.getElementById('family');
    const honeymoonBtn = document.getElementById('honeymoon');
    const pricingValue = document.getElementById('pricingvalue');
    const dateInput = document.getElementById('dateInput');
    const dateValue = document.getElementById('datevalue');

    specialBtn.addEventListener('click', function() {
        pricingValue.textContent = specialBtn.textContent;
    });

    familyBtn.addEventListener('click', function() {
        pricingValue.textContent = familyBtn.textContent;
    });

    honeymoonBtn.addEventListener('click', function() {
        pricingValue.textContent = honeymoonBtn.textContent;
    });

    dateInput.addEventListener('change', function() {
        dateValue.textContent = dateInput.value;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Pax Selector Special
    const specialIncreaseBtn = document.querySelector('#paxselectorspecial .increaseBtn');
    const specialDecreaseBtn = document.querySelector('#paxselectorspecial .decreaseBtn');
    const totalValue = document.getElementById('totalvalue');

    let totalPrice = 0;

    function updateTotalPrice() {
        totalValue.textContent = '$' + totalPrice.toFixed(2);
    }

    specialIncreaseBtn.addEventListener('click', function() {
        totalPrice += 425;
        updateTotalPrice();
    });

    specialDecreaseBtn.addEventListener('click', function() {
        if (totalPrice >= 425) {
            totalPrice -= 425;
            updateTotalPrice();
        }
    });

    // Pax Selector Family
    const familyIncreaseBtn = document.querySelector('#paxselectorfamily .increaseBtn');
    const familyDecreaseBtn = document.querySelector('#paxselectorfamily .decreaseBtn');

    familyIncreaseBtn.addEventListener('click', function() {
        totalPrice += 886;
        updateTotalPrice();
    });

    familyDecreaseBtn.addEventListener('click', function() {
        if (totalPrice >= 886) {
            totalPrice -= 886;
            updateTotalPrice();
        }
    });

    // Pax Selector Honeymoon
    const honeymoonIncreaseBtn = document.querySelector('#paxselectorhoneymoon .increaseBtn');
    const honeymoonDecreaseBtn = document.querySelector('#paxselectorhoneymoon .decreaseBtn');

    honeymoonIncreaseBtn.addEventListener('click', function() {
        totalPrice += 1059;
        updateTotalPrice();
    });

    honeymoonDecreaseBtn.addEventListener('click', function() {
        if (totalPrice >= 1059) {
            totalPrice -= 1059;
            updateTotalPrice();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bookNowBtn = document.getElementById('booknow');
    const informationDiv = document.getElementById('information');
    const succesIconDiv = document.createElement('div');

    succesIconDiv.innerHTML = `
        <div class="succesicon">
            <img src="./assets/img/succesicon.png" alt="">
            <h3>Your reservation is successful!!</h3>
        </div>
    `;

    bookNowBtn.addEventListener('click', function() {
        informationDiv.innerHTML = ''; 
        informationDiv.appendChild(succesIconDiv); 
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const clearAllBtn = document.getElementById('clearAll');
    const dateInput = document.getElementById('dateInput');
    const specialBtn = document.getElementById('special');
    const familyBtn = document.getElementById('family');
    const honeymoonBtn = document.getElementById('honeymoon');
    const adultCounters = document.querySelectorAll('.adultCounter');
    const counters = document.querySelectorAll('.counter');
    const pricingValue = document.getElementById('pricingvalue');
    const dateValue = document.getElementById('datevalue');
    const totalValue = document.getElementById('totalvalue');

    clearAllBtn.addEventListener('click', function() {
        
        dateInput.value = '';
        specialBtn.checked = false;
        familyBtn.checked = false;
        honeymoonBtn.checked = false;
        adultCounters.forEach(function(counter) {
            counter.textContent = '0';
        });
        counters.forEach(function(counter) {
            counter.textContent = '0';
        });
        pricingValue.textContent = '';
        dateValue.textContent = '';
        totalValue.textContent = '';
    });
});




