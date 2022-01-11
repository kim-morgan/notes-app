const NotesModel = require('./notesModel')
const NotesView = require('./notesView')

const notesModel = new NotesModel();

notesModel.addNote('This is an example note');

console.log(notesModel)

const view = new NotesView(notesModel);

console.log(document.querySelector("body"));

view.displayNotes();

console.log(notesView);