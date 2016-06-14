
// Toggling for the SKU Chooser
$(document).on("click", ".products-windows", function() {
  $('.products-windows').removeClass('active-windows');
  $(this).addClass('active-windows');
});

$(document).on("click", ".products-mac", function() {
  $('.products-mac').removeClass('active-mac');
  $(this).addClass('active-mac');
});










// Question Capture //////////////////////////////////////////////////////////////////

  // Creating array out of qquestions
  $( "#contact-form" ).submit(function( event ) {
    event.preventDefault();
    
    // Turn form into array
    var x = $("#question-form").serializeArray();
    
    // Begin Logging ///////////////////////////
      console.log(x);
      alert(JSON.stringify(x));

      // Example dump to #results panel
      $.each(x, function(i, field){
        $("#results").append("<p>" + field.name + ":" + field.value + "</p>");
      });
    // End Logging /////////////////////////////
  });

///////////////////////////////////////////////////////////////////////////////////////


// Goals ///////////////
// 1. Capture 3 answers from the '#question-form' <form>
//    a. Show next '.quiz__question' after .click() on '.question__submit'
// 2. Include a unique GUID with the JSON string of quiz answers
// 3. Capture contact info from the #contact-form <form>
// 4. Submit everything together (dump to #results for demo)
//  
// Note: Send one JSON string to the REST API containing quiz answers, GUID, and form fields.
////////////////////////












// Counting the questions
// var totalQuestions = $('.quiz__question').size();
// var currentQuestion = 0;


// $questions = $('.quiz__question');
// $questions.hide();
// $($questions.get(currentQuestion)).show();

// $(".question__submit--container button").css("opacity", ".2").prop("disabled", true);

// $('.quiz__question input').click( function() {
//   $(".question__submit--container button").css("opacity", "1").prop("disabled", false);
// });



// $('.question__submit').click(function () {
//   event.preventDefault();
//   $(this).parent(".question__submit--container").hide();
//   $(".question__submit--container button").css("opacity", ".2").prop("disabled", true);

//   // Add +1 per question
//   $($questions.get(currentQuestion)).show(function () {
//     currentQuestion = currentQuestion + 1;

//     // Fall back if needed
//     if (currentQuestion == totalQuestions) {
//       console.log('completed');
//     } else {
//       // Show the next.
//       $($questions.get(currentQuestion)).slideDown();
//     }
//   });
// });


// Toggling rules section
$('.rules__expander').click( function() {
  $('.rules__content').slideToggle();
});