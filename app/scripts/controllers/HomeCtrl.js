(function() {
    function HomeCtrl(Room, Message, $cookies) {
      this.chatRooms = Room.all;

      this.createRoom = Room.add;


      // this.username = $cookies.get('blocChatCurrentUser');

      this.chatRooms.$loaded().then(() => {

          this.changeRoom(this.chatRooms.$getRecord('-KtDNd_7Ph6y4sztODP-'));

      })


      this.changeRoom = function(room)   {

        this.messages = Message.getByRoomId(room.$id);

        this.currentRoom = room;

        }

      this.send = function() {
        Message.send(this.message, this.currentRoom.$id);
        this.message = " ";
      }


      }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', '$cookies', HomeCtrl]);
})();
