(function() {
    function HomeCtrl(Room) {
      this.chatRooms = Room.all;
      console.log(Room.all);
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
