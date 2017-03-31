"strict mode";

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.getHTML = function () {
    var notes = this.noteList.notes().map(function(note){
      return note.text
    });
    return element = ("<ul><li><div>" + notes.join("</div></li><li><div>") + "</div></li></ul>")
  }

  exports.NoteListView = NoteListView;

})(this);
