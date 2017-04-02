"strict mode";

(function(exports) {
   function NoteController(noteList, view = new NoteListView(noteList), singleNote = new SingleNoteView(noteList)) {
     this.noteList = noteList
     this.view = view
     this.singleView = singleNote
   };

   NoteController.prototype.addNote = function (text){
     this.noteList.createNote(text);
   };

   NoteController.prototype.displayContent = function(element = document.getElementById('app')) {
     var element = element;
     return element.innerHTML = this.view.getHTML();
   };

   NoteController.prototype.displaySingleNote = function(which, element = document.getElementById('app')) {
     var element = element;
     return element.innerHTML = this.singleView.getSingleHtml(which);
   };

   exports.NoteController = NoteController;
})(this);
