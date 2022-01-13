const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const NotesApi = require('./NotesApi')
const EmojiApi = require("./emojiApi")


const api = new NotesApi();
const emojiApi = new EmojiApi();
const model = new NotesModel(emojiApi);
const view = new NotesView(model, api);

api.loadNotes((notes) => {
  // This method is new — you'll need to add it to the model class
  console.log(notes)
  model.setNotes(notes);
  view.displayNotes();
});

console.log(emojiApi.convertToEmoji("Hello, :earth_africa:"))



model.addNote('This is an example note');

// view.displayNotes();

