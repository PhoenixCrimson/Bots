const Discord = require("discord.js");
const config = require("./BotSettings.json")
const TOKEN = config.TOKEN;
const jsonfile = require("jsonfile")
const fs = require('fs')
const arrays = require("./Arrays.json")
const PREFIX = config.PREFIX;


var obj;
fs.readFile('BotSettings.json', 'utf8', function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);
});

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Perhaps later",
    "Most certainly"
];
var killgifs = ["http://gifimage.net/wp-content/uploads/2017/08/strike-witches-gif-5.gif",
"http://gifimage.net/wp-content/uploads/2017/08/strike-witches-gif-1.gif",
"https://gifimage.net/wp-content/uploads/2017/08/strike-witches-gif-14.gif",
"https://vignette.wikia.nocookie.net/powerlisting/images/b/b6/Explosion_Megumin.gif/revision/latest?cb=20160302023153",
"https://gifimage.net/wp-content/uploads/2017/08/megumin-explosion-gif-5.gif",
"https://1.bp.blogspot.com/-7CH5vfmZqTM/WIk1xdq7KoI/AAAAAAAAuA8/Chjj3YlP6kwm0hdd5iFwHJAgfwJz-8FOQCPcB/s1600/Omake%2BGif%2BAnime%2B-%2BKono%2BSubarashii%2BSekai%2Bni%2BShukufuku%2Bwo%2521%2B2%2B-%2BEpisode%2B3%2B-%2BMegumin%2BExplosion%2B3.gif",
"https://tenor.com/view/toph-avatar-earthbending-earthbender-gif-8139048",
"http://recentlyheard.com/wp-content/uploads/2016/10/tumblr_lr267lEhM01qew3c7o1_500.gif",
"https://i.pinimg.com/originals/19/35/ce/1935ce49d1f5c4c76f50b26d2b9e7e0c.gif",
"https://media.giphy.com/media/OoaTf8fEuesP6/giphy.gif"
];

var sleepgifs = ["https://media.giphy.com/media/1oDA6lccgPe1y/giphy.gif",
"https://vignette.wikia.nocookie.net/kancolle/images/0/08/Umaru_sleeping.gif",
"http://media.tumblr.com/9bf49adde3a82e05bdfa598ac0625b83/tumblr_inline_n97cqioJX61r023wy.gif",
"http://i.giphy.com/26AHrHYqHv9rVSXMQ.gif",
"https://media1.tenor.com/images/b1cdf65b0627586b7ad2274c011b100f/tenor.gif?itemid=8503491",
"https://pa1.narvii.com/6371/12a3853251ab53705378971bfefcac6b889ef104_hq.gif",
"http://i.imgur.com/ZQ0G3.gif",
"http://i.imgur.com/l3gFXxU.gif"
];

var playgifs = ["https://media.giphy.com/media/UU4iU8xJ8Vpy8/giphy.gif",
"https://media.giphy.com/media/cl9qyXsTrOSqs/giphy.gif",
"http://33.media.tumblr.com/c11d96180f856c55629cffe1c3a753f7/tumblr_inline_nni1jbZBOf1t69aql_500.gif",
"https://thumbs.gfycat.com/TornSelfishArmadillo-max-1mb.gif",
"http://i.imgur.com/8xmszbY.gif",
"https://thumbs.gfycat.com/ConsiderateUnfortunateBellfrog-small.gif"
]

var LeaderboardNames = arrays.LeaderboardNames
var LeaderboardKills = arrays.LeaderboardKills
var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Ready")
});

bot.on("message", function(message) {
    

    

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()){
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        
        
        case "info":
            message.delete()
            message.channel.sendMessage("I'm Felix-Chan, nice to meet you!")
            break;
        
        case "8ball":
            if (args[1]) {
                message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            }else {
                message.channel.sendMessage("Ask me something when you tell me this :(");
                }
            break;
        
        case "help":
        message.delete()
            if (!args[1]) {
                var embed = new Discord.RichEmbed() 
                    .addField("Prefix",PREFIX)
                    .addField("Commands","info \nping \n8ball \nsourcecode \nkill\nrunes\nPlay\nNighty", true)
                    .addField("Meaning","Gives bot info \nPong! \nPredicts your fate! \nProvides sourcecode \nKills the mentioned user\nProvides you with runes for a LoL champion\nAsks to play\nWishes someone a good nighty" , true)
                    .setColor("dd1122")
                message.channel.sendEmbed(embed); 
            }
            else if((args[1].toLowerCase)==="ping".toLowerCase()) {
                var embed = new Discord.RichEmbed() 
                    .addField("ping","Makes the bot play pingpong")
                    .addField("Usage",PREFIX+"ping")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            } 
            else if((args[1].toLowerCase)==="info".toLowerCase()) {
                var embed = new Discord.RichEmbed() 
                    .addField("info","Provides you with some information about the bot.")
                    .addField("Usage",PREFIX+"info")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }
            else if((args[1].toLowerCase)==="8ball".toLowerCase()) {
                var embed = new Discord.RichEmbed() 
                    .addField("8ball","Decides your fate.")
                    .addField("Usage",PREFIX + "8ball question")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }   
            else if((args[1].toLowerCase)==="kill".toLowerCase()) {
                var embed = new Discord.RichEmbed() 
                    .addField("kill","Kills the mentioned user")
                    .addField("Usage", PREFIX + "kill <mention>")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }   
            else if((args[1].toLowerCase)==="sourcecode".toLowerCase()) {
                var embed = new Discord.RichEmbed() 
                    .addField("sourcecode","Gives sourcecode of the bot.")
                    .addField("Usage",PREFIX + "sourcecode")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }  
            else if((args[1].toLowerCase())==="runes")  {
                var embed = new Discord.RichEmbed() 
                    .addField("Runes","Provides you with a runepage for a League of Legends champion")
                    .addField("Usage",PREFIX + "runes champion")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }
            else if((args[1].toLowerCase())==="nighty") {
                var embed = new Discord.RichEmbed() 
                    .addField("Nighty","Wishes a good nighty")
                    .addField("Usage",PREFIX + "nighty <mention>")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }
            else if((args[1].toLowerCase())==="nighty") {
                var embed = new Discord.RichEmbed() 
                    .addField("Play","Asks a play request")
                    .addField("Usage",PREFIX + "play <mention>")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }
            break;

        case "sourcecode":
            message.delete()
            message.channel.sendMessage("If you think it is fine I will show you my nudes:\nhttps://github.com/PhoenixCrimson/FC")
        break;

        case "kill":
            message.delete()
            let victim = message.mentions.users.first() || message.guild.members.get(args[0]);
            if(!victim) {
                message.channel.sendMessage("Use this when you have decided to mention the poor soul.");
            }
            else {
                var embed = new Discord.RichEmbed() 
                    .setDescription("Someone wishes you dead, **" + message.mentions.members.first().user.username + "**" )
                    .setImage(killgifs[Math.floor(Math.random() * killgifs.length)])
                    //.setImage("https://media.giphy.com/media/OoaTf8fEuesP6/giphy.gif")
                    .setColor("dd1122")
                message.channel.sendEmbed(embed)
            }
            break;

        case "runes":
        message.delete()
        const Resolve = "49ba10";
        const Inspiration = "47ccd8";
        const Precision = "f2be46";
        const Domination = "750707"
            if(!args[1]) {
                message.channel.sendMessage("Please tell me what runes you want to see.")
            }
            else if((args[1].toLowerCase())==="gangplank") {
                var embed = new Discord.RichEmbed() 
                    .addField("Gangplank runes", "These are Gangplank runes.")
                    .addField("Main tree: Inspiration","Kleptomancy \nPerfect Timing \nFuture's Market \nCosmic Insight",true)
                    .addField("Secondary: Sorcery", "Scorch \nManaflow Band",true)
                    .setImage("https://i.imgur.com/0aCRq4k.png")
                    .setColor(Inspiration)
            message.channel.sendEmbed(embed)
            }
            else if((args[1].toLowerCase())==="sion") {
                var embed = new Discord.RichEmbed() 
                    .addField("Sion runes", "These are Sion runes.")
                    .addField("Main tree: Resolve","Grasp of the Undying\nDemolish\nConditioning\nOvergrowth",true)
                    .addField("Secondary: Sorcery", "Trancendence \nScorch",true)
                    .setImage("https://i.imgur.com/HsqLr7u.png")
                    .setColor(Resolve)
                message.channel.sendEmbed(embed)
            }

            else if((args[1].toLowerCase())==="graves") {
                var embed = new Discord.RichEmbed() 
                    .addField("Graves runes", "These are Graves runes.")
                    .addField("Main tree: Precision","Press the Attack\nTriumph\nLegend: Alacrity\nCoup de Grace",true)
                    .addField("Secondary: Domination", "Sudden Impact\nRavenous Hunter",true)
                    .setImage("https://i.imgur.com/kEqKF00.png")
                    .setColor(Precision)
                message.channel.sendEmbed(embed)
            }
            else if((args[1].toLowerCase())==="leona") {
                var embed = new Discord.RichEmbed()
                    .addField("Leona runes", "These are Leona Runes.")
                    .addField("Main tree: Resolve", "Aftershock\nFont of Life\nConditioning\nOvergrowth",true)
                    .addField("Secondary: Sorcery", "The Ultimate Hat\nScorch",true)
                    .setImage("https://i.imgur.com/b1vzz99.png")
                    .setColor(Resolve)
                message.channel.sendEmbed(embed)
            }
            else if((args[1].toLowerCase())==="rengar") {  
                var embed = new Discord.RichEmbed()
                    .addField("Rengar runes", "These are Rengar runes")
                    .addField("Main tree: Domination", "Dark Harvest\nSudden Impact\nEyeball Collection\nRelentless Hunter",true)
                    .addField("Secondary: Sorcery","Celerity\nThe Ultimate Hat",true)
                    .setImage("https://i.imgur.com/405CC3N.png")
                    .setColor(Domination)
                message.channel.sendEmbed(embed)
            }
            else if((args[1].toLowerCase())==="hecarim")    {
                var embed = new Discord.RichEmbed()
                    .addField("Hecarim runes", "These are Hecarim runes")
                    .addField("Main tree: Domination", "Predator\nSudden Impact\nEyeball Collection\nRelentless Hunter",true)
                    .addField("Secondary: Sorcery","Celerity\nWaterwalking",true)
                    .setImage("https://i.imgur.com/GBHL3Ue.png")
                    .setColor(Domination)
            message.channel.sendEmbed(embed)
            }
            else if((args[1].toLowerCase()))  {
                message.channel.sendMessage("The following rune pages are known to me as of now:\nGraves\nGangplank\nLeona\nSion\nHecarim")
            }
            break;


        
            case "nighty":
        message.delete()
        let nighty = message.mentions.users.first() || message.guild.members.get(args[0]);
        if (!args[1])   {
            message.sendMessage("You should wish someone a good nights rest.")
        }
        else if((args[1].toLowerCase())==="me") {
            var embed = new Discord.RichEmbed()
                .setColor("dd1122")
                .setDescription("**"+ message.author.username + "** is going to bed. Good nighty!")
                .setImage(sleepgifs[Math.floor(Math.random() * sleepgifs.length)])
                //.setImage("https://media1.tenor.com/images/b1cdf65b0627586b7ad2274c011b100f/tenor.gif?itemid=8503491")
            message.channel.sendEmbed(embed)
        }
        else if (nighty)    {
            var embed = new Discord.RichEmbed()
                .setColor("dd1122")
                .setDescription("***" + message.author.username + "*** wishes you a good nighty ***"+ message.mentions.members.first().user.username + "***")
                .setImage(sleepgifs[Math.floor(Math.random() * sleepgifs.length)])
                message.channel.sendEmbed(embed)
        }      
        break;

        case "say":
        var optionalParameter;
        if (typeof (args[0])==="string")    {
            optionalParameter = Array.prototype.shift.apply(args)
        }
        const sentence = args.join(" ");
        message.delete().catch(O_o=>{})
        message.channel.send(sentence)
        
        message.delete()
        break;

        case "play":
        message.delete()
        var playmate = message.mentions.users.first() || message.guild.members.get(args[0]);
        if (!playmate)  {
            message.channel.sendMessage("Why do you want to play alone?")
        }
        else   {
            var embed = new Discord.RichEmbed()
            .setDescription("**" + message.author.username + "** wishes to play with you **"+ message.mentions.members.first().user.username + "**")
            .setColor("dd1122")
            .setImage(playgifs[Math.floor(Math.random() * playgifs.length)])
        message.channel.send(embed)
        }
        case "leaderboard":
        message.delete()
        if (!args[1])   {
            var embed = new Discord.RichEmbed()
                .setTitle("Leaderboard")
                .addField("Name",LeaderboardNames,true)
                .addField("Kills",LeaderboardKills,true)
            message.channel.send(embed)
        }
        else if (args[1]) {
            if (args[1] === "addname")  {
                LeaderboardNames.push(args[2])
                LeaderboardKills.push(0)
                var data1 = {
                    "LeaderboardNames": LeaderboardNames,
                    "LeaderboardKills": LeaderboardKills
                }
                
                
                var data = JSON.stringify(data1)
                fs.writeFile('Arrays.json',data, function (err) {
                    if (err) throw err;
                    console.log('Updated!');
                  });
            }
            if (args[1] === "addscore")  {
                var mark = LeaderboardNames.indexOf(args[2])
                var current = LeaderboardKills[mark]
                LeaderboardKills.splice(mark,1,(parseInt(current) + parseInt(args[3])))
            }
        }
        break;

        default:
            message.channel.sendMessage("I do not know this, please teach me.")
        

               
    }
});



bot.login(TOKEN);
