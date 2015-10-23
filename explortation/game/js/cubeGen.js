var cubeWidth = 50;
var cubeHeight = 50;
var vertialCubes;
var horizontalCubes;
var cubeHolder;

var surroundingColors; //UP CENTER DOWN LEFT RIGHT; will have to do a check 
//to make sure we dont add more than we need to (just a call on insert)

function getWidth(){
	return this.window.innerWidth;
}

function getHeight(){
	return this.window.innerHeight;
}

function generate(width, height){
	//cubes are going to be 50x50
	//so horizontally = width / 50 [floor]
	horizontalCubes = Math.floor(width / cubeWidth); 
	vertialCubes = Math.floor(height / cubeHeight);
	var count = 0; 
	var id = 1; 
	cubeHolder = new Array(vertialCubes);

	//need to build a 2d array to hold the squares
	for(var k = 0; k < vertialCubes; k++){
		cubeHolder[k] = new Array(horizontalCubes);
	}

	//generating the divs
	for(var i = 0; i < vertialCubes; i++){
		for(var j = 0; j < horizontalCubes; j++){

			var div = document.createElement('div');
			div.className = "cube" + id;
			id++;
			count++;

			cubeHolder[i][j] = div;
			$(".container").append(div);
		}
	}

	printCubes(horizontalCubes, vertialCubes, cubeHolder);
}

function printCubes(horizontalCubes, vertialCubes, cubeHolder){
	//double for loop; printint out what each cube is
	for(var i = 0; i < vertialCubes; i++){
		for(var j = 0; j < horizontalCubes; j++){
			$("container").append(cubeHolder[i][j]); //put them on the body
		}
	}
}

function getChildren(){
	 var children = $(".container").children();
	 return children;
}

function populateBoard(children){
	var id = 1;
	for(var i = 0; i < children.length; i++){
		$(".cube" + id).addClass("cube");
		//generate random color here: 
		var color = seedRandomColor();
		$(".cube" + id).css("background-color", color);
		id++;
	}
}

function seedRandomColor(){
	var colors = ["red", "blue", "green", "yellow", "orange"]; //for testing right now
	var index = Math.floor((Math.random() * colors.length));
	return colors[index];
}