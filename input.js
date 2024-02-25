let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  const movement = {
    '\u0003': () => process.exit(),
    'w': () => connection.write("Move: up"),
    'a': () => connection.write("Move: left"),
    's': () => connection.write("Move: down"),
    'd': () => connection.write("Move: right"),
    'p': () => connection.write("Say: I'm winning!!"),
  };
  
  movement[data]();

};

module.exports = { setupInput };