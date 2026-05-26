const scene =
new THREE.Scene();

scene.fog =
new THREE.Fog(

    0x87ceeb,

    20,

    250

);

scene.background =
new THREE.Color(
    0x87ceeb
);

const camera =
new THREE.PerspectiveCamera(

    75,

    window.innerWidth /
    window.innerHeight,

    0.1,

    5000

);

const renderer =
new THREE.WebGLRenderer({

    antialias:true

});

renderer.setSize(

    window.innerWidth,

    window.innerHeight

);

renderer.shadowMap.enabled =
true;

renderer.shadowMap.type =
THREE.PCFSoftShadowMap;

renderer.setPixelRatio(
    window.devicePixelRatio
);

document.body.appendChild(
    renderer.domElement
);

/* ILUMINAÇÃO */

const ambientLight =
new THREE.AmbientLight(

    0xffffff,

    0.45

);

scene.add(
    ambientLight
);

const sun =
new THREE.DirectionalLight(

    0xffffff,

    1.2

);

sun.position.set(
    100,
    200,
    100
);

sun.castShadow = true;

sun.shadow.mapSize.width =
4096;

sun.shadow.mapSize.height =
4096;

scene.add(sun);

/* SKYBOX */

const skyGeometry =
new THREE.SphereGeometry(
    3000,
    32,
    32
);

const skyMaterial =
new THREE.MeshBasicMaterial({

    color:0x87ceeb,

    side:
    THREE.BackSide

});

const sky =
new THREE.Mesh(
    skyGeometry,
    skyMaterial
);

scene.add(sky);

/* RESIZE */

window.addEventListener(
    'resize',
    () => {

        camera.aspect =
        window.innerWidth /
        window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(

            window.innerWidth,

            window.innerHeight

        );

    }
);

/* RELÓGIO */

const clock =
new THREE.Clock();