$(document).ready(function() {

  $(".wave").click(function(){
      $('#container').toggle();
      $('#work').toggle();
  });

  $(".key").click(function(){
      $('.key').toggle();
      $('.key2').toggle();
  });
  $(".key2").click(function(){
      $('.key').toggle();
      $('.key2').toggle();
  });

  $(".x00").click(function(){
      $('.blog').toggle();
      $('.blog2').toggle();
  });
  $(".blog2").click(function(){
      $('.blog').toggle();
      $('.blog2').toggle();
  });

  $(".x000").click(function(){
      $('.gifs').toggle();
      $('.gifs2').toggle();
  });
  $(".gifs2").click(function(){
      $('.gifs').toggle();
      $('.gifs2').toggle();
  });

  $(".logo").click(function(){
      $('#container').show();
      $('#work').hide();
  });

  $(".exmate").click(function(){
      $('.about-container').show();
  });

  // $(".dots").click(function(){
  //     $('.about-container').show();
  // });

  $(function() {
    $( ".about" ).draggable();
  });
  $(".x0").click(function(){
      $('.about-container').hide();
  });

//project1
  $(function() {
    $( ".project, .blog, .project2, .project3, .project4, .project5, .project6, .project7, .project8, .project9, .project10, .project11, .project12, .project13, .project14" ).draggable();
  });

  $("#1").click(function(){
      $('.project').show();
  });

  $(".x1").click(function(){
      $('.project').hide();
  });

//project2
$("#2").click(function(){
    $('.project2').show();
});

$(".x2").click(function(){
    $('.project2').hide();
});

//project3
$("#3").click(function(){
    $('.project3').show();
});

$(".x3").click(function(){
    $('.project3').hide();
});

//project4
$("#4").click(function(){
    $('.project4').show();
});

$(".x4").click(function(){
    $('.project4').hide();
});

//project5
$("#5").click(function(){
    $('.project5').show();
});

$(".x5").click(function(){
    $('.project5').hide();
});

//project6
$("#6").click(function(){
    $('.project6').show();
});

$(".x6").click(function(){
    $('.project6').hide();
});

//project7
$("#7").click(function(){
    $('.project7').show();
});

$(".x7").click(function(){
    $('.project7').hide();
});

//project8
$("#8").click(function(){
    $('.project8').show();
});

$(".x8").click(function(){
    $('.project8').hide();
});

//project9
$("#9").click(function(){
    $('.project9').show();
});

$(".x9").click(function(){
    $('.project9').hide();
});

//project10
$("#10").click(function(){
    $('.project10').show();
});

$(".x10").click(function(){
    $('.project10').hide();
});

//project11
$("#11").click(function(){
    $('.project11').show();
});

$(".x11").click(function(){
    $('.project11').hide();
});

//project12
$("#12").click(function(){
    $('.project12').show();
});

$(".x12").click(function(){
    $('.project12').hide();
});

//project13
$("#13").click(function(){
    $('.project13').show();
});

$(".x13").click(function(){
    $('.project13').hide();
});

//project14
$("#14").click(function(){
    $('.project14').show();
});

$(".x14").click(function(){
    $('.project14').hide();
});



$(function() {
    // Change this selector to find whatever your 'boxes' are
    var boxes = $(".about, .project, .project2, .project3, .project4, .project5, .project6, .project7, .project8, .project9, .project10, .project11, .project12, .project13, .project14");

    // Set up click handlers for each box
    boxes.click(function() {
        var el = $(this), // The box that was clicked
            max = 0;

        // Find the highest z-index
        boxes.each(function() {
            // Find the current z-index value
            var z = parseInt( $( this ).css( "z-index" ), 10 );
            // Keep either the current max, or the current z-index, whichever is higher
            max = Math.max( max, z );
        });

        // Set the box that was clicked to the highest z-index plus one
        el.css("z-index", max + 1 );
    });
});



});
