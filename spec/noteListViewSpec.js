"strict mode";

function NoteDouble(text) {
  this.text = text
};

function NoteListDouble(){
  this._notes = [new NoteDouble('this note has more than 20 characters!'), new NoteDouble('this is a new note that should be shortened!')]
};

NoteListDouble.prototype = {
  notes: function() {
    return this._notes
  }
};

function noteListDisplayFirst20CharactersNotes() {
  var noteListDouble = new NoteListDouble();
  var noteListView = new NoteListView(noteListDouble);
  assert.isTrue(noteListView.getHTML() === "<ul><li><div>" + "this note has more t" + "</div></li><li><div>" + "this is a new note t" + "</div></li></ul>", "Does not display only first 20 characters of note");
};

noteListDisplayFirst20CharactersNotes();

function noteListDisplayNoNotes() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === "<ul><li><div></div></li></ul>", "DisplayNotes method break when no notes are saved");
};

noteListDisplayNoNotes();
