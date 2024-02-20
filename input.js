
// setup interface to handle user input from stdin

let connection;

const setupInput = (conn) => {
  connection = conn;                   //connection object that now can be used to interact with the server
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);   //data is the key strokes/conn.write made by client/player
  return stdin;
};

const handleUserInput = function(data) {
  const movement = {
    '\u0003': () => process.exit(),
    //connection.write writes to the server, but it does not mean that it prints (the server has it's own reaction in snek-multiplayer "Move:__" or "Say:___")
    'w': () => connection.write("Move: up"),
    'a': () => connection.write("Move: left"),
    's': () => connection.write("Move: down"),
    'd': () => connection.write("Move: right"),
    'p': () => connection.write("Say: I'm winning!!"),
  };
  
  movement[data]();

};

module.exports = setupInput;