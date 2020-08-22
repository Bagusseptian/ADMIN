const { MessageEmbed } = require("discord.js")
const { inviteURL } = require("../config.json")
module.exports = {
  name: "invite",
  description: "link invite bot ke server lu",
  execute (client, message, args)  {
  
  let embed = new MessageEmbed()
  .setTitle("Invite Me or Die")
  .setColor("#00BFFF")
  .setDescription(`[CLICK ME](${inviteURL}) ATAU **TEWAS**`)
  .setFooter('© Created LarSpeed & @Muhammadbagus', client.user.displayAvatarURL)
    
    return message.channel.send(embed)
  
}
}