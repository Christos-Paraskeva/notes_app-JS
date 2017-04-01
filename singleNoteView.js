"strict mode";

(function(exports) {
  function SingleNoteView(noteList) {
    this.noteList = noteList
  };

  SingleNoteView.prototype.getSingleHtml = function (which) {
    console.log(this.noteList._notes)
    notes = this.noteList._notes().map(function(note){
      return note.text
    });
    return element = ("<ul><li><div>" + notes[which] + "</div></li><li><div>")
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
