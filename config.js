const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "𝐑𝐢𝐜𝐡𝐚𝐫𝐝";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+255789622341";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "  SUHAIL_21_00_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTExLFxuICAgICAgICA1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg0LFxuICAgICAgICA2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyLFxuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg4LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDc1LFxuICAgICAgICA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDMwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI5LFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDY4LFxuICAgICAgICA0MixcbiAgICAgICAgODAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAwLFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMixcbiAgICAgICAgMjM5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NSxcbiAgICAgICAgOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjM3LFxuICAgICAgICA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDcxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNCxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkWlNzU1NGTG1kZFNsTzNwakNvNEE4dHVPUlJJY2FWWGo2ekJSWTI4VEM0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJiT1hrT05HalNOMlBCay12SXdsZWRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjMxYjdjOGQ5LTliOWUtNDAzZC05YmI5LTAwYzY4MzliZjQyYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjcsXG4gICAgICA1OCxcbiAgICAgIDQ4LFxuICAgICAgMjE1LFxuICAgICAgODUsXG4gICAgICA2MSxcbiAgICAgIDEwMyxcbiAgICAgIDEwMixcbiAgICAgIDE4MixcbiAgICAgIDEzMSxcbiAgICAgIDQ0LFxuICAgICAgMzAsXG4gICAgICAxOSxcbiAgICAgIDEzMCxcbiAgICAgIDE0MCxcbiAgICAgIDEyLFxuICAgICAgNzQsXG4gICAgICA5NSxcbiAgICAgIDE1OSxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTMsXG4gICAgICAxNTMsXG4gICAgICA3MixcbiAgICAgIDE5NixcbiAgICAgIDE4NyxcbiAgICAgIDM4LFxuICAgICAgMTIzLFxuICAgICAgMjQ4LFxuICAgICAgMjAzLFxuICAgICAgOTYsXG4gICAgICAxODAsXG4gICAgICAxODgsXG4gICAgICA5MSxcbiAgICAgIDk4LFxuICAgICAgOTIsXG4gICAgICAyMTYsXG4gICAgICAyMixcbiAgICAgIDgsXG4gICAgICA2NixcbiAgICAgIDQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIktKTURNM00yXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU3ODk2MjIzNDE6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5MTA4NzcyNTU2MzkxMToxNUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNbmhrdThDRU5YWW5Mc0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImQ3NEowelI3Q3JJV3paeSt3RHNKcmpBSi9KUWFCNFB3THlsclhGVEk1enc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSFB1bUR4cTFsSVVmdC8wbDZuL1VaMHJDYWZTK05NNjhWWlMxclhzV0dTek1EVHRuTlpXbWhjUUU3WnhyVkxDVFo0aGF2N1FKTWJjYmdadWRCRGVwQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWWNjV00zSGhKZFludzhGMXhDZmk1SmhTYmxTWWJZN3dVOHdRWGI2b2o1cGRzVkNUV0RPTGptZGZwSWhBNGdwbklTZktlM1EybldFT2o1alZBOUVFanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Nzg5NjIyMzQxOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ4MTQ4MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPWUtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9ZSy5qc29uIjogIntcImtleURhdGFcIjpcInUxSkdqL3hha010SFlYTjB6dTNMYW5waC80cENwZU1idlF5ZE1ETnl1VXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzY5OTYyMTg1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ1OTMzMzczMzFcIn0iCn0= "  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝐑𝐢𝐜𝐡𝐚𝐫𝐝",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "𝐑𝐢𝐜𝐡𝐚𝐫𝐝",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
