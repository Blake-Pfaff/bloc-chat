(function() {
  function Room($firebaseArray) {
    // makes an empty ojbect
    var Room = {};
      // var ref:  creates a refrence from the database made from the children "Rooms"
    var ref = firebase.database().ref().child("Rooms");
          // takes ref & makes it an array from the children of "Rooms"
    var rooms = $firebaseArray(ref);
    // sets property of the Room object "all" to var rooms
    Room.all = rooms;
    // adds a room and needs a room argument to work
    Room.add = function(room) {
        // $add is firebase code and takes an object as an argument
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
