const zombies = [];

function spawnZombie(){

    const geometry =
    new THREE.BoxGeometry(
        0.8,
        1.8,
        0.8
    );

    const material =
    new THREE.MeshLambertMaterial({

        color:0x3baa3b

    });

    const zombie =
    new THREE.Mesh(
        geometry,
        material
    );

    zombie.position.set(

        player.position.x
        +
        (Math.random() * 40 - 20),

        20,

        player.position.z
        +
        (Math.random() * 40 - 20)

    );

    zombie.userData = {

        health:100,

        speed:
        0.025
        +
        Math.random() * 0.015,

        damage:5,

        attackCooldown:0

    };

    zombie.castShadow = true;

    scene.add(zombie);

    zombies.push(zombie);

}

function updateZombies(delta){

    if(
        zombies.length < 10
    ){

        if(
            Math.random()
            < 0.003
        ){

            spawnZombie();

        }

    }

    zombies.forEach(zombie => {

        const direction =
        new THREE.Vector3()

        .subVectors(

            player.position,

            zombie.position

        )

        .normalize();

        zombie.position.x +=

        direction.x
        *
        zombie.userData.speed;

        zombie.position.z +=

        direction.z
        *
        zombie.userData.speed;

        const distance =
        zombie.position.distanceTo(
            player.position
        );

        if(
            distance < 2
        ){

            zombie.userData.attackCooldown
            -= delta;

            if(
                zombie.userData.attackCooldown
                <= 0
            ){

                player.health -=
                zombie.userData.damage;

                zombie.userData.attackCooldown =
                1;

                createNotification(
                    'Zumbi atacou!'
                );

            }

        }

    });

}