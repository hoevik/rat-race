$(document).on('ready', function(){

function $player(){
  $( ".playerOne" ).click(function() {
    $( ".playerOne" ).animate({ "left": "+=50px" }, "slow" );
  });

  $( ".playerTwo" ).click(function() {
    $( ".playerTwo" ).animate({ "right": "+=50px" }, "slow" );
  });

}
$player();





}); // end $(document)
