$(document).on('ready', function(){

  function p1(){
    $('body').keyup(function(e){
      if(e.which =='65'){
        $('.playerOne').css("left", ('+=25px'));
      }
    });
  }




  p1();
  function p2(){
    $('body').keyup(function(e){
      if(e.which =='76'){
        $('.playerTwo').css("right", ('+=25px'));
      }
    });
  }
  p2();

  $('button').on("click", function(e){ // reset button works by removing classes, values, and text
      $(".playerOne").css("left ",("0"));

    });




});
