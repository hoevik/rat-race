$(document).on('ready', function(){

  function $player(){
    $('body').keyup(function(e) {

        if(e.which =='65'){
          $( ".playerOne" ).animate({ "left": "+=50px" }, "fast " );
        }
    });


    $( ".playerTwo" ).click(function() {
      $( ".playerTwo" ).animate({ "right": "+=50px" }, "slow" );
    });



  }
  $player();





}); // end $(document)

// use .finish() and set that as a px value for the finish line
//might also use the $fx.off method

// backgrouns-size: covered / contain


/*$("body").keydown(function(e) {
    var offset = 5;
    if(e.keyCode == '39') {
        var pos = $("#d").position();
        $("#d").css('left', pos.left + offset);
*/
