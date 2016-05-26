'use strict';

var cxComponent = require('complex-engine-component');
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
module.exports = THREECameraComponent;
