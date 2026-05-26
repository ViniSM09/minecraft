let cameraMode = 1;

let cameraDistance = 6;

let cameraHeight = 3;

window.addEventListener(
    'keydown',
    e => {

        if(
            e.key.toLowerCase() === 'v'
        ){

            switchCamera();

        }

    }
);

function switchCamera(){

    cameraMode++;

    if(cameraMode > 3){

        cameraMode = 1;

    }

    createNotification(
        `Câmera ${cameraMode}`
    );

}

function updateCamera(){

    if(cameraMode === 1){

        camera.position.set(

            player.position.x,

            player.position.y + 1.7,

            player.position.z

        );

        camera.rotation.order =
        'YXZ';

        camera.rotation.y =
        player.rotation.y;

        camera.rotation.x =
        player.rotation.x;

    }

    if(cameraMode === 2){

        const offsetX =
        Math.sin(
            player.rotation.y
        ) * cameraDistance;

        const offsetZ =
        Math.cos(
            player.rotation.y
        ) * cameraDistance;

        camera.position.set(

            player.position.x - offsetX,

            player.position.y + cameraHeight,

            player.position.z - offsetZ

        );

        camera.lookAt(

            player.position.x,

            player.position.y + 1.5,

            player.position.z

        );

    }

    if(cameraMode === 3){

        camera.position.set(

            player.position.x + 12,

            player.position.y + 10,

            player.position.z + 12

        );

        camera.lookAt(
            player.position
        );

    }

}