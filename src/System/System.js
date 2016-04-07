'use strict';

/**
 *
 */
class THREESystem extends cxVoidSystem
{
    constructor()
    {
        super();
        this.tag = 'three.system';

        this.scene = new THREE.Scene();

        this.camera = null;

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( this.renderer.domElement );
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
