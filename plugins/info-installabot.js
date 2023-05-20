import fs from 'fs'
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
let text = `
𝐂𝐨𝐦𝐚𝐧𝐝𝐢 𝐩𝐞𝐫 𝐓𝐄𝐑𝐌𝐔𝐗 📱

> cd
> termux-setup-storage
> apt update 
> pkg upgrade 
> pkg install git -y
> pkg install nodejs -y
> pkg install ffmpeg -y
> pkg install imagemagick -y
> pkg install yarn
> git clone https://github.com/procionelcesso123/procionebot.git
> cd procionebot
> yarn install 
> npm install
> npm update
> npm start

𝐂𝐨𝐦𝐚𝐧𝐝𝐢 𝐩𝐞𝐫 𝐓𝐄𝐑𝐌𝐔𝐗 📱 PER SCARICARE IL BOT
cd /sdcard && rm -rf BotWhaIta && git clone https://github.com/procionelcesso123/procionebot.git && cd procionebot && sh start.sh 
`.trim()   
conn.reply(m.chat, text, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'bot',
body: 'bot',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/`}}})   
}
handler.command = /^(installa)/i
export default handler
