angular.module('loading...').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/loading....html',
    "<canvas width=\"{{width}}\" height=\"{{height}}\" id=\"{{uuid}}\" ng-controller=\"CanvasCtrl\"></canvas>"
  );

}]);
