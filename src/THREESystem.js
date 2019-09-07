import { VoidSystem } from 'complex-engine';
import * as THREE from 'three';
import THREEComponent from './THREEComponent';

export default class THREESystem extends VoidSystem {
    constructor(camera, renderer = null, container = document.body) {
        super();
        this.camera = camera;
        this.renderer = renderer || new THREE.WebGLRenderer();
        this.container = container;
        this.scene = new THREE.Scene();
        if (!renderer) {
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        }
        this.container.appendChild(this.renderer.domElement);


        window.addEventListener('resize', (e) => {
            this.onWindowResize(e);
        }, false);
    }

    onWindowResize(event) {
        let SCREEN_WIDTH = window.innerWidth;
        let SCREEN_HEIGHT = window.innerHeight;
        let aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
        this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);

        if (!this.camera) {
            return;
        }
        //this.camera.aspect = 0.5 * aspect;
        this.camera.updateProjectionMatrix();
    }

    added(entity) {
        if (entity.hasComponent(THREEComponent)) {
            this.scene.add(entity.getComponent(THREEComponent).mesh);
        }
    }

    removed(entity) {
        if (entity.hasComponent(THREEComponent)) {
            this.scene.remove(entity.getComponent(THREEComponent).mesh);
        }
    }

    update() {
        if (this.camera === null) {
            return;
        }

        this.renderer.render(this.scene, this.camera);
    }
}
