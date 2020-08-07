const { MessageEmbed } = require("discord.js")

const { COLOR } = require("../config.json");

module.exports = {
  name: "pause",
  description: "Jeda lagu lu",
  execute (client, message, args) {
  const { channel } = message.member.voice;
   let embed = new MessageEmbed()
.setColor(COLOR);

    
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Masuk Voice Dulu BLOKK!")
      .setFooter('© Created by LarSpeed')
return message.channel.send(embed);
    }
    
    
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("LAGU NYA GAK NYALA APA YANG DI PAUSE")
     .setFooter('© Created by LarSpeed')
 return message.channel.send(embed);
    }
    
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      embed.setDescription("✅ | JEDA LAGU AKTIF")
      embed.setThumbnail(client.user.displayAvatarURL())
     .setFooter('© Created by LarSpeed')
 return message.channel.send(embed)
  }  
  }
}