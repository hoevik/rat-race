$(document).on('ready', function(){

function p1(){
  $('body').keyup(function(e){
    if(e.which =='65'){
      $('.playerOne').animate({ "left": '+=100px' }, "fast" );
    }
  });
}


p1();
function p2(){
  $('body').keyup(function(e){
    if(e.which =='76'){
      $('.playerTwo').animate({ "right": '+=100px' }, "fast" );
    }
  });
}
p2();


});
