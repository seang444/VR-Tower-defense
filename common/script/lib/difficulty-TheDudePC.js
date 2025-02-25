

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
			Rounds:50,
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
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 400 + 800 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5500);
			},
			()=>{ //r6
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("Square"), ["Giant", "Quick"]}, 1000 + 1000 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 300 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 1500 + 300 * i);
				}
				new Delay(() => {game.finishedRound = true}, 4000);
			},
			()=>{ //r7
				for (let i = 0; i < 14; i ++){
					new Delay(()=>{spawnEnemy("Square")}, (500 + 500 * i/2));
					if (i%2 == 0){
						new Delay(()=>{spawnEnemy("Square")}, 750 + 500 * i/2);
					}
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 250 * i);
				}
				new Delay(() => {game.finishedRound = true}, 4250);
			},
			()=>{ //r8
				for (let i = 0; i < 10; i ++){
					if (i%2 == 0){
						new Delay(()=>{spawnEnemy("Square", ["Armored","Quick"])}, 1000 + 500 * i/2);
					}
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5000);
			},
			()=>{ //r9
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("Square", ["Armored"])}, 3500 + 500 * i);
					new Delay(()=>{spawnEnemy("Square",["Quick"])}, 6000 +  500 * i);
					if (i%3 == 0){
						new Delay(()=>{spawnEnemy("GraySquare")}, 500 * i);
					}
				}
				new Delay(() => {game.finishedRound = true}, 11000);
			},
			()=>{ //r10
				for (let i = 0; i < 15; i ++){
					new Delay(()=>{spawnEnemy("Square")}, 1000 + 250 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 250 * i);
				}
				for (let i =0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("GraySquare")}, 2000 + 500 * i);
				}
				new Delay(() => {game.finishedRound = true}, 4750);
			},
			()=>{ //r11
				for (let i = 0; i < 25; i ++){
					if (i%2 == 0){
						new Delay(()=>{spawnEnemy("PurpleSquare", ["Armored"])}, 100 * i);
					} else {
						new Delay(()=>{spawnEnemy("PurpleSquare", ["Quick"])}, 100 * i);
					}
				}
				new Delay(() => {game.finishedRound = true}, 5500);
			},
			()=>{ //r12
				for (let i = 0; i < 30; i ++){
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 350 * i);
				}
				for (let i = 0; i < 5; i ++){
					new Delay(()=>{spawnEnemy("CamoSquare")}, 500 * i);
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
				for (let i = 0; i < 10; i ++){
					new Delay(()=>{spawnEnemy("Square")}, 1000 + 200 * i);
					new Delay(()=>{spawnEnemy("CamoSquare")}, 800 * i);
					new Delay(()=>{spawnEnemy("GraySquare")}, 400 + 800 * i);
				}
				new Delay(() => {game.finishedRound = true}, 8400);
			},
			()=>{ //r15
				for (let i = 0; i < 3; i ++){
					new Delay(()=>{spawnEnemy("Square")}, 1000 + 1500 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 800 * i);
					new Delay(()=>{spawnEnemy("PurpleSquare")}, 400 + 800 * i);
				}
				new Delay(() => {game.finishedRound = true}, 5500);
			},
		];
	}
	LoadMap(){
	
	}
}