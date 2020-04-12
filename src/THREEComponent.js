import { Component } from 'complex-engine';

export default class THREEComponent extends Component {
    /**
     * 
     * @param {THREE.Mesh} mesh 
     */
    constructor(mesh) {
        super();
        
        /** @var {THREE.Mesh} */
        this.mesh = mesh;
    }

}
