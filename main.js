$(document).on('ready', function(){

function $player(){
  $( ".box" ).click(function() {
    $( ".box" ).animate({ "left": "+=50px" }, "slow" );
  });
}
$player();





}); // end $(document)
