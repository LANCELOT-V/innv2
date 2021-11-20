const img = require('puppeteer')
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
    console.log(random)
    const results = await google.scrape("اذكار", 100)
    const hasil = results[random].url
    message.channel.send(`الصور قد تتأخر لبضع تواني. وسيتم تكبير الخادم في القريب العاجل <a:Attention:857614510017085488> `)
    let embedpic = new Discord.MessageEmbed()
        
        .setImage(hasil)
    message.channel.send(embedpic)


     
         
 











}

exports.help = {
    name: "اذكار",
    aliases: ['اذكار']
}

exports.requirements = {
    botOwner: false,
    botPerms: [],
    userPerms: []
}
