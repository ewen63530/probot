const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "&";

client.login('NTQ3NDAwMzI2MTAyMTIyNTA2.D02WcQ.UrNseJdqj6sQ67vxyhZjYU6neuQ');

client.on('message',message=>{
if(message.content === "info"){
    message.reply('bienvenue sur MultiGame il n y a pas d event aujourd huit ')
    console.log('repond à info {user}');
} 
})
client.on('message',message=>{
    if (!message.guil) return 
    let args = message.content.trim().split(/ +/g)

    if(args[0].toLowerCase() === prefix + 'kick'){
        if (!message.menber.haspermission('KICK_MENBERS')) return message.channel.send("vous n'avez pas la permission d'executer la commande;(")
        let member = message.mentions.menber.first()
        if (!member) return message.channel.send("veuillez mentionner un utilisateur :x:")
        if (menber.highestRole.calculatedPosition >= message.member.highestRole.Position && message.author.id) return message.channel.send("vous ne pouvez pas kick cette utilisateur")
        if (!member.kickable) return message.channel.send("je ne peux pas excluere cet utilisateur :sunglass:")
        member.kick()
        message.channel.send(member.user.username+ 'a été exclu :white_check_mark:')
    }
});
