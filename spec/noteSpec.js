"strict mode";

function noteRespondsToText () {
  var note = new Note("hello");
  assert.isTrue(note.hasOwnProperty("text"), "'Text' is not a property of note");
};

noteRespondsToText();

function noteHasUniqueId () {
  var text = 'note 1'
  var id = 0
  var note = new Note(id, text)
  assert.isTrue(note.hasOwnProperty("id"), "Note does not contain Id");
};

noteHasUniqueId();
