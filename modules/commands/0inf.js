module.exports.config = {
	name: "inf",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Arun Kumar", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");
var link =                                     
["https://i.imgur.com/6Qhm0ia.jpeg", "https://i.imgur.com/hMGvri8.jpeg", "https://i.imgur.com/yiNOiVU.jpeg", "https://i.imgur.com/Kj2CmiZ.jpeg"];
var callback = () => api.sendMessage({body:`🌹𝙰𝙳𝙼𝙸𝙽 𝙰𝙽𝙳 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝚃𝙸𝙾𝙽 🇵🇰 


☄️𝗕𝗢𝗧 𝗡𝗔𝗠𝗘☄️ ⚔ ${global.config.BOTNAME} ⚔

🔥𝗢𝗪𝗡𝗘𝗥 🔥☞︎︎︎ 𝗭𝗔𝗜𝗡 𝗣𝗥𝗜𝗡𝗖𝗘🤴☜︎︎︎✰ \n\n
🙈🄾🅆🄽🄴🅁 🄲🄾🄽🅃🄰🄲🅃 🄻🄸🄽🄺🅂🙈➪ \n\n  𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 🧨https://www.facebook.com/profile.php?id=100086033644262&mibextid=ZbWKwL 💞🕊️
  \n 
✅𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘👉 @zaini-jutt7 \n\n  ====𝗢𝗪𝗡𝗘𝗥 𝗧𝗜𝗞𝗧𝗢𝗞 𝗔𝗖𝗖𝗢𝗨𝗡𝗧======»»»»»»»»𝗭𝗮𝗶𝗻𝗶-𝗝𝘂𝘁𝘁7
✧══════•❁❀❁•══════✧

🌸𝗕𝗼𝘁 𝗣𝗿𝗲𝗳𝗶𝘅🌸☞︎︎︎.☜︎︎︎✰ ${global.config.PREFIX}

🥳UPTIME🥳

🌪️Today is🌪️ ☞︎︎︎☜︎︎︎✰ ${juswa} 

⚡Bot is running⚡ ${hours}:${minutes}:${seconds}.

✅Thanks for using My Bot ❤ ${global.config.BOTNAME} 🖤

`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close",() => callback());
   };
