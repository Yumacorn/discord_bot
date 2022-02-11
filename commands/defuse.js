const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
    data: new SlashCommandBuilder()
        .setName('defuse')
        .setDescription('Replies with Defuse timer'),
    async execute(client, message, args, interaction, Discord) {
        await interaction.deferReply({ ephemeral: true });
		await wait(4000);
        await interaction.editReply(`Defuse timer is a total of 40 seconds:\n1st Phase - 20 seconds - 1 beep per second\n2nd Phase - 10 seconds - 2 beeps per second\n3rd Phase - 5 seconds - 4 beeps per second\n4th Phase - 5 seconds - 8 beeps per second`);
    },
};
