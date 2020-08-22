const { MessageEmbed } = require("discord.js");
const { utc } = require('moment');

module.exports = {
  name: "botinfo",
  usage: "botinfo",
  execute: async (client, message, args) => {
    let embed = new MessageEmbed()

      .setColor(`RANDOM`)
      .setAuthor(client.user.username, client.user.avatarURL())
      .setThumbnail(client.user.avatarURL())

      .setTitle("Botinfo!")
      .addField("Username:", client.user.username)
      .addField("Tag:", `**${client.user.discriminator}**`)
      .addField("ID:", client.user.id)
      .addField("Owner:", `**@Muhammadbagusseptian**`)
      .addField("Channel's:", `${client.channels.cache.size}`)
      .addField("Server's:", `${client.guilds.cache.size}`)
      .addField("users's:", `${client.users.cache.size}`)
      .addField("Created:", client.user.createdAt)
      .setFooter(
        message.member.user.username.toUpperCase(),
        message.member.user.displayAvatarURL()
      )
      .setTimestamp();

    message.channel.send(embed);
  }
};