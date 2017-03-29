(function() {
var noteList = new NoteList();
var noteListView = new NoteListView(noteList);
var noteController = new NoteController(noteList);
noteController.addNote('Favourite drink: seltzer');
noteController.addNote('Another test note');
var html = noteListView.displayNotes();
noteController.displayContent(html);
})()
