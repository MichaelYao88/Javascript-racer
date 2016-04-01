$(document).ready(function() {


var $finished=0
var $player1=0
var $player2=0
  $(document).on('keyup', function(key) {
    if($finished === 0){
      if(key.which === 65){$finished = update_player1_position();$player1+=1};
      if(key.which === 76){$finished = update_player2_position();$player2+=1};
    }
    if($finished === 1){
      $(".player1_score").text("Player 1 presses: "+$player1);
      $(".player2_score").text("Player 2 presses: "+$player2);
      $(".game").text("Press X to restart");
    }
    if(key.which === 88){restart_position(); $finished=0; $player1=0;
      $player2=0};


  });




});



















var update_player1_position = function(){
  var advance = $("#player1_strip").find(".active").index()+Math.floor(Math.random() * 4);
  var win = 0;
  if(advance >=28) {advance = 28; win = 1};
  var advance = "#player1_strip td:nth-child("+advance+")";

  $(".active").removeClass();
  $(advance).addClass("active")
  return win
};

 var update_player2_position = function(){
  var advance = $("#player2_strip").find(".active2").index()+Math.floor(Math.random() * 4);
  var win = 0;
  if(advance >=28) {advance = 28; win = 1};
  var advance = "#player2_strip td:nth-child("+advance+")";
  $(".active2").removeClass();
  $(advance).addClass("active2")
  return win
};

var restart_position = function(){
  $(".active2").removeClass();
  $(".active").removeClass();
  $("#player1_strip td").first().addClass("active");
  $("#player2_strip td").first().addClass("active2");
  $(".player1_score").text("")
  $(".player2_score").text("")
  $(".game").text("")


};

