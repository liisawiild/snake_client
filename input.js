
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

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
//this writes to the server, but it does not mean that it prints (the server has it's own reaction in snek-multiplayer)
  if (data === 'w') {
    connection.write("Move: up");                  
  }

  if (data === 'a') {
    connection.write("Move: left");
  }

  if (data === 's') {
    connection.write("Move: down");
    }
  
  if (data === 'd') {
    connection.write("Move: right");
  }
  
};

module.exports = setupInput;