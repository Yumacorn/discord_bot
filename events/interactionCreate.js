const { CommandInteraction, Interaction } = require("discord.js");

module.exports = {
    name: 'interactionCreate',
    execute(interaction) {
        console.log(`${interaction.user.tag} on ${interaction.guild.name} in #${interaction.channel.name} triggered '${interaction.commandName}' interaction.`);
    },
};
