/**
 * @jest-environment jsdom
 */

const NotesView = require("./notesView")
const NotesModel = require("./notesModel")
const fs = require('fs');

// create a new instance of NotesModel and adds two notes to it.
// dependency-inject it in a new instance of NotesView.
// call the displayNotes method.
// asserts there should be two div.note in the document.

const notesModelMock = {
  getNotes: () => { return ["buy milk", "go to gym"]; }
}

describe("NotesView", () => {
  it("have a displayNotes method that adds notes to page", () => {
    const myNotes = new NotesModel();
    myNotes.addNote("buy milk");
    myNotes.addNote("go to gym");
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesView = new NotesView(myNotes);
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  })
})
