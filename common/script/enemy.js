//get the direction based on the angle
function getDir(p2,p1){
  let r = {x:0,y:0}
  if (p2.x - Math.round(p1.x*100)/100 < 0){
    r.x = -1
  } else if (p2.x-Math.round(p1.x*100)/100 >0) {
    r.x = 1
  }
  if (p2.y - Math.round(p1.y*100)/100 < 0){
    r.y = -1
  } else if (p2.y-Math.round(p1.y*100)/100 >0) {
    r.y = 1
  }
  return r;
}

function convertArrayToTable(n){
	return {x:n[0], y:n[1], z:n[2]}
}

function clamp(v, min, max){
	return Math.min(Math.max(v, min), max);
}

class Modifiers{
	constructor(){
		this.DataStorage = {
			"Giant" : {
				Health: 1.4,
				
				Scale: 1.3,
			},
			"Quick" : {
				Speed: 1.4,
				
				Scale: 0.9,
			},
			"Armored" :{
				Armor: 5,
				
				src:"#metal",
				repeat:"1 1",
			},
		};
	}
	
}

const mods = new Modifiers();

class Enemy{
	constructor(data, modifiers, pos){
		this.Name = "Test";
		this.alive = true;
		
		this.Health = data.Health || 10;
		this.MaxHealth = data.Health || 10;
		this.DamageMulti = 1;
		this.ImmuneEffects = data.ImmuneEffects;
		this.ImmuneTypes = data.ImmuneTypes;
		this.Armor = data.Armor;
		this.modifiers = modifiers;
		
		this.Speed = data.Speed || 5;
		
		this.position = convertArrayToTable(game.Stage.Map.StartGoal);
		this.direction = [0,0,0];
		
		this.node = 0;
		this.nextPos = convertArrayToTable(game.Stage.Map.Nodes[1]);
		this.walkValue = 0;
		
		this.obj = data.EnemyObject(this.position);
		this.StatusEffects = [];
		this.display;
		this.display2;
		this.display3;
		
		this.createElement();
		
		this.loadModifiers();
		
		game.enemies.push(this);
	}
	loadModifiers(){
		if (this.modifiers == false){return;}
		
		for (var m of this.modifiers){
			if (m == "Giant"){
				this.Health = Math.round(10 * this.Health * mods.DataStorage.Giant.Health)/10;
				this.MaxHealth = Math.round(10 * this.MaxHealth * mods.DataStorage.Giant.Health)/10;
				
				this.obj.setAttribute("scale", `${mods.DataStorage.Giant.Scale} ${mods.DataStorage.Giant.Scale} ${mods.DataStorage.Giant.Scale}`);
			} else if (m == "Quick"){
				this.Speed = Math.round(10 * this.Speed * mods.DataStorage.Quick.Speed)/10;
				
				this.obj.setAttribute("scale", `${mods.DataStorage.Quick.Scale} ${mods.DataStorage.Quick.Scale} ${mods.DataStorage.Quick.Scale}`);
			} else if (m == "Armored"){
				this.Armor += mods.DataStorage.Armored.Armor;
				
				this.obj.setAttribute("src", mods.DataStorage.Armored.src);
				this.obj.setAttribute("repeat", mods.DataStorage.Armored.repeat);
			}
		}
	}
	createElement(){
		this.obj.setAttribute("position", this.position);
		this.position = this.obj.getAttribute("position");
		
		this.display = document.createElement("a-text");
		this.display.setAttribute("side", "double");
		this.display.setAttribute("shader", "msdf");
		this.display.setAttribute("font", game.getFont("sourcecodepro", "SourceCodePro-Bold"));
		this.display.setAttribute("position", "-0.95 1.2 0");
		this.display.setAttribute("value", formatCash(this.Health));
		this.display.setAttribute("width", 13);
		this.display.setAttribute("material", "shader:flat");
		
		this.display2 = document.createElement("a-text");
		this.display2.setAttribute("side", "double");
		this.display2.setAttribute("position", "0.95 1.2 0");
		this.display2.setAttribute("color", "#bbb");
		this.display2.setAttribute("shader", "msdf");
		this.display2.setAttribute("font", game.getFont("sourcecodepro", "SourceCodePro-Black"));
		this.display2.setAttribute("value", `${formatCash(this.Armor)}`);
		this.display2.setAttribute("width", 13);
		this.display2.setAttribute("material", "shader:flat");
		
		this.display3 = document.createElement("a-entity");
		let iter = -1;
		
		if (this.modifiers != false){
			for (var m of this.modifiers){
				iter ++;
				let N = document.createElement("a-text");
				N.setAttribute("side", "double");
				N.setAttribute("position", `${-0.9 + iter*0.3} 0.9 0`);
				N.setAttribute("color", "#fff");
				N.setAttribute("shader", "msdf");
				N.setAttribute("font", game.getFont("sourcecodepro", "SourceCodePro-Bold"));
				N.setAttribute("value", `${m}`);
				N.setAttribute("width", 5);
				N.setAttribute("material", "shader:flat");
				this.display3.append(N);
			}
		}
		
		this.obj.append(this.display);
		this.obj.append(this.display2);
		this.obj.append(this.display3);
		
		enemyScene.append(this.obj);
	}
	Die(end=false){
		if (!end){
			game.cash += Math.round(this.MaxHealth*1.1  + (this.MaxHealth^1.04/100));
		}
		
		game.enemies.splice(game.enemies.indexOf(this), 1);
		this.obj.remove();
		return;
	}
	Update(){
		this.walkValue += this.Speed * (20/1000);
		this.Health = Math.floor(10 * this.Health)/10;
		
		if (distance3D(this.position, this.nextPos) < this.Speed * (20/1000) || this.node == 0){
			this.node ++;

			if (this.node == game.Stage.Map.Nodes.length){
				game.takeDamage(this.Health);
				this.Die(true);
				return;
			}
			
			this.position = convertArrayToTable(game.Stage.Map.Nodes[this.node-1]);
			this.nextPos = convertArrayToTable(game.Stage.Map.Nodes[this.node]);
			
			let d = getAngle(this.position, this.nextPos);
			let yy = (this.nextPos.y - this.position.y)/distance2D(this.position, this.nextPos);
			
			this.direction = [d[0], yy, d[1]];
		}
		
		this.position.x += this.direction[0] * this.Speed * (20/1000);
		this.position.y += this.direction[1] * this.Speed * (20/1000);
		this.position.z += this.direction[2] * this.Speed * (20/1000);
		
		this.display.setAttribute("value", formatCash(Math.round(10 * this.Health)/10));
		this.display2.setAttribute("value", `🛡️${formatCash(Math.round(10 * this.Armor)/10)}`);
		
		if (this.Health <= 0){
			this.Die();
		};
		
		this.obj.setAttribute("position", this.position);
	}
}