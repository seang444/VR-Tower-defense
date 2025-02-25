class EnemyStorage{
	constructor(){
		this.DataStorage = {
			Square: {
				Health: 10,
				Armor: 0,
				Speed: 5,
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:false,
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#c22");
					G.setAttribute("scale", "1 1 1");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			PurpleSquare: {
				Health: 7,
				Armor: 0,
				Speed: 8,
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:false,
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#92a");
					G.setAttribute("scale", "0.8 0.8 0.8");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			GraySquare: {
				Health: 15,
				Armor: 3,
				Speed: 3,
				
				ImmuneTypes:{
					Physical:true,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:false,
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#aaa");
					G.setAttribute("src", "#metal");
					G.setAttribute("repeat", "1 1");
					G.setAttribute("scale", "1.5 1.5 1.5");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			CamoSquare: {
				Health: 15,
				Armor: 0,
				Speed: 5,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: false,
					Invisible: true,
				},
				ImmuneEffects:false,
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#090");
					G.setAttribute("src", "#camo");
					G.setAttribute("repeat", "1 1");
					G.setAttribute("scale", "1 1 1");
					G.setAttribute("opacity", "0.7");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			SuperCamoSquare: {
				Health: 100,
				Armor: 5,
				Speed: 5,
				
				ImmuneTypes:{
					Physical:true,
					Metal:false,
					Magic: false,
					Invisible: true,
				},
				ImmuneEffects:false,
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#aaa");
					G.setAttribute("src", "#camo");
					G.setAttribute("repeat", "1 1");
					G.setAttribute("scale", "1.5 1.5 1.5");
					G.setAttribute("opacity", "0.5");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			BlueSquare: {
				Health: 30,
				Armor: 0,
				Speed: 8,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: true,
					Invisible: false,
				},
				ImmuneEffects:["Freezing"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#22b");
					G.setAttribute("scale", "1.2 1 1.2");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			BossSquare: {
				Health: 300,
				Armor: 0,
				Speed: 3,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:false,
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#fff");
					G.setAttribute("scale", "2 2 2");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			FireSquare: {
				Health: 35,
				Armor: 2,
				Speed: 16,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: true,
					Invisible: false,
				},
				ImmuneEffects:["Burning"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-sphere");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#a00");
					G.setAttribute("scale", "1 1 1");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			GuardianSquare: {
				Health: 50,
				Armor: 15,
				Speed: 5,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: true,
					Invisible: false,
				},
				ImmuneEffects:["Burning","ElectrocutedAMelt","Electrocuted","Freezing"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#000");
					G.setAttribute("scale", "1.5 1 1.5");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			YellowSquare: {
				Health: 200,
				Armor: 0,
				Speed: 8,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: true,
					Invisible: false,
				},
				ImmuneEffects:["Electrocuted","ElectrocutedAMelt"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-cone");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#ff0");
					G.setAttribute("scale", "1 1 1");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			SteelSquare: {
				Health: 80,
				Armor: 20,
				Speed: 3,
				
				ImmuneTypes:{
					Physical:true,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:["ShellShock"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#00b");
					G.setAttribute("scale", "1.25 1.25 1.25");
					G.setAttribute("src", "#metal");
					G.setAttribute("repeat", "1 1");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			LeaderSquare: {
				Health: 1200,
				Armor: 5,
				Speed: 5,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:["ShellShock"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#af0");
					G.setAttribute("scale", "2.5 2.5 2.5");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			TankSquare: {
				Health: 600,
				Armor: 50,
				Speed: 2,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:["ShellShock"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#333");
					G.setAttribute("src", "#metal");
					G.setAttribute("repeat", "1 1");
					G.setAttribute("scale", "2 2 2");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			RusherSquare: {
				Health: 250,
				Armor: 0,
				Speed: 15,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:["ShellShock","Freezing","Electrocuted"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("repeat", "1 1");
					G.setAttribute("color", "#a0a");
					G.setAttribute("opacity", "0.9");
					G.setAttribute("scale", "1.2 1.2 1.2");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			WhiteSquare: {
				Health: 650,
				Armor: 5,
				Speed: 8,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: true,
					Invisible: true,
				},
				ImmuneEffects:["ShellShock","Freezing","Electrocuted","ElectrocutedAMelt","Burning","PermaFrost","PermaShock"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#fff");
					G.setAttribute("scale", "1.2 1.2 1.2");
					
					position.y += 0.5;
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			GigaSquare: {
				Health: 5000,
				Armor: 10,
				Speed: 4,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:false,
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#afa");
					G.setAttribute("scale", "3 3 3");
					
					position.y += 1;
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			NebulaSquare: {
				Health: 500,
				Armor: 10,
				Speed: 5,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: true,
					Invisible: false,
				},
				ImmuneEffects:false,
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#fff");
					G.setAttribute("scale", "1.5 1.5 1.5");
					G.setAttribute("repeat", "1 1 1");
					G.setAttribute("src", "#nebula");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			
			VoidSquare: {
				Health: 25,
				Armor: 1000,
				Speed: 8,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:["Burning"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#000");
					G.setAttribute("scale", "1 1 1");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			
			LavaSquare: {
				Health: 400,
				Armor: 30,
				Speed: 20,
				
				ImmuneTypes:{
					Physical:false,
					Metal:true,
					Magic: true,
					Invisible: false,
				},
				ImmuneEffects:["Burning"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#fff");
					G.setAttribute("scale", "1.5 1.5 1.5");
					G.setAttribute("repeat", "1 1 1");
					G.setAttribute("src", "#lava");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			
			PlasticSquare: {
				Health: 100,
				Armor: 200,
				Speed: 25,
				
				ImmuneTypes:{
					Physical:false,
					Metal:true,
					Magic: true,
					Invisible: true,
				},
				ImmuneEffects:["Burning"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#ccc");
					G.setAttribute("scale", "1.25 1.25 1.25");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			
			FallenSquare: {
				Health: 10000,
				Armor: 25,
				Speed: 3,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:["ShellShock","Freezing","Electrocuted","ElectrocutedAMelt","Burning","PermaFrost","PermaShock"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#a05");
					G.setAttribute("scale", "3 3 3");
					G.setAttribute("opacity", "0.75");
					
					position.y += 1.5;
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
			
			KnightSquare: {
				Health: 200,
				Armor: 65,
				Speed: 10,
				
				ImmuneTypes:{
					Physical:false,
					Metal:true,
					Magic: true,
					Invisible: false,
				},
				ImmuneEffects:false,
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					let H = document.createElement("a-box");
					let J = document.createElement("a-box");
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#fff");
					G.setAttribute("scale", "1 1 1");
					
					H.setAttribute("Enemy", "");
					H.setAttribute("color", "#aaa");
					H.setAttribute("position", "0 -0.3 0");
					H.setAttribute("scale", "1.1 0.65 1.1");
					
					J.setAttribute("Enemy", "");
					J.setAttribute("color", "#aaa");
					J.setAttribute("scale", "1.1 0.25 1.1");
					J.setAttribute("position", "0 0.2 0");
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					Obj.append(J);
					Obj.append(H);
					return Obj;
				},
			},
			
			OmegaSquare: {
				Health: 25000,
				Armor: 10,
				Speed: 2,
				
				ImmuneTypes:{
					Physical:false,
					Metal:false,
					Magic: false,
					Invisible: false,
				},
				ImmuneEffects:["ShellShock","Freezing","Electrocuted","ElectrocutedAMelt","Burning","PermaFrost","PermaShock"],
				
				EnemyObject:(position)=>{
					let Obj = document.createElement("a-entity");
					let G = document.createElement("a-box");
					
					G.setAttribute("Enemy", "");
					G.setAttribute("color", "#fff");
					G.setAttribute("scale", "4 3 4");
					G.setAttribute("repeat", "1 1 1");
					G.setAttribute("src", "#nebula");
					G.setAttribute("opacity", "0.5");
					
					position.y -= 0.5;
					
					Obj.setAttribute("position", position);
					Obj.append(G);
					return Obj;
				},
			},
		}
	}
}