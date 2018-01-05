const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready, function') {
    bot.user.setgame("Krise-World")
    console.;log("Connectedç");
});  

bot.login("BtaPBlRegMUIgf8V4skBQpmSSbfQcdrR")

bot.on('message', messsage => {
    if (message.content === prefix + "help" ){ 
        message.channel.sendMessage("Liste des commandes: \n  -*help");
    }  

    if (message.contentà === "Salut"){
        message.reply("Bien le bonjour. :)");
        console.log("Commande salut effectué")
    }
});   
