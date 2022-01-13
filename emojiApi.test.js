const EmojiApi = require('./EmojiApi')
require('jest-fetch-mock').enableMocks()

describe('Emoji', () => {
  it('#convertToEmoji - converts text with emojis', async () => {
    const api = new EmojiApi();
    fetch.mockResponseOnce(JSON.stringify({"status":"OK","text":"Hello, :earth_africa:","emojified_text":"Hello, 🌍"}));
    const response = api.convertToEmoji("Hello, :earth_africa:")
    expect(response).toBe("Hello, 🌍")
  })

});