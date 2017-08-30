(function() {
    function HomeCtrl(Room) {
      this.roomDisplay = Room.all;
      console.log(Room.all);
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
