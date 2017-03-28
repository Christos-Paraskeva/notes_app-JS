"strict mode";

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
    console.log(this.noteList.notes())

  };

  NoteListView.prototype.displayNotes = function () {
    var x = this.noteList.notes().map(function(note){
      return note.text
    });
    return x.join('\n');
  };

  exports.NoteListView = NoteListView;

})(this);
