const mongoose= require('mongoose');

let potionUserSchema =mongoose.Schema({
    userID: String,
    guildID: String,
    command: String,
});

module.exports =mongoose.model('PotionUser', potionUserSchema);