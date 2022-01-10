const NotesModel = require('./notesModel')

describe('NotesModel',() => {
  it('should be initialised with empty notes', () => {
    const notesmodel = new NotesModel();
    expect(notesmodel.getNotes()).toEqual([])

  })

  it('should add notes to the array', () => {
    const notesmodel = new NotesModel();
    notesmodel.addNote('Buy milk');
    expect(notesmodel.getNotes()).toEqual(['Buy milk'])

  })

  it('should reset the notes array', () => {
    const notesmodel = new NotesModel();
    notesmodel.addNote('Buy milk');
    notesmodel.reset();
    expect(notesmodel.getNotes()).toEqual([])

  })

  

})