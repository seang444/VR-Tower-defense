class TowerStorage{
	constructor(){
		this.DataStorage = {
			Soldier : [
				{
					Type: "Attack",
					Upgrade: 0,
					TowerStats:{
						Damage: 5,
						Cooldown: 1,
						Cost: 250,
						Range: 10,
						Size: {x:1,z:1},
					},
					ProjectileSettings:{
						Type: "Test",
						Speed: 45,
						Lifetime: 2,
						Damage: 5,
						Range: 15,
						
						HitTypes : {
							Physical: true,
							Metal: true,
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
						Damage: 6,
						Cooldown: 0.75,
						Cost: 500,
						Range: 15,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"5 > 6 Damage\n10 > 15 Range\n1s > 0.75s Fire Rate\nFaster Bullets\n*Invisible Detection*",
					ProjectileSettings:{
						Type: "Test",
						Speed: 45,
						Lifetime: 2,
						Damage: 6,
						Range: 15,
						
						HitTypes : {
							Physical: true,
							Metal: true,
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
						Cooldown: 0.75,
						Cost: 2000,
						Range: 20,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"6 > 10 Damage\n1 > 2 Pierce\n+10% Armor Pierce\n15 > 20 Range\nEven Faster Bullets\n*Magic Detection*",
					ProjectileSettings:{
						Type: "Test",
						Speed: 60,
						Lifetime: 1,
						Damage: 10,
						Range: 20,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
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
						Cooldown: 0.7,
						Cost: 6000,
						Range: 20,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"10 > 20 Damage\n2 > 5 Pierce\n10% > 25% Armor Pierce\n0.75s > 0.7s Fire rate\n*Magic Detection*",
					ProjectileSettings:{
						Type: "Test",
						Speed: 60,
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
				{
					Type: "Attack",
					Upgrade: 4,
					TowerStats:{
						Damage: 40,
						Cooldown: 0.7,
						Cost: 11000,
						Range: 20,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"20 > 40 Damage\n25% > 35% Armor Pierce\nShell Shocked Passive (Stun for 0.5s cooldown 5s)",
					ProjectileSettings:{
						Type: "Test",
						Speed: 60,
						Lifetime: 1,
						Damage: 40,
						Range: 20,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: (Enemy) => {
							if (Enemy.StatusEffects.indexOf("ShellShock") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("ShellShock") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("ShellShock");
									Enemy.Speed *= 0.05;
								
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.Speed /= 0.05;
										}
									}, cT+500);
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("ShellShock"),1);
									}, cT+5000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 35,
						Pierce: 5,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-box");
						let J = document.createElement("a-box");
						let K = document.createElement("a-cone");
						
						K.setAttribute("position", "0 1 0");
						K.setAttribute("color", "#fff");
						K.setAttribute("scale", "0.5 0.5 0.5");
						
						J.setAttribute("scale", "0.25 1 0.25");
						J.setAttribute("color", "#000");
						J.setAttribute("position", "0 0.75 0");
						
						G.setAttribute("scale", "1 1.25 1")
						G.setAttribute("color", "#f00");
						
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
				{
					Type: "Attack",
					Upgrade: 5,
					TowerStats:{
						Damage: 50,
						Cooldown: 0.4,
						Cost: 25000,
						Range: 20,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"40 > 50 Damage\n0.7s > 0.4s Fire Rate\n35% > 50% Armor Pierce\nShell Shocked Passive (Stun for 1s cooldown 4s)",
					ProjectileSettings:{
						Type: "Test",
						Speed: 60,
						Lifetime: 3,
						Damage: 50,
						Range: 20,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: (Enemy) => {
							if (Enemy.StatusEffects.indexOf("ShellShock") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("ShellShock") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("ShellShock");
									Enemy.Speed *= 0.05;
								
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.Speed /= 0.05;
										}
									}, cT+1000);
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("ShellShock"),1);
									}, cT+4000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 50,
						Pierce: 5,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-box");
						let J = document.createElement("a-box");
						let K = document.createElement("a-cone");
						
						K.setAttribute("position", "0 1.2 0");
						K.setAttribute("color", "#000");
						K.setAttribute("scale", "0.7 0.5 0.7");
						
						J.setAttribute("scale", "0.3 1.2 0.3");
						J.setAttribute("color", "#000");
						J.setAttribute("position", "0 0.75 0");
						
						G.setAttribute("scale", "1 1.25 1")
						G.setAttribute("color", "#fff");
						
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
						Cost: 700,
						Range: 20,
						Size: {x:1,z:1},
					},
					ProjectileSettings:{
						Type: "Bomb",
						Speed: 35,
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
							Range: 2,
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
						Damage: 7,
						Cooldown: 1.75,
						Cost: 800,
						Range: 20,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"5 > 7 Damage\n2 > 4 Explosion Range\n2s > 1.75s Fire rate\nFaster Bullets",
					ProjectileSettings:{
						Type: "Bomb",
						Speed: 45,
						Lifetime: 2,
						Damage: 7,
						Range: 20,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: {
							Range: 4,
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
				{
					Type: "Attack",
					Upgrade: 2,
					TowerStats:{
						Damage: 12,
						Cooldown: 1.75,
						Cost: 3500,
						Range: 20,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"7 > 12 Damage\n4 > 5 Explosion Range\n25% > 50% Armor Pierce\n*Invisible Detection*\nFractured Passive: Takes away 5% armor on hit, cooldown 5 seconds",
					ProjectileSettings:{
						Type: "Bomb",
						Speed: 45,
						Lifetime: 2,
						Damage: 12,
						Range: 20,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: (Enemy) => {
							if (Enemy.StatusEffects.indexOf("Fractured") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Fractured") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Fractured");
									Enemy.Armor = clamp(Math.round(10 * (Enemy.Armor*0.95))/10,0,1000);						
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Fractured"),1);
									}, cT+5000);
								}
							}
						},
						Explosive: {
							Range: 5,
							Burn: false,
							OnExplode: false,
						},
						
						ArmorPierce: 50,
						Pierce: 1,
						Color: "#f55",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-dodecahedron");
						let J = document.createElement("a-cone");
						
						J.setAttribute("position", "0 -0.5 0");
						J.setAttribute("color", "#fff");
						
						G.setAttribute("scale", "1 1.75 1");
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
						Damage: 30,
						Cooldown: 2.5,
						Cost: 9575,
						Range: 30,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"12 > 30 Damage\n5 > 6 Explosion Range\n1.75s > 2.5s Fire Rate\n20 > 30 Range\nFractured Passive: Takes away 10% armor on hit, cooldown 3 seconds",
					ProjectileSettings:{
						Type: "Bomb",
						Speed: 45,
						Lifetime: 2,
						Damage: 30,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: (Enemy) => {
							if (Enemy.StatusEffects.indexOf("Fractured") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Fractured") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Fractured");
									Enemy.Armor = clamp(Math.round(10 * (Enemy.Armor*0.9))/10,0,1000);						
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Fractured"),1);
									}, cT+3000);
								}
							}
						},
						Explosive: {
							Range: 6,
							Burn: false,
							OnExplode: false,
						},
						
						ArmorPierce: 50,
						Pierce: 1,
						Color: "#f00",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-dodecahedron");
						let J = document.createElement("a-cone");
						
						J.setAttribute("position", "0 0.5 0");
						J.setAttribute("color", "#a00");
						
						G.setAttribute("scale", "1 2 1");
						G.setAttribute("color", "#f00");
						
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
					Upgrade: 4,
					TowerStats:{
						Damage: 120,
						Cooldown: 2,
						Cost: 32500,
						Range: 30,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"30 > 120 Damage\n50% > 75% Armor Pierce\n2.5s > 2s Fire Rate\nFractured Passive: Takes away 15% armor on hit, cooldown 3 seconds",
					ProjectileSettings:{
						Type: "Bomb",
						Speed: 45,
						Lifetime: 2,
						Damage: 120,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: (Enemy) => {
							if (Enemy.StatusEffects.indexOf("Fractured") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Fractured") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Fractured");
									Enemy.Armor = clamp(Math.round(10 * (Enemy.Armor*0.85))/10,0,1000);						
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Fractured"),1);
									}, cT+3000);
								}
							}
						},
						Explosive: {
							Range: 6,
							Burn: false,
							OnExplode: false,
						},
						
						ArmorPierce: 75,
						Pierce: 1,
						Color: "#f00",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-dodecahedron");
						let J = document.createElement("a-cone");
						
						J.setAttribute("position", "0 0.5 0");
						J.setAttribute("color", "#000");
						J.setAttribute("opacity", "0.5");
						
						G.setAttribute("scale", "2 2 2");
						G.setAttribute("color", "#f00");
						
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
					Upgrade: 5,
					TowerStats:{
						Damage: 200,
						Cooldown: 2,
						Cost: 50000,
						Range: 30,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"120 > 200 Damage\n75% > 100% Armor Pierce\n6 > 8 Explosion Range\nFaster Bullets\nFractured Passive: Takes away 25% armor on hit, cooldown 3 seconds",
					ProjectileSettings:{
						Type: "Bomb",
						Speed: 45,
						Lifetime: 2,
						Damage: 200,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: (Enemy) => {
							if (Enemy.StatusEffects.indexOf("Fractured") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Fractured") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Fractured");
									Enemy.Armor = clamp(Math.round(10 * (Enemy.Armor*0.75))/10,0,1000);						
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Fractured"),1);
									}, cT+3000);
								}
							}
						},
						Explosive: {
							Range: 8,
							Burn: false,
							OnExplode: false,
						},
						
						ArmorPierce: 100,
						Pierce: 1,
						Color: "#a00",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-dodecahedron");
						let J = document.createElement("a-cone");
						
						J.setAttribute("position", "0 0.5 0");
						J.setAttribute("color", "#fff");
						J.setAttribute("opacity", "0.5");
						J.setAttribute("scale", "2 1 2");
						
						G.setAttribute("scale", "2 2.5 2");
						G.setAttribute("color", "#a00");
						
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
						Type: "Freeze",
						Speed: 35,
						Lifetime: 2,
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
						Color: "#22b",
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
				{
					Type: "Attack",
					Upgrade: 1,
					TowerStats:{
						Damage: 1,
						Cooldown: 0.75,
						Cost: 400,
						Range: 32,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"1s > 0.75s Fire Rate\n2 > 3 Pierce\nFreezing Passive: Slows by 15% on hit for 0.75s, cooldown 3 seconds",
					ProjectileSettings:{
						Type: "Freeze",
						Speed: 35,
						Lifetime: 2,
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
									Enemy.Speed *= 0.85;
								
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.Speed /= 0.85;
										}
									}, cT+750);
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Freezing"),1);
									}, cT+3000);
								}
							}
						},
						HitFXName:"Freeze",
						HitFXDescription:"Slows enemy down by 20% for 1 second, cooldown 2.5 seconds",
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 3,
						Color: "#11c",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						let J = document.createElement("a-icosahedron");
						
						J.setAttribute("color", "#0af");
						J.setAttribute("position", "0 0.5 0");
						J.setAttribute("opacity", "0.9");
						
						G.setAttribute("scale", "1 1.5 1");
						G.setAttribute("color", "#99f");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
						} else {
							G.setAttribute("opacity","0.5");
							J.setAttribute("opacity", "0.5");
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
						Damage: 2,
						Cooldown: 0.65,
						Cost: 1200,
						Range: 32,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"1 > 2 Damage\n0.75s > 0.65s Fire Rate\n3 > 4 Pierce\nFreezing Passive: Slows by 20% on hit for 1s, cooldown 2.5 seconds",
					ProjectileSettings:{
						Type: "Freeze",
						Speed: 35,
						Lifetime: 2,
						Damage: 2,
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
									Enemy.Speed *= 0.8;
								
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.Speed /= 0.8;
										}
									}, cT+1000);
								
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
						Pierce: 4,
						Color: "#00e",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						let J = document.createElement("a-icosahedron");
						
						J.setAttribute("color", "#0af");
						J.setAttribute("position", "0 0.5 0");
						J.setAttribute("opacity", "0.75");
						
						G.setAttribute("scale", "1 1.5 1");
						G.setAttribute("color", "#9ff");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
						} else {
							G.setAttribute("opacity","0.5");
							J.setAttribute("opacity", "0.5");
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
						Damage: 4,
						Cooldown: 0.65,
						Cost: 4000,
						Range: 32,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"2 > 4 Damage\n4 > 5 Pierce\nFreezing Passive: Slows by 35% on hit for 1.5s, cooldown 3 seconds",
					ProjectileSettings:{
						Type: "Freeze",
						Speed: 35,
						Lifetime: 2,
						Damage: 4,
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
									Enemy.Speed *= 0.65;
								
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.Speed /= 0.65;
										}
									}, cT+1500);
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Freezing"),1);
									}, cT+3000);
								}
							}
						},
						HitFXName:"Freeze",
						HitFXDescription:"Slows enemy down by 20% for 1 second, cooldown 2.5 seconds",
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 5,
						Color: "#00f",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						let J = document.createElement("a-icosahedron");
						
						J.setAttribute("color", "#0af");
						J.setAttribute("position", "0 0.5 0");
						J.setAttribute("opacity", "0.75");
						
						G.setAttribute("scale", "1 1.5 1");
						G.setAttribute("color", "#9ff");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
						} else {
							G.setAttribute("opacity","0.5");
							J.setAttribute("opacity", "0.5");
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
					Upgrade: 4,
					TowerStats:{
						Damage: 10,
						Cooldown: 0.65,
						Cost: 16500,
						Range: 32,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"4 > 10 Damage\nFaster Bullets\n*Magic Detection*\nFreezing Passive: Slows by 50% on hit for 1.5s, cooldown 3 seconds\nPermafrost: hit enemies will be 10% slower permanently",
					ProjectileSettings:{
						Type: "Freeze",
						Speed: 50,
						Lifetime: 3,
						Damage: 10,
						Range: 32,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: false,
						},
						HitEffects: (Enemy)=>{
							if (Enemy.StatusEffects.indexOf("Freezing") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Freezing") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Freezing");
									Enemy.Speed *= 0.5;
									
									if (Enemy.ImmuneEffects.indexOf("PermaFrost") == -1){
										Enemy.StatusEffects.push("PermaFrost");
										Enemy.Speed *= 0.9;
									}
								
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.Speed /= 0.5;
										}
									}, cT+1500);
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Freezing"),1);
									}, cT+3000);
								}
							}
						},
						HitFXName:"Freeze",
						HitFXDescription:"Slows enemy down by 20% for 1 second, cooldown 2.5 seconds",
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 5,
						Color: "#aaf",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						let J = document.createElement("a-icosahedron");
						
						J.setAttribute("color", "#0af");
						J.setAttribute("position", "0 0.5 0");
						J.setAttribute("opacity", "0.5");
						
						G.setAttribute("scale", "1 1.5 1");
						G.setAttribute("color", "#00f");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
						} else {
							G.setAttribute("opacity","0.5");
							J.setAttribute("opacity", "0.5");
							Obj.setAttribute("placing","");
							
							Obj.setAttribute("position", position);
							Obj.append(G);
							Obj.append(J);
						}
						return Obj;
					},
				},
			],
			Shocker : [
				{
					Type: "Attack",
					Upgrade: 0,
					TowerStats:{
						Damage: 5,
						Cooldown: 5,
						Cost: 1400,
						Range: 25,
						Size: {x:1.5,z:1.5},
					},
					ProjectileSettings:{
						Type: "Shock",
						Speed: 75,
						Lifetime: 2,
						Damage: 5,
						Range: 25,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: false,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 4,
						Color: "#fff",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-octahedron");
						
						
						G.setAttribute("scale", "1.5 1.5 1.5")
						G.setAttribute("color", "#ff0");
						
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
						Cooldown: 4.5,
						Cost: 500,
						Range: 25,
						Size: {x:1.5,z:1.5},
					},
					UpgradeDescription:"5 > 10 Damage\n5s > 4.5s Fire Rate\nElectrocution Passive (-5% Armor (1 time), Slows by 50% for 0.25s, Cooldown 8s)",
					ProjectileSettings:{
						Type: "Shock",
						Speed: 75,
						Lifetime: 2,
						Damage: 5,
						Range: 25,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: false,
							Invisible: false,
						},
						HitEffects: (Enemy) => {
							if (Enemy.StatusEffects.indexOf("Electrocuted") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Electrocuted") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Electrocuted");
									if (Enemy.ImmuneEffects.indexOf("ElectrocutedAMelt") == -1){
										Enemy.Armor = Math.round(10 * 0.95 * Enemy.Armor)/10;
										Enemy.StatusEffects.push("ElectrocutedAMelt");
									}
									Enemy.Speed *= 0.5;
									
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.Speed /= 0.5;
										}
									}, cT+250);
								
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Electrocuted"),1);
									}, cT+8000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 4,
						Color: "#fff",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-octahedron");
						let J = document.createElement("a-octahedron");
						
						J.setAttribute("scale", "1.35 1.35 1.35")
						J.setAttribute("color", "#ff0");
						
						G.setAttribute("scale", "1.5 1.5 1.5")
						G.setAttribute("color", "#aa0");
						G.setAttribute("opacity", "0.7");
						
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
						Damage: 30,
						Cooldown: 4.5,
						Cost: 1400,
						Range: 30,
						Size: {x:1.5,z:1.5},
					},
					UpgradeDescription:"10 > 30 Damage\n25 > 30 Range\n4 > 10 Pierce\nElectrocution Passive (-10% Armor (1 time), Slows by 65% for 0.5s, Damage is buffed by 1.05x for 0.5s, Cooldown 7s)",
					ProjectileSettings:{
						Type: "Shock",
						Speed: 75,
						Lifetime: 2,
						Damage: 30,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: false,
							Invisible: false,
						},
						HitEffects: (Enemy) => {
							if (Enemy.StatusEffects.indexOf("Electrocuted") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Electrocuted") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Electrocuted");
									if (Enemy.ImmuneEffects.indexOf("ElectrocutedAMelt") == -1){
										Enemy.Armor = Math.round(10 * 0.9 * Enemy.Armor)/10;
										Enemy.StatusEffects.push("ElectrocutedAMelt");
									}
									Enemy.Speed *= 0.35;
									Enemy.DamageMulti *= 1.05;
									
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.Speed /= 0.35;
											Enemy.DamageMulti /= 1.05;
										}
									}, cT+500);
								
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Electrocuted"),1);
									}, cT+7000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 10,
						Color: "#fff",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-octahedron");
						let J = document.createElement("a-octahedron");
						
						J.setAttribute("scale", "1.15 1.15 1.15")
						J.setAttribute("color", "#ff0");
						
						G.setAttribute("scale", "1.5 1.5 1.5")
						G.setAttribute("color", "#cc0");
						G.setAttribute("opacity", "0.5");
						
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
						Damage: 100,
						Cooldown: 4.5,
						Cost: 6500,
						Range: 30,
						Size: {x:1.5,z:1.5},
					},
					UpgradeDescription:"30 > 100 Damage\nFaster Zap\n*Magic Detection*\n*Invisible Detection*\nElectrocution Passive (-25% Armor (1 time), Slows by 65% for 1s, Damage is buffed by 10% for 1s, Cooldown 7s)",
					ProjectileSettings:{
						Type: "Shock",
						Speed: 100,
						Lifetime: 2,
						Damage: 100,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: (Enemy) => {
							if (Enemy.StatusEffects.indexOf("Electrocuted") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Electrocuted") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Electrocuted");
									if (Enemy.ImmuneEffects.indexOf("ElectrocutedAMelt") == -1){
										Enemy.Armor = Math.round(10 * 0.75 * Enemy.Armor)/10;
										Enemy.StatusEffects.push("ElectrocutedAMelt");
									}
									Enemy.Speed *= 0.35;
									Enemy.DamageMulti *= 1.1;
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.DamageMulti /= 1.1;
											Enemy.Speed /= 0.35;
										}
									}, cT+1000);
								
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Electrocuted"),1);
									}, cT+7000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 10,
						Color: "#fff",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-octahedron");
						let J = document.createElement("a-octahedron");
						
						J.setAttribute("scale", "1 1 1")
						J.setAttribute("color", "#fff");
						
						G.setAttribute("scale", "1.5 1.5 1.5")
						G.setAttribute("color", "#dd0");
						G.setAttribute("opacity", "0.5");
						
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
					Upgrade: 4,
					TowerStats:{
						Damage: 400,
						Cooldown: 4.5,
						Cost: 22000,
						Range: 30,
						Size: {x:1.5,z:1.5},
					},
					UpgradeDescription:"100 > 400 Damage*\nElectrocution Passive (-30% Armor (1 time), Slows by 90% for 1s, Damage is buffed by 1.2x for 1s, Cooldown 7s)",
					ProjectileSettings:{
						Type: "Shock",
						Speed: 100,
						Lifetime: 2,
						Damage: 400,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: (Enemy) => {
							if (Enemy.StatusEffects.indexOf("Electrocuted") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Electrocuted") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Electrocuted");
									if (Enemy.ImmuneEffects.indexOf("ElectrocutedAMelt") == -1){
										Enemy.Armor = Math.round(10 * 0.7 * Enemy.Armor)/10;
										Enemy.StatusEffects.push("ElectrocutedAMelt");
									}
									Enemy.Speed *= 0.1;
									Enemy.DamageMulti *= 1.2;
									
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.Speed /= 0.1;
											Enemy.DamageMulti /= 1.2;
										}
									}, cT+1000);
								
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Electrocuted"),1);
									}, cT+7000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 10,
						Color: "#fff",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-octahedron");
						let J = document.createElement("a-octahedron");
						
						J.setAttribute("scale", "0.9 0.9 0.9")
						J.setAttribute("color", "#fff");
						
						G.setAttribute("scale", "1.5 1.5 1.5")
						G.setAttribute("color", "#ff0");
						G.setAttribute("opacity", "0.5");
						
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
					Upgrade: 5,
					TowerStats:{
						Damage: 1200,
						Cooldown: 4.5,
						Cost: 55000,
						Range: 30,
						Size: {x:1.5,z:1.5},
					},
					UpgradeDescription:"400 > 1200 Damage*\nElectrocution Passive (-50% Armor (1 time), Slows by 90% for 2s, Damage is buffed by 1.3x for 2s, Cooldown 5s)\nPermashock Passive (Slow by 10% permanently)",
					ProjectileSettings:{
						Type: "Shock",
						Speed: 100,
						Lifetime: 2,
						Damage: 1200,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: (Enemy) => {
							if (Enemy.StatusEffects.indexOf("Electrocuted") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Electrocuted") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Electrocuted");
									if (Enemy.ImmuneEffects.indexOf("ElectrocutedAMelt") == -1){
										Enemy.Armor = Math.round(10 * 0.5 * Enemy.Armor)/10;
										Enemy.StatusEffects.push("ElectrocutedAMelt");
									}
									if (Enemy.ImmuneEffects.indexOf("PermaShock") == -1 && Enemy.StatusEffects.indexOf("Permashock") == -1){
										Enemy.Speed *= 0.9;
										Enemy.StatusEffects.push("PermaShock");
									}
									Enemy.Speed *= 0.1;
									Enemy.DamageMulti *= 1.3;
									
									new Delay(()=> {
										if (Enemy!=null){
											Enemy.DamageMulti /= 1.3;
											Enemy.Speed /= 0.1;
										}
									}, cT+2000);
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Electrocuted"),1);
									}, cT+5000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 10,
						Color: "#fff",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-octahedron");
						let J = document.createElement("a-octahedron");
						
						J.setAttribute("scale", "0.9 0.9 0.9")
						J.setAttribute("color", "#fff");
						
						G.setAttribute("scale", "1.5 1.5 1.5")
						G.setAttribute("color", "#ff0");
						G.setAttribute("opacity", "0.5");
						
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
			],
			Minigunner : [
				{
					Type: "Attack",
					Upgrade: 0,
					TowerStats:{
						Damage: 1,
						Cooldown: 0.15,
						Cost: 1500,
						Range: 10,
						Size: {x:1.5,z:1.5},
					},
					ProjectileSettings:{
						Type: "Bullet",
						Speed: 50,
						Lifetime: 3,
						Damage: 1,
						Range: 10,
						
						HitTypes : {
							Physical: true,
							Metal: false,
							Magic: true,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 1,
						Color: "#000",
					},
					
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-sphere");
						
						
						G.setAttribute("scale", "1.5 1.5 1.5")
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
						Cooldown: 0.15,
						Cost: 1250,
						Range: 15,
						Size: {x:1.5,z:1.5},
					},
					UpgradeDescription:"1 > 2 Damage\n10 > 15 Range\n1 > 2 Pierce",
					ProjectileSettings:{
						Type: "Bullet",
						Speed: 50,
						Lifetime: 3,
						Damage: 2,
						Range: 15,
						
						HitTypes : {
							Physical: true,
							Metal: false,
							Magic: true,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 2,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-sphere");
						
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "1.5 1 1.5");
						J.setAttribute("color", "#aaa");
						
						G.setAttribute("scale", "1.35 1.7 1.35")
						G.setAttribute("color", "#f0f");
						
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
						Damage: 3,
						Cooldown: 0.1,
						Cost: 5500,
						Range: 15,
						Size: {x:1.5,z:1.5},
					},
					UpgradeDescription:"2 > 3 Damage\n0.15s > 0.1s Fire Rate\n2 > 3 Pierce\n10% Armor Pierce\n*Metal Detection*",
					ProjectileSettings:{
						Type: "Bullet",
						Speed: 50,
						Lifetime: 3,
						Damage: 3,
						Range: 15,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 10,
						Pierce: 3,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-sphere");
						
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "1.5 1 1.5");
						J.setAttribute("color", "#fff");
						
						G.setAttribute("scale", "1.35 1.7 1.35")
						G.setAttribute("color", "#000");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray", "");
							
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
						Damage: 5,
						Cooldown: 0.05,
						Cost: 11000,
						Range: 18,
						Size: {x:1.5,z:1.5},
					},
					UpgradeDescription:"3 > 5 Damage\n15 > 18 Range\n0.1s > 0.05s Fire Rate\n3 > 4 Pierce\n10% > 15% Armor Pierce",
					ProjectileSettings:{
						Type: "Bullet",
						Speed: 50,
						Lifetime: 3,
						Damage: 5,
						Range: 18,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 15,
						Pierce: 4,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-sphere");
						
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "1.5 1 1.5");
						J.setAttribute("color", "#0f0");
						
						G.setAttribute("scale", "1.35 1.9 1.35")
						G.setAttribute("color", "#f0f");
						G.setAttribute("opacity", "0.9");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray", "");
							
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
					Upgrade: 4,
					TowerStats:{
						Damage: 15,
						Cooldown: 0.05,
						Cost: 30000,
						Range: 21,
						Size: {x:1.5,z:1.5},
					},
					UpgradeDescription:"5 > 15 Damage\n18 > 21 Range\n4 > 6 Pierce\n15% > 30% Armor Pierce\n*Invisible Detection*",
					ProjectileSettings:{
						Type: "Bullet",
						Speed: 50,
						Lifetime: 3,
						Damage: 15,
						Range: 21,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 30,
						Pierce: 6,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-sphere");
						
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "1.5 1 1.5");
						J.setAttribute("color", "#000");
						
						G.setAttribute("scale", "1.7 1.9 1.7")
						G.setAttribute("color", "#fff");
						G.setAttribute("opacity", "0.5");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray", "");
							
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
					Upgrade: 5,
					TowerStats:{
						Damage: 25,
						Cooldown: 0.05,
						Cost: 75000,
						Range: 24,
						Size: {x:1.5,z:1.5},
					},
					UpgradeDescription:"15 > 25 Damage\n21 > 24 Range\nFaster Bullets\n30% > 50% Armor Pierce",
					ProjectileSettings:{
						Type: "Bullet",
						Speed: 80,
						Lifetime: 3,
						Damage: 25,
						Range: 24,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 50,
						Pierce: 6,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-sphere");
						
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "2 1 2");
						J.setAttribute("color", "#000");
						
						G.setAttribute("scale", "1.9 1.9 1.9")
						G.setAttribute("color", "#fff");
						G.setAttribute("opacity", "0.35");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray", "");
							
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
					Upgrade: 6,
					TowerStats:{
						Damage: 45,
						Cooldown: 0.05,
						Cost: 110000,
						Range: 24,
						Size: {x:1.5,z:1.5},
					},
					UpgradeDescription:"25 > 45 Damage\n6 > 10 Pierce\n50% > 75% Armor Pierce",
					ProjectileSettings:{
						Type: "Bullet",
						Speed: 80,
						Lifetime: 3,
						Damage: 45,
						Range: 24,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 75,
						Pierce: 10,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-sphere");
						
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "2 1 2");
						J.setAttribute("color", "#fff");
						
						G.setAttribute("scale", "1.9 1.9 1.9")
						G.setAttribute("color", "#b66");
						G.setAttribute("opacity", "0.35");
						
						if (place == false){
							G.setAttribute("Tower", "");
							G.setAttribute("ray","");
							J.setAttribute("ray", "");
							
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
			Flamethrower : [
				{
					Type: "Attack",
					Upgrade: 0,
					TowerStats:{
						Damage: 0.35,
						Cooldown: 0.1,
						Cost: 1100,
						Range: 10,
						Size: {x:1,z:1},
					},
					ProjectileSettings:{
						Type: "Fire",
						Speed: 10,
						Lifetime: 3,
						Damage: 0.35,
						Range: 10,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: false,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 3,
						Color: "#f00",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						
						
						G.setAttribute("scale", "1 1.5 1")
						G.setAttribute("color", "#fa0");
						
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
						Damage: 0.8,
						Cooldown: 0.125,
						Cost: 750,
						Range: 12,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"0.35 > 0.8 Damage\n3 > 5 Pierce\nFaster Flames\n0.1 > 0.125s Fire rate\n10 > 12 Range\n*Invisible Detection*\nBurning Passive (Deal 1 Damage every 0.5s, 5 ticks, Cooldown 5s)",
					ProjectileSettings:{
						Type: "Fire",
						Speed: 13,
						Lifetime: 3,
						Damage: 0.8,
						Range: 12,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: false,
							Invisible: true,
						},
						HitEffects: (Enemy)=>{
							if (Enemy.StatusEffects.indexOf("Burning") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Burning") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Burning");
								
									for (let i = 0; i <5; i++){
										new Delay(()=> {
											if (Enemy!=null){
												Enemy.Health -= 1;
												game.cash += 1;
											}
										}, cT+500*i);
									}
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Burning"),1);
									}, cT+5000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 5,
						Color: "#f00",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "0.5 1.6 0.5")
						J.setAttribute("color", "#f00");
						
						G.setAttribute("scale", "1 1.5 1")
						G.setAttribute("color", "#a50");
						
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
						Damage: 2,
						Cooldown: 0.15,
						Cost: 1750,
						Range: 15,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"0.8 > 2 Damage\nFaster Flames\n12 > 15 Range\n*Invisible Detection*\nBurning Passive (Deal 2 Damage every 0.25s, 5 ticks, Cooldown 5s)",
					ProjectileSettings:{
						Type: "Fire",
						Speed: 20,
						Lifetime: 4,
						Damage: 2,
						Range: 15,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: false,
							Invisible: true,
						},
						HitEffects: (Enemy)=>{
							if (Enemy.StatusEffects.indexOf("Burning") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Burning") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Burning");
								
									for (let i = 0; i < 5; i++){
										new Delay(()=> {
											if (Enemy!=null){
												Enemy.Health -= 2;
												game.cash += 2;
											}
										}, cT+250*i);
									}
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Burning"),1);
									}, cT+5000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 0,
						Pierce: 5,
						Color: "#f00",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "0.5 1.6 0.5")
						J.setAttribute("color", "#f00");
						
						G.setAttribute("scale", "1.2 1.6 1.2")
						G.setAttribute("color", "#f50");
						G.setAttribute("opacity", "0.8");
						
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
						Damage: 3,
						Cooldown: 0.05,
						Cost: 8000,
						Range: 15,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"2 > 3 Damage\n0.15s > 0.05s Fire Rate\nFaster Flames\n5 > INF Pierce\n0% > 25% Armor Pierce\nBurning Passive (Deal 2 Damage every 0.25s, 10 ticks, Cooldown 5s)",
					ProjectileSettings:{
						Type: "Fire",
						Speed: 35,
						Lifetime: 4,
						Damage: 3,
						Range: 15,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: false,
							Invisible: true,
						},
						HitEffects: (Enemy)=>{
							if (Enemy.StatusEffects.indexOf("Burning") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Burning") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Burning");
								
									for (let i = 0; i < 10; i++){
										new Delay(()=> {
											if (Enemy!=null){
												Enemy.Health -= 2;
												game.cash += 2;
											}
										}, cT+250*i);
									}
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Burning"),1);
									}, cT+5000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 25,
						Pierce: 999,
						Color: "#0ff",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "0.5 1.6 0.5")
						J.setAttribute("color", "#00f");
						
						G.setAttribute("scale", "1.2 1.6 1.2")
						G.setAttribute("color", "#05f");
						G.setAttribute("opacity", "0.8");
						
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
					Upgrade: 4,
					TowerStats:{
						Damage: 5,
						Cooldown: 0.05,
						Cost: 21000,
						Range: 15,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"3 > 5 Damage\nFaster Flames\n25% > 50% Armor Pierce\nBurning Passive (Deal 4 Damage every 0.25s, 20 ticks, Cooldown 5s)",
					ProjectileSettings:{
						Type: "Fire",
						Speed: 55,
						Lifetime: 4,
						Damage: 5,
						Range: 15,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: false,
							Invisible: true,
						},
						HitEffects: (Enemy)=>{
							if (Enemy.StatusEffects.indexOf("Burning") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Burning") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Burning");
								
									for (let i = 0; i < 20; i++){
										new Delay(()=> {
											if (Enemy!=null){
												Enemy.Health -= 4;
												game.cash += 4;
											}
										}, cT+250*i);
									}
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Burning"),1);
									}, cT+5000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 50,
						Pierce: 999,
						Color: "#0ff",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "0.5 1.6 0.5")
						J.setAttribute("color", "#0ff");
						
						G.setAttribute("scale", "1.2 1.6 1.2")
						G.setAttribute("color", "#05f");
						G.setAttribute("opacity", "0.4");
						
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
					Upgrade: 5,
					TowerStats:{
						Damage: 8,
						Cooldown: 0.05,
						Cost: 65000,
						Range: 20,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"5 > 8 Damage\n15 > 20 Range\n50% > 75% Armor Pierce\n*Magic Detection*\nFaster Flames\nBurning Passive (Deal 4 Damage every 0.1s, 20 ticks, Cooldown 3s)",
					ProjectileSettings:{
						Type: "Fire",
						Speed: 75,
						Lifetime: 4,
						Damage: 8,
						Range: 20,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: (Enemy)=>{
							if (Enemy.StatusEffects.indexOf("Burning") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Burning") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Burning");
								
									for (let i = 0; i < 20; i++){
										new Delay(()=> {
											if (Enemy!=null){
												Enemy.Health -= 4;
												game.cash += 4;
											}
										}, cT+100*i);
									}
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Burning"),1);
									}, cT+3000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 75,
						Pierce: 999,
						Color: "#fff",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "0.5 1.6 0.5")
						J.setAttribute("color", "#fff");
						
						G.setAttribute("scale", "1.2 1.6 1.2")
						G.setAttribute("color", "#05f");
						G.setAttribute("opacity", "0.4");
						
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
					Upgrade: 6,
					TowerStats:{
						Damage: 18,
						Cooldown: 0.05,
						Cost: 115000,
						Range: 23,
						Size: {x:1,z:1},
					},
					UpgradeDescription:"8 > 18 Damage\n20 > 23 Range\nFaster Flames\nBurning Passive (Deal 5 Damage every 0.05s, 30 ticks, Cooldown 3s)",
					ProjectileSettings:{
						Type: "Fire",
						Speed: 80,
						Lifetime: 4,
						Damage: 18,
						Range: 23,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: (Enemy)=>{
							if (Enemy.StatusEffects.indexOf("Burning") > -1){return;} else {
								if (Enemy.ImmuneEffects != false && Enemy.ImmuneEffects.indexOf("Burning") > -1){return;} else {
									let cT = game.gamemode.Roundtick*20;
									Enemy.StatusEffects.push("Burning");
								
									for (let i = 0; i < 30; i++){
										new Delay(()=> {
											if (Enemy!=null){
												Enemy.Health -= 5;
												game.cash += 5;
											}
										}, cT+50*i);
									}
									
								
									new Delay(()=>{
										Enemy.StatusEffects.splice(Enemy.StatusEffects.indexOf("Burning"),1);
									}, cT+3000);
								}
							}
						},
						Explosive: false,
						
						ArmorPierce: 75,
						Pierce: 999,
						Color: "#fff",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-cylinder");
						let J = document.createElement("a-cylinder");
						
						J.setAttribute("scale", "0.5 1.6 0.5")
						J.setAttribute("color", "#fff");
						
						G.setAttribute("scale", "1.2 1.6 1.2")
						G.setAttribute("color", "#909");
						G.setAttribute("opacity", "0.4");
						
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
			],
			Cannoner : [
				{
					Type: "Attack",
					Upgrade: 0,
					TowerStats:{
						Damage: 5,
						Cooldown: 2.5,
						Cost: 2000,
						Range: 30,
						Size: {x:2,z:2},
					},
					ProjectileSettings:{
						Type: "Cannon",
						Speed: 50,
						Lifetime: 3,
						Damage: 5,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 2,
						Pierce: 5,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-icosahedron");
						
						
						G.setAttribute("scale", "2 2.5 2")
						G.setAttribute("color", "#a0a");
						
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
						Damage: 15,
						Cooldown: 2.5,
						Cost: 750,
						Range: 30,
						Size: {x:2,z:2},
					},
					UpgradeDescription:"5 > 15 Damage",
					ProjectileSettings:{
						Type: "Cannon",
						Speed: 50,
						Lifetime: 3,
						Damage: 15,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: false,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 2,
						Pierce: 5,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-icosahedron");
						
						
						G.setAttribute("scale", "2 2.5 2")
						G.setAttribute("color", "#f0f");
						
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
					Upgrade: 2,
					TowerStats:{
						Damage: 45,
						Cooldown: 3.5,
						Cost: 1250,
						Range: 30,
						Size: {x:2,z:2},
					},
					UpgradeDescription:"15 > 45 Damage\n2.5s > 3.5s Fire Rate\n2% > 5% Armor Pierce\n*Invisible Detection*",
					ProjectileSettings:{
						Type: "Cannon",
						Speed: 50,
						Lifetime: 3,
						Damage: 45,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 5,
						Pierce: 5,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-icosahedron");
						let J = document.createElement("a-box");
						
						J.setAttribute("scale", "2 1 2")
						J.setAttribute("color", "#000");
						
						G.setAttribute("scale", "2 2.5 2")
						G.setAttribute("color", "#faf");
						
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
						Damage: 85,
						Cooldown: 3,
						Cost: 4000,
						Range: 30,
						Size: {x:2,z:2},
					},
					UpgradeDescription:"45 > 85 Damage\n3.5s > 3s Fire Rate\n5% > 10% Armor Pierce\nFaster Bullets",
					ProjectileSettings:{
						Type: "Cannon",
						Speed: 60,
						Lifetime: 3,
						Damage: 85,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 10,
						Pierce: 5,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-icosahedron");
						let J = document.createElement("a-box");
						
						J.setAttribute("scale", "2.5 2 2.5")
						J.setAttribute("color", "#000");
						J.setAttribute("opacity", "0.5");
						
						
						G.setAttribute("scale", "2 2.5 2")
						G.setAttribute("color", "#faf");
						
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
					Upgrade: 4,
					TowerStats:{
						Damage: 200,
						Cooldown: 2.5,
						Cost: 11000,
						Range: 30,
						Size: {x:2,z:2},
					},
					UpgradeDescription:"85 > 200 Damage\n3s > 2.5s Fire Rate\nFaster Bullets",
					ProjectileSettings:{
						Type: "Cannon",
						Speed: 70,
						Lifetime: 3,
						Damage: 200,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 10,
						Pierce: 5,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-icosahedron");
						let J = document.createElement("a-box");
						
						J.setAttribute("scale", "2.5 2 2.5")
						J.setAttribute("color", "#000");
						J.setAttribute("opacity", "0.5");
						
						
						G.setAttribute("scale", "2 3 2")
						G.setAttribute("color", "#fff");
						
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
					Upgrade: 5,
					TowerStats:{
						Damage: 450,
						Cooldown: 2.5,
						Cost: 32000,
						Range: 30,
						Size: {x:2,z:2},
					},
					UpgradeDescription:"200 > 450 Damage\n10% > 15% Armor Pierce\n5 > 10 Pierce\nFaster Bullets",
					ProjectileSettings:{
						Type: "Cannon",
						Speed: 80,
						Lifetime: 3,
						Damage: 450,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 15,
						Pierce: 10,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-icosahedron");
						let J = document.createElement("a-box");
						
						J.setAttribute("scale", "2.75 1.5 2.75")
						J.setAttribute("color", "#000");
						J.setAttribute("opacity", "0.5");
						
						
						G.setAttribute("scale", "2 3 2")
						G.setAttribute("color", "#aaa");
						
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
					Upgrade: 6,
					TowerStats:{
						Damage: 1100,
						Cooldown: 2,
						Cost: 55000,
						Range: 30,
						Size: {x:2,z:2},
					},
					UpgradeDescription:"450 > 1100 Damage\n15% > 20% Armor Pierce\n2.5s > 2s Fire Rate",
					ProjectileSettings:{
						Type: "Cannon",
						Speed: 90,
						Lifetime: 3,
						Damage: 1100,
						Range: 30,
						
						HitTypes : {
							Physical: true,
							Metal: true,
							Magic: true,
							Invisible: true,
						},
						HitEffects: false,
						Explosive: false,
						
						ArmorPierce: 20,
						Pierce: 10,
						Color: "#000",
					},
					TowerObject:(position, place=false)=>{
						let Obj = document.createElement("a-entity");
						
						let G = document.createElement("a-icosahedron");
						let J = document.createElement("a-box");
						
						J.setAttribute("scale", "2.5 1.5 2.5")
						J.setAttribute("color", "#000");
						J.setAttribute("opacity", "0.35");
						
						
						G.setAttribute("scale", "3 3 3")
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
			],
		}
	}
	LoadMap(){
	
	}
}