'use strict';

var cxVoidSystem = require('complex-engine-system').cxVoidSystem;
var THREE = require('three');

/**
 *
 */
class THREESpriteSystem extends cxVoidSystem
{
    constructor()
    {
        super();
        this.tag = 'three.system.textureloader';

    }

    added(cxEntity){
        if(cxEntity.hasComponent('three.component.sprite')){
            let comp = cxEntity.getComponent('three.component.sprite');
            if(comp.spriteLoaded){
                return;
            }
            let map = new THREE.TextureLoader().load(comp.spriteURL);
            comp.spriteLoad(map);
            this.world.getSystem('three.system').scene.add(comp.sprite);
        }
    }
}

module.exports = THREESpriteSystem;
