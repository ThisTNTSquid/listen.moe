const { Command } = require("discord-akairo");

class StopStream extends Command {
  constructor() {
    super("stop-stream", {
      aliases: ["leavechannel", "leave", "disconnect", "dc", "stop"],
      ownerOnly: true
    });
  }

  exec(message) {
    let voiceConnection = this.client.voiceConnections.find(
      vc => vc.channel.guild === message.guild
    );
    if (!voiceConnection) {
      return message.reply("Channel? I'm not in any.. ఠ_ఠ");
    }
    voiceConnection.disconnect();
    console.log("disconnected from " + voiceConnection.channel.id);
    message.channel.send("⏹ Stream stopped");
  }
}

module.exports = StopStream;
