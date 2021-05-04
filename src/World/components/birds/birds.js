import { GLTFLoader } from 'https://unpkg.com/three@0.127.0/examples/jsm/loaders/GLTFLoader.js';

import { initialize } from './setupModel.js';

async function loadBirds() {
  const loader = new GLTFLoader();

  const [parrotData,] = await Promise.all([
    loader.loadAsync('/assets/models/aaa.glb'),
  ]);

  console.log('Squaaawk!', parrotData);

  const parrot = initialize(parrotData);
  parrot.position.set(0, 0, 2.5);

  return {
    parrot,
  };
}

export { loadBirds };
