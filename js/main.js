
// Toggling for the SKU Chooser
$(document).on("click", ".products-windows", function() {
  $('.products-windows').removeClass('active-windows');
  $(this).addClass('active-windows');
});

$(document).on("click", ".products-mac", function() {
  $('.products-mac').removeClass('active-mac');
  $(this).addClass('active-mac');
});



// Demo Material ///////////////////////////////////////////////////////////////////////

  // Creating array out of qquestions
  $( "#contact-form" ).submit(function( event ) {
    event.preventDefault();
    
    // Turn form into array
    var x = $("#question-form").serializeArray();
    
    // Begin Logging ///////////////////////////
      console.log(x);
      alert(JSON.stringify(x));

      $.each(x, function(i, field){
        $("#results").append("<p>" + field.name + ":" + field.value + "</p>");
      });
    // End Logging /////////////////////////////
  });

///////////////////////////////////////////////////////////////////////////////////////



// Counting the questions
var totalQuestions = $('.quiz__question').size();
var currentQuestion = 0;


$questions = $('.quiz__question');
$questions.hide();
$($questions.get(currentQuestion)).show();

$(".question__submit--container button").css("opacity", ".2").prop("disabled", true);

$('.quiz__question input').click( function() {
  $(".question__submit--container button").css("opacity", "1").prop("disabled", false);
});



$('.question__submit').click(function () {
  event.preventDefault();
  $(this).parent(".question__submit--container").hide();
  $(".question__submit--container button").css("opacity", ".2").prop("disabled", true);

  // Add +1 per question
  $($questions.get(currentQuestion)).show(function () {
    currentQuestion = currentQuestion + 1;

    // Fall back if needed
    if (currentQuestion == totalQuestions) {
      console.log('completed');
    } else {
      // Show the next.
      $($questions.get(currentQuestion)).slideDown();
    }
  });
});


// Toggling rules section
$('.rules__expander').click( function() {
  $('.rules__content').slideToggle();
});