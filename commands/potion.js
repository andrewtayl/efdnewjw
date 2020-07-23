/* eslint-disable no-undef */
const {discord, Discord, client} = require("discord.js");
const { finished } = require("stream");
const mongoose = require('mongoose');
const PotionUser = require("../models/potionUser.js");


exports.run = (client, message, args) => {
    message.channel.send('Seeing if you have done this');
    var done = '0';
    var reTry = '735343940257054811';
    var id = message.author.id;
    const findDocuments = function(db, callback) {
        // Get the documents collection
        const collection = db.collection('documents');
        // Find some documents
        collection.find({'userID': id}).toArray(function(err, docs) {
          assert.equal(err, null);
          console.log("Found the following records");
          console.log(docs);
          callback(docs);
        });
      };
    // console.log(docs);
    message.channel.send(`Got your data from the database`);
    message.channel.send(`cheaking your info`);
    // const $regex = escapeStringRegexp('+foo');
    // const docs = await User.find({ userID: { $regex } });
    // var Person = docs;
    // if(message.author.id === Person)return;
    // message.channel.send(Person);
    // if(Person ===message.author.id) done ="123"; message.reply(`NO!!! you have aready done this you can if you buy it in the shop`);
    if(message.member.roles.cache.get(reTry)) done = '0';
    var name = message.author.username;
    if (done ==='123'){
        done = '0';
        
        message.channel.send('NO!!! you have aready done this you can if you buy it in the shop');
        return;
    }else{
        message.reply('You are about to try a Mutation potion do you want to proceed? If so, how do you want to continue?');
        message.reply.send(`Potion has been used by ${name} ID:${id} Giuld:${message.guild.id}`);
        // if(message.author.id === Person)return;
        try {
            const potionUser = new PotionUser({
                userID: message.author.id,
                guildID: message.guild.id,
                command: "potion",
            });
            potionUser.save();
        } catch(err){
            console.log(err);
        }

    }
    done = '0';
    finished;
};
exports.help = {
    name: 'potion'
};


