jQuery(document).ready(function($) {
  
  var altImage = "_mouseenter.png";

  $('#home img').mouseenter(function() {

    $(this).attr("src", "images/home" + altImage).mouseleave(function() {

    $(this).attr("src", "images/home.png")

    });

  });

  $('#about img').mouseenter(function() {

    $(this).attr("src", "images/about" + altImage).mouseleave(function() {

    $(this).attr("src", "images/about.png")

    });

  });

  $('#blergh img').mouseenter(function() {

    $(this).attr("src", "images/blergh" + altImage).mouseleave(function() {

    $(this).attr("src", "images/blergh.png")

    });

  });

  $('#resume img').mouseenter(function() {

    $(this).attr("src", "images/resume" + altImage).mouseleave(function() {

    $(this).attr("src", "images/resume.png")

    });

  });

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

  $('#green_ion img').mouseenter(function() {

    $(this).attr("src", "images/green_ion" + altImage).mouseleave(function() {

    $(this).attr("src", "images/green_ion.png")

    });

  });


  $('.fragrances div').click(function(){
    
    var color = $(this).css('background-color');
    
    $('.wax-color').css('background-color', color);
    
    });


  $('.fragrances div').click(function(){
    
    var name = $(this).attr('alt');
    
    $('.fragrance_name').html('<p>' + name + '</p>');
    
    });
  
  $('.tab').click(function() {
    
    /* Store tab we clicked on in variable */
    var $tab = $(this);
    
    /* Index of <li> we just clicked */
    var index = $tab.index();
    
    /* Grab respective tab_section at same index */
    var $tab_content = $('.tab_section').eq(index);
    
    if (!$tab.hasClass('active')) {
      $tab.addClass('active');
      $tab.siblings().removeClass('active');
      $tab_content.addClass('active');
      $tab_content.siblings().removeClass('active');
    }
    
  });

});