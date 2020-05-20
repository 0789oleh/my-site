//import  {GLTFLoader} from 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@r92/examples/js/loaders/GLTFLoader.js';
// Instantiate a loader
var loader = new GLTFLoader();
//Load a glTF resource
loader.load(
    // resource URL
    './duck.gltf',
    // called when the resource is loaded
    function ( gltf ) {

        scene.add( gltf.scene );

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    },
    // called while loading is progressing
    function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

    },
    // called when loading has errors
    function ( error ) {

        console.log( 'An error happened' );

    }
);function animate() {
    renderer.render(scene,camera);
    requestAnimationFrame(animate);
}
init();