// "strict mode";
//
// (function(exports) {
//   function NoteListView() {
//   };
//
  function displayNotes(prepareNotes, notesText) {
    console.log(prepareNotes)
    return prepareNotes(notesText).join(' ')
  };
//
//   exports.NoteListView = NoteListView;
//
// })(this);
