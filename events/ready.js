const client = require("..");

client.on('ready', () => {
    console.log(`${client.user.username} Is Online`);
    client.user.setActivity({
        name : `Giveaways`,
        type :"WATCHING",
    })
})