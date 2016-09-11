'use strict';

var cxComponent = require('complex-engine').cxComponent;

/**
 *
 */
class THREEComponent extends cxComponent
{
    /**
     * @param  {THREE.Mesh} body Three mash object
     */
    constructor( body, wireframe )
    {
        super();
        this.tag = 'three.component';

        /**
         * [body description]
         * @type {THREE.Mesh}
         */
        this.body = body;

        /**
         * [wireframe description]
         * @type {THREE.WireframeHelper}
         */
        this.wireframe = wireframe || null;
        if(this.body && this.wireframe){
            this.body.add(this.wireframe);
        }
    }
}

module.exports = THREEComponent;
