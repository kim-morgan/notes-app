const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const NotesApi = require('./NotesApi')
const EmojiApi = require("./emojiApi")


const api = new NotesApi();
const emojiApi = new EmojiApi();
const model = new NotesModel();
const view = new NotesView(model, api, emojiApi);

api.loadNotes((notes) => {
  // This method is new — you'll need to add it to the model class
  console.log(notes)
  model.setNotes(notes);
  view.displayNotes();
});

const result = emojiApi.convertToEmoji("Hello, :earth_africa:", res => res)
console.log(result)

// console.log(await emojiApi.convertToEmoji("Hello, :earth_africa:"))



model.addNote('This is an example note');

// view.displayNotes();

