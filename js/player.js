const player = {

    position:
    new THREE.Vector3(
        0,
        15,
        0
    ),

    velocity:
    new THREE.Vector3(),

    rotation:{

        x:0,
        y:0

    },

    speed:0.12,

    jumpForce:0.22,

    gravity:0.012,

    onGround:false,

    health:100,

    hunger:100,

    level:1,

    xp:0,

    inventory:[],

    selectedSlot:0

};

function createPlayer(){

    player.mesh =
    new THREE.Mesh(

        new THREE.BoxGeometry(
            0.8,
            1.8,
            0.8
        ),

        new THREE.MeshLambertMaterial({

            color:0xffffff,
            visible:false

        })

    );

    scene.add(
        player.mesh
    );

}

function updatePlayer(delta){

    player.velocity.y -=
    player.gravity;

    player.position.add(
        player.velocity
    );

    player.velocity.x *= 0.78;
    player.velocity.z *= 0.78;

    const floorHeight =
    getTerrainHeight(
        player.position.x,
        player.position.z
    ) + 2;

    if(
        player.position.y <= floorHeight
    ){

        player.position.y =
        floorHeight;

        player.velocity.y = 0;

        player.onGround = true;

    }

    player.mesh.position.copy(
        player.position
    );

    updateHUD();

}