const { MessageEmbed } = require("discord.js");

const { EMOJI_ARROW } = require('../config.json');
const { SERVER_INVITE } = require('../config.json');
const { BOT_ID } = require('../config.json');

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "To add/invite the bot to your server",
  execute(message, args) {
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 70282305;

    let invite = new MessageEmbed()
      .setTitle(`**SUPPORT SERVER**`)
      .setDescription(


`${EMOJI_ARROW} **Invite FALCON 1 [(Click Here)](https://discord.com/api/oauth2/authorize?client_id=838281182697357323&permissions=8&scope=bot)**

${EMOJI_ARROW}  **INVITE FALCON 2 [(Click Here)](https://discord.com/api/oauth2/authorize?client_id=839143427480354827&permissions=8&scope=bot)**

${EMOJI_ARROW}  **INVITE FALCON 3 [(Click Here)](https://discord.com/api/oauth2/authorize?client_id=839361274709803029&permissions=8&scope=bot)**
`
          
      )
      .setURL(
        `${SERVER_INVITE}`
      )
      .setColor("RANDOM");
    return message.channel.send(invite);
  }
};



console.log("invite working")