var $ = jQuery.noConflict();

/* Script on ready
------------------------------------------------------------------------------*/
$(() => {

	//On arrow click event expand the DIV element.
	var boxes = $('.card');
    var totalBoxes = boxes.length;
    var currentIndex = 0;
    $('#arrow').on('click', function() {
      	boxes.eq(currentIndex).removeClass('active');
      	currentIndex = (currentIndex + 1) % totalBoxes;
      	boxes.eq(currentIndex).addClass('active');
    });
	/*$('#prevButton').on('click', function() {
        boxes.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex - 1 + totalBoxes) % totalBoxes;
        boxes.eq(currentIndex).addClass('active');
    });
	/*$('.dot').click(function(e) {
		alert(0);
        e.preventDefault();
		boxes.eq(currentIndex).removeClass('active');
		currentIndex = (currentIndex + 1) % totalBoxes;
		boxes.eq(currentIndex).addClass('active');
    });*/


	//Add the dot(navigation) according to DIV element.
	var divCount = $('.card').length;
    var divs = '';
    for (var i = 0; i < divCount; i++) {
        if (i === 0) {
            divs += '<div class="dot active"></div>';
        } else {
            divs += '<div class="dot"></div>';
        }
    }
    $('#navigation').html(divs);


	//On arrow click event add and remove active class on dot (navigation).
	var dots = $('.dot');
    var dotBoxes = boxes.length;
    var dotIndex = 0;

    $('#arrow').on('click', function() {
      	dots.eq(dotIndex).removeClass('active');
      	dotIndex = (dotIndex + 1) % dotBoxes;
      	dots.eq(dotIndex).addClass('active');
    });


	// When a dot is clicked, it will expand the DIV element
  	/*$('.dot').click(function() {
    	// Remove 'active' class from all dots and cards
    	$('.dot').removeClass('active');
    	$('.card').removeClass('active');

    	// Add 'active' class to the clicked dot
    	$(this).addClass('active');

    	// Match the index of the clicked dot with the slide and add 'active' class to the corresponding slide
    	var index = $(this).index();
    	$('.card').eq(index).addClass('active');
  	});*/


	let slideCount = $('.card').length;
	let slideIndex = 0;

	// Function to handle dot clicks
	$('.dot').click(function() {
		var index = $(this).index();
		goToSlide(index);
	});

	$('#arrow').click(function() {
	   	slideIndex = slideIndex === slideCount - 1 ? 0 : slideIndex + 1;
		goToSlide(slideIndex);
	});

	// Function to handle card change and class manipulation
	function goToSlide(index) {
		$('.dot').removeClass('active');
	   	$('.card').removeClass('active');
	   	$('.dot').eq(index).addClass('active');
	   	$('.card').eq(index).addClass('active');
	   	slideIndex = index;
	}

});
