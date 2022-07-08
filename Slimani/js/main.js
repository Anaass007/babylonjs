let canvas;
let engine;
let scene;
let camera;

window.onload = startGame;

function startGame() {
    canvas = document.querySelector("#myCanvas");
    engine = new BABYLON.Engine(canvas, true);
    scene = createScene();
   

    //let sphere = scene.getMeshByName("mySphere");

    // main animation loop 60 times/s
    engine.runRenderLoop(() => {
        scene.render();
    });
    scene.assetsManager.load();
}

function createScene() {
    let scene = new BABYLON.Scene(engine);
    scene.assetsManager = configureAssetManager(scene);
    scene.enablePhysics();
    
    var camera = new BABYLON.ArcRotateCamera("Camera", 1.6, 1.5, 100, new BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    loadSounds(scene);


    var light = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(-1, 1, 0), scene);
    light.diffuse = new BABYLON.Color3(0, 1, 1);
    
    // Skybox
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/kisspng-skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    //Boxes
    // var box1 = BABYLON.Mesh.CreateBox("Box1", 10.0, scene);
    // box1.position.x = -20;
    let boxE1 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 18, width : 4}, scene);
    boxE1.position.y = 9;
    boxE1.position.x = 30;
    let boxE2 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxE2.position.y = 18;
    boxE2.position.x = 27;
    let boxE3 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxE3.position.y = 10;
    boxE3.position.x = 27;
    let boxE4 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxE4.position.y = 2;
    boxE4.position.x = 27;

    let boxS1 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 9, width : 4}, scene);
    boxS1.position.y = 5;
    boxS1.position.x = 11;
    let boxS2 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxS2.position.y = 18;
    boxS2.position.x = 14;
    let boxS3 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxS3.position.y = 10;
    boxS3.position.x = 14;
    let boxS4 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 9, width : 4}, scene);
    boxS4.position.y = 15;
    boxS4.position.x = 17;
    let boxS5 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxS5.position.y = 2;
    boxS5.position.x = 14;
    

    let boxT1 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 18, width : 4}, scene);
    boxT1.position.y = 9;
    boxT1.position.x = 1;
    let boxT2 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxT2.position.y = 18;
    boxT2.position.x = 1;


    let boxI1 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 18, width : 4}, scene);
    boxI1.position.y = 9;
    boxI1.position.x = -12;
    let boxI2 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxI2.position.y = 18;
    boxI2.position.x = -12;
    let boxI3 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxI3.position.y = 2;
    boxI3.position.x = -12;

    let boxA1 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 18, width : 4}, scene);
    boxA1.position.y = 9;
    boxA1.position.x = -30;
    let boxA2 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 12}, scene);
    boxA2.position.y = 18;
    boxA2.position.x = -26;
    let boxA3 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 18, width : 4}, scene);
    boxA3.position.y = 9;
    boxA3.position.x = -22;
    let boxA4 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 12}, scene);
    boxA4.position.y = 9;
    boxA4.position.x = -26;




    let boxM1 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 19, width : 4}, scene);
    boxM1.position.y = -12;
    boxM1.position.x = 30;
    boxM1.rotate(BABYLON.Axis.Z, Math.PI / 5)
    let boxM2 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 18, width : 4}, scene);
    boxM2.position.y = -12;
    boxM2.position.x = 24;
    let boxM3 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 19, width : 4}, scene);
    boxM3.position.y = -12;
    boxM3.position.x = 18;
    boxM3.rotate(BABYLON.Axis.Z, Math.PI / 5)
    let boxM4 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 18, width : 4}, scene);
    boxM4.position.y = -12;
    boxM4.position.x = 12;

    let boxS11 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 9, width : 4}, scene);
    boxS11.position.y = -8;
    boxS11.position.x = -24;
    let boxS22 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxS22.position.y = -5;
    boxS22.position.x = -27;
    let boxS33 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxS33.position.y = -20;
    boxS33.position.x = -27;
    let boxS44 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 9, width : 4}, scene);
    boxS44.position.y = -15;
    boxS44.position.x = -30;
    let boxS55 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 4, width : 10}, scene);
    boxS55.position.y = -12;
    boxS55.position.x = -27;

    let boxB1 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 18, width : 4}, scene);
    boxB1.position.y = -12;
    boxB1.position.x = 4;
    let sphereB = BABYLON.MeshBuilder.CreateCylinder("cylinder", {arc: 0.5, diameter: 9, enclose: true, height: 1 });
    sphereB.position.y = -7.5;
    sphereB.position.x = 2;
    sphereB.rotate(BABYLON.Axis.Z, Math.PI/2 );
    sphereB.rotate(BABYLON.Axis.X, Math.PI/2 )
    let sphereB1 = BABYLON.MeshBuilder.CreateCylinder("cylinder", {arc: 0.5, diameter: 9, enclose: true, height: 1 });
    sphereB1.position.y = -16.5;
    sphereB1.position.x = 2;
    sphereB1.rotate(BABYLON.Axis.Z, Math.PI/2 );
    sphereB1.rotate(BABYLON.Axis.X, Math.PI/2 )

    let boxD1 = BABYLON.MeshBuilder.CreateBox("mybox", {height: 18, width : 4}, scene);
    boxD1.position.y = -12;
    boxD1.position.x = -8;
    let sphereD = BABYLON.MeshBuilder.CreateCylinder("cylinder", {arc: 0.5, diameter: 18, enclose: true, height: 1 });
    sphereD.position.y = -12;
    sphereD.position.x = -10;
    sphereD.rotate(BABYLON.Axis.Z, Math.PI/2 );
    sphereD.rotate(BABYLON.Axis.X, Math.PI/2 );    

    var materialBox = new BABYLON.StandardMaterial("texture1", scene);
    materialBox.diffuseColor = new BABYLON.Color3(0, 1, 0);//Green



    boxE1.material = materialBox;
    boxE2.material = materialBox;
    boxE3.material = materialBox;
    boxE4.material = materialBox;

    // boxS1.material = materialBox;
    // boxS2.material = materialBox;
    // boxS3.material = materialBox;
    // boxS4.material = materialBox;
    // boxS5.material = materialBox;

    boxA1.material = materialBox;
    boxA2.material = materialBox;
    boxA3.material = materialBox;
    boxA4.material = materialBox;

    // boxI1.material = materialBox;
    // boxI2.material = materialBox;
    // boxI3.material = materialBox;

    boxT1.material = materialBox;
    boxT2.material = materialBox;

    boxD1.material = materialBox;
    sphereD.material = materialBox;

    boxM1.material = materialBox;
    boxM2.material = materialBox;
    boxM3.material = materialBox;
    boxM4.material = materialBox;
   

    //Create a scaling animation
    var animation1 = new BABYLON.Animation("tutoAnimation", "scaling.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    // Animation keys
    var keys = [];
    //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 1
    });

    //At the animation key 20, the value of scaling is "0.2"
    keys.push({
        frame: 20,
        value: 0.2
    });

    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: 1
    });

    //Adding keys to the animation object
    animation1.setKeys(keys);

    //Create a second rotation animation with different timeline
    var animation2 = new BABYLON.Animation("tutoAnimation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    // Animation keys
    keys = [];
    keys.push({
        frame: 0,
        value: 0
    });

    keys.push({
        frame: 40,
        value: Math.PI
    });

    keys.push({
        frame: 80,
        value: 0
    });

    //Adding keys to the animation object
    animation2.setKeys(keys);

    // Create the animation group
    
    var animationGroup = new BABYLON.AnimationGroup("my group");
    animationGroup.addTargetedAnimation(animation2, boxA1);
    animationGroup.addTargetedAnimation(animation2, boxA1);
    animationGroup.addTargetedAnimation(animation2, boxA2);
    animationGroup.addTargetedAnimation(animation2, boxA3);
    animationGroup.addTargetedAnimation(animation2, boxA4);

    animationGroup.addTargetedAnimation(animation2, boxE1);
    animationGroup.addTargetedAnimation(animation2, boxE2);
    animationGroup.addTargetedAnimation(animation2, boxE2);
    animationGroup.addTargetedAnimation(animation2, boxE3);
    animationGroup.addTargetedAnimation(animation2, boxE4);

    animationGroup.addTargetedAnimation(animation2, boxS1);
    animationGroup.addTargetedAnimation(animation2, boxS1);
    animationGroup.addTargetedAnimation(animation2, boxS2);
    animationGroup.addTargetedAnimation(animation2, boxS3);
    animationGroup.addTargetedAnimation(animation2, boxS4);
    animationGroup.addTargetedAnimation(animation2, boxS5);

    animationGroup.addTargetedAnimation(animation2, boxT1);
    animationGroup.addTargetedAnimation(animation2, boxT2);
 
    animationGroup.addTargetedAnimation(animation2, boxI1);
    animationGroup.addTargetedAnimation(animation2, boxI2);
    animationGroup.addTargetedAnimation(animation2, boxI3);

    animationGroup.addTargetedAnimation(animation1, boxA1);
    animationGroup.addTargetedAnimation(animation2, boxA1);
    animationGroup.addTargetedAnimation(animation2, boxA2);
    animationGroup.addTargetedAnimation(animation2, boxA3);
    animationGroup.addTargetedAnimation(animation2, boxA4);

    animationGroup.addTargetedAnimation(animation2, boxM1);
    animationGroup.addTargetedAnimation(animation2, boxM2);//ok
    animationGroup.addTargetedAnimation(animation1, boxM3);
    animationGroup.addTargetedAnimation(animation2, boxM3);
    animationGroup.addTargetedAnimation(animation2, boxM4);//ok

    animationGroup.addTargetedAnimation(animation2, boxD1);
    animationGroup.addTargetedAnimation(animation1, sphereD);

    animationGroup.addTargetedAnimation(animation2, boxB1);
    animationGroup.addTargetedAnimation(animation1, sphereB);   
    animationGroup.addTargetedAnimation(animation1, sphereB1);
    
    animationGroup.addTargetedAnimation(animation2, boxS11);
    animationGroup.addTargetedAnimation(animation2, boxS22);
    animationGroup.addTargetedAnimation(animation2, boxS33);
    animationGroup.addTargetedAnimation(animation2, boxS44);
    animationGroup.addTargetedAnimation(animation2, boxS55);

 
    // Make sure to normalize animations to the same timeline
    animationGroup.normalize(0, 100);

   
   

    var particleSystemE1 = new BABYLON.ParticleSystem(
      "particles/explosion.json",
      2000,
      scene
    );

    var particleSystemE2 = new BABYLON.ParticleSystem(
        "particles/explosion.json",
        2000,
        scene
      );
    
    var particleSystemE3 = new BABYLON.ParticleSystem(
        "particles/explosion.json",
        2000,
        scene
      );

      
    var particleSystemE4 = new BABYLON.ParticleSystem(
        "particles/explosion.json",
        2000,
        scene
      );
      var particleSystemE5 = new BABYLON.ParticleSystem(
        "particles/explosion.json",
        2000,
        scene
      );

      var particleSystemS1 = new BABYLON.ParticleSystem(
        "particles/explosion.json",
        2000,
        scene
      );

  
      var particleSystemS2 = new BABYLON.ParticleSystem(
          "particles/explosion.json",
          2000,
          scene
        );

        var particleSystemS3 = new BABYLON.ParticleSystem(
            "particles/explosion.json",
            2000,
            scene
          );
    
      
        var particleSystemS4 = new BABYLON.ParticleSystem(
              "particles/explosion.json",
              2000,
              scene
        );

      
      var particleSystemS5 = new BABYLON.ParticleSystem(
          "particles/explosion.json",
          2000,
          scene
        );
  
        
      var particleSystemS6 = new BABYLON.ParticleSystem(
          "particles/explosion.json",
          2000,
          scene
        );
        var particleSystemS7 = new BABYLON.ParticleSystem(
          "particles/explosion.json",
          2000,
          scene
        );


    
    var particleSystemS8 = new BABYLON.ParticleSystem(
        "particles/explosion.json",
        2000,
        scene
      );


    var particleSystemS9 = new BABYLON.ParticleSystem(
        "particles/explosion.json",
        2000,
        scene
      );

    var particleSystemS10= new BABYLON.ParticleSystem(
        "particles/explosion.json",
        2000,
        scene
    );
    var particleSystemS11 = new BABYLON.ParticleSystem(
          "particles/explosion.json",
          2000,
          scene
    );
    var particleSystemS12= new BABYLON.ParticleSystem(
        "particles/explosion.json",
        2000,
        scene
      );
      var particleSystemS13 = new BABYLON.ParticleSystem(
          "particles/explosion.json",
          2000,
          scene
        );
  
      var particleSystemS14= new BABYLON.ParticleSystem(
          "particles/explosion.json",
          2000,
          scene
      );
      var particleSystemS15 = new BABYLON.ParticleSystem(
            "particles/explosion.json",
            2000,
            scene
      );

      var particleSystemS16= new BABYLON.ParticleSystem(
        "particles/explosion.json",
        2000,
        scene
      );
      var particleSystemS17 = new BABYLON.ParticleSystem(
          "particles/explosion.json",
          2000,
          scene
        );
  
      var particleSystemS18= new BABYLON.ParticleSystem(
          "particles/explosion.json",
          2000,
          scene
      );
      var particleSystemS19 = new BABYLON.ParticleSystem(
            "particles/explosion.json",
            2000,
            scene
      );

    //Texture of each particle
    particleSystemE1.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemE2.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemE3.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemE4.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemE5.particleTexture = new BABYLON.Texture("textures/fire.jpg");

    particleSystemS1.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS2.particleTexture = new BABYLON.Texture("textures/fire.jpg");  
    particleSystemS3.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS4.particleTexture = new BABYLON.Texture("textures/fire.jpg");

    particleSystemS5.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS6.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS7.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS8.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS9.particleTexture = new BABYLON.Texture("textures/fire.jpg");

    particleSystemS10.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS11.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS12.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS13.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS14.particleTexture = new BABYLON.Texture("textures/fire.jpg"); 
    particleSystemS15.particleTexture = new BABYLON.Texture("textures/fire.jpg");

    particleSystemS16.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS17.particleTexture = new BABYLON.Texture("textures/fire.jpg");
    particleSystemS18.particleTexture = new BABYLON.Texture("textures/fire.jpg"); 
    particleSystemS19.particleTexture = new BABYLON.Texture("textures/fire.jpg");
 
     // Position where the particles are emiited from
     particleSystemE1.emitter = new BABYLON.Vector3(22, 21, 0);
     particleSystemE2.emitter = new BABYLON.Vector3(25, 21, 0);
     particleSystemE3.emitter = new BABYLON.Vector3(28, 21, 0);
     particleSystemE4.emitter = new BABYLON.Vector3(31, 21, 0);
     particleSystemE5.emitter = new BABYLON.Vector3(34, 21, 0);

     particleSystemS1.emitter = new BABYLON.Vector3(18, 21, 0);
     particleSystemS2.emitter = new BABYLON.Vector3(16, 21, 0);
     particleSystemS3.emitter = new BABYLON.Vector3(14, 21, 0);
     particleSystemS4.emitter = new BABYLON.Vector3(12, 21, 0);
     particleSystemS5.emitter = new BABYLON.Vector3(10, 21, 0);

     particleSystemS6.emitter = new BABYLON.Vector3(5, 21, 0);
     particleSystemS7.emitter = new BABYLON.Vector3(3, 21, 0);
     particleSystemS8.emitter = new BABYLON.Vector3(0, 21, 0);
     particleSystemS9.emitter = new BABYLON.Vector3(-2, 21, 0);
     particleSystemS10.emitter = new BABYLON.Vector3(-5, 21, 0);

     particleSystemS11.emitter = new BABYLON.Vector3(-8, 21, 0);
     particleSystemS12.emitter = new BABYLON.Vector3(-10, 21, 0);
     particleSystemS13.emitter = new BABYLON.Vector3(-12, 21, 0);
     particleSystemS14.emitter = new BABYLON.Vector3(-14, 21, 0);
     particleSystemS15.emitter = new BABYLON.Vector3(-16, 21, 0);

     particleSystemS16.emitter = new BABYLON.Vector3(-21, 21, 0);
     particleSystemS17.emitter = new BABYLON.Vector3(-23, 21, 0);
     particleSystemS18.emitter = new BABYLON.Vector3(-26, 21, 0);
     particleSystemS19.emitter = new BABYLON.Vector3(-30, 21, 0);

    // UI
    document.getElementById('play').onclick = function() {
        var music = new BABYLON.Sound("Music", "sounds/explosion.mp3", scene, null, {
            loop: false,
            autoplay: true
          });
          
          materialBox.diffuseColor = new BABYLON.Color3(1, 0, 0);//Green

          boxE1.material = materialBox;
          boxE2.material = materialBox;
          boxE3.material = materialBox;
          boxE4.material = materialBox;
      
          boxA1.material = materialBox;
          boxA2.material = materialBox;
          boxA3.material = materialBox;
          boxA4.material = materialBox;
      
          boxT1.material = materialBox;
          boxT2.material = materialBox;
      
          boxD1.material = materialBox;
          sphereD.material = materialBox;
      
          boxM1.material = materialBox;
          boxM2.material = materialBox;
          boxM3.material = materialBox;
          boxM4.material = materialBox;
         
        
        animationGroup.play(true);
        particleSystemE1.start();
        particleSystemE2.start();
        particleSystemE3.start();
        particleSystemE4.start();
        particleSystemE5.start();

        particleSystemS1.start();
        particleSystemS2.start();
        particleSystemS3.start();
        particleSystemS4.start();

        particleSystemS5.start();
        particleSystemS6.start();
        particleSystemS7.start();

        particleSystemS8.start();
        particleSystemS9.start();
        particleSystemS10.start();
        particleSystemS11.start();

        particleSystemS12.start();
        particleSystemS13.start();
        particleSystemS14.start();
        particleSystemS15.start();
        
        particleSystemS16.start();
        particleSystemS17.start();
        particleSystemS18.start();
        particleSystemS19.start();

        
    };
    document.getElementById('pause').onclick = function() {
        animationGroup.pause(true);
        materialBox.diffuseColor = new BABYLON.Color3(0, 1, 0);//Green

    };

    

    return scene;
}

function loadSounds(scene) {
    var assetsManager = scene.assetsManager;
  
    var binaryTask = assetsManager.addBinaryFileTask("laserSound", "sounds/laser.wav");
    binaryTask.onSuccess = function (task) {
      scene.assets.laserSound = new BABYLON.Sound("laser", task.data, scene, null,
        { loop: false, spatialSound: true }
      );
    };
  
    
  }

  function configureAssetManager(scene) {
    // useful for storing references to assets as properties. i.e scene.assets.cannonsound, etc.
    scene.assets = {};
  
    let assetsManager = new BABYLON.AssetsManager(scene);
  
    assetsManager.onProgress = function (
      remainingCount,
      totalCount,
      lastFinishedTask
    ) {
      engine.loadingUIText =
        "We are loading the scene. " +
        remainingCount +
        " out of " +
        totalCount +
        " items still need to be loaded.";
      console.log(
        "We are loading the scene. " +
        remainingCount +
        " out of " +
        totalCount +
        " items still need to be loaded."
      );
    };
  
    assetsManager.onFinish = function (tasks) {
    
     
    };
  
    return assetsManager;
  }
