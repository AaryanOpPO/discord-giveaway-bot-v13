const client = require("../index");
const { MessageEmbed } = require("discord.js");

client.on("guildCreate", async (guild) => {
  if (!guild) return;
  let channel = guild.channels.cache.find(
    (ch) =>
      ch.type === "GUILD_TEXT" &&
      ch.permissionsFor(guild.me).has("SEND_MESSAGES")
  );

  if (guild.me.permissions.has("USE_APPLICATION_commands")) {
    try {
      guild.commands.set(client.arrayOfcommands);
    } catch (e) {
      console.log(e.message);
    }
  } else {
    channel.send(
      `I don't have \`USE_APPLICATION_commands\` so i can't create slash commands in your server , if you want to use me then give me \`USE_APPLICATION_commands\` and reinvite`
    );
  }
});
