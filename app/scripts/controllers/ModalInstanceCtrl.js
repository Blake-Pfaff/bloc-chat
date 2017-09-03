(function() {

    function ModalInstanceCtrl($uibModalInstance) {
      this.cancel = function() {
        $uibModalInstance.dismiss('cancel');
      }
    }



    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl])

})();
