"strict mode";

(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.getHTML = function () {
    var notes = this.noteList.notes().map(function(note){
      return note.text.substring(0,20);
    });
    return element = ("<ul><li><div>" + notes.join("</div></li><li><div>") + "</div></li></ul>")
  }

  exports.NoteListView = NoteListView;

})(this);
