const Discord = require('discord.js');
const bot = new Discord.Client();
const perms = new Discord.Permissions(4);

bot.login(process.env.TOKEN);

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (message) => {
    if (message.embeds[0].type === 'gifv' || 'gif') {
        const guild = message.guild;
        const author = message.author;

        guild
            .ban(author, `${author} has been banned for posting a gif`)
            .catch(e => console.log(e));
    };
});