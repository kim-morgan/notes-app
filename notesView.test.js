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

const notesApiMock = {createNote: () => {}};

const emojiApiMock = {convertToEmoji: (text) => text}

describe("NotesView", () => {

  it("have a displayNotes method that adds notes to page", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesView = new NotesView(notesModelMock, notesApiMock);
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  })

  it("should be able to input and add a note", async () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesView = new NotesView(secondNotesModelMock, notesApiMock, emojiApiMock);
    const inputText = document.querySelector("#message-input");
    inputText.value = "Buy milk";
    const notesButton = document.querySelector("#add-note");
    await notesButton.click();
    expect(document.querySelectorAll('div.note').length).toBe(1),0;
  })

  it("displayNotes should only show the notes one time", () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesView = new NotesView(notesModelMock, notesApiMock, emojiApiMock);
    notesView.displayNotes();
    notesView.displayNotes();
    expect(document.querySelectorAll('div.note').length).toBe(2);
  })

  it("should clear input value after button click", async () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const notesView = new NotesView(secondNotesModelMock, notesApiMock, emojiApiMock);
    const inputText = document.querySelector("#message-input");
    inputText.value = "Buy milk";
    const notesButton = document.querySelector("#add-note");
    await notesButton.click();
    expect(inputText.value).toBe("");
  })
})
