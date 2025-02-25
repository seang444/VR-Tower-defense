class TowerStorage{
	constructor(){
		this.DataStorage = {
			Soldier : [
				{
					Type: "Attack",
					Upgrade: 0,
					TowerStats:{
						Damage: 1,
						Cooldown: 0.25,
						Cost: 250,
						Range: 10,
						Size: {x:1,z:1},
					},
					ProjectileSettings:{
						Type: "Test",
						Speed: 35,
						Lifetime: 2,
						Damage: 1,
						Range: 15,
						
						HitTypes : {
							Physical: true,
							Metal: false,
							Magic: false,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 1,
						Color: "#aaa",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-box");
						
						
						G.setAttribute("scale", "1 1 1")
						G.setAttribute("color", "#fff");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
						} else {
							G.setAttribute("opacity","0.5");
							Obj.setAttribute("placing","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
						}
						return Obj;
					},
				},
				{
					Type: "Attack",
					Upgrade: 1,
					TowerStats:{
						Damage: 2,
						Cooldown: 0.25,
						Cost: 500,
						Range: 15,
						Size: {x:1,z:1},
					},
					ProjectileSettings:{
						Type: "Test",
						Speed: 35,
						Lifetime: 2,
						Damage: 2,
						Range: 15,
						
						HitTypes : {
							Physical: true,
							Metal: false,
							Magic: false,
							Invisible: true,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 1,
						Color: "#bbb",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-box");
						let J = document.createElement("a-box");
						
						J.setAttribute("scale", "0.25 0.25 0.25");
						J.setAttribute("color", "#000");
						J.setAttribute("position", "0 0.75 0");
						
						G.setAttribute("scale", "1 1 1")
						G.setAttribute("color", "#a0a");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
						} else {
							G.setAttribute("opacity","0.5");
							Obj.setAttribute("placing","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
						}
						return Obj;
					},
				},
				{
					Type: "Attack",
					Upgrade: 2,
					TowerStats:{
						Damage: 10,
						Cooldown: 1,
						Cost: 1250,
						Range: 20,
						Size: {x:1,z:1},
					},
					ProjectileSettings:{
						Type: "Test",
						Speed: 50,
						Lifetime: 1,
						Damage: 10,
						Range: 20,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: false,
							Invisible: true,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 10,
						Pierce: 2,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-box");
						let J = document.createElement("a-box");
						
						J.setAttribute("scale", "0.25 0.25 0.25");
						J.setAttribute("color", "#fff");
						J.setAttribute("position", "0 0.75 0");
						
						G.setAttribute("scale", "1 1 1")
						G.setAttribute("color", "#000");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
						} else {
							G.setAttribute("opacity","0.5");
							Obj.setAttribute("placing","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
						}
						return Obj;
					},
				},
				{
					Type: "Attack",
					Upgrade: 3,
					TowerStats:{
						Damage: 20,
						Cooldown: 0.8,
						Cost: 2300,
						Range: 20,
						Size: {x:1,z:1},
					},
					ProjectileSettings:{
						Type: "Test",
						Speed: 50,
						Lifetime: 1,
						Damage: 20,
						Range: 20,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 25,
						Pierce: 5,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-box");
						let J = document.createElement("a-box");
						let K = document.createElement("a-cone");
						
						K.setAttribute("position", "0 1 0");
						K.setAttribute("color", "#b7a");
						K.setAttribute("scale", "0.5 0.5 0.5");
						
						J.setAttribute("scale", "0.25 0.25 0.25");
						J.setAttribute("color", "#700");
						J.setAttribute("position", "0 0.75 0");
						
						G.setAttribute("scale", "1 1.25 1")
						G.setAttribute("color", "#aaa");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray","");
							K.setAttribute("ray","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
							Obj.append(K);
						} else {
							G.setAttribute("opacity","0.5");
							Obj.setAttribute("placing","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
							Obj.append(K);
						}
						return Obj;
					},
				},
			],
			Bomber : [
				{
					Type: "Attack",
					Upgrade: 0,
					TowerStats:{
						Damage: 5,
						Cooldown: 2,
						Cost: 800,
						Range: 20,
						Size: {x:1,z:1},
					},
					ProjectileSettings:{
						Type: "Test2",
						Speed: 25,
						Lifetime: 2,
						Damage: 5,
						Range: 20,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: {
							Range: 3,
							Burn: false,
							OnExplode: false,
						},
						
						ArmorPierce: 25,
						Pierce: 1,
						Color: "#b22",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-dodecahedron");
						
						
						G.setAttribute("scale", "1 2 1");
						G.setAttribute("color", "#fb0");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
						} else {
							G.setAttribute("opacity","0.5");
							Obj.setAttribute("placing","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
						}
						return Obj;
					},
				},
				{
					Type: "Attack",
					Upgrade: 1,
					TowerStats:{
						Damage: 10,
						Cooldown: 1.75,
						Cost: 2000,
						Range: 20,
						Size: {x:1,z:1},
					},
					ProjectileSettings:{
						Type: "Test2",
						Speed: 25,
						Lifetime: 2,
						Damage: 10,
						Range: 20,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: {
							Range: 5,
							Burn: false,
							OnExplode: false,
						},
						
						ArmorPierce: 25,
						Pierce: 1,
						Color: "#b55",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-dodecahedron");
						let J = document.createElement("a-cone");
						
						J.setAttribute("position", "0 -0.5 0");
						J.setAttribute("color", "#222");
						
						G.setAttribute("scale", "1 1.75 1");
						G.setAttribute("color", "#fff");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
						} else {
							G.setAttribute("opacity","0.5");
							Obj.setAttribute("placing","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
						}
						return Obj;
					},
				},
			],
			Freezer : [
				{
					Type: "Attack",
					Upgrade: 0,
					TowerStats:{
						Damage: 1,
						Cooldown: 1,
						Cost: 800,
						Range: 32,
						Size: {x:1,z:1},
					},
					ProjectileSettings:{
						Type: "Test2",
						Speed: 25,
						Lifetime: 5,
						Damage: 1,
						Range: 25,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: false,
							Invisible: false,
						},
						HitEffects: (Enemy)=>{
							if (Enemy.StatusEffects.indexOf("Freezing") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Freezing") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Freezing");
									Enemy.Speed *= 0.9;
								
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.Speed /= 0.9;
										}
									}, cT+500);
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Freezing"),1);
									}, cT+2500);
								}
							}
						},
						HitFXName:"Freeze",
						HitFXDescription:"Slows enemy down by 20% for 1 second, cooldown 2.5 seconds",
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 2,
						Color: "#b22",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						
						
						G.setAttribute("scale", "1 1.5 1");
						G.setAttribute("color", "#99f");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
						} else {
							G.setAttribute("opacity","0.5");
							Obj.setAttribute("placing","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
						}
						return Obj;
					},
				},
				
			]
		}
	}
	LoadMap(){
	
	}
}