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
    this.removeNotes();

    let notes = this.notesModelInstance.getNotes();

    for (const note of notes) {
      let div = document.createElement("div");
      div.className = "note";
      div.innerText = note;
      this.mainContainerEl.append(div);
    }

    this.clearInput();
  }

  removeNotes() {
    const notes = document.querySelectorAll('.note');

    for (const note of notes) {
      note.remove();
    }
  }

  clearInput() {
    this.userInput.value = "";
  }

}

module.exports = NotesView;