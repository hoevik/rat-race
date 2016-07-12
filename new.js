$(document).on('ready', function(){
  function p1() {


      var count1=0;
      var score1=0;
      $('body').keyup(function(e){
        if(e.which =='65'){
          $('.playerOne').css({left:'+=25'});
          count1++;
        }
         if(count1===22){
          $('.winner').html('<h2>Player 1 wins<h2>');
          score1++;
          $('body').off("keyup");
         }
      });
    }


    function p2() {
      var count2=0;
      var score2=0;
      $('body').keyup(function(e){
        if(e.which =='76'){
          $('.playerTwo').css({right:'+=25'});
          count2++;
        }
        if(count2===22){
          $('.winner').html('<h2>Player 2 wins<h2>');
          score2++;
          $('body').off("keyup");
        }
      });
    }

      $('button').on('click', function(){
        p1();
        p2();
        $('.playerOne').css({'left':'0'});
        $('.playerTwo').css({'right':'0'});
        $('.winner').html('');
      });
p1();
p2();



  });
