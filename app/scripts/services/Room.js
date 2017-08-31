(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("Rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.createRoomObject = function() {

        var room = { name: 'test'};
        return room;

    }

    Room.add = function(room) {
        rooms.$add({ name: 'test' })
    }

    return Room;
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
