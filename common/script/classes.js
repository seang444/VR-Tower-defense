class Util{
	constructor(){
		console.log("Version 3a, no GUI");
	}
	dist(n,a){
	   return Math.sqrt(n**2 + a**2);
	}
	componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}
	random(min,max){
		return Math.floor((max-min)*Math.random()) + min;
	}
	rgbToHex(r, g, b) {
		return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
	}
	FloorTo(N,V){
		return Math.round(N * V)/V;
	}
	Summation(Start,End,Function){
		let x = 0;
		
		for (let i = Start; i < End; i ++){
			x += Function(i);
		}
		
		return x;
	}
	clamp(n, l, u) {
		return Math.min(Math.max(n, l), u);
	}
}

var ObjectStorage = [];

class Obj{
	constructor(Info){
		this.Info = Info;
		
		this.Type;
		this.Attributes = {};
		this.Element;
		
		this.create();
	}
	create(){
		var newObj = document.createElement(`a-${this.Info.Shape}`);
		var Selector = this.Info.Parent || "a-scene";
		var Parent;
		
		if (typeof this.Info.Parent === 'object' && !Array.isArray(this.Info.Parent) && this.Info.Parent !== null){
			Parent = this.Info.Parent;
		} else {
			Parent = document.querySelector(`${Selector}`);
		}
		
		for (let N in this.Info.Settings){
			if (N.toLowerCase() != "parent"){
				newObj.setAttribute(N, this.Info.Settings[N]);
				this.Attributes[N] = this.Info.Settings[N];
			}
		};

		Parent.appendChild(newObj);
		
		ObjectStorage.push(newObj);
		
		this.Element = newObj;
		return newObj;
	}
	clone(){
		return new Obj(this.Info);
	}
	destroy(){
		ObjectStorage.splice(ObjectStorage.indexOf(this), 1);
		delete this;
	}
	modifyAttribute(N,V){
		if (this.Attributes[N]){
			this.Attributes[N] = V;
			this.Element.setAttribute(N, V);
		} else	{
			console.log(`ATTRIBUTE ${N} DOESN't EXIST, SET TO DEFAULT VALUE CALLED`);
			this.Element.setAttribute(N, V);
		}
	}
};

class ObjectCreator{
	constructor(){
		this.TotalObjects = 0;
		this.ObjectRegistery = {};
		this.ObjectRegisteryCount = 0;
		
		/*document.querySelector("body").innerHTML += `<canvas id="UI" style="cursor: not-allowed;pointer-events: none; user-select: none;-webkit-user-select: none;-moz-user-select: none;height: 100%; width: 100%; position:absolute;  background: rgba(76, 175, 80, 0) ; z-index: 2" disabled></canvas>`*/
	}
	loadGUI(){
		let v = document.createElement("canvas");
		let stuff = [
			["id", "UI"],
			["style","top: 0%; left:0%; cursor: not-allowed;pointer-events: none; user-select: none;-webkit-user-select: none;-moz-user-select: none;height: 100%; width: 100%; position:absolute;  background: rgba(76, 175, 80, 0) ; z-index: 2"] 
		];
		
		stuff.forEach((s) => {
			v.setAttribute(s[0], s[1]);
		});
		v.setAttribute("disabled", "");
		document.body.appendChild(v);	
		
		UIF = document.getElementById("UI");
		UI = UIF.getContext("2d");
		
		UI.canvas.width  = window.innerWidth;
		UI.canvas.height = window.innerHeight;
		
		
	}		
	createObject(Info){
		return new Obj(Info);
	}
	drawObject(type, Info){
		if (this.ObjectRegistery[type]){
			this.newTable = [this.ObjectRegistery[type], Info].reduce(function (r, o) {
				Object.keys(o).forEach(function (k) { r[k] = o[k]; });
				return r;
			}, {});
			
			this.TotalObjects += 1;
			
			if (!this.newTable.Parent){
				this.newTable.Parent = "a-scene";
			}
			
			return this.createObject({
				Shape: this.newTable.Shape,
				Parent: this.newTable.Parent,
				Settings: this.newTable,
			});
		} else {
			this.type = type;
			this.TotalObjects += 1;
			this.Information = Info;
			
			if (!this.Information.Parent){
				this.Information.Parent = "a-scene";
			}
			
			return this.createObject({
				Shape: this.type,
				Parent: this.Information.Parent,
				Settings: this.Information,
			});
		}
	}
	registerObjectProperties(Name,Info){
		this.ObjectRegistery[Name] = Info;
		this.ObjectRegisteryCount += 1;
	}
	displayObjectRegisteryProperties(){
		var Build = "---- OBJECT REGISTRY LISTING ----\n";
		Build += `- TOTAL REGISTERS: ${this.ObjectRegisteryCount}\n`;
		Build += `- TOTAL OBJECTS USED: ${this.TotalObjects}\n-\n`;
		Build += `---- REGISTERED VALUES ----\n`;
		
		for (var key in this.ObjectRegistery){
			Build += `- ${key}\n`;
		}
		
		Build += `---- END REGISTER LISTING ----\n\n`;
		
		console.log(Build);
		Build = null;
	}
	deleteObjectRegistery(Name){
		if (this.ObjectRegistery[Name]){
			this.ObjectRegistery[Name] = null;
			this.ObjectRegisteryCount -= 1;
		} else {
			console.log(`WARNING: \nOBJECTMANAGER.DELETEOBJECTREGISTRY,\n ${Name} IS NOT A VALID REGISTERED ITEM`);
		}
	}
}

class Player{
	constructor(){
		this.Obj = document.querySelector("#cameraRig");
		this.Cam = document.querySelector("#camera");
		this.obj = this.Cam;
	}
	Jump(){
		this.Cam.components.velocity.y = 10;
	}
	getPosition(){
		return this.Cam.components.position.data;
	}
}

var UIF;
var UI;

const d = new Date();
var oTime = d.getTime();

function formatCash(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

AFRAME.registerComponent('follow-camera', {
    init: function () {
      // Code here.
	  var n = this.el.getAttribute("ogPos");
	  n = n.split(" ");
	  this.initPos = {x:Number(n[0]),y:Number(n[1]),z:Number(n[2])} 
    },
	tick: function () {
		var worldPos = new THREE.Vector3();
		worldPos.setFromMatrixPosition(cam.object3D.matrixWorld);
		
		this.el.setAttribute("position", {x:this.initPos.x + worldPos.x,
		y:this.initPos.y + worldPos.y,
		z:this.initPos.z + worldPos.z});
	}
  });

var cRel;
var cam;

function updatePlr(){
	UI.canvas.width  = window.innerWidth;
	UI.canvas.height = window.innerHeight;
	
    var worldPos = new THREE.Vector3();
    worldPos.setFromMatrixPosition(cam.object3D.matrixWorld);
	
	//cRel.setAttribute("position", worldPos);
	var worldRot = new THREE.Quaternion();
	worldRot.setFromAxisAngle(cam.object3D.matrixWorld);

	let rot = cam.components["look-controls"].pitchObject.rotation
	let time = d.getTime();

	oTime = time;
	
	UI.clearRect(0,0,15000,15000);
	UI.font = "48px serif";
	UI.fillText('Position:', 10, window.innerHeight - 75);
	UI.fillText(`x: ${Utl.FloorTo(worldPos.x,100)}, y: ${Utl.FloorTo(worldPos.y,100)}, z: ${Utl.FloorTo(worldPos.z,100)}`, 200, window.innerHeight - 75);
	
	
	
	UI.font = "48px serif";
	
	if (game.state == "Playing"){
		document.querySelector("#tLives").setAttribute("value", `Lives: ${game.lives}`);
		document.querySelector("#tRound").setAttribute("value", `Round: ${game.gamemode.Round}`);
		document.querySelector("#tCash").setAttribute("value", `Cash: $${formatCash(game.cash)}`);
		document.querySelector("#tTime").setAttribute("value", `Time: ${Math.abs(Math.floor(10 * game.gamemode.Roundtick/50)/10)}`);
	}
	//UI.fillText(`Lives: ${game.lives}`, 750, 75);
	//UI.fillText(`Round: ${game.gamemode.Round}`, 750, 125);
	//UI.fillText(`Cash: $${game.cash}`, 1000, 75);
	//UI.fillText(`Time: ${Math.abs(Math.floor(10 * game.gamemode.Roundtick/50)/10)}`, 1000, 125);
	
	UI.font = "48px serif";
	UI.fillText('Facing:', 10, window.innerHeight - 150);
	UI.fillText(`x: ${Utl.FloorTo(rot.x,100)}, y: ${Utl.FloorTo(rot.y,100)}, z: ${Utl.FloorTo(rot.z,100)}`, 200, window.innerHeight - 150);
} 

function distance2D(obj1,obj2){
	let o1 = obj1.data;
	let o2 = obj2.data;
	return Math.sqrt((o1.x - o2.x)**2 + (o1.z - o2.z)**2);
}


/* 


END UTILITIES 

*/


