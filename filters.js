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

function filter(type='spotlight') {
  //hide all spotlights, show selected type
  $('.spotlight').hide();
  $('.'+type).show();
  
  //save the filter type to the session
  sessionStorage.setItem("filterName", type);
  
  //dynamically make it alternate between left and right based on visibility
  $('.spotlight:visible').each(function(i) {
    //remove the side formatting
    $(this).removeClass("orient-right orient-left");
    //alternate which side text/images are on
    if (i % 2 == 0) {
      $(this).addClass("orient-right");
    } else {
      $(this).addClass("orient-left");
    }
  });
  
  //set whether or not button is clicked
  $('.filter').each(function() {
    //deselect all
    $(this).removeClass('rubix_active');
    //select current filter
    if ($(this).attr('id') == type) {
      $(this).addClass('rubix_active');
    }
  });
}