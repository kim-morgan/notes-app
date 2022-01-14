const axios = require('axios')

class EmojiApi {

  async convertToEmoji(text, callback) {
    return axios.post('https://makers-emojify.herokuapp.com/', {
      "text": text
    })
    .then(response => callback(response.data.emojified_text))
    .catch(e => console.log(e));
    
  }
}

module.exports = EmojiApi;