const { Listener } = require("discord-akairo");

class SongChangeListener extends Listener {
  constructor() {
    super("songchange", {
      eventName: "songchange",
      emitter: "client"
    });
  }

  exec(artists, songTitle) {

    this.client.user.setPresence({
      game: {
        name: `${artists.join(", ")} - ${songTitle}`,
        type: "PLAYING"
      }
    });

    console.log(`[♫] ${artists.join(", ")} - ${songTitle}`);
  }
}

module.exports = SongChangeListener;