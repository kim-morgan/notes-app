class NotesView {

  constructor(notesModelInstance) {
    this.notesModelInstance = notesModelInstance;
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButton = document.querySelector('#add-note')
    this.userInput = document.querySelector("#message-input")

    this.addNoteButton.addEventListener("click", () => {
      this.notesModelInstance.addNote(this.userInput.value);
      this.displayNotes();
    })
  }

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