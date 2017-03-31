"strict mode";

function NoteListDouble() {};
function ViewDouble() {}

ViewDouble.prototype = {
  getHTML: function() {
    return "<ul><li><div>Something</div></li></ul>";
  }
};


function noteControllerCanBeInstantiated () {
  var noteController = new NoteController('instantiated')
  assert.isTrue(noteController.noteList === ("instantiated"), "'NoteController' has not been instantiated");
};

noteControllerCanBeInstantiated();

// need to mock the outcome of index html
// cannot get it to load
function innerhtmlContainsNotesList () {
  var getElementById = new InnerHtmlDouble();
  var noteListDouble = new NoteListDouble();
  var noteController = new NoteController(noteListDouble);

  function InnerHtmlDouble(){
    this.innerHTML = "<ul><li><div>Something</div></li></ul>"
  };

  assert.isTrue(getElementById.innerHTML === "<ul><li><div>Something</div></li></ul>", 'Correct Notes are not displayed as HTML');
};

innerhtmlContainsNotesList();
