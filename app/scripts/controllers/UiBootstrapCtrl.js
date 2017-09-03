(function() {

  function UiBootstrapCtrl($uibModal, Room) {
    // Controller method to open the modal

    this.open = function () {
      // Trigger the modal window and assign it to a modal variable
      var modal = $uibModal.open({
        templateUrl: 'templates/modal.html',
        controller: 'ModalInstanceCtrl',
        controllerAs: 'modal'
      });
      

      modal.result.then(
        // This is called when the modal is closed, i.e modal.close().
        function (result) {
          console.log('modal accepted and closed!', result);
        },
        // This is called when the modal is dismissed, i.e. modal.dismiss().
        function () {
          console.log('modal dismissed!');
        }
      );
    };
  }

  angular
    .module('blocChat')
    .controller('UiBootstrapCtrl', ['$uibModal', 'Room', UiBootstrapCtrl]);

})();
