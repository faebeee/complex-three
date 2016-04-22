'use strict';

/**
 *
 */
class THREEComponent extends cxComponent
{
    /**
     * @param  {THREE.Mesh} body Three mash object
     */
    constructor( body )
    {
        super();
        this.tag = 'three.component';

        /**
         * [body description]
         * @type {THREE.Mesh}
         */
        this.body = body;
    }
}
