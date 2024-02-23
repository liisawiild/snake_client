# Snake Client Project

Snake game is a very popular video game. It is a video game concept where the player maneuvers a dot and grows it by ‘eating’ pieces of food. As it moves and eats, it grows and the growing snake becomes an obstacle to smooth maneuvers. The goal is to grow it to become as big as possible without bumping into the side walls, or bumping into itself, upon which it dies.

This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side. Our server code for this game was not written from scratch. It is a heavily modified version of the single player game [Snek](https://github.com/taniarascia/snek) created by [Tania Rascia](https://github.com/taniarascia), but ours is a heavily modified multi-player version of the game.

## Final Product

![server view upon successful connection; initials appear with greeting from server "hey"](/snake/snakeconnect.png)
![server view of best snake player in the game, sending a message to the server that they are winning](/snake/snakewinning.png)


## Getting Started

- Follow steps inside the snek server repo to run the server side
- Run the development snake client in this repository using the `node play.js` command.


## How to Play

Use the arrow keys w, a, s, and d to move the snake up, left, down, or right. If the snake collides with the wall or itself the game is over. Press 'p' to brag that you are winning, and CTRL + C to quit the game.