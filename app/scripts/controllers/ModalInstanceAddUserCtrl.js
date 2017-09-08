(function() {

    function ModalInstanceAddUserCtrl($uibModalInstance) {

      this.userName = '';

      this.submit = function(userName) {
        var userInput = document.getElementById('userName').value
        if (userInput != "") {

          $uibModalInstance.close(userName);

        }
      }

    }

    angular
        .module('blocChat')
        .controller('ModalInstanceAddUserCtrl', ['$uibModalInstance', ModalInstanceAddUserCtrl])

})();
