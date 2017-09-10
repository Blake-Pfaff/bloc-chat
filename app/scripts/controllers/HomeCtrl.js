(function() {
    function HomeCtrl(Room, Message) {
      this.chatRooms = Room.all;

      this.createRoom = Room.add;

      this.chatRooms.$loaded().then(() => {

        this.currentRoom = this.chatRooms.$getRecord('-KtDNd_7Ph6y4sztODP-');

        // console.log(this.currentRoom);
      })


      this.changeRoom = function(room)   {

        this.messages = Message.getByRoomId(room.$id);

        this.currentRoom = room;

          }


      }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
