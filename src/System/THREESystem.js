'use strict';

var cxVoidSystem = require('complex-engine-system').cxVoidSystem;
var THREE = require('three');

/**
 *
 */
class THREESystem extends cxVoidSystem
{
    constructor( container )
    {
        super();
        this.tag = 'three.system';
        container = container || null;

        this.scene = new THREE.Scene();

        this.camera = null;

        this.container = container || document.body;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );

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
        if(this.camera){
            this.renderer.render( this.scene, this.camera );
        }
    }
}

module.exports = THREESystem;
