const chunks = {};

const CHUNK_SIZE = 16;

const RENDER_DISTANCE = 3;

function generateChunk(
    chunkX,
    chunkZ
){

    const chunkKey =
    `${chunkX},${chunkZ}`;

    if(chunks[chunkKey]){

        return;

    }

    chunks[chunkKey] = [];

    for(
        let x = 0;
        x < CHUNK_SIZE;
        x++
    ){

        for(
            let z = 0;
            z < CHUNK_SIZE;
            z++
        ){

            const worldX =
            chunkX * CHUNK_SIZE + x;

            const worldZ =
            chunkZ * CHUNK_SIZE + z;

            const terrainHeight =
            generateTerrainHeight(
                worldX,
                worldZ
            );

            for(
                let y = -5;
                y <= terrainHeight;
                y++
            ){

                let type = 'dirt';

                if(
                    y === terrainHeight
                ){

                    type = 'grass';

                }

                if(
                    y < -3
                ){

                    type = 'stone';

                }

                if(
                    y === -5
                ){

                    type = 'bedrock';

                }

                const block =
                createBlock(
                    worldX,
                    y,
                    worldZ,
                    type
                );

                chunks[chunkKey]
                .push(block);

            }

            generateTree(
                worldX,
                terrainHeight + 1,
                worldZ
            );

        }

    }

}

function unloadFarChunks(){

    for(
        const key
        in chunks
    ){

        const [
            chunkX,
            chunkZ
        ] = key.split(',')
        .map(Number);

        const dx =
        chunkX -
        Math.floor(
            player.position.x /
            CHUNK_SIZE
        );

        const dz =
        chunkZ -
        Math.floor(
            player.position.z /
            CHUNK_SIZE
        );

        if(
            Math.abs(dx)
            > RENDER_DISTANCE

            ||

            Math.abs(dz)
            > RENDER_DISTANCE
        ){

            chunks[key]
            .forEach(block => {

                scene.remove(block);

            });

            delete chunks[key];

        }

    }

}