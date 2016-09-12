'use strict';

var cxVoidSystem = require('complex-engine').cxVoidSystem;
var THREE = require('three');

/**
 *
 */
class THREESystem extends cxVoidSystem
{
    constructor( container, width, height )
    {
        super();
        this.tag = 'three.system';

        container = container || null;
        width = width || window.innerWidth;
        height = height ||  window.innerHeight;
        this.container = container || document.body;

        this.scene = new THREE.Scene();
        this.camera = null;
        this.renderer = new THREE.WebGLRenderer();

        this.renderer.setSize( width, height );

        this.container.appendChild( this.renderer.domElement );
    }

    /**
     * [setActiveCamera description]
     * @param {[type]} camera [description]
     */
    setActiveCamera( camera ){
        this.camera = camera;
    }

    /**
     * [added description]
     * @param  {cxEntity} cxEntity [description]
     */
    added ( cxEntity ){
        if(cxEntity.hasComponent('three.component')){
            let comp = cxEntity.getComponent('three.component');
            this.scene.add(comp.body);
        }

        if(cxEntity.hasComponent('three.component.light')){
            let comp = cxEntity.getComponent('three.component.light');
            this.scene.add(comp.light);
        }

        if(cxEntity.hasComponent('three.component.sprite')){
            let comp = cxEntity.getComponent('three.component.sprite');
            if(comp.spriteLoaded){
                this.scene.add(comp.sprite);
            }
        }


        if(cxEntity.hasComponent('three.component.camera')){
            let comp = cxEntity.getComponent('three.component.camera');
            this.setActiveCamera(comp.camera);
        }
    }


    removed(cxEntity){

        if(cxEntity.hasComponent('three.component')){
            let comp = cxEntity.getComponent('three.component');
            this.scene.remove(comp.body);
        }

        if(cxEntity.hasComponent('three.component.light')){
            let comp = cxEntity.getComponent('three.component.light');
            this.scene.remove(comp.light);
        }

        if(cxEntity.hasComponent('three.component.sprite')){
            let comp = cxEntity.getComponent('three.component.sprite');
            if(comp.spriteLoaded){
                this.scene.remove(comp.sprite);
            }
        }
    }

    /**
     * [update description]
     */
    update ()
    {
        if(this.camera !== null){
            this.renderer.render( this.scene, this.camera );
        }
    }
}

module.exports = THREESystem;
