jQuery(function ($) {
  $("#phone").mask("+38(000)000-00-00");
});

$(document).ready(function () {
  $('select').niceSelect();
})

$('#exampleModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

function openNav() {
  document.getElementById("mySidepanel").style.width = "100vw";
  document.getElementById("mySidepanel").style.minWidth = "200px";
}

function closeNav() {
  let element = document.getElementById("mySidepanel").style.width;
  if (element == "0px") {
    document.getElementById("mySidepanel").style.width = "100vw";
    document.getElementById("mySidepanel").style.minWidth = "200px";
  } else {
    document.getElementById("mySidepanel").style.minWidth = "0";
    document.getElementById("mySidepanel").style.width = "0";
  }
}

// Slider-First-Screen

jQuery(document).ready(function ($) {
  $('.solide-item').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [{
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 350,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

// Slider-Screen-Delivery

jQuery(document).ready(function ($) {
  $('.multiple-items').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    responsive: [{
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 350,
      settings: {
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
});

function calculate() {
  //! initializing field of volume
  let volume = document.querySelector('#product-volume');
  //! get parametres
  let length = document.querySelector('#length').value;
  let width = document.querySelector('#width').value;
  let height = document.querySelector('#height').value;

  //! get user select
  let select = document.querySelector('#units').value;

  //! calculating
  if (select == "metres") volume.value = height * length * width;
  else volume.value = (height * length * width) / 1000000;

  document.querySelector('#length').value = document.querySelector('#width').value = document.querySelector('#height').value = ""

}

if (document.documentElement.clientWidth < 765) {
  let element = document.querySelector('.why-us-content');
  element.classList.add('why-us-slider');
}

// why-us slider
jQuery(document).ready(function ($) {
  $('.why-us-slider').slick({
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    responsive: [{
      breakpoint: 500,
      settings: {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }, ]
  });
});


//? acordion
let accord = document.querySelectorAll(".accordion");

accord.forEach(elem => {
  elem.addEventListener('click', () => {

    elem.classList.toggle('accordion-active');

    let panel = elem.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } 
    else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  })
})

