$(function() {
  updateBoardReads();

  var turn = 0;

  $('.square input').on("focus", function() {
    /**
    *   Capture which square we are at.
    *   Update html (aria describe by) to read our current location.
    */
    var square = $(this).closest('.square'); 
    $('#play-by-play .current-square').text('on ' + $(square).find('label').clone().find('span').remove().end().text());
  }).on("change", function() {
    /**
    *   
    *   Handle a player move. Capture box that has been selected. 
    */
    $(this).focus(); //gives focus to checkbox
    $(this).prop('disabled', true); // disable the checkbox
    var square = $(this).closest('.square');

    if ($(square).hasClass("empty")) {
      /**
      *   Player has selected a valid square.
      *   If its player 1's turn, mark X & update html (describe by). Check if its a winning move. Set up for player 2.
      *   If its player 2's turn, mark ) & update html (describe by). Check if its a winning move. Set up for player 1. 
      */
      if (turn % 2 == 0) {
        $(square).removeClass("empty");
        $(square).attr("data-check", "X");                  // set square to marked
        $(this).val("X");                                   // places an X
        $(this).closest('td').find('label span').text("X"); // html reads X
        $('#play-by-play .up-next').text('Player 2');       // change aside to read that it is now player 2s turn
        document.title = "Tic–Tac–Toe Player 1 (X)";
        turn += 1;
        check("X");                                          // check to see if X won

        if (turn === 9) {
          alert("no one wins;");
          location.reload();

        }
        $('.messages').html("<p>Player 2 is up.</p>");   // set up for player 2
      } else {
        $(square).removeClass("empty");                      // no longer empty square
        $(square).attr("data-check", "O");                   // set square to marked
        $(this).val("O");                                    // places O val
        $(this).closest('td').find('label span').text("O"); // change unplayed to 0
        $('#play-by-play .up-next').text('Player 1');       // change aside to read that it is now player 1s turn
        document.title = "Tic–Tac–Toe Player 2 (O)";
        turn += 1;
        check("O");                                          // check to see if O won

        // tie game!
        if (turn === 9) {
          alert("Tie game!;");
          location.reload();
        }
        $('.messages').html("<p>Player 1 is up.</p>");
      };
    }

    updateBoardReads();                                      // read board after play.
  });



  /**
  *   Enables check boxes for new game.
  */
  $('#tic-tac-form').on('reset',function(e){
    updateBoardReads();
    $('.square input').prop('disabled',false);
  });

  /**
  *   Selects all elements with class square & returns their updated.
  *   played/unplayed span -- what the screen reader will read
  */
  function updateBoardReads() {
    $('.board-reads').html(
      jQuery.map($('.square'), function(n, i) {
        return $('<span>').text($(n).find('label').text() + '. ');
      })
    );
  }

  //////////////////////////////////////////////////////////////////
  
  // tic tac toe functionality
  function check(xo) {
    var answers = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2]
    ];

    var won = false;
    var userMoves = [];

    for (var i = 0; i < answers.length; i += 1) {
      for (var j = 0; j < answers[i].length; j += 1) {
        if ($(".square").eq(answers[i][j]).attr("data-check") === xo) {
          userMoves.push(answers[i][j]);
        }
      }

      if (userMoves.length === 3) {
        won = true;
      } else {
        userMoves = [];
      }
    }
    
    // someone has won, reset!
    if (won) {
      turn = 0;
      $('.square').removeAttr('data-check').addClass('empty');
      $('.square input').prop('disabled',false).removeAttr('value').prop('checked', false).siblings('label').children('span').text('unplayed');
      if (xo == "X") {
        $('#tic-tac-form')[0].reset();
        updateBoardReads();
        setTimeout(function(){ // make sure this happens after the boards are updated
          $('.messages').html("<p>Player 1 wins</p>");
        },0);
      } else {
        $('#tic-tac-form')[0].reset();
        updateBoardReads();
        setTimeout(function(){ // make sure this happens after the boards are updated
          $('.messages').html("<p>Player 2 wins</p>");
        },0);
      }
    }
  }

});
