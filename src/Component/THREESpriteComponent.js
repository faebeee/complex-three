'use strict';
/**
 *
 */
class THREESpriteComponent extends cxComponent{
    constructor( material, spriteURL ){
        super();
        this.tag = "three.component.sprite";
        this.material = material;
        this.sprite = null;
        this.spriteURL = spriteURL;
        this.spriteLoaded = false;
    }

    /**
     * [spriteLoaded description]
     * @param  {THREE.Texture} map [description]
     * @return {[type]}     [description]
     */
    spriteLoad( map ){
        this.material.map = map;
        this.sprite = new THREE.Sprite(this.material);
        this.sprite.scale.x = 0.5;
        this.spriteLoaded = true;
    }
}
