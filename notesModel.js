class NotesModel {


  constructor() {
    this.notes = []
  }

  getNotes() {
    return [...this.notes];
  }

  addNote(note) {
    this.notes.push(note)
  }

  reset() {
    this.notes = []
  }

  setNotes(array) {
    this.notes = array
  }

}

module.exports = NotesModel;