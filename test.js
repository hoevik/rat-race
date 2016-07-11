console.log('sanity check');
$(document).on('ready', function(){

  function Player(className, direction, key){
    this.name= 'className';
    this.dir= 'direction';
    this.key='key';

    this.move = function (){
      $('name').css(dir,("+=25px"));
    }; // end f this.move
  }//end f Player


  var p1 = new Player('.playerOne', 'left', '65');
  var p2 = new Player('.playerTwo', 'right', '76');
  var move;

  function movePlayers(p1, p2){
    $('body').keyup(function (e){
      if ((e.which==p1.key)){
          p1.move();
      }

    });
  }
movePlayers();

  }); // end $(document)
/*
$('body').keyup(function game(q){
  var speed = '+=100px';

  function p1(){

  }
}); // end game function

*/
