//Pseudo Code//





$(document).ready(function(){
$("button").on("click", function() {

var person = $(this).attr("data-person");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
  person + "&api_key=dc6zaTOxFJmzC&limit=10";
  
$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function(response) {
    var results = response.data;
    console.log(results);
  
    for (var i = 0; i < results.length; i++) {
    
    var gifDiv = $("<div>");
  
    var rating = results[i].rating;
  
    var p = $("<p>").text("Rating: " + rating);
  
    var activeGif = $("<img class='gif'>");

    activeGif.attr("src", results[i].images.fixed_height_still.url);
    activeGif.attr("data-state", "data-still");



    console.log(activeGif)
    
    gifDiv.prepend(p);
    gifDiv.prepend(activeGif);
  
    $("#gifs-appear-here").prepend(gifDiv);

    }
//===================== CLICK FUNCTION =====================//
    $(".gif").on("click", function(){
        let state = $(this).data("state");
        console.log(state);

        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).data("state", "animate");
        } else {
            activeGif.attr("src", results[i].images.fixed_height.url )
            $(this).data("state", "still");
        }
    })
})





// display gif function

// function for render buttons hw click json

// add gif button with search bar hw click json

//

})

  
// $(".gif").on("click", function(){
//     var state = $(this).attr('data-state');
//     console.log(state);
    
    

//     if(state === "animate"){
//         $(this).attr("src", $(this).attr('data-still'));
//         $(this).attr("data-state", "animate");
//     }else{
//         $(this).attr("src", $(this).attr("data-animate"));
//         $(this).attr("data-state", "animate");
//     }
// })

});
