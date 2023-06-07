
let handler = m => m
handler.all = async function (m) { 
let menzione = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
if (!m.isGroup)
throw ''
let gruppi = global.db.data.chats[m.chat]
if (gruppi.spacobot === false)
throw ''
if (/^ciao$/i.test(m.text)) {
m.reply(`Ciao troietta`)
}
if (/^buongiorno$/i.test(m.text)) {
m.reply(`..Ancora non sei morto?`)
{mentions: [menzione.split]
}}
if (/^buonanotte$/i.test(m.text)) {
m.reply(`Magari ti svegli ${pickRandom(['freddo','morto'])}`)
}
if (/^bestemmia$/i.test(m.text)) {
this.reply(m.chat, `${pickRandom(['Porco dio','Porca madonna','Cristo dio','Dio porchetta','Dio forchetta','Puttana madonna','Dio maiale','Dio impanato'])}`)
}
if (/^procione$/i.test(m.text)) {
m.reply(`Chi ha avuto l'audacia di evocare procione con tanta disinvoltura!?`)
}}
export default handler
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
