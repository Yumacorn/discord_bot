module.exports = (Discord, client, message) => {
    console.log(`${client.user.tag} messaged.`);
    const prefix = '-';
    console.log("TestTest");
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);
    
    if(command) command.execute(client, message, args, Discord);
};