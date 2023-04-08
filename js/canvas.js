
//initial game settings
let beginningseedlings = 5;
let beginningtreeChange = .30 //chance of tree spawning at beginning of game



let app;

//User Variables
let remainingSeedlings = beginningseedlings;
let timeskipcooldown = false;
let year;
const width = 1920;
const height = 1080;
//Grass Tiling Settings
let grasswidth = 45;


window.onload = function() {
    app = new PIXI.Application(
        {
            width: window.innerWidth,
            height: window.innerHeight,
            background: "#000000"
        }
    );
    document.body.appendChild(app.view)
    //app.view.style.width = "100%";
    
    //Calculate area needed 
    let xGrassTile = Math.ceil(app.view.width/grasswidth);
    let yGrassTile = Math.ceil(app.view.width/grasswidth);

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
    seedlingCounterDecal.y = app.view.height - 105
    app.stage.addChild(seedlingCounterDecal);

    //Seedling label
    var seedlabel = new PIXI.Text("Seeds", {fontFamily: "Press Start 2P", fill:"white", fontSize: '18px'});
    app.stage.addChild(seedlabel);
    seedlabel.x = 16;
    seedlabel.y = app.view.height - 130

    //Seedling Remaining label
    var seedCounter = new PIXI.Text(remainingSeedlings.toString(), {fontFamily: "Press Start 2P", fill:"white", fontSize: '18px'});
    app.stage.addChild(seedCounter);
    seedCounter.x = 75;
    seedCounter.y = app.view.height- 45

    

    //time skip
    var timeSkipLabel = new PIXI.Text("Fast Forward", {fontFamily: "Press Start 2P", fill:"white", fontSize: '13px'});
    app.stage.addChild(timeSkipLabel);
    timeSkipLabel.x = app.view.width - 180;
    timeSkipLabel.y = app.view.height - 130

    //timeskip button
    let timeskipbuttonTexture = PIXI.Texture.from("img/timeskip.png")
    let timeskiphighlight = PIXI.Texture.from("img/timeskip_highlighted.png")
    let timeskipclick = PIXI.Texture.from("img/timeskipclick.png")
    let tsb = new PIXI.Sprite(timeskipbuttonTexture);
    app.stage.addChild(tsb);
    tsb.eventMode = 'dynamic';
    tsb.buttonMode = true;
    tsb.width = 180;
    tsb.height = 90
    tsb.x = app.view.width  - tsb.width - 15
    tsb.y = app.view.height - 105
    tsb.defaultCursor = 'pointer'

    //animation stuff
    tsb.on('pointerenter', event=>{
        tsb.texture = timeskiphighlight;
    })

    tsb.on('pointerleave', event=>{
        tsb.texture = timeskipbuttonTexture;
    })

    tsb.on('pointerdown', event=>{
        tsb.texture = timeskipclick;
    })

    tsb.on('pointerup', event=>{
        tsb.texture = timeskiphighlight;
    })

    const ticker = new PIXI.Ticker();
    ticker.stop();
    ticker.add((deltaTime) => {
      console.log("what")
    });
    ticker.start();



} 


class Tree {
    constructor(app, x, y) {
        this.app = app
        this.x = x // the X tile on the screen
        this.y = y // the Y tile on the screen
        this.state = true

        // initialize sprite
        this.normalTexture = PIXI.Texture.from("img/Tree.png")
        this.cutTexture = PIXI.Texture.from("img/Stump.png")
        this.sprite = new PIXI.Sprite(timeskipbuttonTexture);
        app.stage.addChild(tsb);
        this.sprite.eventMode = 'dynamic';
        this.sprite.buttonMode = true;
        this.sprite.width = grasswidth;
        this.sprite.height = grasswidth
        this.sprite.x = x * grasswidth
        this.sprite.y = y * grasswidth
        this.sprite.defaultCursor = 'pointer'

        tsb.on('pointerenter', event=>{
            this.sprite.texture = this.cutTexture
        })
    }

    cut() {
        this.state = false
        // change sprite to cut
        this.sprite.texture = this.cutTexture
    }
}