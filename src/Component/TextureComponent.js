'use strict';

/**
 *
 */
class THREETextureComponent extends cxComponent
{
    /**
     * @param  {THREE.Mesh} body Three mash object
     */
    constructor( url )
    {
        super();
        this.tag = 'three.component.texture';

        /**
         * [body description]
         * @type {THREE.Mesh}
         */
        this.texture = null;
        this.textureURL = url;
    }
}
