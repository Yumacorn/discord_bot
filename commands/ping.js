// const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
    // data: new SlashCommandBuilder()
    name: 'ping',
    description: 'Replies with Pong!',
    async execute(client, message, args, interaction, Discord) {
        await interaction.reply('Pong!');
        await wait(2000);
		await interaction.editReply('Pong again!');
    }
};
