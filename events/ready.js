module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(`Ready! ${client.user.tag} has logged in.`);
    },
};
