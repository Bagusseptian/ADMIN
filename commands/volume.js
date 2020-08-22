const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");
module.exports = {
  name: "volume",
  description: "Besarkan/Kecilkan Volume ",
  execute(client, message, args) {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You are not allowed to change the volume of the music")
    }
    

    
    let embed = new MessageEmbed().setColor(COLOR);

    
    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Masuk Voice Dulu BLOKK!")
    .setFooter('© Created by LarSpeed & @Muhammadbagus')
  return message.channel.send(embed);
    }
    
     const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("SETEL LAGU NYA DULU BEP")
     .setFooter('© Created by LarSpeed & @Muhammadbagus')
 return message.channel.send(embed);
    }
    
    if(!args[0]) {
      embed.setAuthor(`MENGGANTI VOLUME ${serverQueue.volume}`)
    .setFooter('© Created by LarSpeed & @Muhammadbagus')
  return message.channel.send(embed)
    }
    
    if(isNaN(args[0])) {
      embed.setAuthor("TULIS NOMOR NYA")
  .setFooter('© Created by LarSpeed & @Muhammadbagus')
   return message.channel.send(embed)
    }
    
    if(args[0] > 200) {
      embed.setAuthor("You will die if you reach the limit of 200 :)")
   .setFooter('© Created by LarSpeed & @Muhammadbagus')
  return message.channel.send(embed)
    }
    
    serverQueue.volume = args[0]
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100)
    embed.setDescription(`Seted Volume to ${args[0]}`)
    embed.setThumbnail(client.user.displayAvatarURL())
    .setFooter('© Created by LarSpeed & @Muhammadbagus')
    message.channel.send(embed)
    
  }
};
