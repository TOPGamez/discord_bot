module.exports = {
    name = 'ping',
    description = 'sends pong!',
    execute(message, args){

        if(member.message.roles.cache.has('771600019698352138')){
            message.channel.send('pong!');
        }
        
        else{
            message.channel.send('Nice try!');
        }

    }
}