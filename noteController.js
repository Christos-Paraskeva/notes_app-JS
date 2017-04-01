"strict mode";

(function(exports) {
   function NoteController(noteList, view = new NoteListView(noteList)) {
     this.noteList = noteList
     this.view = view
   };

   NoteController.prototype.addNote = function (text){
     this.noteList.createNote(text);
   };

   NoteController.prototype.displayContent = function(element = document.getElementById('app')) {
     var element = element;
     return element.innerHTML = this.view.getHTML();
   };

   exports.NoteController = NoteController;
})(this);
