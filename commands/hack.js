const {fetchJson,cmd, tlang,sleep } = require('../lib')

//---------------------------------------------------------------------------

cmd({

            pattern: "hack",

            category: "prank",

            desc: "hacking prank",

            use: ' ',

            filename: __filename,

        },

        async(Void,citel, text) => {

citel.reply("```Injecting malware```")

await sleep(1000)

citel.reply("```hacking into device \n 0%```")

await sleep(1000)

citel.reply("```transfering photos \n █ 10%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ 20%```")

await sleep(1000)

citel.reply("```transfering videos \n █ █ █ 30%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ 40%```")

await sleep(1000)

citel.reply("```transfering audio \n █ █ █ █ █ 50%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ 60%```")

await sleep(1000)

citel.reply("```transfering hidden files \n █ █ █ █ █ █ █ 70%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ █ █ 80%```")

await sleep(1000)

citel.reply("```transfering whatsapp chat \n █ █ █ █ █ █ █ █ █ 90%```")

await sleep(1000)

citel.reply("```transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%```")

await sleep(1000)

citel.reply("_*System hyjacking on process.. \n Conecting to Server*_")

await sleep(1000)

citel.reply("_*Divice successfully connected... \n Riciving data...*_")

await sleep(1000)

citel.reply("_Data hyjacked from divice 100% completed \n killing all evidence killing all malwares..._")

await sleep(1000)

citel.reply("*𝐁𝐋𝐀𝐒𝐓-𝐌𝐃  HACKING COMPLETED*")

await sleep(1000)

citel.reply("*SENDING PHONE DOCUMENTS...*")

await sleep(1000)

citel.reply("*SUCCESSFULLY SENT DATA AND Connection disconnected*")

await sleep(1000)

            return citel.reply('*ALL FILES TRANSFERRED*');

        }

    )
