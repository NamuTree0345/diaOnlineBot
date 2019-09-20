const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
    console.log('connected')
    client.user.setGame('/도움말 을 입력해 보세요! Created by: [VIP+] ! Namutree0345#4658')
})

client.on('message', (msg) => {
    if (msg.content === '/봇알림') {
        msg.channel.send('봇알림 역할을 추가하는 중입니다... 2~3초 안에 반응이 없을경우 오류입니다.')
        try {
            msg.member.addRole('622379816817131531')
            msg.channel.send('당신은 이제 봇 알림을 받습니다!')
        } catch {}
    }
    if (msg.content === '/봇알림안받기') {
        msg.channel.send('봇알림 역할을 없에는 중입니다... 2~3초 안에 반응이 없을경우 오류입니다.')
        try {
            msg.member.removeRole('622379816817131531')
            msg.channel.send('당신은 이제 봇 알림을 받지 않습니다.')
        } catch {}
    }
    if (msg.content.startsWith("/럭키상자")) {
        // || msg.author.id === '483148796994387973'
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            msg.channel.send('럭키상자를 뽑으시겠습니까? (제한시간 5초)')
            msg.react('🎁')
            try {
                const user = client.users.get(msg.content.split(' ')[1])
                const filter = (reaction, user) => reaction.emoji.name === '🎁' && user.id === msg.author.id
                const collector = msg.createReactionCollector(filter, { time: 5000 });

                collector.on('collect', r => {
                    const ran = Math.floor(Math.random() * 10) + 1;
                    msg.delete()
                    msg.channel.send(`${user}님의 추첨을 시작합니다!`)
                        /*if (ran === 1) {
                    msg.channel.send(`축하합니다! ${msg.author}님께서 **처벌 면제권**이 당첨되셨습니다!`)
                } else if (ran === 2) {
                    msg.channel.send(`축하합니다! ${msg.author}님께서 **승급권**이 당첨되셨습니다!`)
                } else if (ran === 3) {
                    msg.channel.send(`축하합니다! ${msg.author}님께서 **특별 승급권**이 당첨되셨습니다!`)
                } else if (ran === 4) {
                    msg.channel.send(`축하합니다! ${msg.author}님께서 **스페셜 승급권**이 당첨되셨습니다!`)
                } else if (ran === 5) {
                    msg.channel.send(`축하합니다! ${msg.author}님께서 **리미티드 승급권**이 당첨되셨습니다!`)
                } else if (ran === 6) {
                    msg.channel.send(`축하합니다! ${msg.author}님께서 **레전드 승급권**이 당첨되셨습니다!`)
                } else if (ran === 7) {
                    msg.channel.send(`축하합니다! ${msg.author}님께서 **처벌 면제권 조각**이 당첨되셨습니다!`)
                } else if (ran === 8) {
                    msg.channel.send(`축하합니다! ${msg.author}님께서 **특수 카드 강화권**이 당첨되셨습니다!`)
                } else if (ran === 9) {
                    msg.channel.send(`축하합니다! ${msg.author}님께서 **확정강화권**이 당첨되셨습니다!`)
                } else if (ran === 10) {
                    msg.channel.send(`축하합니다! ${msg.author}님께서 **확정강화권 조각**이 당첨되었습니다!`)
                }
*/
                    var generateRandom = function(min, max) {
                        var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
                        return ranNum;
                    }
                    msg.channel.send('' + generateRandom(1, 10))
                    switch (generateRandom(1, 10)) {
                        case 1:
                            msg.channel.send(`축하합니다! **처벌 면제권**이 당첨되셨습니다!`)
                            break
                        case 2:
                            msg.channel.send(`축하합니다! **승급권**이 당첨되셨습니다!`)
                            break
                        case 3:
                            msg.channel.send(`축하합니다! **특별 승급권**이 당첨되셨습니다!`)
                            break
                        case 4:
                            msg.channel.send(`축하합니다! **스페셜 승급권**이 당첨되셨습니다!`)
                            break
                        case 5:
                            msg.channel.send(`축하합니다! **리미티드 승급권**이 당첨되셨습니다!`)
                            break
                        case 6:
                            msg.channel.send(`축하합니다! **레전드 승급권**이 당첨되셨습니다!`)
                            break
                        case 7:
                            msg.channel.send(`축하합니다! **처벌 면제권 조각**이 당첨되셨습니다!`)
                            break
                        case 8:
                            msg.channel.send(`축하합니다! **특수 카드 강화권**이 당첨되셨습니다!`)
                            break
                        case 9:
                            msg.channel.send(`축하합니다! **확정강화권**이 당첨되셨습니다!`)
                            break
                        case 10:
                            msg.channel.send(`축하합니다! **확정강화권 조각**이 당첨되셨습니다!`)
                            break
                    }


                })

            } catch (err) {
                msg.channel.send('앗! 오류가 발생했어요!')
                const get = client.users.get('483148796994387973')
                get.send(`error!\nguild id: ${msg.guild.id}\nguild name: ${msg.guild.name}\nevent tag: ${msg.author.tag}\nchannelid: ${msg.channel.id}\nchannelname: ${msg.channel.name}\nTrace: \n` + err.stack)
            }
        } else {
            msg.channel.send('당신은 관리자 권한을 가지고 있지 않으므로 럭키상자 뽑기가 불가능 합니다!')
        }
    }
})

client.login(process.env.BOT_TOKEN)