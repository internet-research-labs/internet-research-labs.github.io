angular.module('loading...').controller('CanvasCtrl', [ '$scope', '$element', 'uuid', function ($scope, $element, uuid) {

  var width  = $scope.width;
  var height = $scope.height;

  $scope.uuid = uuid('canvas');
  $scope.is_running = false;

  var ambient = new THREE.AmbientLight( 0xCCCCCC );
  var point   = new THREE.PointLight(0xFF0000, 1, 100);
  var diffuse = new THREE.DirectionalLight(0xCCCCCC);

  point.position.set(6, 0, 0);
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

}]);