const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");



const discord = require("discord.js");

module.exports = {
  name: "stop",
  description: "Hentikan musik orang;)",
  execute(client, message, args) {
    
    
let embed = new MessageEmbed()
.setColor(COLOR);

    const { channel } = message.member.voice;
      
    if (!channel) {
      //IF AUTHOR IS NOT IN VOICE CHANNEL
      embed.setAuthor("Masuk Voice Dulu BLOKK!")
     .setFooter('© Created by LarSpeed & @Muhammadbagus')
 return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      embed.setAuthor("LAGU NYA GK ADA BLOK||APA YANG MAU DI STOP!")
      .setFooter('© Created by LarSpeed & @Muhammadbagus')
return message.channel.send(embed);
    }

    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end();
  }
};
