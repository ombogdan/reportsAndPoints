const ViberBot = require(`viber-bot`).Bot,
    BotEvents = require(`viber-bot`).Events,
    TextMessage = require(`viber-bot`).Message.Text,
    express = require(`express`);
const app = express();


const bot = new ViberBot({
    authToken: "4d87bddbbd27dfe8-2854d6714ddf82bf-555b973562753f8d",
    name: "Cat Vet Bot",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Katze_weiss.png"
});
bot.on(BotEvents.SUBSCRIBED, response => {
    response.send(new TextMessage(`Hi there ${response.userProfile.name}. I am ${bot.name}! Feel free to ask me anything.`));
});
bot.on(BotEvents.MESSAGE_RECEIVED, (message, response) => {
    console.log(message)
    console.log(response)
    response.send(new TextMessage(`Message received.`));
});
const port = 8080;
app.use("/viber/webhook", bot.middleware());
app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
    bot.setWebhook(`https://viberbot-nine.vercel.app`).catch(error => {
        console.log('Can not set webhook on following server. Is it running?');
        console.error(error);
        process.exit(1);
    });
});


  curl --header "Content-Type: application/json" --request POST --data '{"auth_token": "4d87bddbbd27dfe8-2854d6714ddf82bf-555b973562753f8d", "ids": ["oLPHyziBDAAetfgfPcq3Ng=="]} "send_name": true, "send_photo": true' https://chatapi.viber.com/pa/get_online
// curl --header "Content-Type: application/json" --request POST --data '{"auth_token": "4d87bddbbd27dfe8-2854d6714ddf82bf-555b973562753f8d", "url": "https://viberbot-eight.vercel.app/", "event_types": ["delivered", "seen"]}, "send_name": true, "send_photo": true' https://chatapi.viber.com/pa/set_webhook
