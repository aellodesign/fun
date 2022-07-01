const Discord = require('discord.js');

exports.run = (client, message, args) => {

  const embed = new Discord.MessageEmbed()
  .setAuthor("Alkış'la Joker")
  /*
   
   */
  .setColor("RANDOM")
  .setImage("https://thumbs.gfycat.com/WarpedAdmiredCormorant-size_restricted.gif")
  /*
   
   */

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['alkış'],
  permlevel: 0
};

exports.help = {
  name: 'alkis',
  description: 'alkışlarsınız',
  usage: 'alkis'
};
