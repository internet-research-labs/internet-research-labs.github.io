angular.module('loading...').controller('LoadingCanvasCtrl', [ 

  '$scope', 'uuid', '$element', 'create_scene',

  function ($scope, uuid, $element, create_scene) {
    $scope.wrapperid = uuid('wrapper');
    $scope.uuid      = uuid('canvas');
  }
]);