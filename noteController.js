"strict mode";

(function(exports) {
   function NoteController(noteList) {
     this.noteList = noteList
     this.view = new NoteListView(noteList);
   };

   NoteController.prototype.addNote = function (text){
     this.noteList.createNote(text);
   };

   NoteController.prototype.displayContent = function(element = document.getElementById('app')) {
     var element = element;
     element.innerHTML = this.view.getHTML();
   };

   exports.NoteController = NoteController;
})(this);
