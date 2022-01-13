(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.notes = [];
        }
        getNotes() {
          return [...this.notes];
        }
        addNote(note) {
          this.notes.push(note);
        }
        reset() {
          this.notes = [];
        }
        setNotes(array) {
          this.notes = array;
        }
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(notesModelInstance, notesApiInstance) {
          this.notesModelInstance = notesModelInstance;
          this.notesApiInstance = notesApiInstance;
          this.mainContainerEl = document.querySelector("#main-container");
          this.addNoteButton = document.querySelector("#add-note");
          this.userInput = document.querySelector("#message-input");
          this.addNoteButton.addEventListener("click", () => {
            this.notesModelInstance.addNote(this.userInput.value);
            this.notesApiInstance.createNote(this.userInput.value, console.log);
            this.displayNotes();
          });
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
          const notes = document.querySelectorAll(".note");
          for (const note of notes) {
            note.remove();
          }
        }
        clearInput() {
          this.userInput.value = "";
        }
      };
      module.exports = NotesView2;
    }
  });

  // NotesApi.js
  var require_NotesApi = __commonJS({
    "NotesApi.js"(exports, module) {
      var NotesApi2 = class {
        loadNotes(callback) {
          fetch("http://localhost:3000/notes").then((response) => response.json()).then((data) => {
            callback(data);
          });
        }
        createNote(note) {
          const newNote = { content: note };
          fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(newNote)
          }).then((response) => response.json());
        }
      };
      module.exports = NotesApi2;
    }
  });

  // emojiApi.js
  var require_emojiApi = __commonJS({
    "emojiApi.js"(exports, module) {
      var EmojiApi2 = class {
        convertToEmoji(text) {
          const newNote = { "text": text };
          fetch("https://makers-emojify.herokuapp.com/", {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(newNote)
          }).then((response) => response.json()).then((data) => {
            return data.emojified_text;
          });
        }
      };
      module.exports = EmojiApi2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var NotesApi = require_NotesApi();
  var EmojiApi = require_emojiApi();
  var api = new NotesApi();
  var emojiApi = new EmojiApi();
  var model = new NotesModel(emojiApi);
  var view = new NotesView(model, api);
  api.loadNotes((notes) => {
    console.log(notes);
    model.setNotes(notes);
    view.displayNotes();
  });
  console.log(emojiApi.convertToEmoji("Hello, :earth_africa:"));
  model.addNote("This is an example note");
})();
