// Require the necessary discord.js classes
// const { Discord, Client, Collection, Intents, DiscordAPIError } = require('discord.js');
const Discord = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Discord.Client({ intents: [Discord.Intents.FLAGS.GUILDS], partials: ["MESSAGE", "CHANNEL", "REACTION"]});
// const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
});

// Login to Discord with your client's token
client.login(token);
