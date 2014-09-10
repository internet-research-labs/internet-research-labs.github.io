angular.module('loading...').service('create_scene', function () {
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
});