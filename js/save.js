function saveGame(){

    const saveData = {

        player:{

            position:{

                x:player.position.x,
                y:player.position.y,
                z:player.position.z

            },

            health:
            player.health,

            hunger:
            player.hunger,

            xp:
            player.xp,

            level:
            player.level

        }

    };

    localStorage.setItem(

        'minecraft_save',

        JSON.stringify(
            saveData
        )

    );

    createNotification(
        'Jogo salvo.'
    );

}

function loadGame(){

    const data =
    localStorage.getItem(
        'minecraft_save'
    );

    if(!data){

        return;

    }

    const save =
    JSON.parse(data);

    player.position.set(

        save.player.position.x,
        save.player.position.y,
        save.player.position.z

    );

    player.health =
    save.player.health;

    player.hunger =
    save.player.hunger;

    player.xp =
    save.player.xp;

    player.level =
    save.player.level;

}

function startAutosave(){

    setInterval(() => {

        saveGame();

    }, 60000);

}