jQuery(document).ready(function($) {
  
  $('#logos img').mouseenter(function() {

  	$(this).attr("src", "images/logos_mouseenter.png")

  });
  
  $('#logos img').mouseleave(function() {

  	$(this).attr("src", "images/logos.png")

  });
  
  $('#web img').mouseenter(function() {

  	$(this).attr("src", "images/web_mouseenter.png")

  });
  
  $('#web img').mouseleave(function() {

  	$(this).attr("src", "images/web.png")

  });

  $('#bison img').mouseenter(function() {

  	$(this).attr("src", "images/bison_mouseenter.png")

  });
  
  $('#bison img').mouseleave(function() {

  	$(this).attr("src", "images/bison.png")

  });

});


/* $( "img" ).attr( "src", function() {
  return "/resources/" + this.title;
}); */