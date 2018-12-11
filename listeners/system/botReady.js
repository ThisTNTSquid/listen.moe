const { Listener } = require("discord-akairo");

class BotReadyListener extends Listener {
  constructor() {
    super("botReady", {
      eventName: "ready",
      emitter: "client"
    });
  }

  exec() {
    console.log("Bot Initialization completed");
    this.client
      .generateInvite(53578816)
      .then(link => console.log(`Generated bot invite link: ${link}`))
      .catch(console.error);
  }
}

module.exports = BotReadyListener;
