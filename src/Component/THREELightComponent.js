'use strict';

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
