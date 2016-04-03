'use strict';

/**
 *
 */
class THREECameraComponent extends cxComponent
{
    constructor( camera )
    {
        super();
        this.tag = 'three.component';

        this.active = true;
        this.camera = camera;
    }
}

'use strict';

/**
 *
 */
class THREEComponent extends cxComponent
{
    /**
     * @param  {THREE.Mesh} body Three mash object
     */
    constructor( body )
    {
        super();
        this.tag = 'three.component';

        /**
         * [body description]
         * @type {THREE.Mesh}
         */
        this.body = body;
    }
}

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

    setActiveCamera( cxEntity ){
        if(cxEntity.hasComponent('three.component.cmaera')){
            let comp = cxEntity.getComponent('three.component.camera');

            if(comp.active === true){
                this.camera = comp.camera;
            }
        }
    }

    added ( cxEntity ){
        if(cxEntity.hasComponent('three.component')){
            let comp = cxEntity.getComponent('three.component');
            this.scene.add(comp.body);
        }

        if(cxEntity.hasComponent('three.component.camera')){
            this.setActiveCamera(cxEntity);
        }
    }

    update ()
    {
        if(this.camera){
            this.renderer.render( this.scene, this.camera );
        }
    }
}
