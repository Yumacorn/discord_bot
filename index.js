// Require the necessary discord.js classes
const { Discord, Client, Collection, Intents, DiscordAPIError } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS], partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const prefix = '-';

client.commands = new Collection();
client.events = new Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

// Login to Discord with your client's token
client.login(token);
