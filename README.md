[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=30&pause=1000&color=F77539&center=true&lines=%F0%9F%A6%9D%F0%9D%91%B7%F0%9D%91%B9%F0%9D%91%B6%F0%9D%91%AA%F0%9D%91%B0%F0%9D%91%B6%F0%9D%91%B5%F0%9D%91%AC%E2%87%9D%F0%9D%90%81%E1%8F%AB%F0%9D%90%93)](https://git.io/typing-svg)
<h1 align="center">
<p>
<img src= "https://telegra.ph/file/bc12386c7355151f41702.jpg" alt="BOT" width="720">
</p>


## —◉ ⚙️ CONFIGURAZIONE 🦝⇝𝐁Ꮻ𝐓 ⚙️

<details>
  <summary><b>ESEGUI IL FORK DELLA REPOSITORY</b></summary>

  [clicca qui per clonare la repository](https://github.com/procionelcesso123/procionebot/fork)

</details>

<details>
  <summary><b>CAMBIA IL NUMERO DEL PROPRIETARIO</b></summary>

  [clicca qui per cambiare il numero del proprietario](https://github.com/procionelcesso123/procionebot/blob/master/config.js)

</details>


## —◉ 🍳 ATTIVAZIONE 🦝⇝𝐁Ꮻ𝐓 🍳

<details>
  <summary><b>—◉ 🌌 ATTIVA 🦝⇝𝐁Ꮻ𝐓 SU KOYEB 🌌</b></summary>

Clicca il pulsante per attivare il bot su Koyeb:

  [![Attiva su Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&repository=github.com//procionebot&branch=master&name=procione.bot)

</details>

<details>
  <summary><b>—◉ 💥 ATTIVA 🦝⇝𝐁Ꮻ𝐓 SU REPLIT 💥 -consigliato</b></summary>


Clicca il pulsante per attivare il bot su Replit: 

[![Attiva su Repl.it](https://replit.com/badge/github/Fabri115/BotWhaIta)](https://repl.it/github/procionelcesso123/procionebot)

### `—◉ COME FARE UN SERVER 24/7 SU REPLIT`

## 1. INSTALLA I PACCHETTI
Prima di eseguire il repl fai questo:
* Esegui `npm init -y` nella Shell
* Esegui `sh-session npm install express ping-monitor` nella Shell
  
![](https://user-images.githubusercontent.com/69215413/146991197-2e6ae207-942d-473f-ad1e-6cb78067cef8.png)
  
## 2. ESEGUI IL REPL 
Clicca il pulsante "Run":\
![](https://user-images.githubusercontent.com/69215413/146987397-637e9f1a-2987-459b-86ef-bc651ca525be.png)

## 3. CRON-JOB.org
Useremo [Cron-Job.org](https://console.cron-job.org/) come sistema di monitoraggio del server.

* Copia l'URL del sito visualizzato quando esegui il repl:

![](https://user-images.githubusercontent.com/69215413/146987775-56f77514-c7c1-4a67-8d81-7de17200d99b.png)

* Vai su [Cron-Job.org](https://console.cron-job.org/) e crea un account:
<img src="https://telegra.ph/file/3be6f411e4538680907f8.jpg" alt="home" width="400" height="500">

* Dopo aver creato l'account dovresti visualizzare la [dashboard](https://console.cron-job.org/dashboard). Da qui crea un CRONJOB:
  
![](https://telegra.ph/file/327785f9c21865a6305fa.jpg)

* Seleziona le stesse impostazioni che ci sono nell'immagine sottostante, quindi salva (cliccando sul pulsante in basso a destra "SALVA").
Sostituisci "https://procionebot.procionelcesso1.repl.co/" con l'url copiato in precedenza dal tuo repl.

 ![](https://telegra.ph/file/8edec72608904b37166ef.jpg)

Ora il tuo bot rimarrà attivo 24 ore su 24, 7 giorni su 7 anche dopo aver chiuso replit. [Cron-job.org](https://console.cron-job.org/) eseguirà il ping del tuo server ogni minuto per assicurarsi che funzioni ancora, di solito serve per avvisarti di tempi di inattività imprevisti, ma in questo caso i ping costanti hanno l'effetto di mantenere in vita il nostro Repl poiché la versione gratuita prevede lo spegnimento dopo circa un'ora di inattività.

</details>

<details>
  <summary><b>—◉ 🎗 ATTIVA 🦝⇝𝐁Ꮻ𝐓 SU HEROKU 🎗</b></summary>

Clicca il pulsante per attivare il bot su Heroku:

  [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=[https://github.com/procionelcesso123/procionebot])

</details>

<details>
  <summary><b>—◉ 👾 ATTIVA 🦝⇝𝐁Ꮻ𝐓 SU TERMUX 👾</b></summary>


### `—◉ VERSIONE DI TERMUX NECESSARIA: ` 

Clicca il pulsante per scaricare Termux:

<a href="https://bit.ly/termux119"><img src="https://telegra.ph/file/c68dcf19a390ffb792c3e.png" alt="Termux.apk" width="100"></a>



- DIGITA QUESTI COMANDI:
```bash
termux-setup-storage
```

```bash
pkg upgrade -y && pkg update -y
```

```bash
pkg install git -y
```
  
```bash
pkg install nodejs -y  
```
  
```bash
pkg install ffmpeg -y
```  
  
```bash
pkg install imagemagick -y
``` 

```bash
pkg install yarn
```    

```bash
git clone https://github.com/procionelcesso123/procionebot.git
```
  
```bash
cd procionebot
```  

```bash
yarn install
```

```bash
npm install
```

```bash
npm update
```

```bash
sh start.sh
```

### `—◉ ✔️ PER 24/7 🦝⇝𝐁Ꮻ𝐓 SU TERMUX ✔️`
  
 ```bash
> npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
  ```

### `—◉ 👽 PER OTTENERE UN ALTRO CODICE QR 👽`

DIGITA QUESTI COMANDI:
```bash
> cd 
```
```bash
> cd procionebot
```
```bash
> rm -rf MysticSession
```
```bash
> sh start.sh
```
</details>

<details>
  <summary><b>—◉ 💻 ATTIVA 🦝⇝𝐁Ꮻ𝐓 SU WINDOWS/VPS/RDP 💻</b></summary>

* Installa Git [`Click Here`](https://git-scm.com/downloads)
* Installa NodeJS [`Click Here`](https://nodejs.org/en/download)
* Installa FFmpeg [`Click Here`](https://ffmpeg.org/download.html) (**Non dimenticare di aggiungere FFmpeg alle variabili di ambiente PATH**)
* Installa ImageMagick [`Click Here`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/procionelcesso123/procionebot
```
```bash
cd procionebot
```
```bash
npm install
```
```bash
npm update
```

---------

### `Run`

```bash
node .
```

</details>


---------
### `—◉ 📝 NOTE 🦝⇝𝐁Ꮻ𝐓 📝`
- IL BOT 𝑷𝑹𝑶𝑪𝑰𝑶𝑵𝑬 E' COMPATIBILE CON WHATSAPP BUSINESS E WHATSAPP NORMALE
- PER BLOCCARE GLI UTENTI IN PRIVATO ESEGUI IL COMANDO .attiva antiprivato
- SE DOVESSI VEDERE I MSG DEL BOT 'IN ATTESA' ELIMINA LA CARTELLA 'MYSTICSESSION' DA BOT ATTIVO
---------

### `—◉ ⚠️ MOD DEVELOPER 🦝⇝𝐁Ꮻ𝐓 ⚠️ `
  <div align="center">
  
| [![procionelcesso123](https://telegra.ph/file/1e7db3fa212a15584fe9d.jpg?size=200)](https://github.com/procionelcesso123) |
|----|
| [꧁𓊈𒆜PROCIONELCESSO𒆜𓊉꧂](https://github.com/procionelcesso123) |
|  𒆜Bug report,updates, news, 𒆜 |
  
  </div>

