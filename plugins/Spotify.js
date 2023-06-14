js
import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: '94704ca5305d40bd914c8410077483e9',
  clientSecret: 'a8817299a9ba45899d2ad9d1268e25b7',
  redirectUri: 'https://procionebot.procionelcesso1.repl.co/'
});

let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Inserisci con il comando, il nome della canzone da cercare! esempio`

  try {
    const data = await spotifyApi.searchTracks(text);
    const track = data.body.tracks.items[0];
    
    // invia un messaggio di conferma di ricerca
    const searchMessage = await conn.sendMessage(m.chat, `🎵 ${track.name}\n\n 🗣 ${track.artists[0].name}\n\n⏳️ carico..`, m);

    // recupera il file audio dal link di Spotify
    const audioURL = await ytdl(track.external_urls.spotify);

    // invia il file audio al chat
    const aa = await conn.sendMessage(m.chat, {
      audio: {
        url: audioURL
      }, ptt: true, mimetype: 'audio/mpeg', fileName: `Audio.mp3`
    }, m);

    // elimina il messaggio di conferma di ricerca
    searchMessage.delete();

    if (!aa) {
      conn.sendFile(m.chat, audioURL, 'Audio.mp3', null, m, false, {
        mimetype: 'audio/mp4'
      });
    }
  } catch (error) {
    throw 'Ho riscontrato un errore, assicurati di aver digitato correttamente il nome della canzone o riprova più tardi';
  }
};

handler.help = ['play', 'play2'].map(v => v + ' <pencarian>');
handler.tags = ['downloader'];
handler.command = /^spotify?$/i;

export default handler;
