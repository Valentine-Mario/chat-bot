const Readline = require('readline');
const chalk = require('chalk');
const Rivescript = require('rivescript');
const bot = new Rivescript();
const rl = Readline.createInterface({
input:process.stdin,
output :process.stdout
})
bot.loadFile('./training_data.rive').then(function(){
    bot.sortReplies();
    ask();
    }).catch(function (error){
        console.log("error reading file" + error);
        })

function ask(){
rl.question('You:', (message) =>{
    bot.reply('local-user', message).then(function(reply) {
                 console.log("Dr John:", reply);
                 ask();
            });
            
} )
}