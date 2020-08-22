const { MessageEmbed } = require("discord.js");
const { Menu } = require("discord.js-menu");
module.exports = {
  name: "help",
  description: "Memberi informasi",
  execute: (client, message, args) => {
  let embed1 = new MessageEmbed()
    .setTitle("Help Commands")
    .setColor("BLUE")
    .setThumbnail(
      client.user.displayAvatarURL({ format: "png", dynamic: true }) +
        "?size=2048"
    )
    .setDescription("Ini adalah beberapa command yang tersedia||Klik Emote ⏹ Untuk Stop,▶ Untuk Lanjut,◀Untuk Kembali")

    .addField("Core", "`ping` `stats` `help`", true)
    
       .setFooter(`Request BY ${message.author.username}`+"® Created by @Muhammadbagusseptian")
.setTimestamp();
      

  let embed2 = new MessageEmbed()
    .setTitle("Help Commands")
    .setColor("BLUE")
    .setThumbnail(
      client.user.displayAvatarURL({ format: "png", dynamic: true }) +
        "?size=2048"
    )
      
      
    .setDescription("Ini adalah beberapa command yang tersedia||Klik Emote ⏹ Untuk Stop,▶ Untuk Lanjut,◀Untuk Kembali")

    .addField("Moderator", "`ban` `kick` `mute` ", true)
  
  .setFooter(`Request BY ${message.author.username}`+"® Created by @Muhammadbagusseptian")
.setTimestamp();
      

  let embed3 = new MessageEmbed()
    .setTitle("Help Commands")
    .setColor("BLUE")
    .setThumbnail(
      client.user.displayAvatarURL({ format: "png", dynamic: true }) +
        "?size=2048"
    )

    .setDescription(
      "Ini adalah beberapa command yang tersedia||Klik Emote ⏹ Untuk Stop,▶ Untuk Lanjut,◀Untuk Kembali"
    )
    .addField("Music", "`play` `pause` `stop`", true)
  
  .setFooter(`Request BY ${message.author.username}`+"® Created by @Muhammadbagusseptian")
.setTimestamp();
      

    
    let embed4 = new MessageEmbed()
    .setTitle("Help Commands")
    .setColor("BLUE")
    .setThumbnail(
      client.user.displayAvatarURL({ format: "png", dynamic: true }) +
        "?size=2048"
    )

    .setDescription(
      "Ini adalah beberapa command yang tersedia||Klik Emote ⏹ Untuk Stop,▶ Untuk Lanjut,◀Untuk Kembali"
    )
    .addField("Music", "`p` `s` `queue` `loop`", true)
    
    .setFooter(`Request BY ${message.author.username}`+"® Created by @Muhammadbagusseptian")
.setTimestamp();
      
    
    let embed5 = new MessageEmbed()
    .setTitle("Help Commands")
    .setColor("BLUE")
    .setThumbnail(
      client.user.displayAvatarURL({ format: "png", dynamic: true }) +
        "?size=2048"
    )

    .setDescription(
      "Ini adalah beberapa command yang tersedia||Klik Emote ⏹ Untuk Stop,▶ Untuk Lanjut,◀Untuk Kembali"
    )
    .addField("Music", "`volume` `resume` `pause` `lyrics`", true)
    
    .setFooter(`Request BY ${message.author.username}`+"® Created by @Muhammadbagusseptian")
.setTimestamp();
      
    

    
      let embed6 = new MessageEmbed()
    .setTitle("Help Commands")
    .setColor("BLUE")
    .setThumbnail(
      client.user.displayAvatarURL({ format: "png", dynamic: true }) +
        "?size=2048"
    )

    .setDescription(
      "Ini adalah beberapa command yang tersedia||Klik Emote ⏹ Untuk Stop,▶ Untuk Lanjut,◀Untuk Kembali"
    )
    .addField("Informasi", "`botinfo` `id`  `level` ", true)
      
      .setFooter(`Request BY ${message.author.username}`+"® Created by @Muhammadbagusseptian")
.setTimestamp();
      
    
  new Menu(message.channel, message.author.id, [
    {
      name: "main",
      content: embed1,
      reactions: {
        "⏹": "stop",
        "▶": "next"
      }
    },
    {
      name: "otherPage",
      content: embed2,
      reactions: {
        "⏹": "stop",
        "◀": "previous",
        "▶": "next"
      }
    },
    {
       name: "otherPageAgain",
      content: embed3,
      reactions: {
        "⏹": "stop",
        "◀": "previous",
        "▶": "next"
      }
    },
    {
      name: "otherPageAgain",
      content: embed4,
      reactions: {
        "⏹": "stop",
        "◀": "previous",
        "▶": "next"
      }
    },
    {
       name: "otherPageAgain",
      content: embed5,
      reactions: {
        "⏹": "stop",
        "◀": "previous",
        "▶": "next"
      }
  
    },
    {
     
   name: "otherPageAgain",
      content: embed6,
      reactions: {
        "⏹": "stop",
        "◀": "previous"
      }
    }
  ]);
}
}