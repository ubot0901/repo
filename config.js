const config = {
    "ownerID": "624346501010685969", //kendi IDınızı yazınız
    "admins": ["624346501010685969"],
    "support": ["624346501010685969"],
    "token": "NzI3NTk2NjU2MTM2MjkwNDM2.XvyX9w.blHvv9qDnhcv5JK6-YotI2HBKAc", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "TFcNwapg-MqvfPcAH8Q451PN73s56nXb", //botunuzun secretini yazınız
      "callbackURL": `http://blacklive.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "http://blacklive.glitch.me", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;