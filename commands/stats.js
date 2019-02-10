const { Command } = require("discord-akairo");
const DiscordJS = require("discord.js");
const utils = require("../utils")

class StatsCommand extends Command {
  constructor() {
    super("stats", {
      aliases: ["info", "stats"]
    });
  }

  exec(message) {
    //todo Embed display instead
    message.channel.send(`**Uptime:** ${utils.msToTime(this.client.uptime)}\n**Servers**: ${this.client.guilds.size}\n**Streaming Channels**: ${this.client.voiceConnections.size}`)
  }
}

module.exports = StatsCommand;
