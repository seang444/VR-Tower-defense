class DifficultyStorage{
	constructor(){
		this.Easy = {
			//Name on the game
			Name:"Easy",
			//starting cash on new round
			StartingCash:750,
			//starting health on new round
			StartingHealth:200,
			//max rounds
			Rounds:40,
		}
		
		this.Normal = {
			//Name on the game
			Name:"Normal",
			//starting cash on new round
			StartingCash:700,
			//starting health on new round
			StartingHealth:150,
			//max rounds
			Rounds:50,
		}
		
		this.Hard = {
			//Name on the game
			Name:"Hard",
			//starting cash on new round
			StartingCash:600,
			//starting health on new round
			StartingHealth:100,
			//max rounds
			Rounds:60,
		}
		
		this.Waves = [
			()=>{ //r1
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("Square")}, 1000 * i);
				}
				new Delay(() => {game.finishedRound = true}, 10050);
			},
			()=>{ //r2
				for (let i = 0; i < 15; i ++){
					new Delay(()=>{spawnEnemy("Square")}, 750 * i);
				}
				new Delay(() => {game.finishedRound = true}, 11300);
			},
			()=>{ //r3
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("Square")}, 2500 + 500 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5000);
			},
			()=>{ //r4
				for (let i = 0; i < 8; i ++){
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 400 + 800 * i);
					new Delay(()=>{spawnEnemy("Square")}, 800 * i);
				}
				new Delay(() => {game.finishedRound = true}, 6800);
			},
			()=>{ //r5
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("Square")}, 1000 + 1500 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 800 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare",["Giant"])}, 400 + 800 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5500);
			},
			()=>{ //r6
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("GraySquare")}, 1000 + 1000 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 300 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 1500 + 300 * i);
				}
				new Delay(() => {game.finishedRound = true}, 4000);
			},
			()=>{ //r7
				for (let i = 0; i < 14; i ++){
					new Delay(()=>{spawnEnemy("Square")}, (500 + 500 * i/2));
					if (i%3 == 0){
						new Delay(()=>{spawnEnemy("GraySquare")}, 750 + 500 * i/2);
					}
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 250 * i);
				}
				new Delay(() => {game.finishedRound = true}, 4250);
			},
			()=>{ //r8
				for (let i = 0; i < 10; i ++){
					if (i%2 == 0){
						new Delay(()=>{spawnEnemy("CamoSquare")}, 1000 + 500 * i/2);
					}
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5000);
			},
			()=>{ //r9
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("CamoSquare")}, 3500 + 500 * i);
					new Delay(()=>{spawnEnemy("GraySquare",["Quick"])}, 6000 +  500 * i);
					new Delay(()=>{spawnEnemy("GraySquare")}, 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 11000);
			},
			()=>{ //r10
				for (let i = 0; i < 15; i ++){
					new Delay(()=>{spawnEnemy("Square")}, 1000 + 250 * i);
					new Delay(()=>{spawnEnemy("GraySquare")}, 500 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 250 * i);
				}
				new Delay(() => {game.finishedRound = true}, 4750);
			},
			()=>{ //r11
				for (let i = 0; i < 25; i ++){
					new Delay(()=>{spawnEnemy("PurpleSquare", ["Quick"])}, 100 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare", ["Giant"])}, 500 + 200 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5500);
			},
			()=>{ //r12
				for (let i = 0; i < 30; i ++){
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 350 * i);
				}
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("Square", ["Armored"])}, 500 * i);
				}
				for (let i = 0;i < 10; i ++){
					new Delay(()=>{spawnEnemy("Square", ["Armored", "Quick"])}, 6000 + 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 12000);
			},
			()=>{ //r13
				for (let i = 0; i < 30; i ++){
					new Delay(()=>{spawnEnemy("Square")}, 400 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("PurpleSquare", ["Armored", "Giant", "Quick"])}, 3000 + 100 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare", ["Giant","Armored", "Giant", "Quick"])}, 8000 + 100 * i);
				}
				new Delay(() => {game.finishedRound = true}, 12000);
			},
			()=>{ //r14
				for (let i = 0; i < 8; i ++){
					new Delay(()=>{spawnEnemy("GraySquare", ["Armored", "Giant"])}, 1000 + 750 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare", ["Quick", "Giant"])}, 875 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare", ["Quick", "Giant"])}, 875 + 875 * i);
				}
				new Delay(() => {game.finishedRound = true}, 8000);
			},
			()=>{ //r15
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("BlueSquare")}, 1000 + 1500 * i);
				}
				for (let i = 0; i < 6; i ++){
					new Delay(()=>{spawnEnemy("Square", ["Armored"])}, 750 + 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 6000);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r16
				for (let i = 0; i < 35; i ++){
					new Delay(()=>{spawnEnemy("CamoSquare", ["Armored","Quick"])}, 300 * i);
				}
				for (let i = 0; i < 5; i++){
					new Delay(()=>{spawnEnemy("GraySqure", ["Giant","Giant","Armored","Quick","Quick"])}, 1500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 10500);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r17
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("BlueSquare")}, 500 + 1000 * i);
				}
				for (let i = 0; i < 100; i ++){
					new Delay(()=>{spawnEnemy("PurpleSquare", ["Quick"])}, 500 + 100 * i);
				}
				new Delay(() => {game.finishedRound = true}, 10500);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r18
				for (let i = 0; i < 1; i ++){
					new Delay(()=>{spawnEnemy("BossSquare")}, 3000 + 1500 * i);
				}
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("GraySquare", ["Armored"])}, 1000 * i);
				}
				new Delay(() => {game.finishedRound = true}, 3000);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r19
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("Square", ["Armored"])}, 400 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare", ["Armored"])}, 100 + 400 * i);
					new Delay(()=>{spawnEnemy("CamoSquare", ["Armored"])}, 200 + 400 * i);
					new Delay(()=>{spawnEnemy("GraySquare", ["Armored"])}, 400 + 400 * i);
				}
				new Delay(() => {game.finishedRound = true}, 6000);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r20
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("BossSquare")}, 1000 + 3000 * i);
				}
				for (let i = 0; i < 15; i ++){
					new Delay(()=>{spawnEnemy("Square", ["Armored","Armored","Quick"])}, 1000 * i);
				}
				new Delay(() => {game.finishedRound = true}, 15000);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r21
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("BlueSquare",["Giant","Giant","Giant","Giant","Armored"])}, 2000 * i);
				}
				new Delay(() => {game.finishedRound = true}, 6000);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r22
				for (let i = 0; i < 2; i ++){
					new Delay(()=>{spawnEnemy("FireSquare")}, 7000 + 500 * i);
				}
				for (let i = 0; i < 15; i ++){
					new Delay(()=>{spawnEnemy("BlueSquare", ["Armored"])}, 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 6000);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r23
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("BlueSquare")}, 500 * i);
				}
				for (let i = 0; i < 6; i ++){
					new Delay(()=>{spawnEnemy("BossSquare", ["Quick"])}, 750 + 750 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5000);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r24
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("SteelSquare")}, 500 + 500 * i);
				}
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("Square", ["Quick","Quick","Quick","Quick","Armored","Armored","Armored"])}, 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5000);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r25
				for (let i = 0; i < 15; i ++){
					new Delay(()=>{spawnEnemy("FireSquare")}, 1000 + 200 * i);
					new Delay(()=>{spawnEnemy("FireSquare")}, 6000 + 200 * i);
				}
				for (let i = 0; i < 9; i ++){
					new Delay(()=>{spawnEnemy("SteelSquare")}, 1000 * i);
				}
				new Delay(() => {game.finishedRound = true}, 9000);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r26
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("YellowSquare")}, 3000 + 1500 * i);
				}
				for (let i = 0; i < 6; i ++){
					new Delay(()=>{spawnEnemy("BossSquare", ["Quick"])}, 750 + 750 * i);
				}
				for (let i = 0; i < 35; i ++){
					new Delay(()=>{spawnEnemy("CamoSquare", ["Armored","Quick"])}, 300 * i);
				}
				new Delay(() => {game.finishedRound = true}, 10500);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r27
				for (let i = 0; i < 15; i ++){
					new Delay(()=>{spawnEnemy("BossSquare", ["Armored", "Giant"])}, 800 * i);
				}
				for (let i = 0; i < 15; i ++){
					new Delay(()=>{spawnEnemy("SteelSquare")}, 400 + 800 * i);
				}
				new Delay(() => {game.finishedRound = true}, 12400);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r28
				for (let k = 0; k < 2; k++){
					for (let i = 0; i < 5; i ++){
						new Delay(()=>{spawnEnemy("BlueSquare")}, 3000*k+ 100 * i);	
						new Delay(()=>{spawnEnemy("YellowSquare")},500 + 3000*k + 100 * i);	
						new Delay(()=>{spawnEnemy("FireSquare")}, 1000+ 3000*k +100 * i);	
						new Delay(()=>{spawnEnemy("GraySquare")}, 1500+ 3000*k +100 * i);	
						new Delay(()=>{spawnEnemy("CamoSquare")}, 2000+ 3000*k +100 * i);	
					}
				}
				for (let i = 0; i < 7; i ++){
					new Delay(()=>{spawnEnemy("SteelSquare", ["Giant","Armored"])}, 1000 * i);
				}
				new Delay(() => {game.finishedRound = true}, 7500);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r29
				for (let j = 0; j < 5; j++){
					for (let i = 0; i < 3; i ++){
						new Delay(()=>{spawnEnemy("BossSquare", ["Quick"])}, 1000*j + 200 * i);
					}
				}
			
				
				new Delay(() => {game.finishedRound = true}, 5600);
			},//Steel, Yellow, Fire, Boss
			()=>{ //r30
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("BossSquare")},900 * i);
				}
				new Delay(()=>{spawnEnemy("LeaderSquare")}, 3000);
				new Delay(() => {game.finishedRound = true}, 3000);
			},//SuperCamo, Guardian, 
			()=>{ //r31
				for (let i = 0; i < 15; i ++){
					new Delay(()=>{spawnEnemy("YellowSquare")},900 * i);
					new Delay(()=>{spawnEnemy("BossSquare",["Giant"])},600 * i);
					if (i%2 == 0){
						new Delay(()=>{spawnEnemy("BossSquare"),["Quick","Giant"]},500 * i);
					}
				}
				new Delay(() => {game.finishedRound = true}, 13500);
			},//SuperCamo, Guardian,
			()=>{ //r32
				new Delay(()=>{spawnEnemy("SuperCamoSquare")}, 1000);
				new Delay(()=>{spawnEnemy("SuperCamoSquare")}, 2500);
				new Delay(()=>{spawnEnemy("SuperCamoSquare")}, 4000);
				for (let i = 0; i < 16; i ++){
					new Delay(()=>{spawnEnemy("CamoSquare")}, 250 * i);
				}
				new Delay(() => {game.finishedRound = true}, 4000);
			},//SuperCamo, Guardian,
			()=>{ //r33
				new Delay(()=>{spawnEnemy("LeaderSquare")}, 250);
				new Delay(()=>{spawnEnemy("LeaderSquare")}, 9250);
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("BossSquare")}, 250 + 700 * i);
				}
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("FireSquare",["Quick"])}, 4000 + 200 * i);
				}
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("SteelSquare")}, 7000 + 750 * i);
				}
				new Delay(() => {game.finishedRound = true}, 9250);
			},//SuperCamo, Guardian,
			()=>{ //r34
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("BossSquare",["Armored"])}, 1000 * i);
				}
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("FireSquare", ["Armored"])}, 250 + 500 * i);
				}
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("YellowSquare", ["Quick","Armored"])}, 6000 + 333 * i);
				}
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("GraySquare", ["Quick","Quick","Quick","Quick","Armored"])}, 7500 + 100 * i);
				}
				new Delay(()=>{spawnEnemy("LeaderSquare", ["Quick","Giant"])}, 9000);
				
				new Delay(() => {game.finishedRound = true}, 10000);
			},//SuperCamo, Guardian,
			()=>{ //r35 white rusher tank
				new Delay(()=>{spawnEnemy("GuardianSquare")}, 1000);
				for (let i = 0; i < 40; i ++){
					new Delay(()=>{spawnEnemy("BlueSquare", ["Armored","Giant","Quick"])}, 50 * i);
				}
				new Delay(() => {game.finishedRound = true}, 2000);
			},//SuperCamo, Guardian,
			()=>{ //r36 white rusher tank
				for (let i = 0; i < 10; i ++){
					for (let j = 0; j < 5; j++){
						if (i%5 == 0){
							new Delay(()=>{spawnEnemy("BlueSquare", ["Armored","Giant","Quick"])}, 1200*i + 200 * j);
						} else if (i%5 == 1){
							new Delay(()=>{spawnEnemy("FireSquare", ["Armored","Giant","Quick"])}, 1200*i + 200 * j);
						} else if (i%5 == 2){
							new Delay(()=>{spawnEnemy("SuperCamoSquare", ["Armored","Giant","Quick"])}, 1200*i + 200 * j);
						} else if (i%5 == 3){
							new Delay(()=>{spawnEnemy("GraySquare", ["Armored","Giant","Quick"])}, 1200*i + 200 * j);
						} else if (i%5 == 4){
							new Delay(()=>{spawnEnemy("BossSquare", ["Armored","Giant","Quick"])}, 1200*i + 200 * j);
						}
					}
				}
				new Delay(() => {game.finishedRound = true}, 1300);
			},//SuperCamo, Guardian,
			()=>{ //r37 white rusher tank
				for (let i = 0; i < 50; i ++){
					new Delay(()=>{spawnEnemy("PurpleSquare", ["Armored","Quick"])}, 200 * i);
				}
				
				new Delay(()=>{spawnEnemy("GuardianSquare")}, 3500);
				new Delay(()=>{spawnEnemy("GuardianSquare")}, 7000);
			
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare")}, 5000 + 500 * i);
				}
				
				new Delay(() => {game.finishedRound = true}, 10000);
			},//SuperCamo, Guardian,
			()=>{ //r38 white rusher tank
				new Delay(()=>{spawnEnemy("GuardianSquare")}, 100);
				for (let i = 0; i < 4; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare")}, 200 + 500 * i);
				}
				
				new Delay(()=>{spawnEnemy("GuardianSquare")}, 3100);
				for (let i = 0; i < 4; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare")}, 3200 + 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5200);
			},//SuperCamo, Guardian,
			()=>{ //r39 white rusher tank
				for (let i = 0; i < 100; i ++){
					new Delay(()=>{spawnEnemy("FireSquare")}, (400 - i*2) * i);
				}
				
				for (let i = 0; i < 10; i ++ ){
					if (i%2 == 0){
						new Delay(()=>{spawnEnemy("GuardianSquare",["Quick"])}, 2000 * i);
					} else {
						new Delay(()=>{spawnEnemy("RusherSquare")}, 2000 * i);
					}
				}
				
				new Delay(() => {game.finishedRound = true}, 20000);
			},//SuperCamo, Guardian,
			()=>{ //r40 white knight nebula giga
				new Delay(()=>{spawnEnemy("TankSquare")}, 2400);
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare")}, 100*i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("SuperCamoSquare", ["Armored","Quick"])}, 1000 + 300 * i);
				}
				new Delay(() => {game.finishedRound = true}, 4000);
			},//SuperCamo, Guardian,
			()=>{ //r41 white rusher tankknight nebula giga
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("GuardianSquare", ["Armored", "Giant"])}, 333 * i);
					new Delay(()=>{spawnEnemy("GuardianSquare", ["Armored", "Giant"])}, 2200 + 333 * i);
				}
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare", ["Armored"])}, 1100 + 200 * i);
				}
				new Delay(() => {game.finishedRound = true}, 3200);
			},//SuperCamo, Guardian,
			()=>{ //r42 white rusher tankknight nebula giga
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("TankSquare")}, 1500 * i);
				}
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("YellowSquare", ["Armored","Quick"])}, 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5000);
			},//SuperCamo, Guardian,
			()=>{ //r43 white rusher tankknight nebula giga
				for (let i = 0; i < 2; i ++){
					new Delay(()=>{spawnEnemy("WhiteSquare")}, 2000 + 200 * i);
				}
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("SteelSquare", ["Armored", "Giant", "Quick"])}, 300 * i);
				}
				new Delay(() => {game.finishedRound = true}, 3000);
			},//SuperCamo, Guardian,
			()=>{ //r44 white rusher tankknight nebula giga
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("GuardianSquare", ["Armored", "Giant", "Quick", "Giant","Giant","Giant"])}, 2000 * i);
				}
				for (let i = 0; i < 40; i ++){
					if (i%4 == 0){
						new Delay(()=>{spawnEnemy("WhiteSquare", ["Quick"])}, 250 * i);
					} else {
						new Delay(()=>{spawnEnemy("RusherSquare", ["Quick"])}, 250 * i);
					}
				}
				new Delay(() => {game.finishedRound = true}, 10000);
			},//SuperCamo, Guardian,
			()=>{ //r45 white rusher tankknight nebula giga
				new Delay(()=>{spawnEnemy("TankSquare", ["Quick", "Armored", "Giant"])}, 500);
				
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("SteelSquare", ["Armored", "Giant", "Quick"])}, 750 + 100 * i);
				}
			
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("NebulaSquare")}, 1500 + 200 * i);
				}
				for (let i = 0; i < 8; i ++){
					new Delay(()=>{spawnEnemy("LeaderSquare", ["Armored", "Giant", "Quick", "Giant"])}, 1750 + 250 * i);
				}
				new Delay(() => {game.finishedRound = true}, 3750);
			},//SuperCamo, Guardian,
			()=>{ //r46 white rusher tankknight nebula giga
				for (let i = 0; i < 100; i ++){
					new Delay(()=>{spawnEnemy("YellowSquare", ["Quick", "Giant"])}, (400 - i*2) * i);
				}
				
				for (let i = 0; i < 10; i ++ ){
					if (i%2 == 0){
						new Delay(()=>{spawnEnemy("WhiteSquare", ["Quick", "Giant"])}, 2000 * i);
					} else {
						new Delay(()=>{spawnEnemy("TankSquare", ["Quick", "Giant"])}, 2000 * i);
					}
				}
				new Delay(() => {game.finishedRound = true}, 10000);
			},//SuperCamo, Guardian,
			()=>{ //r47 white rusher tankknight nebula giga
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("WhiteSquare",["Armored"])}, 1000 * i);
				}
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("FireSquare", ["Armored"])}, 250 + 500 * i);
				}
				for (let i = 0; i < 6; i ++){
					new Delay(()=>{spawnEnemy("YellowSquare", ["Quick","Armored"])}, 6000 + 333 * i);
				}
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare", ["Quick","Quick","Armored"])}, 7500 + 100 * i);
				}
				new Delay(()=>{spawnEnemy("LeaderSquare", ["Quick","Giant"])}, 9000);
				
				new Delay(() => {game.finishedRound = true}, 10000);
			},//SuperCamo, Guardian,
			()=>{ //r48 white rusher tankknight nebula giga
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("KnightSquare")}, 500 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare", ["Quick","Quick","Armored"])}, 7500 + 100 * i);
				}
				
				new Delay(()=>{spawnEnemy("TankSquare", ["Quick","Giant"])}, 100);
				new Delay(()=>{spawnEnemy("TankSquare", ["Quick","Giant"])}, 2500);
				new Delay(() => {game.finishedRound = true}, 5000);
			},//SuperCamo, Guardian,
			()=>{ //r49 white rusher tankknight nebula giga
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("KnightSquare")}, 100 * i);
				}
				
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("SteelSquare", ["Armored", "Giant", "Quick"])}, 400 + 100 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare", ["Quick"])}, 1100 + 200 * i);
					new Delay(()=>{spawnEnemy("RusherSquare", ["Quick"])}, 5500 + 200 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("NebulaSquare")}, 2000 + 500 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("WhiteSquare")}, 3000 + 100 * i);
				}
				
				for (let j = 0; j < 15; j++){
					if (j%5 == 0){
						new Delay(()=>{spawnEnemy("YellowSquare", ["Armored","Giant","Quick"])}, 4000 + 100 * j);
					} else if (j%5 == 1){
						new Delay(()=>{spawnEnemy("FireSquare", ["Armored","Giant","Quick"])}, 4500 + 100 * j);
					} else if (j%5 == 2){
						new Delay(()=>{spawnEnemy("SuperCamoSquare", ["Armored","Giant","Quick"])}, 6000 + 100 * j);
					} else if (j%5 == 3){
						new Delay(()=>{spawnEnemy("TankSquare", ["Armored","Giant"])}, 5500 + 100 * j);
					} else if (j%5 == 4){
						new Delay(()=>{spawnEnemy("BossSquare", ["Armored","Giant","Quick"])}, 5000 + 100 * j);
					}
				}
				
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("NebulaSquare", ["Armored","Giant","Quick"])}, 7000 + 333 * i);
				}
				
				new Delay(()=>{spawnEnemy("TankSquare", ["Armored","Giant","Quick"])}, 5000);
				
				new Delay(()=>{spawnEnemy("TankSquare", ["Armored","Giant","Quick"])}, 8500);
				
				new Delay(() => {game.finishedRound = true}, 8500);
			},//SuperCamo, Guardian,
			()=>{ //r50 white rusher tankknight nebula giga
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("KnightSquare", ["Giant"])}, 100 * i);
				}
				
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("SteelSquare", ["Armored", "Giant", "Quick"])}, 400 + 200 * i);
				}
				
				for (let i = 0; i < 20; i ++){
					new Delay(()=>{spawnEnemy("BossSquare", ["Giant","Armored","Quick"])}, 300 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("NebulaSquare")}, 1250 + 100 * i);
					new Delay(()=>{spawnEnemy("FireSquare", ["Giant", "Giant", "Quick", "Quick"])}, 6100 + 100 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("WhiteSquare")}, 500 * i + 1500);
				}
				
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("KnightSquare", ["Giant"])}, 5000 + 100 * i);
				}
				
				for (let i = 0; i < 3; i++){
					new Delay(()=>{spawnEnemy("TankSquare", ["Armored","Giant","Quick"])}, 4500 + 750 * i);
				}
			
				new Delay(()=>{spawnEnemy("GigaSquare")}, 6000);
			
				for (let i = 0; i < 8; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare", ["Armored","Giant"])}, 7100 + 100 * i);
				}
				new Delay(() => {game.finishedRound = true}, 9100);
			},//SuperCamo, Guardian,
			()=>{ //r51
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("NebulaSquare", ["Giant", "Quick", "Armored"])}, 1000 + 200 * i);
				}
				
				new Delay(()=>{spawnEnemy("GigaSquare")}, 500);
				new Delay(()=>{spawnEnemy("GigaSquare")}, 1500);
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare", ["Quick"])}, 200 * i);
				}
				new Delay(() => {game.finishedRound = true}, 2000);
			},//
			()=>{ //r52
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("SteelSquare", ["Armored", "Giant", "Quick"])}, 200 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("FireSquare", ["Armored", "Giant", "Quick"])}, 1500 + 50 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare", ["Armored", "Giant", "Quick"])}, 4000 + 200 * i);
				}
			
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("VoidSquare")}, 2000 + 333 * i);
				}
				
				new Delay(() => {game.finishedRound = true}, 6000);
			},//
			()=>{ //r53
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("LeaderSquare")}, 1000 * i);
				}
				
				for (let i = 0; i < 30; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare", ["Quick","Giant"])}, 100 * i);
				}
				
				new Delay(()=>{spawnEnemy("GigaSquare", ["Giant", "Quick"])}, 3000);
				new Delay(() => {game.finishedRound = true}, 3000);
			},//
			()=>{ //r54
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("LavaSquare")}, 1500 + 500 * i);
				}
				
				for (let i = 0; i < 4; i ++){
					new Delay(()=>{spawnEnemy("VoidSquare")}, 4000 + 500 * i);
				}
				
				for (let i = 0; i < 24; i ++){
					new Delay(()=>{spawnEnemy("FireSquare", ["Armored", "Giant", "Quick"])}, 250 * i);
				}
				new Delay(() => {game.finishedRound = true}, 6000);
			},//
			()=>{ //r55 
				new Delay(()=>{spawnEnemy("FallenSquare")}, 2500);
				
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("TankSquare", ["Armored","Quick"])}, 500 * i);
				}
				
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("LavaSquare")}, 2250 + 250 * i);
				}
				
				new Delay(() => {game.finishedRound = true}, 6000);
			},//
			()=>{ //r56
				new Delay(()=>{spawnEnemy("GigaSquare")}, 0);
				new Delay(()=>{spawnEnemy("FallenSquare")}, 5000);
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("LavaSquare")}, 250 + 500 * i);
				}
				
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("WhiteSquare")}, 3000 + 400 * i);
					new Delay(()=>{spawnEnemy("LeaderSquare", ["Quick"])}, 500 * i);
					new Delay(()=>{spawnEnemy("VoidSquare", ["Quick"])}, 2100 + 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5250);
			},//
			()=>{ //r57 
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("PlasticSquare")}, 5000 + 250 * i);
				}
				
				for (let i = 0; i < 4; i ++){
					new Delay(()=>{spawnEnemy("TankSquare", ["Armored","Quick","Giant"])}, 1250 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("SteelSquare", ["Quick","Armored"])}, 3000 + 200 * i);
				}
				
				for (let i = 0; i < 20; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare", ["Quick","Armored"])}, 400 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5750);
			},//
			()=>{ //r58
				new Delay(()=>{spawnEnemy("FallenSquare")}, 0);
				
				new Delay(()=>{spawnEnemy("GigaSquare",["Armored","Giant","Quick"])}, 2500);
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("VoidSquare")}, 500 * i);
				}
				
				new Delay(()=>{spawnEnemy("FallenSquare")}, 5000);
				
				for (let i = 0; i < 6; i ++){
					new Delay(()=>{spawnEnemy("LavaSquare", ["Armored"])}, 750 + 500 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("GigaSquare")}, 2000 + 300 * i);
				}
				
				new Delay(() => {game.finishedRound = true}, 6000);
			},//
			()=>{ //r59
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("PlasticSquare")}, 100 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("VoidSquare", ["Armored", "Giant", "Quick"])}, 400 + 100 * i);
				}
				
				for (let i = 0; i < 8; i ++){
					new Delay(()=>{spawnEnemy("YellowSquare", ["Quick"])}, 1100 + 300 * i);
					new Delay(()=>{spawnEnemy("RusherSquare", ["Quick"])}, 5500 + 300 * i);
					new Delay(()=>{spawnEnemy("BossSquare", ["Quick"])}, 10800 + 100 * i);
				}
				
				for (let i = 0; i < 12; i ++){
					new Delay(()=>{spawnEnemy("GigaSquare")}, 2000 + 500 * i);
				}
				
				for (let i = 0; i < 20; i ++){
					new Delay(()=>{spawnEnemy("WhiteSquare")}, 3000 + 200 * i);
				}
				
				for (let j = 0; j < 20; j++){
					if (j%5 == 0){
						new Delay(()=>{spawnEnemy("TankSquare", ["Armored","Giant","Quick"])}, 4000 + 100 * j);
					} else if (j%5 == 1){
						new Delay(()=>{spawnEnemy("LavaSquare", ["Armored","Giant","Quick"])}, 5000 + 200 * j);
					} else if (j%5 == 2){
						new Delay(()=>{spawnEnemy("PlasticSquare", ["Armored","Giant","Quick"])}, 6000 + 100 * j);
					} else if (j%5 == 3){
						new Delay(()=>{spawnEnemy("SteelSquare", ["Armored","Giant"])}, 5500 + 100 * j);
					} else if (j%5 == 4){
						new Delay(()=>{spawnEnemy("SuperCamoSquare", ["Armored","Giant","Quick"])}, 5000 + 100 * j);
					}
				}
				
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("LavaSquare", ["Armored","Giant","Quick"])}, 7000 + 333 * i);
				}
				
				new Delay(()=>{spawnEnemy("FallenSquare", ["Armored","Giant","Quick"])}, 5000);
				
				new Delay(()=>{spawnEnemy("FallenSquare", ["Armored","Giant","Quick"])}, 8500);
				
				new Delay(() => {game.finishedRound = true}, 11000);
			},//
			()=>{ //r60 
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("KnightSquare", ["Giant","Quick","Armored"])}, 50 * i);
					new Delay(()=>{spawnEnemy("KnightSquare", ["Giant","Quick","Armored"])}, 3000 + 500 * i);
				}
				
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("WhiteSquare", ["Armored", "Giant", "Quick"])}, 3000 + 100 * i);
				}
				
				for (let i = 0; i < 20; i ++){
					new Delay(()=>{spawnEnemy("BossSquare", ["Giant","Armored","Quick"])}, 1250 + 200 * i);
				}
				
				for (let i = 0; i < 20; i ++){
					new Delay(()=>{spawnEnemy("PlasticSquare")}, 850 + 100 * i);
					new Delay(()=>{spawnEnemy("TankSquare", ["Giant", "Giant", "Quick", "Quick"])}, 4100 + 250 * i);
				}
				
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("VoidSquare")}, 420 + 500 * i);
				}
				
				for (let i = 0; i < 15; i++){
					new Delay(()=>{spawnEnemy("LavaSquare", ["Armored","Giant","Quick"])}, 6500 + 200 * i);
				}
			
				new Delay(()=>{spawnEnemy("OmegaSquare")}, 9000);
			
				for (let i = 0; i < 8; i ++){
					new Delay(()=>{spawnEnemy("RusherSquare", ["Armored","Giant"])}, 8100 + 100 * i);
				}
				
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("NebulaSquare", ["Armored","Giant"])}, 8500 + 150 * i);
				}
				
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("TankSquare", ["Armored","Giant"])}, 8250 + 400 * i);
				}
				new Delay(() => {game.finishedRound = true}, 10250);
			},//
		];
	}
	LoadMap(){
	
	}
}