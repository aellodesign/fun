const Discord = require("discord.js");

exports.run = async (client, message, args) => {

if (!message.member.voice.channel) {
return message.reply("Bir ses kanalında olman lazım!");
}
const filter = (reaction, user) => {
return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanıcı.id;
};
  
let kullanıcı = message.mentions.members.first()
if (!kullanıcı) return message.channel.send('Lütfen Bir Kullanıcı Belirt.');

let member = message.guild.member(kullanıcı);

if (!member.voice.channel) return message.channel.send('Etiketlenen Kullanıcı Ses Kanalında Değil..').then(m => m.delete,{timeout: 5000});

const voiceChannel = message.member.voice.channel.id;
if (!voiceChannel) return;
  
let log = new Discord.MessageEmbed()
.setColor("RANDOM")
.setDescription(`${kullanıcı}, ${message.author} \`${kullanıcı.voice.channel.name}\` Ses Odasına Gelmek İstiyor. Kabul ediyormusun ?`)
  
let mesaj = await message.channel.send(log)
await mesaj.react("✅")
await mesaj.react("❌")
mesaj.awaitReactions(filter, {
max: 1,
time: 60000,
errors: ['time']
}).then(collected => {
const reaction = collected.first();
if (reaction.emoji.name === '✅') {
let kabul = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`${kullanıcı} Odaya Gitme Teklifi Onaylandı. ✅`)
message.channel.send(kabul)
message.member.voice.setChannel(kullanıcı.voice.channel.id)
} else {
let striga = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`${kullanıcı} Odaya Gitme Teklifi Reddedildi. ❌`)
message.channel.send(striga)
}
})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["git","go"],
  permLevel: 0,
}

exports.help = {
  name: 'ses-git'
  
}