const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('**Vous n\'avez pas la permission d\'utiliser cette commande :x:**.')
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Commandes Black Clover Craft ')
            .setTitle('Les commandes de *Black Clover Craft*')
            .setColor('RANDOM')
            .addField('***ban***', '!ban', )
            .addField('***Kick***', '!kick', )
            .addField('***Mute***', '!mute', )
            .addField('***Unmute***', '!unmute', )
            .addField('***Infractions***', '!infractions', )
            .addField('***Warn***', '!warn', )
            .addField('***Unwarn***', '!unwarn', )
            .addField('***Clear***', '!clear', )
            .addField('***TempBan***', '!tempban @name [temps-d=day/m=minute/s=seconde]', )
            .addField('***TempMute***', '!tempmute@name [temps-d=day/m=minute/s=seconde]', )
            .setAuthor('Black Clover Craft Bot', 'https://cdn.discordapp.com/attachments/793134597311037450/794348340091158558/image0.jpg',)
            .setThumbnail('https://cdn.discordapp.com/attachments/793134597311037450/794348340091158558/image0.jpg')
            .setFooter('By Usaikt#7565', 'https://cdn.discordapp.com/attachments/793134597311037450/794348340091158558/image0.jpg')
            .setTimestamp())
            
    },
    name: 'help'
}