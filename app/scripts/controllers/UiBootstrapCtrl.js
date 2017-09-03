(function() {

    function UiBootstrapCtrl($uibModal) {
      this.open = function() {
        $uibModal.open({
          templateUrl: "templates/modal.html",
          controller: 'ModalInstanceCtrl',
          controllerAs: 'modal',

        })
      }

}


    angular
        .module('blocChat')
        .controller('UiBootstrapCtrl', ['$uibModal', UiBootstrapCtrl]);



})();
