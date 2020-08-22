const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../config.json");

module.exports = {
  name: "np",
  description: "Mengecek nama lagu yang di putar sekarang",
  execute (client, message, args) {
    let embed = new MessageEmbed()
.setColor(COLOR)
      
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("MASUK VOICE DULU BLOK!")
     .setFooter('© Created by LarSpeed & @Muhammadbagus')
return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("Bot is not playing anything")
      
return message.channel.send(embed);
    }
    
    embed.setDescription(`**SEDANG DI PUTAR SAIKI** - ${serverQueue.songs[0].title}`)
    .setThumbnail(serverQueue.songs[0].thumbnail)
.setFooter('© Created by LarSpeed & @Muhammadbagus')
 message.channel.send(embed)

    
    
    
  }
}