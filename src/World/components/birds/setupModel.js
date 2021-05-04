import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js'


function initialize(data) {

  const gltf = data.scene.children[0];
  const clip = data.animations[0];

  const mixer = new THREE.AnimationMixer(gltf);
  const action = mixer.clipAction(clip);
  action.play();

  gltf.tick = (delta) => mixer.update(delta);

  return gltf;


}

export { initialize };
