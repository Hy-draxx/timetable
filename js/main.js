var slideIndex = 0;
showSlides();

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
    dots[i].className = dots[i].className.replace(" activee", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activee";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

var slideIndexx = 0;
showSlidess();

function showSlidess() {
  var l;
  var slidess = document.getElementsByClassName("mySlidess");
  var dotss = document.getElementsByClassName("dots");
  for (l = 0; l < slidess.length; l++) {
    slidess[l].style.display = "none";  
  }
  slideIndexx++;
  if (slideIndexx > slidess.length) {slideIndexx = 1}    
  for (l = 0; l < dotss.length; l++) {
    dotss[l].className = dotss[l].className.replace(" actives", "");
  }
  slidess[slideIndexx-1].style.display = "block";  
  dotss[slideIndexx-1].className += " actives";
  setTimeout(showSlidess, 3500); // Change image every 4 seconds
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, options);
  });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  var collapsibleElem = document.querySelector('.collapsible');
  var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

 


  $(document).ready(function(){
          
    $("a").on('click', function(event) {

      if (this.hash !== "") {
        
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });

  
 