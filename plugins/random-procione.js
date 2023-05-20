import fetch from 'node-fetch'
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('procione.jpg')
let img = await res.buffer()
let caption = `
*QUESTO NON E' UN PROCIONE, E' IL PROCIONE, @PROCIONECESSO!*
`.trim()
conn.sendFile(m.chat, img, 'procione.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*Error!*'
}}
handler.help = ['procione']
handler.tags = ['random']
handler.command = 'procione'
handler.fail = null
export default handler 
