const EmojiApi = require("./emojiApi");
const axios = require('axios');

describe("Emoji", () => {
  it("#convertToEmoji - converts text with emojis", async () => {
    const api = new EmojiApi();
    const emojifiedText = await api.convertToEmoji("Hello, :earth_africa:", (res) => res);
    expect(emojifiedText).toEqual("Hello, 🌍");
  });
});
