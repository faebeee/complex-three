# complex-threejs

## Install

`npm i complex-threejs --save`

## Usage

Add the system to the cxWorld instance


    let THREESystem = require('complex-threejs').THREESystem;

    ...
    load() {
        this.world.addSystem( new THREESystem() );
    }
