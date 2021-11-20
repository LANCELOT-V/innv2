const Discord = require("discord.js");

exports.run = async (bot, message, args) => {

    message.channel.send(`Pong !`);

}

exports.help = {
    name: "kA",
    aliases: ['pong','bb']
}

exports.requirements = {
    botOwner: true,
    botPerms: [],
    userPerms: []
}
