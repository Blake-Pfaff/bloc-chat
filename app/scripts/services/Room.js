(function() {
  function Room($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child("Rooms");
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.createRoomObject = function() {

        
    }

    Room.add = function(room) {

    }

    return Room;

  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
