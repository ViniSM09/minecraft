const textureLoader =
new THREE.TextureLoader();

/* ========================= */
/* LOAD TEXTURE */
/* ========================= */

function loadTexture(path){

    const texture =
    textureLoader.load(path);

    texture.magFilter =
    THREE.NearestFilter;

    texture.minFilter =
    THREE.NearestFilter;

    texture.generateMipmaps =
    false;

    return texture;

}

/* ========================= */
/* TEXTURAS */
/* ========================= */

const textures = {

    grass_top:
    loadTexture(
        'textures/grass_top.png'
    ),

    grass_side:
    loadTexture(
        'textures/grass_side.png'
    ),

    dirt:
    loadTexture(
        'textures/dirt.png'
    ),

    stone:
    loadTexture(
        'textures/stone.png'
    ),

    wood:
    loadTexture(
        'textures/wood.png'
    ),

    leaves:
    loadTexture(
        'textures/leaves.png'
    ),

    sand:
    loadTexture(
        'textures/sand.png'
    ),

    water:
    loadTexture(
        'textures/water.png'
    ),

    bedrock:
    loadTexture(
        'textures/bedrock.png'
    ),

    planks:
    loadTexture(
        'textures/planks.png'
    ),

    brick:
    loadTexture(
        'textures/brick.png'
    )

};

/* ========================= */
/* MATERIAIS */
/* ========================= */

const materials = {

    grass:[

        new THREE.MeshLambertMaterial({

            map:textures.grass_side

        }),

        new THREE.MeshLambertMaterial({

            map:textures.grass_side

        }),

        new THREE.MeshLambertMaterial({

            map:textures.grass_top

        }),

        new THREE.MeshLambertMaterial({

            map:textures.dirt

        }),

        new THREE.MeshLambertMaterial({

            map:textures.grass_side

        }),

        new THREE.MeshLambertMaterial({

            map:textures.grass_side

        })

    ],

    dirt:
    new THREE.MeshLambertMaterial({

        map:textures.dirt

    }),

    stone:
    new THREE.MeshLambertMaterial({

        map:textures.stone

    }),

    wood:
    new THREE.MeshLambertMaterial({

        map:textures.wood

    }),

    leaves:
    new THREE.MeshLambertMaterial({

        map:textures.leaves,

        transparent:true

    }),

    sand:
    new THREE.MeshLambertMaterial({

        map:textures.sand

    }),

    water:
    new THREE.MeshLambertMaterial({

        map:textures.water,

        transparent:true,

        opacity:0.75

    }),

    bedrock:
    new THREE.MeshLambertMaterial({

        map:textures.bedrock

    }),

    planks:
    new THREE.MeshLambertMaterial({

        map:textures.planks

    }),

    brick:
    new THREE.MeshLambertMaterial({

        map:textures.brick

    })

};

/* ========================= */
/* BLOCK STORAGE */
/* ========================= */

const blocks = [];

/* ========================= */
/* CREATE BLOCK */
/* ========================= */

function createBlock(
    x,
    y,
    z,
    type = 'grass'
){

    const geometry =
    new THREE.BoxGeometry(
        1,
        1,
        1
    );

    const material =
    materials[type];

    const block =
    new THREE.Mesh(
        geometry,
        material
    );

    block.position.set(
        x,
        y,
        z
    );

    block.castShadow =
    true;

    block.receiveShadow =
    true;

    block.userData = {

        type:type,
        solid:true,
        health:100

    };

    scene.add(block);

    blocks.push(block);

    return block;

}

/* ========================= */
/* REMOVE BLOCK */
/* ========================= */

function removeBlock(block){

    scene.remove(block);

    const index =
    blocks.indexOf(block);

    if(index !== -1){

        blocks.splice(index, 1);

    }

}

/* ========================= */
/* GET BLOCK */
/* ========================= */

function getBlockAt(
    x,
    y,
    z
){

    return blocks.find(block =>

        Math.floor(
            block.position.x
        ) === x

        &&

        Math.floor(
            block.position.y
        ) === y

        &&

        Math.floor(
            block.position.z
        ) === z

    );

}