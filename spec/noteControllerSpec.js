"strict mode";

function NoteDouble(text) {
  this.text = text
};

function NoteListDouble() {
  this._notes = [new NoteDouble('note 1'), new NoteDouble('My Single Note'), new NoteDouble('note 3')]
};
function ViewDouble() {};
function SingleViewDouble() {};
function InnerHtmlDouble(){
  this.innerHTML = ""
};

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

function innerHtmlContainsNotesList () {
  var getElementById = new InnerHtmlDouble();
  var noteListDouble = new NoteListDouble();
  var noteController = new NoteController(noteListDouble, view = new ViewDouble(noteListDouble));
  assert.isTrue(noteController.displayContent(InnerHtmlDouble) === "<ul><li><div>Something</div></li></ul>", 'Correct Notes are not displayed as HTML');
};

innerHtmlContainsNotesList();

function innerHtmlContainsSingleNote () {
  var getElementById = new InnerHtmlDouble();
  var noteListDouble = new NoteListDouble();
  var viewDouble = new ViewDouble();
  var singleViewDouble = new SingleViewDouble(noteListDouble)
  var noteController = new NoteController(noteListDouble, viewDouble, singleViewDouble)
  assert.isTrue(noteController.displaySingleNote(getElementById.innerHtml, 1) === "<ul><li><div>My Single Note</div></li></ul>", 'Correct single note does not display');
};

innerHtmlContainsSingleNote();
