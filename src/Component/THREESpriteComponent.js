'use strict';

var cxComponent = require('complex-engine-component');
var THREE = require('three');

/**
 *
 */
class THREESpriteComponent extends cxComponent{
    constructor( material, spriteURL, loadedCB ){
        super();
        this.tag = "three.component.sprite";
        this.material = material;
        this.sprite = null;
        this.spriteURL = spriteURL;
        this.spriteLoaded = false;
        this.loadedCB = loadedCB;
    }

    /**
     * [spriteLoaded description]
     * @param  {THREE.Texture} map [description]
     * @return {[type]}     [description]
     */
    spriteLoad( map ){
        this.material.map = map;
        this.sprite = new THREE.Sprite(this.material);
        this.spriteLoaded = true;
        this.loadedCB(this);
    }
}

module.exports = THREESpriteComponent;
