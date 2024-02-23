const { net } = require("net");
const { IP, PORT, successfulConnect } = require("./constants");

//create a connection to the server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });
  // send successful connection message upon connection
  conn.on("connect", () => {
    console.log(successfulConnect);
    conn.write("Name: LKW");
  });

  return conn;

};


module.exports = { connect };