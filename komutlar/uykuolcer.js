const Discord = require("discord.js");

exports.run = (client, message) => {

const mrk = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Uyku seviyeniz:** **%${mrk}** **uykulusunuz** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['efkar'],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "Efkarınızı ölçer",
  usage: "efkar Ölçer"
};