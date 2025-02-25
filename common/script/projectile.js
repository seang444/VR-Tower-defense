class Projectile{
	constructor(data, angle, tower, pos){
		this.active = true;
		this.data = data;
		
		this.hitFX = data.HitEffects;
		this.position = {x:pos.x, y:pos.y, z:pos.z};
		this.velocity = data.Speed || 25;
		this.angle = angle || [0,0];
		this.range = data.Range || 15;
		this.damage = data.Damage || 2;
		this.pierce = data.Pierce || 1;
		this.deadtick = 0;
		this.armorpierce = data.ArmorPierce || 0;
		this.explosive = data.Explosive || false;
		
		this.obj;
		this.createElement();
		this.ParentTower = tower;
		this.HitTypes = data.HitTypes;
		this.EnemiesHit = [];
		
		this.doneAnim = true;
		
		game.projectiles.push(this);
	}
	die(){
		this.active = false;
		this.obj.setAttribute("opacity", 0);
		this.obj.setAttribute("position", "5 -10 5");
		
		try{
			//this.obj.removeObject3D();
			if (this.obj != null){
				this.obj.parentNode.removeChild(this.obj);
				this.obj = null;
			}
			//if (this.obj != null){
			//	
			//}
			this.active = false;
			
			//
		} catch (error) {
			this.active = false;
			//game.projectiles.splice(game.projectiles.indexOf(this),1);
			//console.log(error, this.obj);
		}//game.projectiles.splice(game.projectiles.indexOf(this),1);
		
		return;
	}
	createElement(){
		this.position.y += 0.25;
		this.obj = document.createElement("a-sphere");
		this.obj.setAttribute("position", this.position);
		this.obj.setAttribute("scale", "0.5 0.5 0.5");
		this.obj.setAttribute("color", this.data.Color);
		
		if (this.explosive){
			this.obj.setAttribute("animation", "property: material.opacity; from: 1.0; to: 0.0 dur: 300; loop: 2; dir: alternate; easing: easeOutQuad; startEvents: animate");
		}
		//this.position = this.obj.getAttribute("position");
		
		projScene.append(this.obj);
	}
	damageVal(e){
		return Math.round(10 * clamp(e.DamageMulti * (this.damage - e.Armor * (1-(this.armorpierce/100))),0.1,1000))/10;
	}
	Hit(enemy){
		var canDamage = false;
		var cantDamage = false;
		var j = false;
		
		if (this.EnemiesHit.indexOf(enemy) > -1){ } else {
			this.EnemiesHit.push(enemy);

		  //check if the tower can hit the enemy (if enemy immune )
			for (var hitType of Object.keys(this.HitTypes)){
				if (hitType == "Invisible"){continue;};
	  
				if (enemy.ImmuneTypes[hitType]==false && this.HitTypes[hitType]==true){
					canDamage = true;
				}
				if (enemy.ImmuneTypes[hitType]==true && this.HitTypes[hitType]==true){
					cantDamage = true;
				}
			}
		  
			if (!this.HitTypes.Invisible && enemy.ImmuneTypes.Invisible){
				canDamage = false;
				cantDamage = true;
			}
			//if enemy dead
			if (enemy.Health <= 0){
				canDamage = false;
			}


		  //if enemy is valid target
		  if (cantDamage && !canDamage && game.projectiles.indexOf(this) > -1){
			this.die();
			game.projectiles.splice(game.projectiles.indexOf(this),1);
		  } else {
			if (!j){this.pierce-=1;j=!j;} else {j=!j};
			
			
			
			if (enemy.Health < 0) {return;}
		
			if (this.explosive && this.active){
				this.obj.setAttribute("scale", `${this.explosive.Range} ${this.explosive.Range} ${this.explosive.Range}`);
				this.obj.setAttribute("color", "#f00");
				this.obj.emit("animate");
				this.doneAnim = false;
				
				game.enemies.forEach((e) => {
					if (distance2D(this.position, e.position) < this.explosive.Range){
						e.Health -= this.damageVal(e);
						this.ParentTower.Statistics.damageCount += Math.round( 10 * this.damageVal(e)) /10;
						
						if (this.hitFX){
							try{
								this.hitFX(enemy);
							}catch(ex){
								
							}
						}
					};
				});
				
				this.active = false;
				
				setTimeout(()=>{this.die(); this.doneAnim = true;}, 500);
			} else if (this.active) {
				if (this.hitFX){
					try{
						this.hitFX(enemy);
					}catch(ex){
								
					}
				}
				enemy.Health -= this.damageVal(enemy);
				this.ParentTower.Statistics.damageCount += Math.round( 10 * this.damageVal(enemy)) /10;
			}
		  }
		}
	}
	Update(){
		if (this.active == false){	
			if (this.doneAnim){
				this.deadtick++;
			}
			return;
		}
		this.position.x += (20/1000) * Math.cos(this.angle[0])*this.velocity;
		this.position.y += (20/1000) *this.angle[1] * this.velocity;
		this.position.z += (20/1000) *Math.sin(this.angle[0])*this.velocity;
		
		
		this.obj.setAttribute("position", this.position);
		
		this.range -= this.velocity * (20/1000);
		
		if (this.range <= 0) {
			this.die();
			return;
		}
		
		game.enemies.forEach((e) => {
			if (distance2D(this.position, e.position) < (1.5 + this.velocity/40) && e.alive == true && this.active){
				this.Hit(e);
				
				if (this.pierce <= 0 && this.explosive == false){
					this.die();
					return;
				}
			};
		});		
	}
}