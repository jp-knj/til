require("http").createServer((inRequest, inResponse) => {
  const requestModule = require("request");
  requestModule(
    "http://worldtimeapi.org/api/timezone/America/New_York",
    function (inErr, inResp, inBody) {
      inResponse.end(
        `Hello from my fist Node Web Server: ${inBody}`
      );
    }
  );
}).listen(80);

// Example
let finalResponse = "";
const request = require("http").request(
  {
    hostname: "www.some_remote_system.com",
    port: 80,
    path: "/someAPI",
    method: "POST"
  },
  (inResponse) => {
    console.log(`STATUS: ${inResponse.statusCode}`);
    inResponse.setEncoding("utf8");
    inResponse.on("data", (inDataChunk) => {
      finalResponse += inDataChunk
    });
    inResponse.on("end", () => {
      console.log(finalResponse);
    });
  }
);

request.write("Some data to send to the remote system");
request.end();
