const { CommandInteraction, Interaction } = require("discord.js");

module.exports = (Discord, interaction, client) => {
    console.log(`${interaction.user.tag} triggered an interaction.`);
    console.log(interaction.commands);
    console.log(client.guildId);
    console.log(interaction.commands.name);


};
