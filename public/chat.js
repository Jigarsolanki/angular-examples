angular
  .module('chatApp', [ 'ui.router' ])
  .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home.html',
        controller: function ($scope) {

          $scope.userName = 'Anonymous';
          $scope.message = '';
          $scope.roomName = 'Main Room';
          $scope.userMessages = [ ];

          $scope.postMessage = function () {
            if($scope.message === '') {
              return;
            }

            socket.emit('ChatMessage', { 'message': $scope.message, 'userName': $scope.userName } );
            $scope.message = '';
          }

          socket.on('ChatMessage', function(msg) {
            $scope.userMessages.push(msg);
          });
        }
      });
  }]);
