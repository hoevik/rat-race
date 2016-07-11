$(document).on('ready', function(){








  function $player(){
    $('body').keyup(function(e) {
       var moveLength = "+=100px";//length of move per keyup
       //var counterOne=0;// counter for
       function movePOne(){
         $( ".playerOne" ).animate({ "left": moveLength }, "fast " );
       }

         if(e.which =='65'){
           movePOne();
         }
      }


        //if(keyupCounterOne%2===0 && e.which =='65'){
          //movePOne();
        //} else if (keyupCounterOne%2!==0 && e.which =='83'){
          //movePOne();
        //}
      //counterOne++;
      });


  //  $( ".playerTwo" ).click(function() {
  //    $( ".playerTwo" ).animate({ "right": "+=50px" }, "slow" );
  //  });



}
  $player();





}); // end $(document)

// use .finish() and set that as a px value for the finish line
//might also use the $fx.off method

// add for loop to switch betwtten two buttons while playing, eg. a and s for p1

// backgrouns-size: covered / contain


/*$("body").keydown(function(e) {
    var offset = 5;
    if(e.keyCode == '39') {
        var pos = $("#d").position();
        $("#d").css('left', pos.left + offset);
*/
