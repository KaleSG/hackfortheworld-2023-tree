

let app;

//User Variables
let remainingSeedlings = 5;


window.onload = function() {
    app = new PIXI.Application(
        {
            width: window.innerWidth,
            height: window.innerHeight,
            background: "#000000"
        }
    );
    document.body.appendChild(app.view)

    //Grass Tiling Settings
    let grasswidth = 45;
    
    //Calculate area needed 
    let xGrassTile = Math.ceil(window.innerWidth/grasswidth);
    let yGrassTile = Math.ceil(window.innerWidth/grasswidth);

    for (let i=0;i<xGrassTile;i++) {
        for(let j=0;j<yGrassTile;j++) {
            let grassTexture = PIXI.Texture.from("img/grasstile.png");
            let grasstile = new PIXI.Sprite(grassTexture);
            grasstile.width = grasswidth;
            grasstile.height = grasstile.width
            grasstile.x = 45*i;
            grasstile.y = 45*j;
            grasstile.eventMode = 'dynamic';
            grasstile.buttonMode = true;
            app.stage.addChild(grasstile);


            grasstile.on('pointerenter', event=>{
                grasstile.tint = 0xD6D7DA
            })

            grasstile.on('pointerleave', event=>{
                grasstile.tint = 0xFFFFFF
            })
        }
    }



    //Remaining Seedling Counter
    let seedlingCounterTexture = PIXI.Texture.from("img/acornCount.png");
    let seedlingCounterDecal = new PIXI.Sprite(seedlingCounterTexture);
    seedlingCounterDecal.width = 90;
    seedlingCounterDecal.height = seedlingCounterDecal.width;
    seedlingCounterDecal.x = 15;
    seedlingCounterDecal.y = window.innerHeight - 105
    app.stage.addChild(seedlingCounterDecal);

    //Seedling label
    var seedlabel = new PIXI.Text("Seeds", {fontFamily: "Press Start 2P", fill:"white", fontSize: '18px'});
    app.stage.addChild(seedlabel);
    seedlabel.x = 16;
    seedlabel.y = window.innerHeight - 130

    //Seedling Remaining label
    var seedCounter = new PIXI.Text(remainingSeedlings.toString(), {fontFamily: "Press Start 2P", fill:"white", fontSize: '18px'});
    app.stage.addChild(seedCounter);
    seedCounter.x = 75;
    seedCounter.y = window.innerHeight - 45


    //timeskip button
    let timeskipbuttonTexture = PIXI.Texture.from("img/timeskip.png")



}