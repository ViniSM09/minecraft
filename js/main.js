init();

async function init(){

    generateInitialWorld();

    createPlayer();

    setupUI();

    animate();

    startAutosave();

    createNotification(
        'Mundo carregado.'
    );

}

function generateInitialWorld(){

    for(
        let x = -RENDER_DISTANCE;
        x <= RENDER_DISTANCE;
        x++
    ){

        for(
            let z = -RENDER_DISTANCE;
            z <= RENDER_DISTANCE;
            z++
        ){

            generateChunk(x, z);

        }

    }

}

function animate(){

    requestAnimationFrame(
        animate
    );

    const delta =
    clock.getDelta();

    updatePlayer(delta);

    updateControls();

    updateCamera();

    updateChunks();

    updateZombies(delta);

    updateDayNightCycle(delta);

    renderer.render(
        scene,
        camera
    );

}