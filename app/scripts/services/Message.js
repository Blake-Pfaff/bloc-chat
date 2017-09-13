(function() {
  function Message($firebaseArray, $cookies) {
              // makes an empty ojbect
    var Message = {};
            // var ref:  creates a refrence from the database made from the children of humans. j/k made from "Messages"
    var ref = firebase.database().ref().child("Messages");
            // takes ref & makes it an array from the children of "Messages"
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(roomId) {

        ref.orderByChild('roomId').equalTo(roomId);
        return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));

    };


    Message.send = function(newMessage) {
      // $add is firebase code and takes an object as an argument
      messages.$add({ content: message, username: "TEST_NAME"  }).then(function(ref) {
      var id = ref.key;
      console.log("added record with id " + id);
      messages.$indexFor(id); // returns location in the array
      });
   };


    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
