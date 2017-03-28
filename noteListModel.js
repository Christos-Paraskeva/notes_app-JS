"strict mode";

(function(exports) {
  function NoteList() {
    this.notes = []
  };

  NoteList.prototype.createNote = function (text) {
    return this.notes.push(new Note(text));
  };

  NoteList.prototype.displayNotes = function () {
    var x = this.notes.map(function(note){
      return note.text
    });
    return x.join('\n')
  };

  // function displayNotes() {
  //   console.log(prepareNotes)
  //   return prepareNotes(notesText).join(' ')
  // };

  exports.NoteList = NoteList;

})(this);
