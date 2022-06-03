const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
zenz: 'https://zenzapis.xyz', //jgn lupa klo mau gnti ini nya jg dignti *note zenz" jgn dihapus
beta: 'https://betabotz-api.herokuapp.com',
}

// Apikey Website Api
global.APIKeys = {
'https://zenzapis.xyz': 'c2459db922', // ganti mke zenz api punya kamu.
'https://betabotz-api.herokuapp.com': 'BetaBotz', //ganti aja gpp
}

// Other
global.owner = ['6283871223340','6288905923460']
global.premium = ['6288905923460']
global.botname = 'SadBoy Botz'
global.ownername = 'ItsMeRioDxD'
global.packname = 'Rio SaTeBoY'
global.author = 'WhatsApp Bot'
global.sessionName = 'rio'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
premium: "Infinity",
free: 20
}
global.thumb = fs.readFileSync('./asu.jpg')
global.visoka = { url: 'https://telegra.ph/file/2635267eed1cce033d98a.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
