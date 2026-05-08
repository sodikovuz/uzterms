const axios = require("axios");

const sendTelegram = async (message) => {
  try {
    await axios.post(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }
    );
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = sendTelegram;