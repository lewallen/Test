data = generateXYData();

// Display variables
var graph_lower_left = [50,100];
var graph_height;
var graph_width;

// SETUP
function setup() {
  w = 710;
  h = 500;

  graph_height = h/2;
  graph_width = w/2;

  let cnv =createCanvas(w, h);
  //cnv.position(200, 100);
  cnv.parent("canvas");
}



// DRAW LOOP
function draw() {
  background(120, 159, 200);
  
  // Draw axes
  strokeWeight(2);
  stroke(color(100,100,150,200));
  draw_axes();

  // Display Datapoints
  fill(256,256,256,150);
  noStroke();
  for(var i=0; i< data.length; i++){
    var dot_position = graph_transform(data[i]);
    ellipse(dot_position[0],dot_position[1],5);
  }

}


// Function to recenter data for display
function graph_transform(v){
  var x = v[0]*graph_width + graph_lower_left[0];
  var y = h-(v[1]*graph_height + graph_lower_left[1]);
  return [x , y];
}

// Function to draw axes
function draw_axes(){
  line(graph_lower_left[0],h - graph_lower_left[1],graph_lower_left[0], 0 );
  line(graph_lower_left[0],h - graph_lower_left[1],w, h - graph_lower_left[1]);
}
