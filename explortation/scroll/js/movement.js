var moveSpeed = 0.2;

function gameLoop(){

	var key = null;
	var running = true;

	while(running){
		
		document.onkeydown = function(e){
			switch(e.keyCode){
				case 37:
					key = "left";
					move(key);
					break;

				case 38: 
					key = "up";
					move(key);
					break;

				case 39:
					key = "right";
					move(key);
					break;

				case 40: 
					key = "down";
					move(key);
					break;
			}
		};
	
	running = false;

	}
}

function move(key){

	if(key == null)
		return;

	if(key == "left"){
		//check position
	}

	if(key == "right"){
		var cube = document.getElementById("cube");
		cube.style.left += 10 + 'px';
	}

}