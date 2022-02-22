$(document).ready(function(){
    $('#links').owlCarousel({
        loop:true,
        margin:5,
        autoplay:true,
        autoplayTimeout:3000,
        responsive: {
            0 : {
                items: 2
            },
            480: {
                items: 4
            }
        }
    })

    $('#tecnologies').owlCarousel({
        loop:true,
        margin:5,
        autoplay:true,
        autoplayTimeout:1000,
        responsive: {
            0 : {
                items: 3
            },
            480: {
                items: 4
            },
            600: {
                items: 5
            },
            800: {
                items: 6
            }
        }
    })
  });