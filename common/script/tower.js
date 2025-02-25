class Tower{
	constructor(data, position){
		this.active = true;
		this.data = data;
		this.name = Object.keys(Towers.DataStorage).filter(key => Towers.DataStorage[key][0] === data)[0];
		
		this.showRange = false;
		this.RangeObj;
		
		this.position = position;
		this.scale = data.scale;
		this.size = data.TowerStats.Size;
		
		this.position.y += 0.5;
		
		
		this.buffs = [];
		this.Targeting = "First";
		
		this.AttackSettings = {
			damage:data.TowerStats.Damage,
			range:data.TowerStats.Range,
			cooldowntick:0,
			cooldown:data.TowerStats.Cooldown*50,
		}
		
		this.Statistics = {
			type:data.Type,
			damageCount:0,
			value:data.TowerStats.Cost,
			upgrade:0,
		}

		this.projectile = data.ProjectileSettings;
		
		this.obj = data.TowerObject(this.position);
		this.createElement();
		
		
		
		game.towers.push(this);
	}
	displayRange(placing = false){
		this.RangeObj = document.createElement("a-cylinder");
		this.RangeObj.setAttribute("opacity", "0.25");
		
		this.RangeObj.setAttribute("position", {x:this.position.x, y:this.position.y-0.15, z:this.position.z});
		this.RangeObj.setAttribute("color", "#0f0");
		this.RangeObj.setAttribute("segments-radial", "8");
		this.RangeObj.setAttribute("rotation", "0 0 0");
		this.RangeObj.setAttribute("scale", `${this.AttackSettings.range} 0.55 ${this.AttackSettings.range}`);
		
		if (placing == false){
			this.RangeObj.setAttribute("id", "range");
			scene.append(this.RangeObj);
		} else {
			let rangeD = document.querySelector("#placing");
			
			this.RangeObj.setAttribute("id", "rangePlace");
			rangeD.append(this.RangeObj);
		}
	}
	createElement(){
		
		this.obj.setAttribute("position", this.position);
		this.obj.setAttribute("ray","");
		//this.position = this.obj.getAttribute("position");
		
		this.obj.addEventListener("mouseenter", () => {
			
		});
		
		this.obj.addEventListener("mouseleave", () => {
			
		});
		
		this.obj.addEventListener("click", (e) => {
			this.showRange = !this.showRange;
			
			if (this.showRange){
				//this.displayRange();
				game.SelectedTower = this;
				game.DisplayRange = true;
			} else {
				game.DisplayRange = false;
			}
		});
		
		towerScene.append(this.obj);
	}
	GetTarget(){
		if (this.Targeting == "First"){
			var highestValue = -1;
			var selectedEnemy = null;
			
			for (var Enemy of Object.values(game.enemies)){
				if (Enemy.walkValue > 2 && Enemy.walkValue > highestValue && distance2D(this.position, Enemy.position) <= this.AttackSettings.range){
					highestValue = Enemy.walkValue;
					selectedEnemy = Enemy;
				}
			}
			
			
			if (selectedEnemy != null){
				return selectedEnemy;
			} else {
				return false;
			}
		} else if (this.Targeting == "Last"){
			var highestValue = 9999;
			var selectedEnemy = null;
			
			for (var Enemy of Object.values(game.enemies)){
				if (Enemy.walkValue > 2 && Enemy.walkValue < highestValue && distance2D(this.position, Enemy.position) <= this.AttackSettings.range){
					highestValue = Enemy.walkValue;
					selectedEnemy = Enemy;
				}
			}
			
			if (selectedEnemy != null){
				return selectedEnemy;
			} else {
				return false;
			}
		} else if (this.Targeting == "Strong"){
			var highestValue = -1;
			var selectedEnemy = null;
			
			for (var Enemy of Object.values(game.enemies)){
				if (Enemy.walkValue > 2 && Enemy.Health > highestValue && distance2D(this.position, Enemy.position) <= this.AttackSettings.range){
					highestValue = Enemy.Health;
					selectedEnemy = Enemy;
				}
			}
			
			if (selectedEnemy != null){
				return selectedEnemy;
			} else {
				return false;
			}
		} else if (this.Targeting == "Weak"){
			var highestValue = 9999;
			var selectedEnemy = null;
			
			for (var Enemy of Object.values(game.enemies)){
				if (Enemy.walkValue > 2 && Enemy.Health < highestValue && distance2D(this.position, Enemy.position) <= this.AttackSettings.range){
					highestValue = Enemy.Health;
					selectedEnemy = Enemy;
				}
			}
			
			if (selectedEnemy != null){
				return selectedEnemy;
			} else {
				return false;
			}
		} else if (this.Targeting == "Far"){
			var highestValue = -1;
			var selectedEnemy = null;

			for (var Enemy of Object.values(game.enemies)){
				if (distance2D(this.position,Enemy.position) > highestValue && distance2D(this.position,Enemy.position) <= this.AttackSettings.range){
					highestValue = distance2D(this.position,Enemy.position);
					selectedEnemy = Enemy;
				}
			}
			if (selectedEnemy!=null){
				return selectedEnemy;
			} else{
				return false;
			}
		} else if (this.Targeting == "Close"){
			var highestValue = 10000;
			var selectedEnemy = null;

			for (var Enemy of Object.values(game.enemies)){
				if (distance2D(this.position,Enemy.position) < highestValue && distance2D(this.position,Enemy.position) <= this.AttackSettings.range){
					highestValue = distance2D(this.position,Enemy.position);
					selectedEnemy = Enemy;
				}
			}
			if (selectedEnemy!=null){
				return selectedEnemy;
			} else{
				return false;
			}
		}
	}
	SwitchTarget(n,ret=false){
		//First,Last,Strong,Weak,Close		
		if (ret == true){
			if (n == -1){
				if (this.Targeting == "First"){
					return "Last";
				} else if (this.Targeting == "Last"){
					return "Strong";
				} else if (this.Targeting == "Strong"){
					return "Weak";
				} else if (this.Targeting == "Weak"){
					return "Close";
				} else if (this.Targeting == "Close"){
					return "Far";
				} else if (this.Targeting == "Far"){
					return "First";
				}
			} else {
				if (this.Targeting == "First"){
					return "Far";
				} else if (this.Targeting == "Far"){
					return "Close";
				} else if (this.Targeting == "Close"){
					return "Weak";
				} else if (this.Targeting == "Weak"){
					return "Strong";
				} else if (this.Targeting == "Strong"){
					return "Last";
				} else if (this.Targeting == "Last"){
					return "First";
				}
			}
		} else {
			if (n == -1){
				if (this.Targeting == "First"){
					this.Targeting = "Last";
				} else if (this.Targeting == "Last"){
					this.Targeting = "Strong";
				} else if (this.Targeting == "Strong"){
					this.Targeting = "Weak";
				} else if (this.Targeting == "Weak"){
					this.Targeting = "Close";
				} else if (this.Targeting == "Close"){
					this.Targeting = "Far";
				} else if (this.Targeting == "Far"){
					this.Targeting = "First";
				}
			} else {
				if (this.Targeting == "First"){
					this.Targeting = "Far";
				} else if (this.Targeting == "Far"){
					this.Targeting = "Close";
				} else if (this.Targeting == "Close"){
					this.Targeting = "Weak";
				} else if (this.Targeting == "Weak"){
					this.Targeting = "Strong";
				} else if (this.Targeting == "Strong"){
					this.Targeting = "Last";
				} else if (this.Targeting == "Last"){
					this.Targeting = "First";
				}
			}
		}
	}
	Sell(){
		if (this.Statistics.value > 0){
			game.cash += Math.round(this.Statistics.value * 0.45);
			
			game.towers.splice(game.towers.indexOf(this),1);
			this.obj.remove();
			return;
		}
	}
	Fire(){
		let Target = this.GetTarget();
		
		if (Target){
			
			this.Statistics.damageCount = Math.round(10 * this.Statistics.damageCount)/10;
			let angle = game.getAngleBetweenObjects(this.obj.components.position.data, Target.position);
			//console.log(angle);
			let N = new Projectile(this.projectile, [angle,0], this, this.obj.components.position.data);
			this.AttackSettings.cooldowntick = 0;
		}
	}
	Update(){
		this.AttackSettings.cooldowntick += 1;
		
		if (this.AttackSettings.cooldowntick >= this.AttackSettings.cooldown){
			this.Fire();
		}
		
	}
	Upgrade(){
		if (Towers.DataStorage[this.name].length >= this.Statistics.upgrade+1 && game.cash -  Towers.DataStorage[this.name][this.Statistics.upgrade+1].TowerStats.Cost >= 0){
			this.Statistics.upgrade++;
			this.Statistics.value += Towers.DataStorage[this.name][this.Statistics.upgrade].TowerStats.Cost;
			game.cash -= Towers.DataStorage[this.name][this.Statistics.upgrade].TowerStats.Cost;
			
			this.obj.remove();
			
			let newDat = Towers.DataStorage[this.name][this.Statistics.upgrade];
			console.log(this.position);
			this.obj = Towers.DataStorage[this.name][this.Statistics.upgrade].TowerObject(this.position);
			
			this.createElement();
			
			if (this.Statistics.type == "Attack"){
				this.data = newDat;
				this.scale = newDat.scale;
				this.size = newDat.TowerStats.Size;
				
				this.buffs = [];
				
				this.AttackSettings = {
					damage:newDat.TowerStats.Damage,
					range:newDat.TowerStats.Range,
					cooldowntick:0,
					cooldown:newDat.TowerStats.Cooldown*50,
				}

				this.projectile = newDat.ProjectileSettings;
				
				console.log("success");
			}
		}
	}
}