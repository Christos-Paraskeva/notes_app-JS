"strict mode";

(function(exports) {
  function SingleNoteView(noteList = new NoteList()) {
    this.noteList = noteList
  };

  SingleNoteView.prototype.getSingleHtml = function (which) {
    notes = this.noteList.notes().map(function(note){
      return note.text
    });
    return element = ("<ul><li><div>" + notes[which] + "</div></li></ul>")
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
