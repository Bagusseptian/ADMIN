const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const { TOKEN, PREFIX } = require("./config.json")
const Math = require ("mathjs");
const r = "RANDOM";
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
//CLIENT EVENTS
client.on("ready", () => {
     var activities = [
        "PUBG",
        "VALORANT",
        "Fivem",
        "Point Blank",
        "LarSpeed YT",
        "PUBGM",
        "TikTok",
        "LarServerROLEPLAY"
    ]
 
    const index = Math.floor(Math.random() * activities.length + 1)
    setInterval(() => {
        client.user.setActivity(activities[index]);
    }, 10000);
console.log('Ready to play song | Bot created by Larspeed')
// Set the client user's activity

 

})
client.on("warn", info => console.log(info));

client.on("error", console.error)

//DEFINIING
client.commands = new discord.Collection()
client.prefix = PREFIX
client.queue = new Map();
client.vote = new Map();

//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} //LOADING DONE


//WHEN SOMEONE MESSAGE
client.on("message", message => {
   if (message.author.bot) return;
  if (!message.guild) return;
  
  if(message.content.startsWith(PREFIX)) { //IF MESSSAGE STARTS WITH MINE BOT PREFIX
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/) //removing prefix from args
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
const { addexp } = require("./handlers/xp.js")

client.on("message", async message => {
if(message.author.bot) return;
  if(!message.guild) return;
  
return addexp(message)
})   
const db = require("quick.db") //using quick.db package
const { MessageEmbed } = require("discord.js")

client.on("guildMemberAdd", async member => { //usage of welcome event
  let chx = db.get(`welchannel_${member.guild.id}`); 
  
  if(chx === null) { //check if var have value or not
    return;
  }
 let data = await canva.welcome(member, { link: "https://coverfiles.alphacoders.com/468/46882.jpg", blur: false })
 
    const attachment = new discord.MessageAttachment(
      data,
      "welcome-image.png"
    );
 
  client.channels.cache.get(chx).send("Welcome To My Server" + member.user.username, attachment) //get channel and send embed
});

    
    
 try  { //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args)
    //COMMAND LOGS
    console.log(`${message.guild.name}: ${message.author.tag} Used ${client.commands.get(command).name} in #${message.channel.name}`)
    } catch (err) { //IF IT CATCH ERROR
      console.log(err)
      message.reply("I am getting error on using this command")
    }
    
  }
  
  
});






//DONT DO ANYTHING WITH THIS TOKEN lol
client.login(TOKEN)