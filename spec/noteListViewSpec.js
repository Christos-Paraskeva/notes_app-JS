"strict mode";


function noteListDisplayNotes() {
  var noteList = new NoteList();
  noteList.createNote("hello");
  noteList.createNote("just testing");

  noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.displayNotes() === "hello" + "\n" + "just testing", "DisplayNotes method does not display current stored notes");
};

noteListDisplayNotes();
