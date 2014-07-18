angular
  .module('myApps.directives.V1Story', [])
  .directive('v1SwimLane', function () {
    return {
      restrict: 'E',
      scope: {
        name: '='
      },
      transclude: true,
      replace: true,
      templateUrl: "templates/v1_swim_lane.html"
    }
  })
  .directive('v1Story', function () {
    return {
      restrict: 'E',
      scope: {
        story: '='
      },
      replace: true,
      templateUrl: "templates/v1_story.html"
    }
  });
