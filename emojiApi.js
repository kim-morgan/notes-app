const axios = require('axios')

// const newNote = {"text": "Hello, :earth_africa:"}

// fetch('https://makers-emojify.herokuapp.com/', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(newNote),
//     })

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



  // convertToEmoji(text) {
  //   const newNote = {"text": text}
  //   fetch('https://makers-emojify.herokuapp.com/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //     body: JSON.stringify(newNote),
  //   }).then((response) => response.json()).then((data) => { return data.emojified_text });
  // }