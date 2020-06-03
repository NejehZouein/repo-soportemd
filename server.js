const http = require("http");
const express = require("express");
const app = express();
const fs = require("fs");
const db = require('quick.db');
const config = require("./config.json");

app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const { Client, MessageAttachment } = require('discord.js');


const client = new Discord.Client();

client.on("ready", () => {
  console.log("[Sistema] Cargando los comandos principales...");
  console.log(" ");
  console.log("[Sistema] Cargando el módulo de información...");
  console.log("[Sistema] Cargando el módulo de social...");
  console.log("[Sistema] Cargando el módulo de anime...");
  console.log("[Sistema] Cargando el módulo de diversión...");
  console.log("[Sistema] Cargando el módulo de moderación...");
  console.log("[Sistema] Cargando el módulo de variedad...");
});

client.on("ready", () => {
  console.log("[Sistema] Cargando la identidad " + client.user.tag);
  console.log("")
  console.log("----------------------------------------------------")
  console.log("[Sistema] El bot ha iniciado correctamente")
  console.log("----------------------------------------------------")
  console.log("")
  });



    client.on("ready", () => {
      let statuses = ["MD para ayuda"];
      setInterval(function(){
        // This picks a status from an array and chooses the interval depending on how many items are in the array
        let status = statuses[Math.floor(Math.random()*statuses.length)];
        
        client.user.setPresence({ game: { name: status }   });
    }
                  , 10000)
    });

client.on("message", (message) => {
    
    
    if (message.channel.type === "dm") { 
        var args = message.content.split(" ").slice(0)
        var args = args.slice(0).join(" ")
        var BOT_ID = client.user.id
        var userID = message.author.id
        let onlyserver = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor("Error", "https://images-ext-2.discordapp.net/external/m1p2spczG2ym_fOLz5qxxS8KKIDhXSOyFoJmyRKafdM/https/discordemoji.com/assets/emoji/5316_Error_512x512_by_DW.png")
        .setDescription("```Los comandos nada mas se pueden usar en el servidor```")
        if (message.content.startsWith(config.PREFIX)) return message.channel.send(onlyserver) 
        if (message.author.bot) return;
      let embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(""+args+"")
      .setAuthor("Mensaje enviado correctamente", "https://images-ext-2.discordapp.net/external/1hnse50m0aj2_caJV87z4H7vt93HCBiqkeZ2SJsOjP0/https/discordemoji.com/assets/emoji/1697_Success_512x512_by_DW.png")
        message.channel.send(embed)
        if (message.content.startsWith(config.PREFIX)) return
              let prefix1024 = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor("Error", "https://images-ext-2.discordapp.net/external/m1p2spczG2ym_fOLz5qxxS8KKIDhXSOyFoJmyRKafdM/https/discordemoji.com/assets/emoji/5316_Error_512x512_by_DW.png")
        .setDescription("```Solo se pueden poner hasta 1024 caracteres```")
        if (args.length > 1024) return message.reply(prefix1024) 
        let embed1 = new Discord.RichEmbed()
            .setColor(config.ORANGE)
            .setAuthor("Nuevo mensaje", "https://cdn.glitch.com/04a16f6b-e720-49f8-8a1a-dbe64a691779%2F496-4964169_free-mark-images-animated-blue-question-mark-icon.png?v=1587743982564")
            .setDescription(""+args+"")
            .setTitle("**Contenido**:")
            .setFooter(`${message.author.tag}`, message.author.avatarURL)
            .setTimestamp()
        client.guilds.get(config.SERVER_ID).channels.get(config.CHANNEL_ID).send(embed1)
        client.guilds.get(config.SERVER_ID).channels.get(config.CHANNEL_ID).send({embed: {
            "title": "__**Este mensaje ha sido enviado por `"+message.author.username+"`**__",
            "description": `Escriba **${config.PREFIX}reply ${message.author.id} <mensaje>** para responder`,
        }
                                                                                 })
    }else
    
    
    if (message.content.startsWith(config.PREFIX + "reply")) {      
      let sinperm = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor("Error", "https://images-ext-2.discordapp.net/external/m1p2spczG2ym_fOLz5qxxS8KKIDhXSOyFoJmyRKafdM/https/discordemoji.com/assets/emoji/5316_Error_512x512_by_DW.png")
      .setDescription("```Usted no tiene permisos para usar este comando```")
      if(!message.member.roles.some(r=>["█╰☆☆ 『SRRED』 ☆☆╮█", "「🛠」Administrador", "「🔧」Configurador", "「🤖」SRBOTS", "「💹」Mánager", "「👮」STAFF"].includes(r.name)) )
      
        return message.channel.send(sinperm);
        var args = message.content.split(" ").slice(0);
        var Rargs = message.content.split(" ").slice(2).join(" ");
        var userID = args[1];
            let id = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor("Error", "https://images-ext-2.discordapp.net/external/m1p2spczG2ym_fOLz5qxxS8KKIDhXSOyFoJmyRKafdM/https/discordemoji.com/assets/emoji/5316_Error_512x512_by_DW.png")
      .setDescription("```Debes de mencionar una ID para responder```")
      
        if (isNaN(args[1])) return message.channel.send(id);
        let embed = new Discord.RichEmbed()
            .setColor(config.ORANGE)
            .setAuthor("Nuevo mensaje", "https://cdn.glitch.com/04a16f6b-e720-49f8-8a1a-dbe64a691779%2F496-4964169_free-mark-images-animated-blue-question-mark-icon.png?v=1587743982564")
            .setDescription(""+Rargs+"")
            .setTitle("**Contenido**:")
            .setFooter(`${message.author.tag}`, message.author.avatarURL)
            .setTimestamp()
        client.users.get(userID).send(embed);
      
            let send = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(""+Rargs+"")
      .setAuthor("Mensaje enviado correctamente", "https://images-ext-2.discordapp.net/external/1hnse50m0aj2_caJV87z4H7vt93HCBiqkeZ2SJsOjP0/https/discordemoji.com/assets/emoji/1697_Success_512x512_by_DW.png")
  
      message.channel.send(send);
        if (message.author.bot) return;

    }
});


client.login(process.env.TOKEN);