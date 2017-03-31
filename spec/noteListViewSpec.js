"strict mode";

function noteListDisplayNotes() {
  var noteList = new NoteList();
  noteList.createNote("hello");
  noteList.createNote("just testing");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === "<ul><li><div>" + "hello" + "</div></li><li><div>" + "just testing" + "</div></li></ul>", "DisplayNotes method does not display current stored notes");
};

noteListDisplayNotes();

function noteListDisplayOneNote() {
  var noteList = new NoteList();
  noteList.createNote("hello");
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === "<ul><li><div>" + "hello" + "</div></li></ul>", "DisplayNotes method does not display a single note");
};

noteListDisplayOneNote();

function noteListDisplayNoNotes() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.getHTML() === "<ul><li><div></div></li></ul>", "DisplayNotes method break when no notes are saved");
};

noteListDisplayNoNotes();
