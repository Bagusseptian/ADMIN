
const { OWNER_ID } = require("../config.json")

module.exports = {
  name: "restart",
  description: "Restart The Bot",
  execute: (client, message, args) => {
    const { OWNER_ID } = require("../config.json"); 

       if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("**MEMBER** GAK BISA RESTART BLOKK! (kecuali **ADMIN** )")
    } 
 {
       message.channel.send(`**Ok Tuan ${message.author}, Restart Dimulai..**`+
                                                                                  "```Server Shutting Down```");
        
        setTimeout(() => {
            process.exit(0);
        }, 5000);
      message.channel.send('**__Server UP Sepikan Kota Indoplay__**' + ' @Everyone @Warga @Ladies'); 
      
    } 
}
}