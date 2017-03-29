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
  function changeGreeting(greeting) {
    var text = document.getElementById('app');
    text.innerHTML = greeting;
  };

  exports.changeGreeting = changeGreeting;

})(this);

changeGreeting('howdy');


(function(exports) {
  function noteController(noteList) {
    this.noteList = noteList
  };

})(this);
