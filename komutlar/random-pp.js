const Discord = require('discord.js');

exports.run = (client, message, args) => {

  const Embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTimestamp()
  .setImage(client.users.cache.random().displayAvatarURL({ display: true, dynamic: true }))
  message.channel.send(Embed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['random-pp'],
  permLevel: 0
};

exports.help = {
  name: "random pp",
  description: "rastgele avatar atar",
  usage: "random-pp"
};