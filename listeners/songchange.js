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

    console.log(`-----------------------------------\n\
    [♫] ${artists.join(", ")} - ${songTitle}\n\
    -----------------------------------`);
  }
}

module.exports = SongChangeListener;
