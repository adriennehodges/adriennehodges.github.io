jQuery(document).ready(function($) {
  
  var altImage = "_mouseenter.png";

  $('#logos img').mouseenter(function() {

  	$(this).attr("src", "images/logos" + altImage).mouseleave(function() {

    $(this).attr("src", "images/logos.png")

    });

  });
  
  
  $('#web img').mouseenter(function() {

  	$(this).attr("src", "images/web" + altImage).mouseleave(function() {

    $(this).attr("src", "images/web.png")

    });

  });
  

  $('#bison img').mouseenter(function() {

  	$(this).attr("src", "images/bison" + altImage).mouseleave(function() {

    $(this).attr("src", "images/bison.png")

    });

  });

  $('#limric img').mouseenter(function() {

    $(this).attr("src", "images/limric" + altImage).mouseleave(function() {

    $(this).attr("src", "images/limric.png")

    });

  });

  $('#fhc img').mouseenter(function() {

    $(this).attr("src", "images/fhc" + altImage).mouseleave(function() {

    $(this).attr("src", "images/fhc.png")

    });

  });

  $('#wedding img').mouseenter(function() {

    $(this).attr("src", "images/wedding" + altImage).mouseleave(function() {

    $(this).attr("src", "images/wedding.png")

    });

  });

});