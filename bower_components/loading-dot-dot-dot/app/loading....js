angular.module('loading...', []);
;angular.module('loading...').controller('CanvasCtrl', [ '$scope', '$element', 'uuid', function ($scope, $element, uuid) {

  var width  = $scope.width;
  var height = $scope.height;

  $scope.uuid = uuid('canvas');
  $scope.is_running = false;

  var ambient = new THREE.AmbientLight( 0xCCCCCC );
  var point   = new THREE.PointLight(0xFF0000, 1, 100);
  var diffuse = new THREE.DirectionalLight(0xCCCCCC);

  point.position.set(6, 0, 0);
  // self.lights.point.lookAt(0, 0, 0);
  diffuse.position.set( 1, 0, 0 );

  /**
   * 
   */
  var cube = new THREE.BoxGeometry(1, 1, 1);
  var mat  = new THREE.MeshPhongMaterial({
    ambient   : 0xFFFFFF,
    color     : 0xFFFFFF,
    specular  : 0xFFFFFF,
    shininess : 30
  });
  var mesh = new THREE.Mesh(cube, mat);

  /**
   * [init description]
   * @return {[type]} [description]
   */
  $scope.init = function () {
    $scope.scene    = new THREE.Scene();
    $scope.camera   = new THREE.PerspectiveCamera(75, 1.0, 0.1, 1000 );
    $scope.renderer = new THREE.WebGLRenderer({
      canvas : $element[0],
      alpha  : true
    });

    $scope.renderer.setClearColor( 0x000000, 0.0 );
    $scope.renderer.setSize(width, height);
    
    $scope.scene.add(mesh);
    $scope.scene.add(ambient);
    $scope.scene.add(point);
    $scope.scene.add(diffuse);

    $scope.is_running = true;
    $scope.loop();
  };

  var t = 0;
  var start = + new Date();

  /**
   * [update description]
   * @return {[type]} [description]
   */
  $scope.update = function () {
    t = (+ new Date() - start)/1000.0;

    mesh.position.set(0, 0, 0);
    mesh.rotation.x += 0.01;
    mesh.rotation.y -= 0.02;
    mesh.rotation.z += 0.04;

    $scope.renderer.setSize(width, height);

    $scope.camera.position.x = 0;
    $scope.camera.position.y = 0;
    $scope.camera.position.z = 2;
    $scope.camera.lookAt(new THREE.Vector3(0, 0, 0));
  };

  /**
   * [draw description]
   * @return {[type]} [description]
   */
  $scope.draw = function () {
    $scope.renderer.render($scope.scene, $scope.camera);
  };

  /**
   * [loop description]
   * @return {[type]} [description]
   */
  $scope.loop = function () {
    $scope.update();
    $scope.draw();
    if ($scope.is_running)
      requestAnimationFrame($scope.loop);
  }; 
  
  $scope.init();

}]);;angular.module('loading...').controller('LoadingCanvasCtrl', [ 

  '$scope', 'uuid', '$element', 'create_scene',

  function ($scope, uuid, $element, create_scene) {
    $scope.wrapperid = uuid('wrapper');
    $scope.uuid      = uuid('canvas');
  }
]);;angular.module('loading...').directive('loading...', function () {
  return {
    /**
     * [scope description]
     * @type {Object}
     */
    scope: {
      width  : "=",
      height : "="
    },

    /**
     * [controller description]
     * @type {String}
     */
    controller  : 'LoadingCanvasCtrl',

    /**
     * [templateUrl description]
     * @type {String}
     */
    templateUrl : 'views/loading....html',

    /**
     * [link description]
     * @param  {[type]} scope   [description]
     * @param  {[type]} element [description]
     * @param  {[type]} attrs   [description]
     * @return {[type]}         [description]
     */
    link : function (scope, element, attrs) {


      // // debugger;

      // init();

      // var start_time = + new Date();
      // var t = 0;

      // /**
      //  * [init description]
      //  * @return {[type]} [description]
      //  */
      // function init () {
      //   var width  = scope.width;
      //   var height = scope.height;

      //   scope.scene    = new THREE.Scene();
      //   scope.camera   = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000 );
      //   scope.renderer = new THREE.WebGLRenderer({
      //     alpha: true
      //   });

      //   scope.renderer.setClearColor(0xFFFFFF00);

      //   element.append(scope.renderer.domElement);

      //   // Set ID's
      //   element.attr('id', scope.wrapper);
      //   angular.element(scope.renderer.domElement).attr('id', scope.uuid);
      //   scope.renderer.setSize(width, height);

      //   //
      //   1;

      //   // loop
      //   loop();
      // }

      // /**
      //  * [draw description]
      //  * @return {[type]} [description]
      //  */
      // function draw () {

      // }

      // /**
      //  * [update description]
      //  * @return {[type]} [description]
      //  */
      // function update () {
      //   t = (+ new Date() - start_time)/1000;
      // }

      // /**
      //  * [loop description]
      //  * @return {[type]} [description]
      //  */
      // function loop () {
      //   update();
      //   draw();
      //   requestAnimationFrame(loop);
      // }

    }
  };
});;angular.module('loading...').service('create_scene', function () {
// angular.module('loading...').service('uuid', function () {


  function create_scene (el, width, height) {

    var scene    = new THREE.Scene();
    var camera   = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();

    // renderer.setSize(width, height);
    // document.body.appendChild( renderer.domElement );
    
    console.log('-->');
    console.log(el);
    console.log('<--');
  }

  return create_scene;
});;/**
 * Return Universal Unique Identifier
 * @return {String} A unique DOM ID
 */
angular.module('loading...').service('uuid', function () {
  return function (pre, post, sep) {
    pre  = pre  || '';
    post = post || '';
    sep  = sep  || '-';

    var id  = Math.floor(Math.random() * 1000) + '';

    if (pre)
      id = pre + sep + id;

    if (post)
      id = id + sep + post;

    return id;
  };
});;angular.module('loading...').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/loading....html',
    "<canvas width=\"{{width}}\" height=\"{{height}}\" id=\"{{uuid}}\" ng-controller=\"CanvasCtrl\"></canvas>"
  );

}]);
