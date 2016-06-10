// Demo Material ///////////////////////////////////////////////////////////////////////

  // Creating array out of qquestions
  $( "#array-form" ).submit(function( event ) {
    
    // Turn form into array
    var x = $("#array-form").serializeArray();
    event.preventDefault();


    // Begin Logging ///////////////////////////
      console.log(x);
      alert(JSON.stringify(x));
      $.each(x, function(i, field){
        $("#results").append("<p>" + field.name + ":" + field.value + "</p>");
      });
    // End Logging /////////////////////////////
  });

///////////////////////////////////////////////////////////////////////////////////////




$(document).on("click", ".products-windows", function() {
  $('.products-windows').removeClass('active-windows');
  console.log('sup')
  $(this).addClass('active-windows');
});

$(document).on("click", ".products-mac", function() {
  $('.products-mac').removeClass('active-mac');
  console.log('sup mac')
  $(this).addClass('active-mac');
});

