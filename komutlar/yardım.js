const Discord = require ("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = (client, message) => {

const nobles = new Discord.MessageEmbed()// fwhy code dan alınıp editlenmiştir

.setColor("RANDOM")
.setTitle(`**▬▬▬▬▬▬[** ©️ **Osmivo Eğlence Bot** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: __${process.env.prefix}istatistik__ **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix:** __${process.env.prefix}__ `)
.setThumbnail(client.user.avatarURL)
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» ${process.env.prefix}adamasmaca :** Adam Asmaca Oynarsınız.
> **» ${process.env.prefix}git :** Etiketlediğiniz kişinin sesine gidersiniz.
> **» ${process.env.prefix}gel :** Etiketlediğiniz kişiyi sesinize çekersiniz.
> **» ${process.env.prefix}alkış :** İstediğinizi alkışlarsınız.
> **» ${process.env.prefix}avatar :** Avatarınızı atar.
> **» ${process.env.prefix}aykutsöz :** Aykut elmas sözü atar.
> **» ${process.env.prefix}banner :** Banner atar.
> **» ${process.env.prefix}espri :** Rastgele espri atar.
> **» ${process.env.prefix}random-pp :** Rastgele avatar atar.
> **» ${process.env.prefix}sarıl :** İstediğinize sarılırsınız.
> **» ${process.env.prefix}tokat :** Sert bir tokat atarsınız.
> **» ${process.env.prefix}aşkölçer :** Aşkınızı ölçersiniz.
> **» ${process.env.prefix}efkar :** Efkarınızı öğrenirsiniz.
> **» ${process.env.prefix}gay :** Etiketlediğiniz Kişinin Gaylik Düzeyini Öğrenirsiniz.
> **» ${process.env.prefix}yılbaşı :** Yılbaşı Sayacı.
> **» ${process.env.prefix}kaçcm :** :D?
> **» ${process.env.prefix}kimlik :** Rastgele Kimlik Oluşturursunuz.
> **» ${process.env.prefix}liderlik :** Coin Sıralamasını Gösterir.
> **» ${process.env.prefix}balık-tut :** Balık Tutarsınız.
> **» ${process.env.prefix}trump :** Trump Tweet Atar.
> **» ${process.env.prefix}rozet :** Rozetlerinizi Gösterir.
> **» ${process.env.prefix}evlenme-teklifi :** Evlenme Teklifi Edersin. ^^
> **» ${process.env.prefix}kralol :** Kral Olursun.
> **» ${process.env.prefix}yazı-tura :** Yazı mı Tura mı?
> **» ${process.env.prefix}öp :** Birini Öpersin.
> **» ${process.env.prefix}duello :** Birisiyle Duello Atarsın.


**Linkler ->** **[Destek Sunucusu](${ayarlar.destekSunucusuDavetLinki})** **•** **[Botun Davet Linki](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot)**`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(nobles)
.then;

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};