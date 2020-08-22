const { MessageEmbed } = require("discord.js");

const { COLOR } = require("../config.json");

module.exports = {
  name: "queue",
  description: "Menambah anterian lagu",
  execute: (client, message, args) => {
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
      embed.setAuthor("Tambah lagu nya dulu cok baru cek antrian")
     .setFooter('© Created by LarSpeed & @Muhammadbagus')
 return message.channel.send(embed);
    }

    embed.setDescription(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
    embed.setThumbnail(client.user.displayAvatarURL())
    .setFooter('© Created by LarSpeed & @Muhammadbagus')
    message.channel.send(embed);
  }
};
