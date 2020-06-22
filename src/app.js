const Discord = require("discord.js");
const client = new Discord.Client();
const { prefix, token } = require("./config.json");


/**
 * Bot start
 * @description when bot running at sever, show {ONLINE!} message on console
 */
client.once("ready", () => {
  console.log(`${client.user.username} is now Online!`);
});


/**
 * Avatar Command
 * @name !avatr
 * @description display your current profile picture to .png format.
 */
client.on("message", async msg => {
  if (msg.content === `${prefix}avatar`) {
    const avatar = msg.author.displayAvatarURL({ format: "png" });
    await msg.channel.send(
      `> **Hey ${msg.author.username} this is your current avatar:** \n` + avatar
    );
    await msg.react("🖼️");
  }
});


/**
 * Banana Command
 * @name !banana
 * @description show {"🍌 eat banana 🐒"} text to user and react to text with emote.
 */
client.on("message", async msg => {
  if (msg.content === `${prefix}banana`) {
    await msg.channel.send(`🍌 eat banana 🐒`);
    await msg.react("🍌");
    await msg.react("🐒");
    await msg.react("🤭");
  }
});


/**
 * Info Command
 * @name !info
 * @description show user some info about bot and developer.
 */
client.on("message", async (msg) => {
  const infoEmbed = new Discord.MessageEmbed()
    .setTitle("BananaMan")
    .setColor("#ffe100")
    .setTimestamp()
    .addFields(
      { 
        name: "Server Name :",
        value: `${msg.guild.name}`,
        inline: false 
      },
      {
        name: "Total Members :",
        value: `${msg.guild.memberCount}`,
        inline: false,
      }
    )
    .setFooter("created with ❤️ by: mafallahi")
    .setAuthor(
      "GitHub",
      "https://i.imgur.com/uWteCty.gif",
      "https://github.com/mafallahi"
    )
    .setDescription("Simple Bot")
    .setThumbnail("https://i.imgur.com/1oCNExw.gif");
  if (msg.content === `${prefix}info`) {
    await msg.channel.send(infoEmbed);
  }
});


/**
 * HelpMe Command
 * @name !helpme
 * @description this command wil show all available bot commands to user.
 */
client.on("message", async (msg) => {
  const helpmeEmbed = new Discord.MessageEmbed()
    .setTitle("Bot Command List")
    .setColor("#00a2ff")
    .addFields(
      {
        name: " ```!info``` ",
        value: "server description and developer link",
        inline: false,
      },
      {
        name: " ```!banana``` ",
        value: "it's just a banana 🍌",
        inline: false,
      },
      {
        name: " ```!avatar``` ",
        value: "show your current avatar",
        inline: false,
      },
      { name: " ```!helpme``` ", value: "commands list", inline: false }
    )
    .setThumbnail("https://i.imgur.com/VWjhawD.gif");
  if (msg.content === `${prefix}helpme`) {
    await msg.channel.send(helpmeEmbed);
  }
});


client.login(token);