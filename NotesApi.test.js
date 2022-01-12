const NotesApi = require('./NotesApi')
require('jest-fetch-mock').enableMocks()

describe('NotesApi', () => {
  it('#loadNotes - fetches data from GET/ notes', async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(JSON.stringify({
      notes: ['buy milk']
    }));

    api.loadNotes((response) => {
      expect(response.notes).toEqual(['buy milk']);
    });
  });
});