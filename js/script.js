$(document).ready(function(){
  		$('#mysliderI').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        450:{
        	items:2
        },
        1000:{
            items:4
        }
    }
});

  		$('#mysliderII').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        450:{
        	items:2
        },
        1000:{
            items:4
        }
    }
});

  		$('#menuSliderbox').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        270:{
        	items:1
        }
    }
});

 	$('#menuSliderbox_two').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        270:{
        	items:1
        }
    }
});
 	



  	});