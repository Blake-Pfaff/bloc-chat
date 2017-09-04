(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("Rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(room) {
        rooms.$add({ name: room  }).then(function(ref) {
        var id = ref.key;
        console.log("added record with id " + id);
        rooms.$indexFor(id); // returns location in the array
        });
    }

    return Room;

  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
