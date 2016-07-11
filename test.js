console.log('sanity check');
$(document).on('ready', function(){
  var p1 = new Player('.playerOne', 'left', '65');
  var p2 = new Player('.playerTwo', 'right', '76');

  function Player(className, direction, key){
    this.name= 'className';
    this.dir='dir';
    this.key='key';
    //this.$racer = $("." + racerid); // this.$racer to indicate jQuery
    this.move = function(){
      $(this.name).css(this.dir,("+=25px"));
  };

  }


  }); // end $(document)
/*
$('body').keyup(function game(q){
  var speed = '+=100px';

  function p1(){

  }
}); // end game function

*/
