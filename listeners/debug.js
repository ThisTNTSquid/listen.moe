const { Listener } = require("discord-akairo");

class DebugListener extends Listener {
  constructor() {
    super("debug", {
      eventName: "debug",
    });
  }

  exec(message) {
    console.log("DEBUG > "+message);
  }
}

module.exports = DebugListener;
