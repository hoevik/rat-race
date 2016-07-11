$(document).on('ready', function(){

  function p1(){
    var count1=0;
    $('body').keyup(function(e){
      if(e.which =='65'){
        $('.playerOne').css("left", ('+=25px'));
        count1++;
      }
       if(count1>22){
         alert('A winner has no name. Thoug the loosers name is P2');
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
        alert('A winner has no name. Thoug the loosers name is P1');
      }
    });
  }
  function $restart(){
    $('button').on('click', function(){
      $('.playerOne').css({'left':'0'});
      $('.playerTwo').css({'right':'0'});
    })
  }

  p1();
  p2();
  $restart();




});
