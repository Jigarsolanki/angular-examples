angular
  .module('myApps', [ 'ui.router', 'myApps.directives.V1Story' ])
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
            $scope.$apply(function() {
              $scope.userMessages.push(msg);
            });
          });
        }
      });

      $stateProvider
      .state('v1', {
        url: '/v1',
        templateUrl: 'templates/v1.html',
        controller: function ($scope) {
          $scope.stories = [
            {
              id: 'B-1438',
              status: 'READY',
              description: "You're cool, bro!",
              users: 'Alex, Bill',
              defect: false
            },
            {
              id: 'D-8974',
              status: 'DEV',
              description: "No, You're cool, bro!",
              users: 'Will, Hannah',
              defect: true
            },
            {
              id: 'D-8888',
              status: 'DONE',
              description: "We are cool, bros!",
              users: 'Jigar',
              defect: true
            },
            {
              id: 'D-1111',
              status: 'READY',
              description: "We are cool, broakjaskdfj lajfds!",
              users: 'Jigar',
              defect: true
            },
            {
              id: 'D-2084',
              status: 'DONE',
              description: "We are cool, brosasdlfk asdf jlaksfd!",
              users: 'Jigar',
              defect: true
            },
            {
              id: 'D-9473',
              status: 'DONE',
              description: "We are cool, brosasdlfk asdf jlaksfd!",
              users: 'Jigar',
              defect: true
            },
            {
              id: 'D-9473',
              status: 'READY',
              description: "We are cool, brosasdlfk asdf jlaksfd!",
              users: 'Jigar',
              defect: true
            }
          ];
        }
      });
  }]);
