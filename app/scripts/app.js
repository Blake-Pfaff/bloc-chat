(function() {
    function config($locationProvider, $stateProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
             });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
          }

            function BlocChatCookies($cookies, $uibModal) {

              var currentUser = $cookies.get('blocChatCurrentUser');

              if (!currentUser || currentUser === '') {


                  // Trigger the modal window and assign it to a modal variable
                  var modal = $uibModal.open({
                    templateUrl: 'templates/userModal.html',
                    controller: 'ModalInstanceAddUserCtrl',
                    controllerAs: 'addUser',
                    keyboard: false,
                    backdrop: 'static'
                  });


                  modal.result.then(
                    // This is called when the modal is closed, i.e modal.close().
                    function (result) {

                      console.log('modal accepted and closed!' + result);
                    }
                  );

              }

            }



    angular
        .module('blocChat', ['ui.bootstrap', 'ui.router', 'ngCookies', 'firebase' ])
        .config(config).run(['$cookies', '$uibModal', BlocChatCookies]);
})();
