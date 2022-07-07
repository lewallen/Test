// Function to generate random test data
var N = 1000;
var y_max_error = 0.5;
var slope = 1.3;

function generateXYData() {
  data = []
  for(var i = 0; i<N; i++){
    var x = Math.random();
    var y_error = y_max_error*(.5-Math.random());

    data.push([x,slope*x+y_error]);
  }
  return data;
}