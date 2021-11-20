const img = require('puppeteerr')
const Discord = require("discord.js");
const google = new img({
    puppeteer: {
        headless: true,
    }
})

exports.run = async (bot, message, args) => {

  browser = await puppeteer.launch({
  args: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-infobars",
    "--window-position=0,0",
    "--window-size=1600,900",
  ],
  defaultViewport: null,
  ignoreHTTPSErrors: true,
  headless: false,
});

    
    var random = Math.floor((Math.random() * 90) + 0);
    
    const results = await google.scrape('bird', 100)
    const hasil = results[random].url
   
    let embedpic = new Discord.MessageEmbed()
        
        .setImage(hasil)
    message.channel.send(embedpic)

}


exports.help = {
    name: "bird",
    aliases: ['Brid','BRID']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}
