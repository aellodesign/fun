const Discord = require("discord.js");
exports.run = (client, message, args, tools) => {
      let idler = ['628955894809624586', 'ID']
  if (message.author.bot || message.channel.type === "dm") return;

  var gifler = [
  "https://media.discordapp.net/attachments/980415682757939211/980428455827103844/tokat-slap.gif",
  "https://media.discordapp.net/attachments/980415682757939211/980428456422703134/slap-in-the-face-angry.gif?width=624&height=427",
  "https://media.discordapp.net/attachments/980415682757939211/980428533467869274/tokat-atmak.gif",
  "https://media.discordapp.net/attachments/980415682757939211/980428533824380989/slap-annoyed.gif",
  "https://media.discordapp.net/attachments/980415682757939211/980428721242636328/slap.gif?width=427&height=427",
  "https://media.discordapp.net/attachments/980415682757939211/980428721989226496/recep-ivedik-slap-recep-ivedik-tokat.gif",
  "https://media.discordapp.net/attachments/980415682757939211/980428722937163786/kareena-kapoor-khan-angrezi-medium.gif"
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
        `\`${message.mentions.members.first().user.username}#${message.mentions.members.first().user.discriminator}\` sanaa, \`${message.author.username}#${message.author.discriminator}\` kocaman bir tokat attı.`
      )
      .setImage(resimler);
    message.channel.send({ embed: candyEmb });
    return;
  }
  if (message.author.id === kullanıcı.id) {
    const candyEmb = new Discord.MessageEmbed()
      .setTitle(`Manyak mısın neden kendini tokatlıyorsun?!?!?`)
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
  name: "tokat",
  description: "istediğiniz kişiye tokat atar!.",
  usage: "tokat [isim]"
};