let handler = async(m, { conn, text }) => {
  if (!text) throw `[❗𝐈𝐍𝐅𝐎❗] Deficente non hai inserito nessun prefisso valido...`
  global.prefix = new RegExp('^[' + (text || global.opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-☆▪︎♡◇♧₩●○🦝').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')
  await m.reply(`[❗𝐈𝐍𝐅𝐎❗] Hai cambiato il prefisso per i comandi di procione in: *${text}*`)
    // conn.fakeReply(m.chat, '[❗𝐈𝐍𝐅𝐎❗] Il prefisso è stato cambiato in *${text}*', '0@s.whatsapp.net', 'Set Prefix Bot')
}
handler.help = ['setprefix'].map(v => v + ' [prefix]')
handler.tags = ['owner']
handler.command = /^(setprefix)$/i
handler.rowner = true

export default handler 
