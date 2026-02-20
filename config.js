/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['919064763128','917797739246'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Rohit', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUW4+iSBj9L/WKGbkIKEknCzRyU7y2oJt5KKCAUgQsChQn/vcN9vTMbLI72/tWly+nznfO+eobKEpcIxd1QPkGKoJbSFG/pF2FgAK0JkkQAQMQQwqBAuaeRY39JZm59tU/TZm1LWotb1m79d3Ilva0XUdQ4CS34tQX8BiAqglzHP0GkKFh5q2LzC494VCuFlt+WXkse6v8hNzMqaONVU0XGNjy1xfw6BEhJrhIjSpDZ0Rg7qJuCTH5HH1kJcfUEHwZMWk63tz2B43d4VLO06GrJ/XesOz5TC2ilLc/R9+gNDMyh5iMV27lAqHh/lq8OdoiVzXDLi9NnB3tzCrdbfpOv8ZpgWI7RgXFtPu07qye3rLgdAykSRLOktN5iNDYbot0JUDauZNpuDjvZ35IhNXniAfB4T7f75Jg3Rhzl8DytdlLR43Gqpova6nb0slWsE9Ml/6N+JJ8ZOX0f3TfOHF09wXZ0kx9KS8va7uC4tqeOZu3Y1BgMjfEYhE2ztVMP0e/LI+1fAhNQ5hpOouXkbG6YauZzjJ11O4iPmUMrhUXnmutftKHtCG/Y5nfmaDKygm++AwfDl/V9Z4VJ7zEOabTtbx9PRwjMovbJJBHYt4c2V3krDUpOVBCmbZY5Xabz8dknzmVN92dzOHbbYfVl2dHJ9TZMVC4xwAQlOKaEkhxWTzPeGkAYNxuUEQQfcoL3OGOr6fUc0Mfu8wdjs/0dGzzQ2DnG33Ip6pnerfRSWgi+wUMQEXKCNU1ii1c05J0c1TXMEU1UP78OgAFutF34/rnBG4AEkxq+lY0VV7C+MPVj0sYRWVT0E1XRHq/QAQo7M9jRCku0rrXsSkgiTLcIj2DtAZKAvMa/egQERQDhZIG/ZhavYx74f3JRvJNfwYG4Pw0BMdAARNuMpJlfiJPxpzCiX/UX649LKyqLwWiYADyZxknT+SJJI44mWMFcdxX9hePHwx7wBhRiPMaKEBf+N1ln+qGR9xRdDVN1UhVPVXBz44+ovEuvVjIvi9Q5rKMwwoO96bKylGSvE3lQHr187jdtfjUDYf0Nn/5BxCgACczrswsWmr25WKqUrvPE6cWV/PhfYaN/GbF0WHX4GzP5vGxaLiRyHONJauXVxzcNSEb38+SE47jWNos5sYBd/P4ONT7HA1AjFocoV8fu+y9y/poRwc+5nAebNlJSGXBHHcnrDJM2UxfLblcyzdm6lleYDYZI3q5lXrWUL44cDEWsh17llbrRbDuzlpVNLXBZOl7aJ9Dk3//rPAzTr1X/TbB6Dn7Bewd/G/v3on3EWMfg18wvv8m/zKRGjowXE7l5HIUfMlveS31FoIlcBrimJSrgpALR9W8HcrRFjweXwegyiFNSnIGCoBFTEocgwEgZdNn1i6S8jeP6WpqG2k67TvPYU3Vn3OwxWdUU3iugMLJMidORI7l36uWpKwsWGdAAfx86i5X4PEXPm24VlUHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
