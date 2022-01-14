class NotesView {

  constructor(notesModelInstance, notesApiInstance, emojiApiInstance ) {
    this.notesModelInstance = notesModelInstance;
    this.notesApiInstance = notesApiInstance;
    this.emojiApiInstance = emojiApiInstance 
    this.mainContainerEl = document.querySelector('#main-container');
    this.addNoteButton = document.querySelector('#add-note')
    this.userInput = document.querySelector("#message-input")
    this.resetNotesButton = document.querySelector("#reset-notes")

    this.addNoteButton.addEventListener("click", async() => {
      const emojifiedText = await this.emojiApiInstance.convertToEmoji(this.userInput.value, (res) => res)
      this.notesModelInstance.addNote(emojifiedText);
      this.notesApiInstance.createNote(emojifiedText, console.log);
      this.displayNotes();
    })

    this.resetNotesButton.addEventListener('click', () => {
      this.notesModelInstance.reset()
      this.notesApiInstance.resetNotes()
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