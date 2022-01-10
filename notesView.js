const NotesModel = require("./notesModel")

class NotesView {

  constructor(notesModelInstance) {
    this.notesModelInstance = notesModelInstance;
    this.mainContainerEl = document.querySelector('#main-container');
  }

//   get the list of notes from the model.
// for each note, create a new div element on the page (with an HTML class "note").

  displayNotes() {
    let notes = this.notesModelInstance.getNotes();

    for (const note of notes) {
      let div = document.createElement("div");
      div.className = "note";
      div.innerText = note;
      this.mainContainerEl.append(div);
    }
  }

}

module.exports = NotesView;