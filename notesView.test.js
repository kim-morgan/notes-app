/**
 * @jest-environment jsdom
 */

const NotesView = require("./notesView")
const fs = require('fs');



const notesModelMock = {
  getNotes: () => { return ["buy milk", "go to gym"]; }
}

const secondNotesModelMock = {
  getNotes: () => {return secondNotesModelMock.notes},
  notes: [],
  addNote: (note) => { secondNotesModelMock.notes.push(note); }
}

describe("NotesView", () => {

  it("have a displayNotes method that adds notes to page", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesView = new NotesView(notesModelMock);
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  })

  it("should be able to input and add a note", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesView = new NotesView(secondNotesModelMock);
    const inputText = document.querySelector("#message-input");
    inputText.value = "Buy milk";
    const notesButton = document.querySelector("#add-note");
    notesButton.click();
    expect(document.querySelectorAll('div.note').length).toBe(1);
  })

  it("displayNotes should only show the notes one time", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesView = new NotesView(notesModelMock);
    notesView.displayNotes();
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  })

  it("should clear input value after button click", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesView = new NotesView(secondNotesModelMock);
    const inputText = document.querySelector("#message-input");
    inputText.value = "Buy milk";
    const notesButton = document.querySelector("#add-note");
    notesButton.click();
    expect(inputText.value).toBe("");
  })
})
