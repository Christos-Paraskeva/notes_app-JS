"strict mode";

function NoteDouble(text) {
  this.text = text
};

function NoteListDouble(){
  this._notes = []
};

NoteListDouble.prototype = {
  createNote: function() {
    this._notes = [new NoteDouble('note 1'), new NoteDouble('note 2'), new NoteDouble('note 3')];
  }
};

function viewSingleNote () {
  var noteListDouble = new NoteListDouble();
  noteListDouble.createNote()
  console.log(noteListDouble)
  console.log(noteListDouble._notes)
  singleNoteView = new SingleNoteView(noteListDouble);
  console.log(singleNoteView)
  assert.isTrue(singleNoteView.getSingleHtml(1) === "<ul><li><div>note 2</div></li><li><div>", "Does not display a single note");
};

viewSingleNote();
