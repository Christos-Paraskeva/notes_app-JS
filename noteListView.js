"strict mode";

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
    // console.log(this.noteList.notes())

  };

  NoteListView.prototype.displayNotes = function () {
    console.log(this.noteList)
    if (this.noteList.length !== 0) {
      var notes = this.noteList.notes().map(function(note){
        return note.text
      });
      return ("<ul><li><div>" + notes.join("</div></li><li><div>") + "</div></li></ul>");
    }
    else {
      return 'hi'
    }
  };

  exports.NoteListView = NoteListView;

})(this);
