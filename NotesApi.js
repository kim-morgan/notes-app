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

  async resetNotes() {

    return fetch('http://localhost:3000/notes', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
  .then(response => response.json())
  .then(res => res)
  .catch(e => console.log(e))
  }
}

module.exports = NotesApi

