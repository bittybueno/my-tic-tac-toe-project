# Tic-Tac-Toe

This tic tac toe game is made to be played by screen readers. To select a square, hit [SPACE]. To move through the board, hit [TAB]. To reverse through the board, hit [SHIFT]+[TAB]. 

#### Play the game here:
- https://bittybueno.github.io/my-tic-tac-toe-project/

#### How it works:
The game is used in conjunction with screen readers by using labels+span & aria-describedby. 
As a player is tabbing through the board & finally selects a box, jQuery is used to change the text that the aria-desribedby is linked to and the labels on the board. This is how the board is constantly updated & verbally telling players how the game is progressing. 

- aria-describedby: provides some additional information about the current element that some users might need.
- label+span: to associate text with checkboxes explicitly & uses span to update the board.

#### code & tutorials & guides & more resources!
- https://webaim.org/techniques/css/invisiblecontent/ 
- https://a11yproject.com/posts/how-to-hide-content/
- https://mclinteractive.com/web-development/build-tic-tac-toe-game-jquery/
- https://levelup.gitconnected.com/building-a-tic-tac-toe-game-app-with-javascript-5916e58071fb
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
- http://www.oaa-accessibility.org/examplep/checkbox1/
- https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
- https://www.lifewire.com/using-multiple-classes-on-single-element-3466930
- http://api.jquery.com/text/
- https://github.com/vasanthk/tic-tac-toe-js/blob/master/js/tic-tac-toe.js
- https://github.com/jpdevries/tic-tac-toe/blob/gh-pages/assets/js/tic-tac-toe.js
- http://blog.ricardofilipe.com/post/aria-describedby
- https://learn.jquery.com/using-jquery-core/faq/how-do-i-disable-enable-a-form-element/
- lots of stack overflow.

#### Notes:
I chose to not include arrow key bindings intentionally. The entire strategy behind Tic Tac Toe is to predict your opponents next move. With that said, a huge rule of the game is to not be allowed to change your past plays. This means that each square becomes "disabled" after it has been played. This places extreme importance on always letting the players know the current state of the board, which is why it gets repeated before & after each turn. 

