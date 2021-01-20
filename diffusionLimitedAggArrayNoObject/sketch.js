let tree = [];
let walkers =[] ;
let r = 8;
let startIt;

 
function setup() {
 
  if (windowWidth > windowHeight){
    createCanvas(windowHeight,windowHeight);
  }
  else{
    createCanvas(windowWidth,windowWidth);
  }

//createCanvas(400,400);
  tree[0] = createVector(width/2,height/2);
  startIt= true;
  print("hello")

  for (let w = 0; w < 500; w++){
  	walkers[w] = createVector(random(width),random(height)); // random place on canvas not only edge
  }
   
}


function getEdge(){
	let place = floor(random(4))
	let x,y
	switch(place){
		case 0:    // left side
			 x = 0
			 y = random(height)
			 print('left')
		break;

		case 1: //right side
			 x = width;
			 y = random(height);
			 print('right')
		break;

		case 2: // top
			 x = random(width);
			 y = 0
			 print('top')
		break;


		case 3: // bottom
			 x = random(width);
			 y = height;
			 print('bottom')
		break;





	}
	return createVector(x,y); 
	 
}

function draw() {
  background(0);
  // check total of tree if over number no loop
  if (tree.length>1000){
  	noLoop();
  	textSize(40);
  	fill(0,0,255);
  	text("Game Over", 20, 100)

  }

  // check each walker with each tree
  
  for (let w = 0; w < walkers.length; w++){
  	
    for(let i =0; i< tree.length; i++){
	  let d = p5.Vector.dist(walkers[w],tree[i]);
	 
	  if (d < r*2){
	  	tree.push(walkers[w]); // put that walker into the tree
	  	walkers.splice(w,1); // remove walker
	  	print("hit")
	  	walkers.push(getEdge()) // get another random walker only from edges
	  	
	    
	  	}
	  }

	 }
	 // move and show walkers

	for(let w =0; w <walkers.length; w++){ 
	  
	  let vel = p5.Vector.random2D();
	  vel.mult(3)
	  walkers[w].add(vel);
	  fill(0,255,0);
	  ellipse(walkers[w].x,walkers[w].y,r*2,r*2)
	  walkers[w].x = constrain(walkers[w].x,0,width);
  	  walkers[w].y = constrain(walkers[w].y,0,height);

	}
	// push the walker that hit the tree after break and add it to the tree
	 

  fill(255,0,0);
  stroke(255,0,0,100);
  for(let i =0; i<tree.length; i++){
  ellipse(tree[i].x, tree[i].y, r*2,r*2);
}
    
  
}