const Discord = require("discord.js")
exports.run = (client, message, args) => {
        let user = message.mentions.users.first() || message.author;

  if (user) {

    const embed = new Discord.MessageEmbed()
      .setAuthor(`${user.tag}  Buyur avatarın:`)

      .setImage(user.displayAvatarURL({ dynamic: true }))

      .setTimestamp()

      .setFooter("Aello ❤️ Osmivo");

    message.channel.send(embed);

  } else {

    const embed = new Discord.MessageEmbed()

      .setAuthor(

        `${message.author.tag}  Buyur avatarın:`,

        message.author.avatarURL

      )

      .setImage(message.author.avatarURL({ dynamic: true }))

      .setTimestamp()

      .setFooter("Aello ❤️ Osmivo");

    message.channel.send(embed);

  }
    };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: "avatar",
  description: "avatar atar",
  usage: "avatar"
};