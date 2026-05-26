function setupUI(){

    createCrosshair();

    createHUD();

    createInventory();

    createNotifications();

}

function createCrosshair(){

    const crosshair =
    document.createElement('div');

    crosshair.id =
    'crosshair';

    document.body.appendChild(
        crosshair
    );

}

function createHUD(){

    const hud =
    document.createElement('div');

    hud.id = 'hud';

    hud.innerHTML = `

    <div
    class="hudBox"
    id="health">

    ❤️ 100

    </div>

    <div
    class="hudBox"
    id="hunger">

    🍗 100

    </div>

    <div
    class="hudBox"
    id="xp">

    ⭐ 0

    </div>

    `;

    document.body.appendChild(
        hud
    );

}

function updateHUD(){

    document
    .getElementById('health')
    .innerHTML =
    `❤️ ${Math.floor(
        player.health
    )}`;

    document
    .getElementById('hunger')
    .innerHTML =
    `🍗 ${Math.floor(
        player.hunger
    )}`;

    document
    .getElementById('xp')
    .innerHTML =
    `⭐ ${Math.floor(
        player.xp
    )}`;

}

function createInventory(){

    const inventory =
    document.createElement('div');

    inventory.id =
    'inventory';

    inventory.innerHTML = `

    <div id="hotbar">

        <div class="slot selectedSlot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>
        <div class="slot"></div>

    </div>

    <div id="craftingContainer">

        <div id="craftGrid">

            <div class="slot"></div>
            <div class="slot"></div>
            <div class="slot"></div>

            <div class="slot"></div>
            <div class="slot"></div>
            <div class="slot"></div>

            <div class="slot"></div>
            <div class="slot"></div>
            <div class="slot"></div>

        </div>

        <div id="craftResult">

        </div>

    </div>

    `;

    document.body.appendChild(
        inventory
    );

}

function createNotifications(){

    const notifications =
    document.createElement('div');

    notifications.id =
    'notifications';

    document.body.appendChild(
        notifications
    );

}

function createNotification(text){

    const notification =
    document.createElement('div');

    notification.className =
    'notification';

    notification.innerText =
    text;

    document
    .getElementById(
        'notifications'
    )
    .appendChild(notification);

    setTimeout(() => {

        notification.remove();

    }, 3000);

}