"strict mode";

(function(exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.createNote = function (text) {
    return this.notes.push(new Note(text));
  };

  function prepareNotes(notesText) {
    this.notes.map(function(note){
      return note.text
    });
  };

  exports.NoteList = NoteList;

})(this);
