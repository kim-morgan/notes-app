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
      };
      module.exports = NotesModel2;
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(notesModelInstance) {
          this.notesModelInstance = notesModelInstance;
          this.mainContainerEl = document.querySelector("#main-container");
          this.addNoteButton = document.querySelector("#add-note");
          this.userInput = document.querySelector("#message-input");
          this.addNoteButton.addEventListener("click", () => {
            this.notesModelInstance.addNote(this.userInput.value);
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

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var notesModel = new NotesModel();
  notesModel.addNote("This is an example note");
  console.log(notesModel);
  var view = new NotesView(notesModel);
  console.log(document.querySelector("body"));
  view.displayNotes();
  console.log(notesView);
})();
