renderer.outputEncoding =
THREE.sRGBEncoding;

renderer.toneMapping =
THREE.ACESFilmicToneMapping;

renderer.toneMappingExposure =
1.2;

renderer.physicallyCorrectLights =
true;

renderer.shadowMap.autoUpdate =
true;

renderer.shadowMap.needsUpdate =
true;

function updateRenderer(){

    renderer.render(
        scene,
        camera
    );

}