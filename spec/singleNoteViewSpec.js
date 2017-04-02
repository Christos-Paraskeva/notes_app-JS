"strict mode";

function NoteDouble(text) {
  this.text = text
};

function NoteListDouble(){
  this._notes = [new NoteDouble('note 1'), new NoteDouble('note 2'), new NoteDouble('note 3')]
};

// NoteListDouble.prototype = {
//   createNote: function() {
//     this._notes = [new NoteDouble('note 1'), new NoteDouble('note 2'), new NoteDouble('note 3')];
//   }
// };

// can only stub one function for any given double?

NoteListDouble.prototype = {
  notes: function() {
    return this._notes
  }
};

function viewSingleNote () {
  var noteListDouble = new NoteListDouble();
  singleNoteView = new SingleNoteView(noteListDouble);
  assert.isTrue(singleNoteView.getSingleHtml(1) === "<ul><li><div>note 2</div></li><li><div>", "Does not display a single note");
};

viewSingleNote();
