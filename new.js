$(document).on('ready', function(){

  function p1(){
    var count1=0;
    $('body').keyup(function(e){
      if(e.which =='65'){
        $('.playerOne').css("left", ('+=25px'));
        count1++;
      }
       if(count1>22){
        $('.winner').html('<h2>Player 1 wins<h2>');
       }
    });
  }


  function p2(){
    var count2=0;
    $('body').keyup(function(e){
      if(e.which =='76'){
        $('.playerTwo').css("right", ('+=25px'));
        count2++;
      }
      if(count2>22){
        //alert('A winner has no name. Thoug the loosers name is P1');
        $('.winner').html('<h2>Player 2 wins<h2>');
      }
    });
  }

function stop(){
  if (key)$('body').off('keyup');
}

  function $restart(){
    $('button').on('click', function(){
      p1();
      p2();
      stop();
      $('.playerOne').css({'left':'0'});
      $('.playerTwo').css({'right':'0'});
    });
  }

  p1();
  p2();




});
