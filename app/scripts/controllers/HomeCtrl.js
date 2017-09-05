(function() {
    function HomeCtrl(Room) {
      this.chatRooms = Room.all;
      this.createRoom = Room.add;


      this.chatRooms.$loaded().then(() => {
        this.currentRoom = this.chatRooms.$getRecord('-KtDNd_7Ph6y4sztODP-');
        console.log(this.currentRoom);
      })


      this.changeRoom = function(room) {
          $scope.currentRoom = room;
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
