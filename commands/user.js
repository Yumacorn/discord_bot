const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('user')
        .setDescription('Replies with User info.'),
    async execute(client, message, args, interaction, Discord) {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour Id: ${interaction.user.id}`);
    },
};
