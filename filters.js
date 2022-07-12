//link buttons on page load
$(document).ready(function(){
  $("#resume").click(function(){filter("resume")});
  $("#all").click(function(){filter("spotlight")});
  $("#godot").click(function(){filter("godot")});
  $("#vb6").click(function(){filter("vb6")});
  $("#cpp").click(function(){filter("cpp")});
  
  //organize project list when page loads to prettify left/right ordering
  filter("spotlight", false);
});

function filter(type, scroll=true) {
  //hide all spotlights, show selected type
  $('.spotlight').hide();
  $('.'+type).show();
  //dynamically make it alternate between left and right based on visibility
  $('.spotlight:visible').each(function(i) {
    //remove the side formatting
    $(this).removeClass("orient-right orient-left");
    
    if (i % 2 == 0) {
      $(this).addClass("orient-right");
    } else {
      $(this).addClass("orient-left");
    }
    
    //update 7/11/22 - smooth-scroll class from css already does this
    //scroll to content, include .stop(true, false) to keep animation from "sticking" once the scroll stops
    //if (scroll == true) {
    //$('html, body').stop(true, false).animate({
    //  scrollTop: $("#content-start").offset().top});
    //} //end if scroll == true
  });
}