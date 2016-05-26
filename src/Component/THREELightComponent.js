'use strict';

var cxComponent = require('complex-engine-component');

/**
 *
 */
class THREELightComponent extends cxComponent
{
    constructor( light )
    {
        super();
        this.tag = 'three.component.light';

        this.active = true;
        this.light = light;
    }
}
module.exports = THREELightComponent;
