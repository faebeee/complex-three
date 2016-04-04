'use strict';

/**
 *
 */
class THREECameraComponent extends cxComponent
{
    constructor( camera )
    {
        super();
        this.tag = 'three.component.camera';

        this.active = true;
        this.camera = camera;
    }
}
