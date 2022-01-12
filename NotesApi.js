class NotesApi {
  loadNotes(callback) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }

  createNote(note) {
    const newNote = { content: note }
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
  .then(response => response.json())
  }
}

module.exports = NotesApi

