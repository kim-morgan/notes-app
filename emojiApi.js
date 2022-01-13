// const newNote = {"text": "Hello, :earth_africa:"}

// fetch('https://makers-emojify.herokuapp.com/', {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(newNote),
//     })

class EmojiApi {

  convertToEmoji(text) {
    const newNote = {"text": text}
    fetch('https://makers-emojify.herokuapp.com/', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newNote),
    }).then((response) => response.json()).then((data) => { return data.emojified_text });
  }

}

module.exports = EmojiApi;