let tree = [];
let walker;
let r = 8;
 
function setup() {
 
  if (windowWidth > windowHeight){
    createCanvas(windowHeight,windowHeight);
  }
  else{
    createCanvas(windowWidth,windowWidth);
  }

//createCanvas(400,400);
  tree[0] = createVector(width/2,height/2);
  
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
  // random any place on the screen
  //let walker = createVector(random(width),random(height));
  // random edges
  walker = getEdge();
  
  let stuck = false;

  // keep checking and moveing the walker
  while(!stuck){
	  for(let i =0; i<tree.length; i++){
	  	let d = p5.Vector.dist(walker,tree[i]);
	  	if (d < r*2){
	  		stuck = true;
	  		break;
	  	}

	  }

	  let vel = p5.Vector.random2D();
	  walker.add(vel);
	  //fill(0,255,0);
	  //ellipse(walker.x,walker.y,r*2,r*2)
	  walker.x = constrain(walker.x,0,width);
  	  walker.y = constrain(walker.y,0,height);

	}
	// push the walker that hit the tree after break and add it to the tree
	tree.push(walker)

  fill(255,0,0);
  stroke(255,0,0);
  for(let i =0; i<tree.length; i++){
  ellipse(tree[i].x, tree[i].y, r*2,r*2);
}
    
  
}