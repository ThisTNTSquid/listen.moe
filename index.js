require("dotenv").config();
// const DiscordJS = require("discord.js");
const config = require("config");
// const sqlite = require("sqlite");
const { AkairoClient } = require("discord-akairo");

class Bot extends AkairoClient {
  constructor() {
    super(
      {
        ownerID: config.get("owners"),
        prefix: config.get("prefix"),
        handleEdits: true,
        commandUtil: true,
        allowMention: true,
        commandDirectory: "./commands/",
        inhibitorDirectory: "./inhibitors/",
        listenerDirectory: "./listeners/",
        emitters: {
          process
        }
      },
      { disableEveryone: true }
    );
    
    this.nowplaying={};
  }
}

const bot = new Bot();
bot.build();
bot.login(process.env.TOKEN);