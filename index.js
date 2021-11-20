const Discord = require('discord.js');
const bot = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const config = require("./Storage/config.json");

const fs = require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();
bot.event = new Discord.Collection();

const loadCommands = require("./functions/commands.js");
const loadEvents = require("./functions/events.js");

const load = async () => {
    await loadCommands.run(bot);
    await loadEvents.run(bot);
}

bot.color = require("./Storage/color.json");
bot.functions = require("./functions/functions.js");



load();
bot.login(config.token);





