"strict mode";

(function(exports) {
  function NoteList() {
    this._notes = []
    this._id = 0
  };

  NoteList.prototype.createNote = function (text) {
    this._notes.push(new Note(this._id, text));
    this._id++
  };

  NoteList.prototype.notes = function () {
    return this._notes;
  };

  exports.NoteList = NoteList;

})(this);
