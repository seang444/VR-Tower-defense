class Maps{
	constructor(){
		this.Maps = [
			{
				"Name":"Forest Flats",
				"Difficulty":1,
				UnlockReq: ()=>{
					return true;
				},
				"environment": "forest",
				"StartGoal":[35,2,6],
				"EndGoal":[-5, 1, -3],
				"Nodes":[
					[35,2,6],
					[20,1,6],
					[20, 1, 0],
					[7, 1, 0],
					[7, 1, 7],
					[14, 1, 7],
					[14, 1, -7],
					[14, 1, -15],
					[-1, 1, -15],
					[-13, 1, -15],
					[-13, 1, 17],
					[5, 1, 17],
					[5, 1, 10],
					[-1, 1, 10],
					[-1, 1, -3],
					[-5, 1, -3],
				],
				"PathWidth": 2,
				"Gameboard": () => {
					let os = document.querySelector("#gameboard");
					
					let n = document.createElement("a-plane");
					n.setAttribute("ray", "");
					n.setAttribute("static-body", "");
					n.setAttribute("height", "500");
					n.setAttribute("width", "500");
					n.setAttribute("rotation", "-90 0 0");
					n.setAttribute("side", "double");
					n.setAttribute("color", "#aaa");
					n.setAttribute("opacity", "0");
					n.setAttribute("raycaster-listen","");				
					
					
					let f = document.createElement("a-entity");
					f.setAttribute("environment","preset: forest");
					f.setAttribute("active", "false");
					f.setAttribute("id","environment");
					
					os.appendChild(n);
					os.appendChild(f);
				},
			},
			{
				"Name":"Mushroom Mania",
				"Difficulty":2,
				UnlockReq: ()=>{
					return true;
				},
				"environment": "dream",
				"StartGoal":[8, 0, 21],
				"EndGoal":[-10, 0, 1],
				"Nodes":[
					[8,0,21],
					[8,1,22],
					[8,1,14],
					[-1,1,14],
					[-1, 1, 11],
					[-7, 1, 11],
					[-1, 1, 11],
					[-1, 1, 6],
					[10, 1, 6],
					[8, 1, 6],
					[8, 1, -7],
					[10, 1, -7],
					[-1, 1, -7],
					[-1, 1, -13],
					[-5, 1, -13],
					[-10, 1, -13],
					[-10, 1, -5],
					[-10, 1, -1],
					[-10, 0, 1],
				],
				"PathWidth": 3,
				"Gameboard": () => {
					let os = document.querySelector("#gameboard");
					
					let n = document.createElement("a-plane");
					n.setAttribute("ray", "");
					n.setAttribute("static-body", "");
					n.setAttribute("height", "500");
					n.setAttribute("width", "500");
					n.setAttribute("rotation", "-90 0 0");
					n.setAttribute("side", "double");
					n.setAttribute("color", "#fff");
					n.setAttribute("opacity", "0");
					n.setAttribute("raycaster-listen","");				
					
					
					let f = document.createElement("a-entity");
					f.setAttribute("environment","preset: dream");
					f.setAttribute("active", "false");
					f.setAttribute("id","environment");
					
					os.appendChild(n);
					os.appendChild(f);
				},
			},
			{
				"Name":"Volcanic Showdown",
				"Difficulty":3,
				UnlockReq: ()=>{
					return true;
				},
				"environment": "volcano",
				"StartGoal":[-5,1,-11],
				"EndGoal":[2, 1, -8],
				"Nodes":[
					[-5,1,-11],
					[-5,1,10],
					[3, 1, 10],
					[3, 1, 15],
					[12, 1, 15],
					[15, 1, 15],
					[15, 1, 1],
					[15, 1, -3],
					[10, 1, -3],
					[10, 1, -8],
					[15, 1, -8],
					[15, 1, -4],
					[10, 1, -4],
					//[15, 1, 0],
					[2, 1, -4],
					[2, 1, -8],
				],
				"PathWidth": 3,
				"Gameboard": () => {
					let os = document.querySelector("#gameboard");
					
					let n = document.createElement("a-plane");
					n.setAttribute("ray", "");
					n.setAttribute("static-body", "");
					n.setAttribute("height", "500");
					n.setAttribute("width", "500");
					n.setAttribute("rotation", "-90 0 0");
					n.setAttribute("side", "double");
					n.setAttribute("color", "#aaa");
					n.setAttribute("opacity", "0");
					n.setAttribute("raycaster-listen","");				
					
					
					let f = document.createElement("a-entity");
					f.setAttribute("environment","preset: volcano");
					f.setAttribute("active", "false");
					f.setAttribute("id","environment");
					
					os.appendChild(n);
					os.appendChild(f);
				},
			},
		]
	}
	LoadMap(stagename){
		for (var Stage in this.Maps){
		  if (stagename == this.Maps[Stage].Name){
			return this.Maps[Stage];
		  }
		}
	}
}