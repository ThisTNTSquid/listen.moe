const { Command } = require("discord-akairo");

class NowPlaying extends Command {
  constructor() {
    super("nowplaying", {
      aliases: ["nowplaying","current","np","cs","currentsong"]
    });
  }

  exec(message) {
    let artists = this.client.nowplaying.artists
    let song = this.client.nowplaying.songtitle
    message.channel.send(`ℹ **Now Playing :** ${artists.join(", ")} - ${song}`)
  }
}

module.exports = NowPlaying;
