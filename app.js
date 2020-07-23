const Discord = require('discord.js');
const fs = require('fs');
const enmap = require('enmap');
const client = new Discord.Client();
// const mongoose = require('mongoose');
require(`dotenv/config`);
const token = process.env.TOKEN;
const owner = process.env.OWNER;
const prefix = process.env.PREFIX;
global.prefix;
global.owner;
global.prefix;
client.commands = new enmap();
require('./utils/functions')(client);
client.mongoose =require('./utils/mongoose');
client.config = require('./config');



// client.on('ready', () => {
//   console.log(`Logged in as ${client.user.tag}!`);
// });

// client.on('message', message => {
//   if (message.content === `${prefix}potion`) {
//     // var data = fs.readFile("./userNames");
//     // var usd = JSON.parse(data);
//     // console.log(usd);
//     const ID = message.author.id;
//     const name =message.author.username;
//     if (message.member.roles.cache.has('733844498144296991')){
//       message.channel.send('NO!!! you have aready done this you cand do this if you buy it in the shop');
//   }else{
//       message.reply('You are about to try a mutashong do you want to prosed? How do you want to prosed');
//       console.log(`Potion has been used by ${name} ID:${ID}`);
      
//   }
//   }
// });



fs.readdir('./events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split('.')[0];
    console.log(`Loaded event '${evtName}'`);
    client.on(evtName, evt.bind(null, client));
  });
});

fs.readdir('./commands/', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
      if (!file.endsWith('.js')) return;
      let props = require(`./commands/${file}`);
      let cmdName = file.split('.')[0];
      console.log(`Loaded command '${cmdName}'`);
      client.commands.set(cmdName, props);
    });
});

client.mongoose.init();
client.login(token);