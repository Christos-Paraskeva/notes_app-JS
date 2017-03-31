"strict mode";

function noteControllerCanBeInstantiated () {
  var noteController = new NoteController('instantiated')
  assert.isTrue(noteController.noteList === ("instantiated"), "'NoteController' has not been instantiated");
};

noteControllerCanBeInstantiated();

// need to mock the outcome of index html
// cannot get it to load
function innerhtmlContainsNotesList () {
  function NoteListDouble() {};
  function NoteListViewDouble() {};

  var noteListDouble = new NoteListDouble();
  var noteController = new NoteController(noteListDouble);
  noteController.view = new NoteListViewDouble(noteListDouble)

  noteController.view.getHTML = function() {
    return "<ul><li><div>Something</div></li></ul>";
  };

  console.log(noteController.view.getHTML())


  assert.isTrue(noteController.displayContent(element) === element, 'Correct Notes are not displayed as HTML');
};

innerhtmlContainsNotesList();
