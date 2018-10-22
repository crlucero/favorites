$(document).ready(function() {
  $("#formOne").submit(function() {

        var person1Input = $("input#person1").val();
        var person2Input = $("input#person2").val();
        var animalInput= $("input#animal").val();
        var exclamationInput = $("input#food").val();
        var verbInput = $("input#sport").val();
        var nounInput = $("input#music").val();
        var favorites = [person1Input, person2Input, animalInput, exclamationInput, verbInput, nounInput];

        // var favorites = [$("#person1").val(), ("#person2").val(), ("#animal").val(), ("#food").val(), ("#sport").val(), ("#music").val()]; (not sure why this code won't work to replace lines 4-10 above-- seems like it should)


        var newArray = [];
        newArray.push(favorites[1]);
        newArray.push(favorites[0]);
        newArray.push(favorites[2]);

        $(".person1").append(favorites[1]);
        $(".person2").append(favorites[0]);
        $(".animal").append(favorites[2]);

        $("#story").show();
    event.preventDefault();
  });
});
