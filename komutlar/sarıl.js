const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['628955894809624586', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
  "https://media.discordapp.net/attachments/980415682757939211/980415992939307029/cuddle-love.gif",
  "https://media.discordapp.net/attachments/980415682757939211/980415993320968243/hug-couple.gif",
  "https://media.discordapp.net/attachments/980415682757939211/980415993610391612/night-good-night.gif",
  "https://media.discordapp.net/attachments/980415682757939211/980415994247905310/schitts-creek-david-rose.gif",
  "https://media.discordapp.net/attachments/980415682757939211/980415994877063208/monsters-inc-boo.gif?width=427&height=427",
  "https://media.discordapp.net/attachments/980415682757939211/980415995506229298/hug-miss-you.gif?width=343&height=427",
  "https://media.discordapp.net/attachments/980415682757939211/980415995929829386/klaus-and-hope-klaus-michaelson.gif?width=572&height=427",
  "https://cdn.discordapp.com/attachments/958010797408280607/961782747951673436/saril-bana.gif"
  ];
  let resimler = gifler[Math.floor(Math.random() * gifler.length)];
  var kullanıcı = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!kullanıcı) {
    const buyEmb = new Discord.MessageEmbed()
      .setDescription(`\`${message.author.username}#${message.author.discriminator}\` birini etiketlemelisin.`);
    message.channel.send({ embed: buyEmb });
    return;
  }
  if (
    !message.mentions.members.first().user.username ===
    message.mentions.has(message.author)
  ) {
    const candyEmb = new Discord.MessageEmbed()
      .setDescription(
        `\`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator}\` sanaa, \`${message.author.username}#${message.author.discriminator}\` sarıldı.`
      )
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
    return;
  }
  if (message.author.id === kullanıcı.id) {
    const candyEmb = new Discord.MessageEmbed()
      .setTitle(`Kendine sarılacak kadar yalnız mısın? 😟`)
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "sarıl",
  description: "istediğiniz kişiye sarılır!.",
  usage: "sarıl [isim]"
};