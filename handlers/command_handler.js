const fs = require('fs');

module.exports = (client, Discord) => {

    const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`../commands/${file}`)
        const { name, description, poop } = command.data;
        if(name){
            client.commands.set(name, command);
            // console.log(`ABCYou have logged command command_handler ${name}`);
        } else {
            continue;
        };
    }
};
