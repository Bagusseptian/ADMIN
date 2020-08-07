const { MessageEmbed } = require("discord.js")
const db = require ("quick.db")
const discord = require("discord.js");

module.exports = {
name: "statchannel",
description: "set channel to show stats of user count",
execute: async (client, message, args) => {
 if(!message.member.hasPermission("MANAGE_CHANNELS")) {
      return message.channel.send(`**${message.author.username}**, You do not have enough permission to use this command`)
    }

const channel = message.mentions.channels.first() || message.guild.channels.cache.find(channel => channel.id === args[1]) || message.guild.channels.cache.find(channel => channel.name === args[1])
if(args[0] === "set") {
 if(!channel) {
return message.channel.send("You didn't provide any channel")
}
  
client.on("guildMemberRemove", member => {
const channel = db.get(`channelstat_${member.guild.id}`)
const name = db.get(`channelstatname_${member.guild.id}`)

if(channel === null) {
return
}

channel.edit({name: name}).catch(e => 
console.log(e))
})
var name = args.slice(1).join(" ").toString.replace("<users>", message.guild.members.cache.size)
if(name.lenght > 0) {
return message.channel.send("you didn't provide any name to set")
} 
db.set(`channelstat_${message.guild.id}, channel.id`)
db.set(`channelstatname_${message.guild.id}, name`)
channel.edit({name: name})
await message.channel.send(`Stat channel set to **${channel.name}**`)
return;
} if(args[0] === "unset") {
db.delete(`channelstat_${message.guild.id}`)
db.delete(`channelstatname_${message.guild.id}`)
await message.channel.send("Stat channel removed")
return;
} else {
let embed =new MessageEmbed()
.
setTitle("Wrong Usage!!")
.setDescription("statchannel < set || unset> <channel> <channel name you want to set>")
message.channel.send(embed)
}
}}