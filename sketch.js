       var garden,rabbit,apple,leaf;
       var gardenImg,rabbitImg, appleImg,leafImg;
       var spawnLeafs, spawnApples;
      
      function preload(){
        gardenImg = loadImage("garden.png");
        rabbitImg = loadImage("rabbit.png");
        appleImg = loadImage("apple.png");
        leafImg = loadImage("leaf.png");
        redLeafImg= loadImage("redImage.png");
      }

      function setup(){
        
        createCanvas(400,400);
        
        // Moving background
        garden=createSprite(200,200);
        garden.addImage(gardenImg);

        //creating boy running
        rabbit = createSprite(180,340,30,30);
        rabbit.scale =0.09;
        rabbit.addImage(rabbitImg);
        rabbit.velocity.X=1;

        
      }
      
      function draw() {
          background(0);
          
          edges= createEdgeSprites();
          rabbit.collide(edges);

          drawSprites();
          
          rabbit.x=mouseX;

          
        
        var apple = Math.round(random(1,1));
          if(frameCount % 80 === 0){
            if(apple===1){
            
                apple = createSprite(random(50, 350), 40, 10, 10) ;
                apple.addImage(appleImg);
                apple.scale=0.1/2;
                apple.velocityY=1;
                apple.lifetime = 300;
              }
            }
          
      
        var leaf = Math.round(random(1,2));
          if(frameCount % 80 === 0){
            if(leaf===1){
                
                  leaf = createSprite(random(50, 350), 40, 10, 10) ;
                  leaf.addImage(leafImg);
                  leaf.scale=0.1/2;
                  leaf.velocityY=1;
                  leaf.lifetime = 300;
                }
            }

            var redLeaf = Math.round(random(1,3));
          if(frameCount % 80 === 0){
            if(redLeaf===1){
                
              redLeaf = createSprite(random(50, 350), 40, 10, 10) ;
              redLeaf.addImage(redLeafImg);
              redLeaf.scale=0.1/2;
              redLeaf.velocityY=1;
              redLeaf.lifetime = 300;
                }
            }
        }

            
     




 

