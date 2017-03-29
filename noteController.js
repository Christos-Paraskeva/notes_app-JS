// (function(exports) {
//   function changeName(greeting) {
//     var text = document.getElementById('app').innerHTML
//     text = greeting
//   };
//
//   exports.changeName = changeName
//
// })(this);
//
// changeName('howdy');

"strict mode";
(function(exports) {
  function changeText(html) {
    var notes = document.getElementById('app');
    notes.innerHTML = html;
  };

  exports.changeText = changeText;

})(this);

changeText('howdy');


(function(exports) {
  function NoteController(noteList) {
    this.noteList = noteList
  };

  NoteController.prototype.addNote = function (note) {
    this.noteList.createNote(note)
  };

  NoteController.prototype.displayContent = function (html) {  
    var notes = document.getElementById('app');
    notes.innerHTML = html;
  };

  exports.NoteController = NoteController;

})(this);

// var noteList = new NoteList();
//
// var noteController = NoteController(noteList);
