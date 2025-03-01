const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'ALPHA;;;H4sIAAAAAAAAA5VUW5OiOBj9L3nVHrmJYFVXLSreaRRRwK15iBAwAgFDQLHL/76Fdtf0w85s71sqkJOTc/neAclwgRaoBv13kFNcQYaaJatzBPpgUIYhoqANAsgg6AND6xo+z7dY4u87pc6ygR50rDHkFO1ij2GmpLVha3y1d9ev4N4GeXlIsP8HwGs2inWr08JmLM49WMrXUObnyrV2GJ5yu2hpOpvpeJ3acfEK7g0ixBSTSM+PKEUUJgtUryCm36NfLFrYFcLT7WBc40QlpTFOaCtZp1O0WbhkvNJ3jrmze4PY+B59OuMn6/B2IGa6mFixVJQteTvdDPLZyNoWm1uHXo1tKidlIj3pFzgiKJgFiDDM6m/rrq26jnEei2aV3nQEC7/k8oRA6AXzI9vJycWSa+rInkuK7xEXz6YUnTQv0HdjoeuEGPnzqazk7mQYhhQTzZ+Lbr3IPDf+SnxFP7MS/x/dzfHYOYVLbmlo9ZWI+0xS6Tl31PnNHE1MRzkLOzeYt+h+53+Pfipn9sZ39WXZOmDlhMqjjEzNiBQ0rHVRTd6QcJiJXFXZX3SHrKR/Ymm56j6R9zioB1VvMxJMZYKxOZw6dF3ZpONxxws7i4sRNd88Ptiuhq5Tu57Q4/HxODt1rhm3O6ymt8NxZ1rxOV2IXX9zjF4fL4pRPQtAn7+3AUURLhiFDGek2VOlNoBBtUE+ReyhLoDLVXkbXOLAm2gtHl+JL84hvoxneW/lwGK2P9PQ962S+MUraIOcZj4qChRMccEyWhuoKGCECtD/+2cbEHRlT9+a20S+DUJMC7YlZZ5kMPg09fMj9P2sJGxTE3/YLBAFfe7XNmIMk6hoZCwJpP4RV2h4hKwA/RAmBbq3QYAq7KMGDwTyecqpk4M92Ly9VPkymxlOsm4oHzPy/EUUJYR6fvAi9ET4Iglh7wUKofii+JyPJAnxqi+BNsAflWnO/NbBcb4XfDnjocvVNw3t1muv9CM/HheXhwtP6RFFAegzWqI2OEA/LnM7ixH5U82JMnClMh1ZKBrsrXFdO5NyrRsq1b7gPi0F/fdfY2qYBQ2eoTjCcM6/gTZIHwnEzcsFQVS7nCxJaq/P9/4qflwaHWGe/yCINbAfmjcHAsQgTgrQB8OVmHTOnqkvV8vTQZpMND3ShpEGfnn0mfVnmDoXqJ49o+i85UG5tML9dnLsHa2LqLbUCJXrsXkWAjviGSe9/gtIY1FNBnwgqVWkGurWsbE5tc/d/boj8/N5PY/0mE72TB8k1enkcENuILhS3sqnZrR1hUhn3M6NXDRiJ3mk7VM7CYeMHC+vzW3PrHy9jF/KVnRbLMKKQOfWip1icxRmXubdVPvqhKYgdLi9UpGus91dHFLPRhvLWgZ25Fs6oVk6zXqyLgiJSuH0VGzjkFxSrD1b+JgCycf0xY+CvH8kK8ToMcwIbBz6D2++Zpy7t79AfEzH3+RoECqTCqaj5eoG3QPmXGE3yJC09d86YeVNaTywz4xspbdDYIL7/Wcb5AlkYUZT0Af40RnQBgksmParpTZOUcFgmoM+35M4pasovHz/B1jT+rDaBwAA',
    PREFIXE: process.env.PREFIX || "~",
    GITHUB : process.env.GITHUB|| 'https://github.com/Keithkeizzah/ALPHA-MD',
    OWNER_NAME : process.env.OWNER_NAME || "Keith",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "22395064497",  
    CHATBOT : process.env.CHATBOT || "no",  
    CHATBOT_INBOX : process.env.CHATBOT_INBOX || "yes",                     
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    AUTO_REACT: process.env.AUTO_REACTION || "no",
    OWNER_REACT: process.env.OWNER_REACT || "no",
    URL: process.env.URL || "https://files.catbox.moe/6hd2t7.jpg",  
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'non',              
    EMOJIS: process.env.EMOJIS || "⚔️, 👿, 🌎, 💜",
    AUTOBIO_MSG: process.env.AUTOBIO_MSG || "I DON'T GIVE A FUCK⚔️",
   GREET_MSG: process.env.GREET_MSG || "Huskii am unavailable mzee 😂",               
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "yes",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_CONTROL || 'no', 
    GREET : process.env.GREET || "no", 
    VOICE_CHATBOT: process.env.VOICE_CHATBOT || 'no',
    VOICE_CHATBOT_INBOX: process.env.VOICE_CHATBOT_INBOX || 'no',
              
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || 'viewed by alpha',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTOBIO: process.env.AUTOBIO || 'no',       
    ANTICALL_MSG : process.env.ANTICALL_MSG || 'call declined',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47",
    EVENTS :process.env.EVENTS || "yes",
    CAPTION : process.env.CAPTION || "ALPHA-MD",
    BOT : process.env.BOT_NAME || 'ALPHA_MD',
    MODE: process.env.PUBLIC_MODE || "no",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Mali", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    ANTICALL: process.env.ANTICALL || 'yes',              
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://moudy_ggs4_user:1Tx91xlTiQ7jL2EMPUjVLa9xN4BfhafW@dpg-cusc0ca3esus73fltvs0-a.oregon-postgres.render.com/moudy_ggs4"
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
