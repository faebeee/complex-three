'use strict';

/**
 *
 */
class THREECameraComponent extends cxComponent
{
    constructor( camera )
    {
        super();
        this.tag = 'three.component';

        this.active = true;
        this.camera = camera;
    }
}
