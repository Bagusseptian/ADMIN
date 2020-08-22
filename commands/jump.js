const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");

module.exports = {
  name: "jump",
  description: "Lompat ke lagu yang lu mau",
  execute (client, message, args) {
    
     let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Masuk VOICE dulu Blok!!")
.setFooter('© Created by LarSpeed & @Muhammadbagus')
 return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("LAGUNYA GAK DI LOOP")
      .setFooter('© Created by LarSpeed & @Muhammadbagus')
return message.channel.send(embed);
    }
     if(!args[0]) {
      embed.setAuthor("Kasih Nomor Lagu nya")
  .setFooter('© Created by LarSpeed & @Muhammadbagus')
  return message.channel.send(embed)
    }
    
      if(isNaN(args[0])) {
      embed.setAuthor("Kasih Nomor nya")
    .setFooter('© Created by LarSpeed & @Muhammadbagus')
  return message.channel.send(embed)
    }
    
    
    //LETS FIX JUMP COMMAND :D
  if(serverQueue.songs.length < args[0]) {
    embed.setAuthor("Lagu di Anterian gk ketemu")
    .setFooter('© Created by LarSpeed & @Muhammadbagus')
return message.channel.send(embed)  
                                         }
    serverQueue.songs.splice(0, Math.floor(parseInt(args[0]) - 1))
    serverQueue.connection.dispatcher.end()
    
    embed.setDescription(`JUMPED TO THE SONG NUMBER - ${args[0]}`)
   
    message.channel.send(embed)
    
  }
}