"strict mode";

function noteListRespondsToNotes () {
  var noteList = new NoteList();
  assert.isTrue(noteList.hasOwnProperty("_notes"), "'Notes' is not a valid property");
};

noteListRespondsToNotes();

function noteListHasEmptyArrayOfNotes() {
  var noteList = new NoteList();
  assert.isTrue(Array.isArray(noteList._notes) && noteList._notes.length === 0, "Notes is not an empty array");
};

noteListHasEmptyArrayOfNotes();

function noteListCreatesAndSavesNote() {
  var noteList = new NoteList();
  var note = noteList.createNote("hello");
  assert.isTrue(noteList._notes[0] instanceof Note, "Created note is not an instance of Note");
};

noteListCreatesAndSavesNote();

function noteListSavesUniqueNoteId() {
  var noteList = new NoteList();
  noteList.createNote('note 1')
  noteList.createNote('note 2')
  assert.isTrue(noteList._notes[0].hasOwnProperty("id"), "Id is not saved");
  assert.isTrue(noteList._notes[0].id === 0, "Unique Id's are not saved");
  assert.isTrue(noteList._notes[1].id === 1, "Unique Id's are not saved");
};

noteListSavesUniqueNoteId();
