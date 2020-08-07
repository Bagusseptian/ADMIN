const { MessageEmbed } = require("discord.js")
const { readdirSync } = require("fs")
const { COLOR } = require("../config.json");
module.exports = {
  name: "help",
  description: "Cek menu commands",
  execute (client, message, args) {
    
    
let embed = new MessageEmbed()
.setAuthor("PILIHAN COMMANDS", client.user.displayAvatarURL())
.setThumbnail(client.user.displayAvatarURL())
.setColor(COLOR)
.setDescription(`Berikut adalah pilihan commands ${client.user.username} Bot, KALO ADA ERROR LANGSUNG HUBUNGI ADMIN`)

.setFooter('© Created LarSpeed', client.user.displayAvatarURL)

let command = readdirSync("./commands")    

let i;
    for(i = 0; i < command.length; i++) {
      console.log(command[i])
      
      const cmd = client.commands.get(command[i].replace(".js", ""))
      embed.addField(`**${cmd.name}**`, cmd.description, true)
      
    }
    
    message.channel.send(embed)
    
    

    
    
    
  }
}