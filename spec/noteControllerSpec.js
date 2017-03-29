"strict mode";

function noteControllerCanBeInstantiated () {
  var noteController = new NoteController('instantiated')
  assert.isTrue(noteController.noteList === ("instantiated"), "'NoteController' has not been instantiated");
};

noteControllerCanBeInstantiated();

function innerhtmlContainsNotesList () {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  var noteController = new NoteController(noteList);
  noteList.createNote('Something')
  noteListView.displayNotes = function() {
    return "<ul><li><div>Something</div></li></ul>";
  };
  assert.isTrue(noteController.displayContent() === "<ul><li><div>Something</div></li></ul>", 'Correct Notes are not displayed as HTML');
};

innerhtmlContainsNotesList();
