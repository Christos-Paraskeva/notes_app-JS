"strict mode";

function NoteListDouble() {};
function ViewDouble() {};
function SingleViewDouble() {;}

ViewDouble.prototype = {
  getHTML: function() {
    return "<ul><li><div>Something</div></li></ul>";
  }
};

SingleViewDouble.prototype = {
  getSingleHtml: function() {
    return "<ul><li><div>My Single Note</div></li></ul>";
  }
};


function noteControllerCanBeInstantiated () {
  var noteController = new NoteController('instantiated')
  assert.isTrue(noteController.noteList === ("instantiated"), "'NoteController' has not been instantiated");
};

noteControllerCanBeInstantiated();

function innerhtmlContainsNotesList () {
  var getElementById = new InnerHtmlDouble();
  var noteListDouble = new NoteListDouble();
  var noteController = new NoteController(noteListDouble, view = new ViewDouble(noteListDouble));
  function InnerHtmlDouble(){
    this.innerHTML = ""
  };

   assert.isTrue(noteController.displayContent(InnerHtmlDouble) === "<ul><li><div>Something</div></li></ul>", 'Correct Notes are not displayed as HTML');
};

innerhtmlContainsNotesList();
