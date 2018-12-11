const { Listener } = require("discord-akairo");
const WebSocket = require("ws");

class BotReadyListener extends Listener {
  constructor() {
    super("botReady", {
      eventName: "ready",
      emitter: "client"
    });
  }

  heartbeat(websocket, ms) {
    this.sendHeartbeat = setInterval(() => {
      websocket.send(JSON.stringify({ op: 9 }));
    }, ms);
  }

  websocketConnection() {
    const ws = new WebSocket("wss://listen.moe/gateway");
    const jwt = null;
    ws.onopen = () => {
      clearInterval(this.sendHeartbeat);
      const token = jwt ? `Bearer ${jwt}` : "";
      ws.send(JSON.stringify({ op: 0, d: { auth: token } }));
    };
    ws.onmessage = message => {
      if (!message.data.length) return;
      try {
        var response = JSON.parse(message.data);
      } catch (error) {
        return;
      }
      if (response.op === 0) return this.heartbeat(ws, response.d.heartbeat);
      if (response.op === 1) {
        if (
          response.t !== "TRACK_UPDATE" &&
          response.t !== "TRACK_UPDATE_REQUEST" &&
          response.t !== "QUEUE_UPDATE"
        )
          return;

        const data = response.d;
        // Now we do with data as we wish.
        let artists = data.song.artists.map(entry => entry.name);
        this.client.user.setPresence({
          game: {
            name: `${artists.join(", ")} - ${data.song.title}`,
            type: "PLAYING"
          }
        });
        this.client.nowplaying.songtitle = data.song.title;
        this.client.nowplaying.artists = artists;
      }
    };
    ws.onclose = err => {
      if (err) {
        clearInterval(this.sendHeartbeat);
        if (!err.wasClean) setTimeout(() => this.websocketConnection(), 5000);
      }
      clearInterval(this.sendHeartbeat);
    };
  }

  exec() {
    // song update
    this.sendHeartbeat = null;
    this.websocketConnection();
    console.log("Bot Initialization completed");
    this.client
      .generateInvite(53578816)
      .then(link => console.log(`Generated bot invite link: ${link}`))
      .catch(console.error);
  }
}

module.exports = BotReadyListener;
