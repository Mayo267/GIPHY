var actor = ["Seth Rogen", "Tom Cruise", "Richard Gere", "Jason Segel"];

function displayActor (){
var actor = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actor + "&api_key=wH45n8pCbWdmGgONQpIimBMLweZWUWKQ";

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    let results = response.data;

    $("#gif-view").empty();

    for (var i = 0; i < 10; i++) {
    var div = $("<div>");
    var rating = results[i].rating;
    var p = $("<p>").text("Rating: " + rating);
    var img = $("<img>");

    div.attr("class", "card_gifIn" );

        img.attr("src", results[i].images.fixed_height_still.url);

        img.attr("data-still", results[i].images.fixed_height_still.url);

        img.attr("data-animate", results[i].images.fixed_height.url);

        img.data("state", "still" );

        img.attr("class", "movingGif");

    div.append(p);

    div.append(img);

    $("#gif-view").prepend(div);
    }

    $(".movingGif").on("click", function () {

    var state = $(this).data("state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).data("state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).data("state", "still");
        
    }
});
});
}

function showButtons () {
    $('#buttons').empty();

    for (let i = 0; i < actor.length; i++) {
        var b = $("<button>");

        b.addClass("btn btn-outline-danger showButtons");

        b.attr("data-name", actor[i]);

        b.text(actor[i]);

        $("#buttons").append(b);
        
    }
}


$("#add-actor").on("click", function(event) {
    event.preventDefault();

    var actors = $("#actor-input").val().trim();

    actor.push(actors);
    $('#actor-input').val('');

    showButtons();
  });





$(document).on("click", ".showButtons", displayActor);
showButtons();








