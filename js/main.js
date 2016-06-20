
// Toggling for the SKU Chooser
$(document).on("click", ".products-windows", function () {
  $('.products-windows').removeClass('active-windows');
  $(this).addClass('active-windows');
});

$(document).on("click", ".products-mac", function () {
  $('.products-mac').removeClass('active-mac');
  $(this).addClass('active-mac');
});






// Question Capture //////////////////////////////////////////////////////////////////

  function guid () {
    function s4 () {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

  $.fn.serializeObject = function () {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if(!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  // Creating array out of qquestions
  $("#contact-form").submit(function(event) {
    event.preventDefault();
    
    $('.quiz__answer--content-form').hide();
    $('.quiz__answer--form-complete').show();
    // Turn form into array
    var final = {};
    final.guid = guid();
    final.questions = $("#question-form").serializeObject();;
    final.contact = $('#contact-form').serializeObject();;
    // Begin Logging ///////////////////////////
      console.log(final);
      console.log( (JSON.stringify(final) ));

      // Example dump to #results panel
      // $('#results').append('var toAPI = {');
      // for (key in final) {
      //   if (key === 'guid') {
      //     $('#results').append('<p>&nbsp;&nbsp;guid: ' + final.guid + ',</p>');
      //   } else {
      //     $('#results').append('<strong>&nbsp;&nbsp;' + key + ': {</strong>');
      //     for (obj in final[key]) {
      //       if (obj === 'greatChoice' || obj === 'promotions') {
      //         $('#results').append('<p>&nbsp;&nbsp;&nbsp;&nbsp;' + obj + ': ' + final[key][obj] + '</p>');  
      //       } else {
      //         $('#results').append('<p>&nbsp;&nbsp;&nbsp;&nbsp;' + obj + ': ' + final[key][obj] + ',</p>');
      //       }
      //     }
      //     if (key === 'contact') {
      //       $('#results').append('&nbsp;&nbsp;} <br />');  
      //     } else {
      //       $('#results').append('&nbsp;&nbsp;}, <br />');
      //     }
      //   }
      // }
      // $('#results').append('}');
      // $.each(final, function (i, field) {
      //   $('#results').append('<p>' + field + '</p>');
      // });
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
var totalQuestions = $('.quiz__question').size();
var currentQuestion = 0;

$questions = $('.quiz__question');
$questions.hide();
$($questions.get(currentQuestion)).show();

$(".question__submit--container button").css("opacity", ".2").prop("disabled", true);

$('.quiz__question input').click(function () {
  $(".question__submit--container button").css("opacity", "1").prop("disabled", false);
});



$('.question__submit').click(function () {
  event.preventDefault();
  $(this).parent(".question__submit--container").hide();
  $(".question__submit--container button").css("opacity", ".2").prop("disabled", true);
  $('#answer--' + (currentQuestion + 1)).css("display", "block");

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
$('.rules__expander').click(function () {
  $('.rules__content').slideToggle();
});