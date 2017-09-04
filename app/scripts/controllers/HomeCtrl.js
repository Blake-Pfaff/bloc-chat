(function() {
    function HomeCtrl(Room, $scope) {
      this.chatRooms = Room.all;
      this.createRoom = Room.add;
      var chatRooms = this.chatRooms

      this.chatRooms.$loaded().then(function(){
        $scope.currentRoom = chatRooms.$getRecord('-KtDNd_7Ph6y4sztODP-');
        console.log($scope.currentRoom);
      })


      this.changeRoom = function(room) {
          $scope.currentRoom = room;
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','$scope', '$uibModal', HomeCtrl]);
})();
