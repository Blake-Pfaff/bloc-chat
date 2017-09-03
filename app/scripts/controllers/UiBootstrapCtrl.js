(function() {

  function UiBootstrapCtrl($uibModal) {
    // Controller method to open the modal
    this.open = function () {
      // Trigger the modal window and assign it to a modal variable
      var modal = $uibModal.open({
        templateUrl: 'templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal'
      });

      // Handle the open/close of the modal
      modal.result.then(function () {
        console.log('opened!');
      }, function () {
        console.log('dismissed!');
      });
    };
  }

  angular
    .module('blocChat')
    .controller('UiBootstrapCtrl', ['$uibModal', UiBootstrapCtrl]);

})();
