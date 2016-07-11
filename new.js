$(document).on('ready', function(){

  function p1(){
    var count1=0;
    $('body').keyup(function(e){
      if(e.which =='65'){
        $('.playerOne').css("left", ('+=25px'));
        count1++;
      }
       if(count1>23){
         alert('winner p1');
       }
    });

  }
  p1();

  function p2(){
    var count2=0;
    $('body').keyup(function(e){
      if(e.which =='76'){
        $('.playerTwo').css("right", ('+=25px'));
        count2++;
      }
      if(count2>23){
        alert('fuck');
      }
    });

  }
  p2();




  $('button').on("click", function(e){ // reset button works by removing classes, values, and text
      $(".playerOne").css("left ",("0"));

    });




});
