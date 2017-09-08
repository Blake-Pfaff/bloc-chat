(function() {

    function ModalInstanceAddRoomCtrl($uibModalInstance) {

      this.roomName = '';

      this.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      }

      this.submit = function(roomName) {
          $uibModalInstance.close(roomName);
      }

    }

    angular
        .module('blocChat')
        .controller('ModalInstanceAddRoomCtrl', ['$uibModalInstance', ModalInstanceAddRoomCtrl])

})();
