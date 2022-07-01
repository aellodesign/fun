const Discord = require('discord.js');
exports.run = (client, message, args) => {

    if (!message.guild) {
        const ozelmesajuyari = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: **Uyarı** :warning:', '`rol-al` **adlı komutu özel mesajlarda kullanamazsın.**')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    if (!message.member.hasPermission("978716738340388944")) return message.reply(`**Bu işlemi gerçekleştirmek için gerekli yetkin yok!**`)
    let guild = message.guild
    let rol = message.mentions.roles.first()
    let user = message.mentions.members.first()

    if (!user) return message.reply('**Kimden rol alınacağını yazmadın!**').catch(console.error);
    if (rol.length < 1) return message.reply('**Rolü belirtmedin**');
    user.roles.remove(rol);

    const embed = new Discord.MessageEmbed()
        .setDescription(`${user} kullanıcısından başarıyla ${rol} rolü alındı!`)
        .setFooter('Rol alma sistemi', client.user.avatarURL)
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send({ embed })
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['rolal'],
    permLevel: 0
};

exports.help = {
    name: 'rol-al',
    description: 'İstediğiniz kişiden istediğiniz rolü alır.',
    usage: 'rol-al [kullanıcı] [@rol]'
};