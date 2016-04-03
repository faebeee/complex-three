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

    setActiveCamera( camera ){
        this.camera = camera;
    }

    added ( cxEntity ){
        if(cxEntity.hasComponent('three.component')){
            let comp = cxEntity.getComponent('three.component');
            this.scene.add(comp.body);
        }

        if(cxEntity.hasComponent('three.component.camera')){
            let comp = cxEntity.getComponent('three.component.camera');
            this.setActiveCamera(comp.camera);
        }
    }

    update ()
    {
        if(this.camera){
            this.renderer.render( this.scene, this.camera );
        }
    }
}
