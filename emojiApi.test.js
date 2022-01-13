const EmojiApi = require("./emojiApi");
// const NotesApi = require("./NotesApi");
// const EmojiApi = require("./EmojiApi");
const axios = require('axios')
// jest.mock("axios");

// require("jest-fetch-mock").enableMocks();

describe("Emoji", () => {
  it("#convertToEmoji - converts text with emojis", async () => {
    // const api = new EmojiApi();
    // const response = [
    //   {
    //     status: "OK",
    //     text: "Hello, :earth_africa:",
    //     emojified_text: "Hello, 🌍",
    //   },
    // ];
    // axios.post.mockResolvedValueOnce(response)

    const api = new EmojiApi();
    // const emojiApi = new EmojiApi();
    // const model = new NotesModel();
    // const view = new NotesView(model, api, emojiApi);

    const emojifiedText = await api.convertToEmoji("Hello, :earth_africa:", (res) => res);
    expect(emojifiedText).toEqual("Hello, 🌍");
  });
});
