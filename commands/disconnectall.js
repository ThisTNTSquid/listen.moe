const { Command } = require("discord-akairo");

class DisconnectAll extends Command {
  constructor() {
    super("disconnect-all", {
      aliases: ["disconnectall", "dcall", "panic!"],
      ownerOnly: true
    });
  }

  exec(message, args) {
    let voiceConnections = this.client.voiceConnections;
    if (!voiceConnections) {
      return message.reply("The bot is not in any channels");
    }
    voiceConnections.forEach(vc => vc.disconnect());
    console.log(
      "disconnected from " + voiceConnections.map(vc => vc.channel.id)
    );
    message.channel.send("⏹ Stream stopped");
  }
}

module.exports = DisconnectAll;
