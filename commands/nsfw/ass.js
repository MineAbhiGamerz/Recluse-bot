const discord = require("discord.js");
const akaneko = require('akaneko');

module.exports = {
  name: "ass",
  aliases: [],
  category: "nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
    
    if(!message.channel.nsfw) {
      return message.reply("> <:double_arrow:1300145972223017021> buy Nsfw [Premium](https://discord.gg/fZQUcabh6b) Feature <:premium:1300145505615089777>")
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.nsfw.ass());
    return message.channel.send(akanekoSan);
      
    }
  }
}
