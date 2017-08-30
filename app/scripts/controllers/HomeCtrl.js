(function() {
    function HomeCtrl(Room) {
      this.roomDisplay = Room.all;
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
