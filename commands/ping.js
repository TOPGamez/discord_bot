module.exports = {
    name = 'ping',
    description = 'sends pong!',
    execute(message, args){

        message.channel.send('pong!')

    }
}