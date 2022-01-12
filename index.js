const NotesModel = require('./notesModel')
const NotesView = require('./notesView')
const NotesApi = require('./NotesApi')


const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);

api.loadNotes((notes) => {
  // This method is new — you'll need to add it to the model class
  console.log(notes)
  model.setNotes(notes);
  view.displayNotes();
});



model.addNote('This is an example note');

// view.displayNotes();

