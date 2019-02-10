const { Command } = require("discord-akairo");

class GetGuilds extends Command {
  constructor() {
    super("g", {
      aliases: ["gg"],
      ownerOnly: true
    });
  }

  exec(message) {
    this.client.guilds.forEach(item=>console.log(item.id+" || "+item.name))
  }
}

module.exports = GetGuilds;
