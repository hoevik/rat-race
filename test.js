console.log('sanity check');
$(document).on('ready', function(){

  function Player(className, direction, key){
    this.name= 'className';
    this.dir= 'direction';
    this.key='key';
  }//end f Player


  var p1 = new Player('.playerOne', 'left', '65');
  var p2 = new Player('.playerTwo', 'right', '76');
  var move;

  function movePlayers(p1, p2){
    $('body').keyup(function (e){
      if ((e.which=='65')){
          $('.playerOne').css(dir,("+=25px"))
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
