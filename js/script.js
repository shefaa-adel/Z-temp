
  

// List of sentences
var _CONTENT = [ "Twinkle, twinkle, little star", "How I wonder what you are", "Up above the world so high", "Like a diamond in the sky" ];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed 
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() { 
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === _CONTENT[_PART]) {
		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

// Implements deleting effect
function Delete() {
	var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
	_ELEMENT.innerHTML = text;
	_PART_INDEX--;

	// If sentence has been deleted then start to display the next sentence
	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		// If last sentence then display the first one, else move to the next
		if(_PART == (_CONTENT.length - 1))
			_PART = 0;
		else
			_PART++;
		_PART_INDEX = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 50);


// about  us card

$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
	$(e.target)
	  .prev()
	  .find("i:last-child")
	  .toggleClass("fa-minus fa-plus");
  });

  
  // $('.timer').countTo();
  

//   skills
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 1500,
        easing: 'linear',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// navbar
var navbar=document.getElementById("navbar");

window.onscroll=function(){
    if(window.pageYOffset > 32){
        this.navbar.classList.add("sticky");

    }
    else{
        this.navbar.classList.remove("sticky");
    }
};


// sections
$(".navbar .navcontent div a").click(function(){
  $("html,body").animate({
      scrollTop : $("#" + $(this).data('scroll')).offset().top-160,
  },500);
});

$(window).scroll(function(){
  $(".section").each(function(){
      if($(window).scrollTop() >= $(this).offset().top-160){
          var id=$(this).attr("id");
          $(".navbar .navcontent div ").removeClass("decoration");
          $('#"+ id +"').addClass("decoration");

      }
  });
});

// click nav
$(".navbar .navcontent div").click(function(e){
  e.preventDefault();
  $(this).addClass("decoration").siblings().removeClass("decoration");

});




var clocknow = document.querySelector('.clocknow');

function update() {
  $(clocknow).html(moment().format('D. MMMM YYYY H:mm:ss'));
}

setInterval(update, 1000);




$(document).ready(function($) {
  // number count for stats, using jQuery animate

  

});

scroll_start = $(".statistics").offset().top;

$(window).on('scroll', function() { 
  if ($(window).scrollTop() >= $( 
    '.statistics').offset().top -200) { 
      $('.timer').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
      
        {
      
          duration: 3000,
          easing:'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
      
        });  
        
      
      });
  }
})
console.log(scroll_start);
