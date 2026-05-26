function generateTerrainHeight(
    x,
    z
){

    const noise =

    Math.sin(x * 0.04)
    *
    Math.cos(z * 0.04)
    *
    6

    +

    Math.sin(x * 0.01)
    *
    12

    +

    Math.cos(z * 0.01)
    *
    12;

    return Math.floor(noise);

}

function getTerrainHeight(
    x,
    z
){

    return generateTerrainHeight(
        x,
        z
    );

}

function generateTree(
    x,
    y,
    z
){

    if(
        Math.random()
        > 0.015
    ){

        return;

    }

    const height =
    4 +
    Math.floor(
        Math.random() * 3
    );

    for(
        let i = 0;
        i < height;
        i++
    ){

        createBlock(
            x,
            y + i,
            z,
            'wood'
        );

    }

    for(
        let lx = -2;
        lx <= 2;
        lx++
    ){

        for(
            let ly = -2;
            ly <= 2;
            ly++
        ){

            for(
                let lz = -2;
                lz <= 2;
                lz++
            ){

                if(
                    Math.random()
                    > 0.25
                ){

                    createBlock(

                        x + lx,

                        y + height + ly,

                        z + lz,

                        'leaves'

                    );

                }

            }

        }

    }

}

let timeOfDay = 0;

function updateDayNightCycle(delta){

    timeOfDay +=
    delta * 0.02;

    const intensity =

    (
        Math.sin(
            timeOfDay
        ) + 1
    ) / 2;

    sun.intensity =
    0.2 + intensity;

    ambientLight.intensity =
    0.15 + intensity * 0.5;

}