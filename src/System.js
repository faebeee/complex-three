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
        this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( window.innerWidth, window.innerHeight );

        document.body.appendChild( this.renderer.domElement );

        this.camera.position.z = 10;

    }

    added ( cxEntity ){
        if(cxEntity.hasComponent('three.component')){
            let comp = cxEntity.getComponent('three.component');
            this.scene.add(comp.body);
        }
    }

    update ()
    {
        this.renderer.render( this.scene, this.camera );
    }
}
