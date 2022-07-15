//link buttons on page load
$(document).ready(function(){
  $('#resume').click(function(){filter($(this).attr('id'));});
  $('#spotlight').click(function(){filter($(this).attr('id'));});
  $('#godot').click(function(){filter($(this).attr('id'));});
  $('#vb6').click(function(){filter($(this).attr('id'));});
  $('#cpp').click(function(){filter($(this).attr('id'));});
  
  //organize project list when page loads to prettify left/right ordering
  filter(sessionStorage.getItem('filterName') ?? 'spotlight');
});

//dynamically resize contact form to fit scaling
window.addEventListener('message', function(e) {
  let message = e.data;
  document.querySelector('#contact-frame').style.height = message.height + 'px';
}, false);

//make "back to top" button disappear when we're at the top
$(window).scroll(function() {
  //get window location
  let scrollPos = $(document).scrollTop();
  //get content tag top
  let contentTop = $('#content-start').offset().top;
  //if we scrolled past the content start, then fadein the button
  if (scrollPos >= contentTop - 100) {
    if (!$('#topbutton').is(':visible')) {
      $('#topbutton').fadeIn();
      //do a cute li'l bounce
      $('#topbutton').animate({top: '1.5em'}, 50);
      $('#topbutton').animate({top: '3.5em'}, 250);
      $('#topbutton').animate({top: '2em'}, 400);
    }
  } else if (scrollPos < contentTop - 100) {
    //we're back at the top, fade out
    $('#topbutton').fadeOut();
  }
   
});

function filter(type='spotlight') {
  //save the filter type to the session
  sessionStorage.setItem("filterName", type);
  
  //hide all spotlights
  $('.spotlight').fadeOut().promise().done(function() {
  
    //dynamically alternate between left and right based on selected type
    $('.'+type).each(function(i) {
      //remove all side formatting
      $(this).removeClass("orient-right orient-left");
      //alternate which side text/images are on
      if (i % 2 == 0) {
        $(this).addClass("orient-right");
      } else {
        $(this).addClass("orient-left");
      }
      $(this).fadeIn();
    });  
  });
   
  //set whether or not button is clicked
  $('.filter').each(function() {
    //select current filter
    if ($(this).attr('id') == type) {
      $(this).addClass('rubix_active');
    } else {
      $(this).removeClass('rubix_active');
    }
  });
}