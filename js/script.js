$(document).ready(function() {
    $('.navbar-nav > li >.white').click(function(e){
    
        e.preventDefault();
        $('.navbar-nav > li > .white ').removeClass('active');
        $(this).addClass('active')
    })
})

    
    
var slideIndex = 1;
showSlides(slideIndex)

function plusSlides(n){
    showSlides(slideIndex += n)
    // alert(slideIndex)
}
// plusSlides();
function currentSlide(n){
    showSlides(slideIndex = n)
    // alert(slideIndex)
}

// currentSlide();
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides")
        var dots = document.getElementsByClassName("dot")   
        

        if(n > slides.length) {
            slideIndex = 1;
            // alert('greater')
            // if length increase to more then 3
            
        } if(n < 1) {
           slideIndex = slides.length
            // alert('less')
              // if length decrease  to less then 1
        }

        for( i = 0 ; i < slides.length ;i++) {
            slides[i].style.display = "none";
        }

        for ( i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active_dot", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active_dot";
            
    }
    var autoSlideIndex = 0;
    autoSlide();
function autoSlide(){
    var i ;
    var auto_slide = document.getElementsByClassName("auto-slide")
    var auto_dot = document.getElementsByClassName("dot-auto")

    for(i=0;i<auto_slide.length;i++){
        auto_slide[i].style.display = "none";
    }
    autoSlideIndex++;
    if(autoSlideIndex > auto_slide.length) {
        autoSlideIndex = 1
    }
    for(i=0;i<auto_dot.length;i++){
        auto_dot[i].className = auto_dot[i].className.replace(" activeauto-dot","")
    }
    auto_slide[autoSlideIndex-1].style.display = "block";

    auto_dot[autoSlideIndex - 1].className += " activeauto-dot";
    setTimeout(autoSlide,2000)
}

/* 
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/
// function initMap() {
//     var dumbo = {lat: 40.700802, lng:73.987602};
//     var mapOptions = {
//         center: dumbo,
//         zoom: 2
//     };
//     var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
// }
function initMap() {
    var test= {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: test
    });
    var marker = new google.maps.Marker({
      position: test,
      map: map
    });
  }
// initMap();
// var googlemap = new google.maps.Map(document.getElementById("map"), mapOptions);
//             var marker = new google.maps.Marker({
//                 position: siliconValley,
//                 map: googlemap
//             });