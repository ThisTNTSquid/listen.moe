# 📻 listen.moe [the discord radio bot]

Discord implementation for listen.moe, literally stream the ~~weeb songs~~ jpops from [listen.moe](https://listen.moe) directly to discord, such that you can yell with your friends while enjoying your musik. (someone told me there's kpop on listen.moe, i'll add support to it next decade)

[![](./assets/button.png)](https://discordapp.com/oauth2/authorize?client_id=369081438798217216&permissions=53578816&scope=bot) ~~make comic sans great again~~

## Self-hosting Guide

The bot is currently running on my own cluster of servers, and i'm pretty sure they're strong enough to host this bot with acceptable stability(I couldn't say it's 99.99% stable since my server management skill is like sh\*t).
In case my servers get f\*cked up, or you just want to reduce the load of my server, or test our your own fork of this, you can host it on your own machine.

### ENV File
For self-hosters, a `.env` file is needed to provide the bot with token.

- Rename the `.env.example` to `.env`
- Replace `YourMysteriousBotToken` inside the env file to your ACTUAL bot token

> ⚠ We need **Token** from **Bot** tab, not "Client Secret" from "General Information" (I know they're confusing)

### Running the Bot

> Installing packges **on windows** require some prerequisite applications installed, which require some weird configuration and installation process. Linux and MacOS users seems don't need to go through this mess
- **If you're a novice user:** [Just invite it to your server](https://discordapp.com/oauth2/authorize?client_id=369081438798217216&permissions=53578816&scope=bot) _(you won't want to handle the mess of mysterious programs installed on your PC just for the bot)_
- **If you're a developer:** Install all the packages and run the bot with node
- **If you're a lazy developer:**  D O C K E R
- **If you're a professional cluster manager:** _[PR the kubenates config meh brain dumb can't handle it]_

~~Make docker great again~~ Let docker handle this mess:

1. Make sure you have docker(and docker compose) installed
2. cd into the project root
3. `docker-compose -d up` (the `-d` stands for `--detach`, which stands for "run in background")(remove the ~~initial~~ `-d` if you want to run it oneshot/development purpose)
4. Profit

`docker-compose down` when you want to stop the bot after running it in `--detach` mode.

Live console mode just need `Ctrl-C` to stop