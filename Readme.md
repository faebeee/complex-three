# complex-threejs

## Install

`npm i complex-threejs --save`

## Usage

Add `THREESystem` to your world instance and add the `THREEComponent` to your entity
and you are good to go


```js

import { THREESystem, THREEComponent } from 'complex-threejs';

...

// Simple three.js setups
this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
this.camera.position.z = 5;

// Register all required systems and managers and so on
this.world.addVoidSystem(new THREESystem(this.camera));

// Create components
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

this.world.createEntity([
    new THREEComponent(cube)
]);

```
