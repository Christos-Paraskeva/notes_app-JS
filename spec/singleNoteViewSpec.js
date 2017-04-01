"strict mode";

function viewSingleNote () {
  var noteList = new NoteList();
  noteList.createNote('note 1')
  noteList.createNote('note 2')
  noteList.createNote('note 3')
  singleNoteView = new SingleNoteView(noteList);
  assert.isTrue(singleNoteView.getSingleHtml(1) === "<ul><li><div>note 2</div></li><li><div>", "Does not display a single note");
};

viewSingleNote();
