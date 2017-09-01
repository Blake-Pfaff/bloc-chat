(function() {
    function HomeCtrl(Room) {
      this.chatRooms = Room.all;
      this.createRoom = Room.add;

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
