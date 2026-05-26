const keys = {};

let mouseSensitivity =
0.002;

document.addEventListener(
    'click',
    () => {

        document.body
        .requestPointerLock();

    }
);

document.addEventListener(
    'mousemove',
    e => {

        if(
            document.pointerLockElement
            === document.body
        ){

            player.rotation.y -=
            e.movementX *
            mouseSensitivity;

            player.rotation.x -=
            e.movementY *
            mouseSensitivity;

            player.rotation.x =
            Math.max(

                -Math.PI / 2,

                Math.min(
                    Math.PI / 2,
                    player.rotation.x
                )

            );

        }

    }
);

window.addEventListener(
    'keydown',
    e => {

        keys[
            e.key.toLowerCase()
        ] = true;

    }
);

window.addEventListener(
    'keyup',
    e => {

        keys[
            e.key.toLowerCase()
        ] = false;

    }
);

function updateControls(){

    const forward =
    new THREE.Vector3(

        Math.sin(
            player.rotation.y
        ),

        0,

        Math.cos(
            player.rotation.y
        )

    );

    const right =
    new THREE.Vector3(

        Math.cos(
            player.rotation.y
        ),

        0,

        -Math.sin(
            player.rotation.y
        )

    );

    if(keys['w']){

        player.velocity.add(

            forward.multiplyScalar(
                player.speed
            )

        );

    }

    if(keys['s']){

        player.velocity.add(

            forward.multiplyScalar(
                -player.speed
            )

        );

    }

    if(keys['a']){

        player.velocity.add(

            right.multiplyScalar(
                -player.speed
            )

        );

    }

    if(keys['d']){

        player.velocity.add(

            right.multiplyScalar(
                player.speed
            )

        );

    }

    if(
        keys[' '] &&
        player.onGround
    ){

        player.velocity.y =
        player.jumpForce;

        player.onGround = false;

    }

}