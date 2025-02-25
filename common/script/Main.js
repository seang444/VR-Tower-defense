var ObjManager;
var Utl;
var plr;
var game;
var loaded = false;
var Ui;
var scene;
var towerScene;
var enemyScene; var nodeScene;
var gBoard;
var projScene;

//get the direction that bullet is going and fix the angle
function getQuadrant(p2,p1){
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

function RadtoDeg(n){
	return n * 180/Math.PI;
}

function DegtoRad(n){
	return n * Math.PI/180;
}

function distance2D(o1,o2){
	return Math.sqrt((o2.x-o1.x)**2 + (o2.z-o1.z)**2);
}

function distance3D(o1,o2){
	return Math.sqrt((o2.x-o1.x)**2 + (o2.y-o1.y)**2 + (o2.z-o1.z)**2);
}

function distance3Darray(o1,o2){
	return Math.sqrt((o2[0]-o1[0])**2 + (o2[1]-o1[1])**2 + (o2[2]-o1[2])**2);
}
//the position on a circle based on angle between 2 points, direction of bullet
function getAngle(pos1,pos2){
	return [Math.cos(Math.atan2(pos2.z-pos1.z,pos2.x-pos1.x)),Math.sin(Math.atan2(pos2.z-pos1.z,pos2.x-pos1.x))];
}

function getAnglearray(pos1,pos2){
	return [Math.cos(Math.atan2(pos2[2]-pos1[2],pos2[0]-pos1[0])),Math.sin(Math.atan2(pos2[2]-pos1[2],pos2[0]-pos1[0]))];
}

function getAngleY(pos1,pos2){
	return [Math.cos(Math.atan2(pos2.z-pos1.z,pos2.x-pos1.x)),Math.sin(Math.atan2(pos2.z-pos1.z,pos2.x-pos1.x))];
}

function getDegreeAngle(pos1,pos2){
	return Math.atan2(pos2.z-pos1.z,pos2.x-pos1.x);
}

function getDegreeAnglearray(pos1,pos2){
	return Math.atan2(pos2[2]-pos1[2],pos2[0]-pos1[0]);
}

function checkCollision(pos1,pos2, siz1, siz2){
	return ((pos1.x - siz1.x/2 < pos2.x + siz2.x/2 && pos1.x + siz1.x/2 > pos2.x - siz2.x/2) && (pos1.z - siz1.z/2 < pos2.z + siz2.z/2 && pos1.z + siz1.z/2 > pos2.z - siz2.z/2));
}


function checkCollisionRotate(pos1,pos2, siz1, siz2, rotate){
	if (rotate == 0 || rotate == -180 || rotate == 180){
		return ((pos1.x - siz1.x/2 < pos2.x + siz2.x/2 && pos1.x + siz1.x/2 > pos2.x - siz2.x/2) && (pos1.z - siz1.z/2 < pos2.z + siz2.z/2 && pos1.z + siz1.z/2 > pos2.z - siz2.z/2));
	} else {
		return ((pos1.x - siz1.x/2 < pos2.x + siz2.z/2 && pos1.x + siz1.x/2 > pos2.x - siz2.z/2) && (pos1.z - siz1.z/2 < pos2.z + siz2.x/2 && pos1.z + siz1.z/2 > pos2.z - siz2.x/2));
	}
}

const Enemys = new EnemyStorage();
const Towers = new TowerStorage();
const Stages = new Maps();
let Difficulty = new DifficultyStorage();

AFRAME.registerComponent('raycaster-listen', {
	init: function () {
    // Use events to figure out what raycaster is listening so we don't have to
    // hardcode the raycaster.
    this.el.addEventListener('raycaster-intersected', evt => {
      this.raycaster = evt.detail.el;
    });
    this.el.addEventListener('raycaster-intersected-cleared', evt => {
      this.raycaster = null;
    });
  },

  tick: function () {
    if (!this.raycaster) { return; }  // Not intersecting.

    let intersection = this.raycaster.components.raycaster.getIntersection(this.el);
    if (!intersection) { return; }
	game.cursorIntersection = intersection;
  }
});


var tickSpeed = 20;
const tickConvert = 1000/tickSpeed;

var DelayStorage = [];

//CRITICAL TO THE GAME
//This is critical to the game even working
//basically delays a function until it is called
//1000 = 1 second
//checks every frame until its finished
class Delay{
  constructor(callback,delay){
    this.remaining = delay/tickSpeed;
    this.runOnDone = callback;

    DelayStorage.push(this);
  }
  check(){
    if (game.gamemode.Roundtick > this.remaining){
      this.runOnDone();
      DelayStorage.splice(DelayStorage.indexOf(this),1);
      delete this;
    }
  }
}
  
function spawnEnemy(name,modifiers=false){
	if (Enemys.DataStorage[name] != undefined){
		new Enemy(Enemys.DataStorage[name],modifiers,{x:game.Stage.Map.StartGoal[0],y:game.Stage.Map.StartGoal[1],z:game.Stage.Map.StartGoal[2]});
	}
}

class Game{
	constructor(){
		this.confirmPlace = false;
		this.fire = false;
		this.cursorIntersection;
		
		this.SelectedTower = null;
		this.canPlace = true;
		
		this.chosenDiff = "Easy";
		this.chosenMap = "Forest Flats";
		
		this.projectiles = [];
		this.towers = [];
		this.enemies = [];
		this.nodes = [];
		
		this.state = "Menu";
		this.lives = 100;
		this.stage = "test";
		this.round = 10;
		this.dead = false;
		this.cash = 750;
		this.DisplayRange = false;
		this.roundtick = 0;
		this.difficulty = "easy";
		this.gametime = 0;
		
		this.gamesave = {};
		
		this.upgradeItem;
		
		this.shop = {
			selectedTower: "Test",
			placeObject: null,
			rangeObject: null,
		}
		
		this.gamemode = {
			Playing: false,
			RoundPlay: false,
			Paused:false,
			Round: 0,
			Roundtick: -3 * tickConvert,
			StartPos: [0,1,0],
		}
		
		this.Stage = {
			Difficulty: Difficulty.Easy,
			Map: Stages[0],
		}
		
		
		this.finishedRound = false;
		
		
		window.addEventListener("keydown", (e) => {game.processKeyDown(e)});
		window.addEventListener("keyup", (e) => {game.processKeyUp(e)});
		
		window.onclick = (e) => {
			if (e instanceof PointerEvent){
				game.processClickPointer(e);
			} else if (e instanceof CustomEvent){
				game.processClick(e);
			}
		}
	}
	takeDamage(N){
		this.lives -= N;
		
		if (this.lives <= 0){
			this.dead = true;
		}
	}
	clearAll(){
		while (projScene.firstChild){
			projScene.removeChild(projScene.lastChild);
		}
		
		this.projectiles = [];
		this.towers = [];
		this.enemies = [];
		this.nodes = [];
			
		while (towerScene.firstChild){
			towerScene.removeChild(towerScene.lastChild);
		}
			
		while (enemyScene.firstChild){
			enemyScene.removeChild(enemyScene.lastChild);
		}
			
		while (gBoard.firstChild){
			gBoard.removeChild(gBoard.lastChild);
		}
		
		while (nodeScene.firstChild){
			nodeScene.removeChild(nodeScene.lastChild);
		}
	}
	displayRangePlacing(tower){
		let RangeObj = document.createElement("a-cylinder");
		RangeObj.setAttribute("opacity", "0.25");
		RangeObj.setAttribute("color", "#0f0");
		RangeObj.setAttribute("segments-radial", "8");
		RangeObj.setAttribute("rotation", "0 0 0");
		RangeObj.setAttribute("scale", `${tower.TowerStats.Range} 0.55 ${tower.TowerStats.Range}`);
		RangeObj.setAttribute("id", "rangePlace");
		
		return RangeObj;
	}
	towerPlace(){
		if (this.shop.selectedTower){
			if (!this.shop.placeObject){
				this.shop.placeObject = Towers.DataStorage[this.shop.selectedTower][0].TowerObject(this.cursorIntersection.point, true);
				this.shop.rangeObject = this.displayRangePlacing(Towers.DataStorage[this.shop.selectedTower][0]);
				
				
				this.shop.placeObject.append(this.shop.rangeObject);
				scene.append(this.shop.placeObject);
			} else {
				this.canPlace = true;
				this.shop.placeObject.setAttribute("position", this.cursorIntersection.point);
				
				game.towers.forEach((t) => {
					if (checkCollision(this.cursorIntersection.point, t.position, Towers.DataStorage[this.shop.selectedTower][0].TowerStats.Size, t.size)){
						this.canPlace = false;
						return;
					}
				});
				
				game.nodes.forEach((n) => {
					if (checkCollisionRotate(this.cursorIntersection.point, n[0], Towers.DataStorage[this.shop.selectedTower][0].TowerStats.Size, n[1], n[2])){
						this.canPlace = false;
						return;
					}
				})
				
				
				
				if (game.cash < Towers.DataStorage[this.shop.selectedTower][0].TowerStats.Cost){
					this.canPlace = false;
				}
				
				if (this.canPlace){
					this.shop.rangeObject.setAttribute("color", "#5b5");
				} else {
					this.shop.rangeObject.setAttribute("color", "#a55");
				}
			}
		}
	}
	LoadMap(diff, map){
		this.clearAll();
		
		this.Stage.Difficulty = Difficulty[diff];
		this.Stage.Map = Stages.LoadMap(map);
		this.Stage.Map.Gameboard();
		
		this.dead = false;
		this.gametime = 0;
		
		
		this.cash = this.Stage.Difficulty.StartingCash;
		this.lives = this.Stage.Difficulty.StartingHealth;
		this.gamemode.Paused = false;
		
		
		
		this.gamemode.Round = 0;
		this.gamemode.Roundtick = -3 * tickConvert;
		this.gamemode.RoundPlay = false;
		
		
		/*this.cash = 50000000;
		this.gamemode.Round = 48;
		this.gamemode.Roundtick = -10 * tickConvert;
		this.gamemode.RoundPlay = false;*/
		
		console.log(this.Stage.Map);
		
		this.Stage.Map.Nodes.forEach((n) => {
			ObjManager.drawObject("box",{
				id: `Node_${this.Stage.Map.Nodes.indexOf(n)}`,
				opacity: "0",
				visible: "false",
				position: `${n[0]} ${n[1]} ${n[2]}`,
				color: "#fff",
				scale: "0.25 4 0.25",
				Parent: nodeScene,
			});
			
			let ind = this.Stage.Map.Nodes.indexOf(n);
			
			if (ind+1 < this.Stage.Map.Nodes.length){
				let cPos = n;
				let nPos = this.Stage.Map.Nodes[ind+1];
				
				let avgPos = [(cPos[0] + nPos[0])/2, (cPos[1] + nPos[1])/2, (cPos[2] + nPos[2])/2];
				let avgSize = [distance3Darray(cPos, nPos), 1, this.Stage.Map.PathWidth];
				
				let d = getDegreeAnglearray(avgPos, nPos);
				console.log(d);
				if (this.Stage.Map.Name == "Forest Flats"){
					ObjManager.drawObject("box",{
						id: `Path_${this.Stage.Map.Nodes.indexOf(n)}`,
						opacity: "1",
						position: `${avgPos[0]} ${avgPos[1]-1.25} ${avgPos[2]}`,
						color: "#940",
						scale: `${avgSize[0] + this.Stage.Map.PathWidth} ${avgSize[1]} ${avgSize[2] - 0.25}`,
						rotation: `0 ${RadtoDeg(-d)} 0`,
						Parent: nodeScene,
					});
					
					ObjManager.drawObject("box",{
						id: `Path2_${this.Stage.Map.Nodes.indexOf(n)}`,
						opacity: "1",
						position: `${avgPos[0]} ${avgPos[1]-1.35} ${avgPos[2]}`,
						color: "#660",
						scale: `${avgSize[0] + this.Stage.Map.PathWidth + 0.5} ${avgSize[1]} ${avgSize[2] + 0.25}`,
						rotation: `0 ${RadtoDeg(-d)} 0`,
						Parent: nodeScene,
					});
				} else if (this.Stage.Map.Name == "Mushroom Mania"){
					ObjManager.drawObject("box",{
						id: `Path_${this.Stage.Map.Nodes.indexOf(n)}`,
						opacity: "1",
						position: `${avgPos[0]} ${avgPos[1]-1.25} ${avgPos[2]}`,
						color: "#905",
						scale: `${avgSize[0] + this.Stage.Map.PathWidth} ${avgSize[1]} ${avgSize[2] - 0.25}`,
						rotation: `0 ${RadtoDeg(-d)} 0`,
						Parent: nodeScene,
					});
					
					ObjManager.drawObject("box",{
						id: `Path2_${this.Stage.Map.Nodes.indexOf(n)}`,
						opacity: "1",
						position: `${avgPos[0]} ${avgPos[1]-1.35} ${avgPos[2]}`,
						color: "#402",
						scale: `${avgSize[0] + this.Stage.Map.PathWidth + 0.5} ${avgSize[1]} ${avgSize[2] + 0.25}`,
						rotation: `0 ${RadtoDeg(-d)} 0`,
						Parent: nodeScene,
					});
				} else if (this.Stage.Map.Name == "Volcanic Showdown") {
					ObjManager.drawObject("box",{
						id: `Path_${this.Stage.Map.Nodes.indexOf(n)}`,
						opacity: "1",
						position: `${avgPos[0]} ${avgPos[1]-1.25} ${avgPos[2]}`,
						color: "#f00",
						scale: `${avgSize[0] + this.Stage.Map.PathWidth} ${avgSize[1]} ${avgSize[2] - 0.25}`,
						rotation: `0 ${RadtoDeg(-d)} 0`,
						Parent: nodeScene,
					});
					
					ObjManager.drawObject("box",{
						id: `Path2_${this.Stage.Map.Nodes.indexOf(n)}`,
						opacity: "0.5",
						position: `${avgPos[0]} ${avgPos[1]-1.35} ${avgPos[2]}`,
						color: "#fff",
						scale: `${avgSize[0] + this.Stage.Map.PathWidth + 0.5} ${avgSize[1]} ${avgSize[2] + 0.25}`,
						rotation: `0 ${RadtoDeg(-d)} 0`,
						Parent: nodeScene,
					});
				} else {
					ObjManager.drawObject("box",{
						id: `Path_${this.Stage.Map.Nodes.indexOf(n)}`,
						opacity: "1",
						position: `${avgPos[0]} ${avgPos[1]-1.25} ${avgPos[2]}`,
						color: "#0a0",
						scale: `${avgSize[0] + this.Stage.Map.PathWidth} ${avgSize[1]} ${avgSize[2]}`,
						rotation: `0 ${RadtoDeg(-d)} 0`,
						Parent: nodeScene,
					});
				}
		
				
				
				game.nodes.push([{x:avgPos[0], y:avgPos[1], z:avgPos[2]}, {x:avgSize[0], y:avgSize[1], z:avgSize[2]}, RadtoDeg(-d)]);
				
				//let d = getAngle(this.position, this.nextPos);
				//let yy = (this.nextPos.y - this.position.y)/distance2D(this.position, this.nextPos);
				
				//this.direction = [d[0], yy, d[1]];
			}	
			
		})
	}
	getAngleBetweenObjects(startO, endO){
		return getDegreeAngle(startO, endO);
	}
	processClick(e){
		//console.log(e);
		
		
		
		
		if (e.target.nodeName != "A-CURSOR" && this.confirmPlace && this.canPlace && this.cash - Towers.DataStorage[this.shop.selectedTower][0].TowerStats.Cost >= 0){
			//console.log(e);
			game.confirmPlace = false;
			let tt = Towers.DataStorage[this.shop.selectedTower][0]
			this.cash -= tt.TowerStats.Cost;
			
			try{
				this.shop.placeObject.remove();
			} catch (er){
				
			}
			this.shop.placeObject = null;
			this.shop.rangeObject = null;
			this.canPlace = false;
			
			let T = new Tower(tt, e.detail.intersection.point);
			this.shop.selectedTower = null;
			/*this.obj = document.createElement("a-cone");
			let j = e.detail.intersection.point;
			let x = j.x;
			let y = j.y; 
			let z = j.z;
			
			this.obj.setAttribute("ray","");
			
			this.obj.onclick = () => {
				console.log(distance2D(this.obj.components.position, plr.obj.components.position));
			}
			
			this.obj.setAttribute("position", {x:x, y:y, z:z});
			scene.append(this.obj);*/
		} else if (e.target.nodeName != "A-CURSOR" && this.fire){
			let angle = game.getAngleBetweenObjects(plr.obj.components.position.data, e.detail.intersection.point);
			//console.log(angle);
			let P = new Enemy({
				position: plr.getPosition(),
				health: 10,
				velocity: 5,
			}, plr.getPosition());
		}
		
		
		//console.log(e.target.getAttribute("id") == "upgrade");
		
		if (e.target.getAttribute("tower") == null){
			if (e.target.getAttribute("id") != "upgrade"){
				game.SelectedTower = null;
				console.log("nullified");
			}
		}
	}
	upgradeItemUpdate(){
		if (game.upgradeItem && game.SelectedTower){
			try{
				let selectedT = game.SelectedTower;
				document.querySelector("#towerName").setAttribute("value", selectedT.name); //towerTargetLeft
				document.querySelector("#towerTargeting").setAttribute("value", selectedT.Targeting);
				document.querySelector("#towerTargetLeft").setAttribute("value", `(${selectedT.SwitchTarget(-1,true)}) < `);
				document.querySelector("#towerTargetRight").setAttribute("value", ` > (${selectedT.SwitchTarget(1,true)})`);
				
				let dps = Math.floor((10 * selectedT.AttackSettings.damage) / (1/50 * selectedT.AttackSettings.cooldown))/10;
				
				let Bs = "";
				
				for (var n in selectedT.projectile.HitTypes){
					let r = selectedT.projectile.HitTypes[n];
					
					if (r == true){
						Bs += n + ", ";
					};
				};
				
				if (Bs != ""){
					Bs = Bs.slice(0,-2);
				} else {
					Bs = "None"
				};
				
				
				
				document.querySelector("#towerStatsHit").setAttribute("value", `Hits: ${Bs}`);
				document.querySelector("#towerStats").setAttribute("value", `${selectedT.AttackSettings.damage} Damage/${selectedT.AttackSettings.cooldown/50}s Fire rate/${dps} DPS`);
				
				if (Towers.DataStorage[selectedT.name].length > selectedT.Statistics.upgrade+1){
					document.querySelector("#towerUpgrade").setAttribute("value", `UPGRADE - $${formatCash(Towers.DataStorage[selectedT.name][selectedT.Statistics.upgrade+1].TowerStats.Cost)}`);
				} else {
					document.querySelector("#towerUpgrade").setAttribute("value", `MAX LEVEL`);
				}
				
				let BuildStr = "{";
				
				for (let i = 0; i < Towers.DataStorage[selectedT.name].length-1; i ++){
					if (i+1 > selectedT.Statistics.upgrade){
						BuildStr += " [] ";
					} else {
						BuildStr += " X ";
					}
				}
				BuildStr += "}";
				
				document.querySelector("#towerUpgradesText").setAttribute("value", BuildStr);
				
				document.querySelector("#towerSellButton").setAttribute("value", `Sell - $${formatCash(selectedT.Statistics.value)}`);
				document.querySelector("#towerDamage").setAttribute("value", selectedT.Statistics.damageCount);

				if (Towers.DataStorage[selectedT.name][selectedT.Statistics.upgrade+1].UpgradeDescription){
					document.querySelector("#towerUpgradeDesc").setAttribute("value", Towers.DataStorage[selectedT.name][selectedT.Statistics.upgrade+1].UpgradeDescription);
				} else {
					document.querySelector("#towerUpgradeDesc").setAttribute("value", "NO DESCRIPTION");
				}
				
				
			} catch (e){
				console.log(e);
			}
		}
	}
	processClickPointer(e){	
		//console.log(e);
		//console.log(game.SelectedTower);
		
		try{
			let N = document.querySelector("#range");
			
			if (N){
				N.parentNode.removeChild(N);
				game.DisplayRange = false;				
			}
		} catch (error){
			
		}
		
		game.towers.forEach((t) => {
			t.showRange = false;
		});
		
		if (game.SelectedTower){
			game.SelectedTower.showRange = true;
			game.SelectedTower.displayRange();
			if (game.upgradeItem && this.shop.selectedTower == null){
				game.upgradeItem.setAttribute("visible", true);
			} else if (game.upgradeItem && !this.shop.selectedTower == null){
				game.upgradeItem.setAttribute("visible", false);
			}
			
		} else {
			if (game.upgradeItem){
				game.upgradeItem.setAttribute("visible", false);
			}
			
		}
		
		
	}
	saveRound(){
		this.clearAll();
		this.gamemode.Paused = false;
		
	}
	processKeyDown(e){
		if (e.keyCode == 32){
			//if (game.gamemode.Playing && !game.dead){
			//	if (tickSpeed > 10){
			//		tickSpeed = 10
			//	} else{
			//		tickSpeed = 20
			//	}
			//}
		} else if(e.keyCode == 49){
			game.shop.selectedTower = "Soldier";
		} else if(e.keyCode == 50){
			game.shop.selectedTower = "Bomber";
		} else if(e.keyCode == 51){
			game.shop.selectedTower = "Freezer";
		} else if(e.keyCode == 52){
			game.shop.selectedTower = "Shocker";
		} else if(e.keyCode == 53){
			game.shop.selectedTower = "Minigunner";
		} else if(e.keyCode == 54){
			game.shop.selectedTower = "Flamethrower";
		} else if(e.keyCode == 55){
			game.shop.selectedTower = "Cannoner";
		} else if (e.keyCode == 69){
			this.confirmPlace = true;
			
		} else if (e.keyCode == 74){
			this.fire = true;
		} else if (e.keyCode == 77){
			if (game.gamemode.Playing){
				document.querySelector("#pausefade").setAttribute("visible", !game.gamemode.Paused);
				game.gamemode.Paused = !game.gamemode.Paused;
			}
		} else if (e.keyCode == 66){
			if (game.gamemode.Playing && game.gamemode.Paused){
				game.gamemode.Playing = false;
				document.querySelector("#cameraFade").setAttribute("visible",true);
				document.querySelector("#environment").setAttribute("active", "false");
				//document.querySelector("#cameraFade").setAttribute("position", "0 0 0");
				game.state="Menu";game.saveRound();
				setTimeout(()=>{canClickPlay = true;},500);
				document.querySelector("#cameraFade").emit("animate");
				document.querySelector("#menu").setAttribute("position", "0 0 0");
				document.querySelector("#cursor").innerHTML = ``;
				//document.querySelector("#gameboard").innerHTML = ``;
				
				document.querySelector("#pausefade").setAttribute("visible", false);
				document.querySelector("#cameraRig").setAttribute("position", "0 1.6 0");
				document.querySelector("#fCamera").innerHTML = ``;
				//setTimeout(()=>{initLoad=!initLoad;},400);
				setTimeout(() => {document.querySelector("#cameraFade").setAttribute("visible", false);},2500);//document.querySelector("#cameraFade").setAttribute("position", "0 155 0");}, 1500);
			} else if (game.gamemode.Playing && game.dead){
				game.gamemode.Playing = false;
				document.querySelector("#cameraFade").setAttribute("visible",true);
				document.querySelector("#environment").setAttribute("active", "false");
				//document.querySelector("#cameraFade").setAttribute("position", "0 0 0");
				game.state="Menu";game.saveRound();
				setTimeout(()=>{canClickPlay = true;},500);
				document.querySelector("#cameraFade").emit("animate");
				document.querySelector("#menu").setAttribute("position", "0 0 0");
				document.querySelector("#cursor").innerHTML = ``;
				//document.querySelector("#gameboard").innerHTML = ``;
				
				document.querySelector("#deadfade").setAttribute("visible", false);
				document.querySelector("#cameraRig").setAttribute("position", "0 1.6 0");
				document.querySelector("#fCamera").innerHTML = ``;
				//setTimeout(()=>{initLoad=!initLoad;},400);
				setTimeout(() => {document.querySelector("#cameraFade").setAttribute("visible", false);},2500);//document.querySelector("#cameraFade").setAttribute("position", "0 155 0");}, 1500);
			} else if (game.gamemode.Playing && game.won){
				game.gamemode.Playing = false;
				document.querySelector("#cameraFade").setAttribute("visible",true);
				document.querySelector("#environment").setAttribute("active", "false");
				//document.querySelector("#cameraFade").setAttribute("position", "0 0 0");
				game.state="Menu";game.saveRound();
				setTimeout(()=>{canClickPlay = true;},500);
				document.querySelector("#cameraFade").emit("animate");
				document.querySelector("#menu").setAttribute("position", "0 0 0");
				document.querySelector("#cursor").innerHTML = ``;
				//document.querySelector("#gameboard").innerHTML = ``;
				
				document.querySelector("#winfade").setAttribute("visible", false);
				document.querySelector("#cameraRig").setAttribute("position", "0 1.6 0");
				document.querySelector("#fCamera").innerHTML = ``;
				//setTimeout(()=>{initLoad=!initLoad;},400);
				setTimeout(() => {document.querySelector("#cameraFade").setAttribute("visible", false);},2500);//document.querySelector("#cameraFade").setAttribute("position", "0 155 0");}, 1500);
			}
		} else if (e.keyCode == 82){
			if (game.gamemode.Playing && game.gamemode.Paused){
				game.upgradeItem.setAttribute("visible", false);
				document.querySelector("#pausefade").setAttribute("visible", false);
				game.LoadMap(game.chosenDiff, game.chosenMap);
			} else if (game.gamemode.Playing && game.dead){
				game.upgradeItem.setAttribute("visible", false);
				document.querySelector("#deadfade").setAttribute("visible", false);
				game.LoadMap(game.chosenDiff, game.chosenMap);
			} else if (game.gamemode.Playing && game.won){
				game.upgradeItem.setAttribute("visible", false);
				document.querySelector("#winfade").setAttribute("visible", false);
				game.LoadMap(game.chosenDiff, game.chosenMap);
			}
		}
		
		if (game.SelectedTower){
			if (e.keyCode == 85){
				//u
				game.SelectedTower.Upgrade();
			} else if (e.keyCode == 75){
				game.SelectedTower.SwitchTarget(-1);
			} else if (e.keyCode == 76){
				game.SelectedTower.SwitchTarget(1);
			} else if (e.keyCode == 8){
				game.SelectedTower.Sell();
				game.SelectedTower = null;
			}
		}
	}
	processKeyUp(e){
		if (e.keyCode == 69){
			this.confirmPlace = false;
		} else if (e.keyCode == 74){
			this.fire = false;
		}
	}
	getFont(n, n1){
		return `https://raw.githubusercontent.com/etiennepinchon/aframe-fonts/master/fonts/${n}/${n1}.json`;
	}
}

let canClickPlay = true;

window.onload = function(){
	if (loaded == false){
		loaded = true;
		scene = document.querySelector("a-scene");
		cRel = document.querySelector("#cameraRelative");
		cam = document.querySelector('a-camera');
		
		towerScene = document.querySelector("#towers");
		enemyScene = document.querySelector("#enemies");
		projScene = document.querySelector("#projectiles");
		gBoard = document.querySelector("#gameboard");
		nodeScene = document.querySelector("#nodes");
		snowflakeHold = document.querySelector("#snowflakeHold");
		
		
		ObjManager = new ObjectCreator();
		Utl = new Util();
		plr = new Player();
		//Difficulty = new DifficultyStorage();
		
		ObjManager.loadGUI();
		Ui = document.querySelector("#UI");
		
		document.querySelector("#playButton").addEventListener("click", () => {
			if (canClickPlay){
				canClickPlay = false;
				initLoad = false;
				
				game.clearAll();
				document.querySelector("#cameraFade").setAttribute("visible",true);
				//document.querySelector("#cameraFade").setAttribute("position", "0 0 0");
				setTimeout(()=>{canClickPlay = true;},500);
				document.querySelector("#cameraFade").emit("animate");
				setTimeout(()=>{game.state="Playing";game.LoadMap(game.chosenDiff, game.chosenMap);},400);
				setTimeout(() => {document.querySelector("#cameraFade").setAttribute("visible", false);},2500);//document.querySelector("#cameraFade").setAttribute("position", "0 155 0");}, 1500);
			}
		})
	
		
		game = new Game();
		
		document.querySelector("#diffButton").addEventListener("click", () => {
			if (game.difficulty == "easy"){
				game.difficulty = "normal";
				game.chosenDiff = "Normal";
				//A = Difficulty.Normal;
				game.Stage.Difficulty = Difficulty.Normal;
				document.querySelector("#diffButton").setAttribute("text", "value:Normal; width: 10; height: 10;align: center;zOffset:5.5");
				
			} else if (game.difficulty == "normal"){
				game.difficulty = "hard";
				game.chosenDiff = "Hard";
				//A = Difficulty.Hard;
				game.Stage.Difficulty = Difficulty.Hard;
				document.querySelector("#diffButton").setAttribute("text", "value:Hard; width: 10; height: 10;align: center;zOffset:5.5");
			} else if (game.difficulty == "hard"){
				game.difficulty = "easy";
				game.chosenDiff = "Easy";
				//A = Difficulty.Easy;
				game.Stage.Difficulty = Difficulty.Easy;
				document.querySelector("#diffButton").setAttribute("text", "value:Easy; width: 10; height: 10;align: center;zOffset:5.5");
			}

			let A = Difficulty[game.chosenDiff];
			
			document.querySelector("#diffTextMenu").setAttribute("value", `${A.StartingHealth} Lives\n${A.StartingCash} Starting Cash\n${Difficulty[game.chosenDiff].Rounds} Rounds`);
		});
		
		document.querySelector("#mapButton").addEventListener("click", () => {
			if (game.chosenMap == "Forest Flats"){
				game.chosenMap = "Mushroom Mania";
				//A = Difficulty.Normal;
				game.Stage.Stage = Stages[1];
				document.querySelector("#mapButton").setAttribute("text", "value:Mushroom Mania; width: 3; height: 10;align: center;zOffset:5.5");
				document.querySelector("#mapTextMenu").setAttribute("value", `Difficulty: 2/3`);
			} else if (game.chosenMap == "Mushroom Mania"){
				game.difficulty = "hard";
				game.chosenMap = "Volcanic Showdown";
				//A = Difficulty.Hard;
				game.Stage.Stage = Stages[2];
				
				document.querySelector("#mapButton").setAttribute("text", "value:Volcanic Showdown; width: 3; height: 10;align: center;zOffset:5.5");
				document.querySelector("#mapTextMenu").setAttribute("value", `Difficulty: 3/3`);
			} else if (game.chosenMap == "Volcanic Showdown"){
				game.chosenMap = "Forest Flats";
				//A = Difficulty.Easy;
				game.Stage.Stage = Stages[0];
				document.querySelector("#mapButton").setAttribute("text", "value:Forest Flats; width: 3; height: 10;align: center;zOffset:5.5");
				document.querySelector("#mapTextMenu").setAttribute("value", `Difficulty: 1/3`);
			}
		});
		
		//game.LoadMap("Easy", "Forest Flats");
		
		loop();
	}
}

let initLoad = false;

function runPlaying(){
	if (!initLoad){
		initLoad = true;
		
		DelayStorage = [];
		game.gamemode.Round = 0;
		
		
		
		game.gamemode.Roundtick = -7 * tickConvert;
		document.querySelector("#menu").setAttribute("position", "0 1000 0");
		document.querySelector("#cursor").innerHTML += `<a-entity geometry="primitive: box" material="color: #aaa;shader: flat;" scale="2 0.125 0.02" opacity="0.5" id="HUD" color="#fff" position="0 0.7 -0.05" rotation="5 0 0">
					<a-text id="tLives" value="Lives: 100" width=1.5 side="double" position="-0.45 0.15 0.7" scale="0.5 8 50" ></a-text>
					<a-text id="tRound" value="Round: 100" width=1.5 side="double" position="-0.25 0.15 0.7" scale="0.5 8 50" ></a-text>
					<a-text id="tCash" value="Cash: 100" width=1.5 side="double" position="-0.05 0.15 0.7" scale="0.5 8 50" ></a-text>
					<a-text id="tTime" value="Lives: 100" width=1.5 side="double" position="0.3 0.15 0.7" scale="0.5 8 50" ></a-text>
				</a-entity>`;
				
		var BuildStr = "";
		var iter = -1;
		
		for (var tName in Towers.DataStorage){
			let T = Towers.DataStorage[tName];
			iter += 1;
			BuildStr += `<a-box position='${-0.435 + iter*0.16} 0 0.15' material="color: #888;shader:flat;" scale="0.1 0.8 1.05" onclick="updateSelection(${tName})">
				<a-text anchor="left" width="8" scale="1.25 1.25 1.25" side="double" position="-0.5 -0.9 0.4" value="$${T[0].TowerStats.Cost}"></a-text>
				<a-text anchor="left" width="6" scale="1.25 1.25 1.25" side="double" position="-0.65 0.9 0.4" value="${tName}"></a-text>
				<a-text anchor="left" width="6" scale="1.25 1.25 1.25" side="double" position="-0.1 1.25 0.4" value="[${iter+1}]"></a-text>
			</a-box>`
		};
		
		var Bstr2 = "";
		//1.5 1.75
		Bstr2 = `
			<a-text id="towerName" anchor="center" width="2" scale="1 1 1" side="double" position="0.5 0.45 0.2" value="TowerName"></a-text>
			<a-box id="towerUpgrades" scale="0.6 0.1 0.1" position="0 0.325 0"></a-box>
			<a-text id="towerStats" color="#00a" anchor="left" width="1.2" scale="1 1 1" side="double" position="-0.4 0.26 0.21" value="10 Damage/0.5s Firerate/20 DPS"></a-text>
			<a-text id="towerStatsHit" color="#00a" anchor="left" width="1.2" scale="1 1 1" side="double" position="-0.4 0.18 0.21" value="Hits: Physical"></a-text>
			<a-text id="towerUpgradesText" anchor="left" width="1.2" scale="1.5 1 1" side="double" position="-0.25 0.325 0.21" value="{ [] [] [] }"></a-text>
			
			<a-text id="towerDamage" anchor="left" width="2" scale="1 1 1" side="double" position="0.1 0.45 0.2" value="422,200" color="#966"></a-text>
			<a-text id="towerTargeting" anchor="left" width="2" scale="1 1 1" side="double" position="-0.1 0.1 0.2" value="FIRST" color="#060"></a-text>
			<a-text id="towerTargetLeft" anchor="left" width="1.35" scale="1 1 1" side="double" position="-0.45 0.1 0.2" value="(far) <" color="#060"></a-text>
			<a-text id="towerTargetRight" anchor="left" width="1.35" scale="1 1 1" side="double" position="0.15 0.1 0.2" value="> (far)" color="#060"></a-text>
			
			<a-text anchor="left" width="1" scale="1 1 1" side="double" position="-0.4 0.04 0.2" value="[K]" color="#595"></a-text>
			<a-text anchor="left" width="1" scale="1 1 1" side="double" position="0.25 0.04 0.2" value="[L]" color="#595"></a-text>
			
			<a-text id="towerUpgradeDesc" anchor="center" width="1" scale="1 1 1" side="double" position="0.05 -0.1 0.2" value="UPGRADE DESCRIPTION\nGGGGGGGGG" color="#000"></a-text>
			<a-text id="towerUpgrade" anchor="center" width="1.5" scale="1 1 1" side="double" position="0.4 -0.3 0.2" value="UPGRADE - ($500)" color="#fff"></a-text>
			<a-text anchor="center" width="1" scale="1 1 1" side="double" position="0.45 -0.35 0.2" value="[U]" color="#fff"></a-text>
			
			<a-text id="towerSellButton" anchor="center" width="1.5" scale="1 1 1" side="double" position="0.5 -0.425 0.2" value="SELL ($580)" color="#000"></a-text>
			<a-text anchor="center" width="1" scale="1 1 1" side="double" position="0.3 -0.475 0.2" value="[BACKSPACE]" color="#000"></a-text>
		`;
				
		document.querySelector("#fCamera").innerHTML += `
				<a-entity follow-camera geometry="primitive: box" material="color: #aaa;shader: flat;" scale="2 0.25 0.02" id="shop" color="#fff" ogPos="0 -1 -1" rotation="-10 0 0">
					${BuildStr}
				</a-entity>`
				
		document.querySelector("#fCamera").innerHTML += `
		<a-entity visible="false" upgrader follow-camera geometry="primitive: box" material="color: #fff;shader: flat;opacity: 0.5" scale="1.5 1.75 0.02" id="upgrade" color="#fff" ogPos="-0.85 -0.25 -2" rotation="0 5 0" opacity="0.5">
			${Bstr2}
		</a-entity>
		`;
		
		game.upgradeItem = document.querySelector("#upgrade");
		
		game.upgradeItem.addEventListener("click", () => {
			game.SelectedTower = game.SelectedTower;
		});
	}
	
		if (game.lives <= 0 && game.gamemode.Playing && !game.won) {
			console.log("hello");
			document.querySelector("#deadfade").setAttribute("visible", true);
			game.dead = true;
		}
		
		if (game.gamemode.Round > game.Stage.Difficulty.Rounds && game.gamemode.Playing) {
			console.log("hello");
			document.querySelector("#winFade").setAttribute("visible", true);
			game.won = true;
		}
	
		if (!game.gamemode.Paused && !game.dead && !game.won){
			DelayStorage.forEach((d) => {
				d.check();
			});
			
			game.towers.forEach((t) => {
				t.Update();
			});
			
			game.projectiles.forEach((p) => {
				p.Update();
				
				if (p.active == false && p.deadtick > 5){
					game.projectiles.splice(game.projectiles.indexOf(p), 1);
				}
			});
			
			game.enemies.forEach((e) => {
				e.Update();
			});
		}
		

		
		if (game.confirmPlace && !game.gamemode.Paused && !game.dead && !game.won){
			game.towerPlace();
			//console.log("PLACED");
		}
		
		if (!game.gamemode.Playing){
			game.gamemode.Playing = true;
			
		} else if (game.gamemode.Playing && !game.dead && !game.won){
			
			if (game.gamemode.Paused){
				
			} else {				
				game.cash = Math.floor(10 * game.cash)/10;
				game.upgradeItemUpdate();
				
				if (!game.gamemode.RoundPlay){
					game.gamemode.RoundPlay = true;
					game.cash += Math.round( 10* (100 + 150 * game.gamemode.Round^1.1 + 200 * Math.pow(game.gamemode.Round/3,0.8)))/10;
					game.gamemode.Round += 1;
					game.lives = Math.round(game.lives);
					
					while (enemyScene.firstChild){
						enemyScene.removeChild(enemyScene.lastChild);
					}
					
					while (projScene.firstChild){
						projScene.removeChild(projScene.lastChild);
					}
					
					game.enemies = [];
					game.projectiles = [];
					
					
						
					game.gamemode.Roundtick = -3 * tickConvert;
					new Delay(() => {Difficulty.Waves[game.gamemode.Round-1]();}, 0);
				} else {
					game.gamemode.Roundtick += 1;
					
					if (game.finishedRound && game.enemies.length == 0){
						game.gamemode.RoundPlay = false;
						game.finishedRound = false;
					}
				}
				
			}
		}
}

let snowflakes = [];
let snowflaketick = 0;
let snowflakeHold;

function runMenu(){
	if (initLoad){
		console.log("HASHFDHDFHDFH");
		initLoad = false;
		game.clearAll();
		snowflakes = [];
		snowflaketick = 0;
		
		document.querySelector("a-cursor").innerHTML = "";
		document.querySelector("#menu").setAttribute("position", "0 0 0");

		document.querySelector("#snowflakeHold").innerHTML = "";
	}
	snowflaketick+=1;
	
	//DelayStorage.forEach((d) => {
	//	d.check();
	//	console.log("hell");
	//});
	
	if (snowflaketick%2 == 0 && snowflakes.length < 100){
		let dx = Utl.random(-20, 20);
		let dy = Utl.random(15,25);
		let dz = Utl.random(-20, 20);
		
		let vx = Utl.random(-200,200)/100;
		let vz = Utl.random(-200,200)/100;
		
		let N = document.createElement("a-sphere");
		N.setAttribute("opacity", 0.5);
		N.setAttribute("scale", "0.5 0.5 0.5");
		N.setAttribute("color", "#fff");
		N.setAttribute("position", `${dx} ${dy} ${dz}`);
		N.setAttribute("tick", snowflaketick);
		N.setAttribute("velocityx", vx);
		N.setAttribute("velocityz", vz);
		
		snowflakes.push([N,dx,dy,dz]);
		snowflakeHold.append(N);
	}
	
	snowflakes.forEach((sn) => {
		let s = sn[0];
		let vx = Number(s.getAttribute("velocityx"));
		let vz = Number(s.getAttribute("velocityz"));
		let tck = Number(s.getAttribute("tick"));
		let mult = snowflaketick - tck

		s.setAttribute("position", `${sn[1] + 0.1*vx*mult} ${sn[2] - 0.1*mult} ${sn[3] + 0.1*vz*mult}`);
		
		if (mult > 200){
			s.setAttribute("tick", snowflaketick);
		}
	})
}

function loop(){
	
	
	
	if (game.state == "Playing"){
		
		runPlaying();
	} else if (game.state == "Menu"){
		
		runMenu();
	}
	
	updatePlr();
	
	//console.log(game.gamemode.Roundtick);
	
	
	
	setTimeout(loop, tickSpeed);
	
}