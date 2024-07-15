const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = 'VAJIRA-MD|-WA-BOT™';
const FOOTERNAME = '> ＶＡＪＩＲＡ -  ＭＤ - Ｖ4';
global.owner = process.env.OWNER_NUMBER  || '263715907468' ;  // ADD YOUR NUMBER WITHOUT +
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtSdTArMnV2bzJsbk94ekFxd3hvMVZva1laM1hUb2dIWFk1cXIxVFNuMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkl1YTMrWlJnSTBmclJJMzFKT2hqZjI2T3BlY2h3djgra3l5Wit4L3VsND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTUtsRktuZnA3UWg2STFndXcrcFFDeWFiK1ZXM0tYVnVtNWJZRUwrRkUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkMjBFSmdPVWRCbHBObkFadS9zNk9Zdks1bGN4WHQrQXhJVWZwMEFPQUNVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVLZElPOTJhWW1CWjArbFdkMWlOQVlwWll0YnVncTZBS2NCWVBpQm9pMzQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik4yNzVNOXRtUWJYd0VrY1dBZ3JDVG5mb0Y2cUxENWhGU2hSUTQ0cjhRVnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicURiQW1RVjZDa1RwT1c4ZnBEYWFjbDJhbTI5NmcvMXdqYW5pUEhZT2Mxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUVrVkNualBDY0c1V0ZSZ29CSlhoaVFPZXpkNG55Y0gzaVI2a3IwZE95az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ind1T3RsdlJXaTJkOVd5L3UvK2g5NUdTaldob3NQNkRRbDJrS3lPdEVCKzdxR1l5eTIwZm5iL0tUTlhMWnpaZWhUbnE1ZWFSVE5qNUZKYW9nLzJWREJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6IlhoMDF2OXNCN2FqNit6dVZTTXZNM2UyVThSUUErd3FkdVdXNE9nMVBTWDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ijl6ZDlacEVSUllHZVk1dXI5VVBZQnciLCJwaG9uZUlkIjoiYjYzYzA0MzAtNjJhNS00YjQ2LTgzMDgtOGU3OTJkOTdmYWY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilg2Y3NUa2FKTlIvd0tNS0lCNzBaZ3FPY1RhVT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidHcxbEllaUpGVkVNOWdFdEFUWDRtSjhpZFVvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDT0hXK1lrRkVObjN6clFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTVRyYnJObk5UMlVGRHlrTGNTbWRaanVLLzN0cWhJNEJ3dGxZQXVtb3ZrOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUFMzWkNWb1NoclVoTmlJRFVBZXp3WGpRZkxNU3QrMTVTR1hqbk5GeUc2Z1d1TVQ3Z0ZZTUloalliWFphcVV3SGxwRnIzUnE0bzZDa1dVYVJVeDRQQWc9PSIsImRldmljZVNpZ25hdHVyZSI6InI2a1NLbjZZL2RzWXlQWDRNYmZiMHFEbHVMV0t1MHdJdlNoaDhuOWV2NTB3ZzF2K1p6T2liZzkxU09lZ3RpeVNiTHZZQ0orTFl6MFoyYnFvdXZBRkRnPT0ifSwibWUiOnsiaWQiOiIyNjM3MTU5MDc0Njg6NDNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWlsdG9uIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNTkwNzQ2ODo0M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJURTYyNnpaelU5bEJROHBDM0VwbldZN2l2OTdhb1NPQWNMWldBTHBxTDVQIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwOTU3OTI2fQ==' ,
travaSend: process.env.TRAVA_SEND || '25' ,   
MODERATORS : process.env.MODERATORS === undefined ? "94772801923,94787820101" : process.env.MODERATORS ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '1536': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || 'VAJIRA' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LOGO: process.env.LOGO || `https://telegra.ph/file/ab0ea6ad90e2eb98090d9.jpg` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,
FOOTER: process.env.FOOTER || '‌👨‍💻 ＶＡＪＩＲＡ -  ＭＤ - Ｖ5 👨‍💻',    
PREFIX: process.env.PREFIX || '.' ,
LANG:  process.env.LANG || 'SI' ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || true  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,    
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME,        
INBOX_USER: process.env.INBOX_USER === undefined ? '' : process.env.INBOX_USER,
BANNED_USER: process.env.BANNED_USER === undefined ? '' : process.env.BANNED_USER ,    
AI_MODE: process.env.AI_MODE === undefined ? 'true' : process.env.AI_MODE,
ANTI_LINK: process.env.ANTI_LINK || false  ,
BOT_DETECT: process.env.BOT_DETECT === undefined ? 'false' : process.env.BOT_DETECT,    
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
ALIVE: process.env.ALIVE || `default`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
WELCOME:  process.env.WELCOME  || false ,
ANTI_DELETE : process.env.ANTI_DELETE || false ,
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO    
};
