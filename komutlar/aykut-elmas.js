const Discord = require('discord.js');
const client = new Discord.Client();

 exports.run = (client, message) => {
  ///////////////////////////
  var sözler = [
    "Nasipte Varsa",
    "Hocam Aykut Uç Yiyo",
    "Yavaş La Gaç Tane Alıyon",
    "Oosman Gültekin Sen Misin?",
    "Ay have gat a vane pensıl",
    "Kudurdum.com bu kadar ?",
    "Ayağına Nazar Değmesin",
    "Çocuklar piknik için neler getirdiniz?",
    "Yirmi beş mi oldun öp bakem elimi",
    "Herkesin bi ayfonu bi benim yok",
    "ŞİRİN BABAYI SİĞK",
    "Yes ay dozont",
    "Bamya yaptım oğlum.",
    "Osman seni çizdim he.",
    "Sözleşmeyi kabul ettiniz \n eeeee \n abi bokumu sikiyim abi",
    "Banağ para ver, banağ paraa veeerğ",
    "Ne demek kızın yaşı anneden büyük olamaz, bizim zamanımızda oluyordu.",
    "Pisuvara kim sıçtı?",
    "Sen yanlış yapmadın soru yanlışmış yeaww",
    "Yav oyun gitti niye çekiyon fişi.",
    "Yalnız çıkışta görüşürüz hocam hani böyle sınıf ortamında...",
    "bağa para veer, bağa para veer",
    "kızım müsaitmisin \n müsaitim baba \n üstün fln açık değil dimi bak giriyom \n gel gel \n ortalıkta eşyan yok dimi kızım \n yok gel baba",
    "kalk kalk kalk ... \n baba \n aç bakayım en son nereye girdin. kapattın ben gelince",
  ];
  var veritabanı = sözler[Math.floor(Math.random() * sözler.length)];

  var resim = [
    "https://media.discordapp.net/attachments/789023023918743562/803020375171923998/unknown.png",
    "https://media.discordapp.net/attachments/789023023918743562/803020339122143272/unknown.png",
    "https://media.discordapp.net/attachments/789023023918743562/803020844527517726/unknown.png",
    "https://media.discordapp.net/attachments/789023023918743562/803020902891388959/unknown.png",
  ];
  var görsel = resim[Math.floor(Math.random() * resim.length)];
  ///////////////////////////
  const vrs = new Discord.MessageEmbed()
    .setColor("RED")
    .setThumbnail(`${görsel}`)
    .setTitle("Aykut Elmas:")
    .setDescription(`${veritabanı}`);
  message.channel.send(vrs);
  ///////////////////////////
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['aykutsöz'],
  permLevel: 0
};

exports.help = {
  name: "aykut-elmas",
  description: "aykut elmas sözü atar",
  usage: "aykutelmas"
};