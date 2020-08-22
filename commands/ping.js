
//FIRST TEST HANDLER IS WORKING OR NOT
const { MessageEmbed } = require ("discord.js")
const { COLOR } = require("../config.json");
module.exports = {
  name: "ping",
  description: "Cek ping lu",
  execute(client, message,args) 
   {
    var ping = Date.now() - message.createdTimestamp + " ms";
    

    
     let embed = new MessageEmbed()
     .setColor(COLOR)
     
     .setDescription
    ('Your Ping  **__' + `${Date.now() - message.createdTimestamp}` + "__** ms PING GEDE?!PAKE TELKOMNYET DONG!!")

    
      .setFooter('© Created LarSpeed & @Muhammadbagus', client.user.displayAvatarURL)
    message.channel.send(embed);
   }
 }