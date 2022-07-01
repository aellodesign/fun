const Discord = require('discord.js');
exports.run = async (client, message, args) => {
let kişi = message.mentions.users.first() || client.users.cache.get(args.join(' '))
if(!args[0]) {
const emmbed = new Discord.MessageEmbed()
//CodAre a aitir bi kaç kısmını editledim sadece
    .setColor('#94414c')
  emmbed.setDescription(message.author.flags.toArray().join('\n') ? message.author.flags.toArray().join('\n')
.replace("HOUSE_BRAVERY", "Bravery Hanedanı")  
.replace("HOUSE_BRILLIANCE", "Brilliance Hanedanı")
.replace("HOUSE_BALANCE", "Balance Hanedanı")
.replace("VERIFIED_DEVELOPER", "Onaylı Geliştirici")
.replace("DISCORD_EMPLOYEE", "Discord Çalışanı")
.replace("DISCORD_PARTNER", "Partner")
.replace("HYPESQUAD_EVENTS", "Events Rozeti")
.replace("BUGHUNTER_LEVEL_1", "Bug avcısı lvl1")
.replace("EARLY_SUPPORTER", "Erken Dönem Destekcisi")
.replace("TEAM_USER", "Takım Üyesi")
.replace("SYSTEM", "Sistem")
.replace("BUGHUNTER_LEVEL_2", "Bug Avcısı lvl2")
.replace("VERIFIED_BOT", "Onaylı Bot") : `yok`)        
     message.channel.send(emmbed)
}
if(kişi){ 
const emmbed = new Discord.MessageEmbed()
    .setColor('#94414c')
  emmbed.setDescription(kişi.flags.toArray().join('\n') ? kişi.flags.toArray().join('\n')
.replace("HOUSE_BRAVERY", "Bravery Hanedanı")  
.replace("HOUSE_BRILLIANCE", "Brilliance Hanedanı")
.replace("HOUSE_BALANCE", "Balance Hanedanı")
.replace("VERIFIED_DEVELOPER", "Onaylı Geliştirici")
.replace("DISCORD_EMPLOYEE", "Discord Çalışanı")
.replace("DISCORD_PARTNER", "Partner")
.replace("HYPESQUAD_EVENTS", "Events Rozeti")
.replace("BUGHUNTER_LEVEL_1", "Bug avcısı lvl1")
.replace("EARLY_SUPPORTER", "Erken Dönem Destekcisi")
.replace("TEAM_USER", "Takım Üyesi")
.replace("SYSTEM", "Sistem")
.replace("BUGHUNTER_LEVEL_2", "Bug Avcısı lvl2")
.replace("VERIFIED_BOT", "Onaylı Bot") : `yok`)        
     message.channel.send(emmbed)
}
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rozet", "bayrak"],
  permLevel: 0
};

exports.help = {
  name: "rozet",
  description: "!rozet  veya !bayrak",
  usage: "rozet"
};