const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
    async execute(client, Discord) {
        console.log("poop");
        await interaction.reply('Pong!');
        await wait(2000);
		await interaction.editReply('Pong again!');
    }
};
