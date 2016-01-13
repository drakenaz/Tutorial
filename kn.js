var liko=9;
var eitiZaidejui = Math.floor(Math.random()*2);
var answered = false;
var atsakas = 10;
var atsakoMygtukas;
var xwinnings = 0;
var owinnings = 0;
var tie = 0;


answer = function(){	
	var pirmas;
	var antras;
	var atsakoLaukas;
	 
	 answered = false;
	 console.log(answered);
	 if(liko==9){
	 document.getElementById(22).setAttribute("Class", "o");
	 atsakas = 22;
	 atsakoMygtukas = document.getElementById(122);
	 liko--;
	 }else{
		 centerSide();
		 center();
		 hit3rd(table);
		 hit3rd(triangle);
		 console.log(answered);
		 randomas();

}
atsakas=atsakas.toString();
atsakoMygtukas.setAttribute("Class","nematoma");
tikrinimas(atsakas);
}

randomas = function(){console.log("pirmas")
	if(answered == false){console.log("antras")
		do{
		var pirmas = Math.floor(Math.random()*3+1);
		var antras = Math.floor(Math.random()*3+1);
		var atsakas = pirmas*10 + antras;
		atsakoMygtukas = document.getElementById("1" + atsakas);
		atsakoLaukas = document.getElementById(atsakas);
		console.log("vyskta")
	}
	while(
		atsakoLaukas.getAttribute("class") !== "blank" 
	);
	document.getElementById(atsakas).setAttribute("Class", "o");
	answered = true;
	liko--;
		console.log("random");
	}
	
}

var table = new Object();
table.line1 = [11, 12, 13];
table.line2 = [21, 22, 23];
table.line3 = [31, 32, 33];
table.line4 = [11, 21, 31];
table.line5 = [12, 22, 32];
table.line6 = [13, 23, 33];
table.line7 = [11, 22, 33];
table.line8 = [13, 22, 31]; 

var triangle = new Object();
triangle.triangle1 = [11, 12, 22];
triangle.triangle2 = [12, 13, 22];
triangle.triangle3 = [13, 23, 22];
triangle.triangle4 = [23, 33, 22];
triangle.triangle5 = [33, 32, 22];
triangle.triangle6 = [32, 31, 22];
triangle.triangle7 = [31, 21, 22];
triangle.triangle8 = [21, 12, 22];


	
	/*

line11 = function(a){
table.line1[0] = table.line4[0] = table.line7[0] = triangle.triangle1[0] = triangle.triangle8[1] = a;}
line12 = function(a){
table.line1[1] = table.line5[0]  = triangle.triangle1[1] = triangle.triangle2[0] = a;}
line13 = function(a){
table.line1[2] = table.line6[0] = table.line8[0]; triangle.triangle2[1]; triangle.triangle3[0] = a;}
line21 = function(a){
table.line2[0] = table.line4[1] = triangle.triangle7[1] = triangle.triangle8[0]=a;}
line22 = function(a){
table.line2[1] = table.line5[1] = table.line7[1] = table.line8[1] = triangle.triangle1[2] = triangle.triangle2[2] = triangle.triangle3[2] = triangle.triangle4[2] = triangle.triangle5[2] = triangle.triangle6[2] = triangle.triangle7[2] = triangle.triangle8[2] = a;}
line23 = function(a){
table.line2[2] = table.line6[1] = triangle.triangle3[1] = triangle.triangle4[0] = a;}
line31 = function(a){
table.line3[0] = table.line4[2] = table.line8[0] = triangle.triangle6[1] = triangle.triangle7[0] = a;}
line32 = function(a){
table.line3[1] = table.line5[2] = triangle.triangle5[1] = triangle.triangle6[0] = a;}
line33 = function(a){
table.line3[2] = table.line6[2] = table.line7[2] = triangle.triangle4[1] = triangle.triangle5[0] = a;}

*/

centerSide = function(){
	
if(answered==false && liko == 7 && document.getElementById(22).getAttribute("Class")=="o" &&  (document.getElementById(12).getAttribute("Class")=="x" || document.getElementById(23).getAttribute("Class")=="x" || document.getElementById(32).getAttribute("Class")=="x" || document.getElementById(21).getAttribute("Class")=="x")){
	console.log("tikrinacenterside");
	if(document.getElementById(12).getAttribute("Class")=="x" || document.getElementById(21).getAttribute("Class")=="x"){
		document.getElementById(11).setAttribute("Class", "o");
		atsakas = 11;
		answered = true;
		atsakoMygtukas = document.getElementById(111);
		console.log("centerside");
		liko--;
	}else{
		document.getElementById(33).setAttribute("Class", "o");
		atsakas = 33;
		answered = true;
		atsakoMygtukas = document.getElementById(133);
		console.log("centerside2");
		liko--;
	}
	}
}





center = function(){
	if( answered === false && liko == 8 && document.getElementById(22).getAttribute("Class")=="x" ){
		document.getElementById(11).setAttribute("Class", "o");
		atsakas = 11;
		answered = true;
		atsakoMygtukas = document.getElementById(111);
		console.log("center");
		liko--;
		console.log(liko);
	} else {
		if(liko == 8 ){
			console.log("center2")
			document.getElementById(22).setAttribute("Class", "o");
			atsakas = 22;
			answered = true;
			atsakoMygtukas = document.getElementById(122);
			liko--;
		}
	}
}


hit3rd = function(chosenarray){
	var xhit=0;
	var ohit=0;
	var blanks=0;
	var emptyOne;
for(i=0; i<8; i++){
	var xhit=0;
	var ohit=0;
	var blanks=0;
	for(j=0; j<3; j++){
		var temporary = chosenarray[Object.keys(chosenarray)[i]][j];
		if (document.getElementById(temporary).getAttribute("class") === "x"){
		xhit++} else{
			if (document.getElementById(temporary).getAttribute("class") === "o"){
			ohit++} else {
				blanks++ ;
				emptyOne = chosenarray[Object.keys(chosenarray)[i]][j] ;
				}
			}
		}
		if (ohit===2 && blanks == 1 && answered == false){
		console.log("hit3rd")
		document.getElementById(emptyOne).setAttribute("Class", "o");
		atsakas = emptyOne;
		atsakoMygtukas = document.getElementById("1"+ emptyOne);
		liko--;
		answered = true;
	} else {
		if (xhit===2 && blanks == 1 && answered == false){
		console.log("hit3rd")
		document.getElementById(emptyOne).setAttribute("Class", "o");
		atsakas = emptyOne;
		atsakoMygtukas = document.getElementById("1"+ emptyOne);
		liko--;
		answered = true;
		}
	}
	
	
	}
}




/*stulpelius tikrinu*/
etikrinimas = function(spejimas){
	var spejimas=spejimas.toString();
var stulpelis=spejimas.charAt("1");
var tikrinimui1=document.getElementById("1"+stulpelis);
var tikrinimui2=document.getElementById("2"+stulpelis);
var tikrinimui3=document.getElementById("3"+stulpelis);
if (tikrinimui1.getAttribute("class")==tikrinimui2.getAttribute("class") && tikrinimui2.getAttribute("class") === tikrinimui3.getAttribute("class")){
	if(tikrinimui1.getAttribute("class") == "o"){
		thisGame("Laimėjo priešininkas");
		owinnings++;
		stoppp();
	result();}
}
}


/*eilutes tikrinu*/
stikrinimas = function(spejimas){
var eilute=spejimas.charAt("0");
var tikrinimui1=document.getElementById(eilute+"1");
var tikrinimui2=document.getElementById(eilute+"2");
var tikrinimui3=document.getElementById(eilute+"3");
if (tikrinimui1.getAttribute("class")==tikrinimui2.getAttribute("class") && tikrinimui2.getAttribute("class") === tikrinimui3.getAttribute("class")){
	if(tikrinimui1.getAttribute("class") == "o"){
		thisGame("Laimėjo priešininkas");
		owinnings++;
		stoppp();
	result();}
}
}



/*istrizaines tikrinu*/
i1Tikrinimas = function(spejimas){
var tikrinimui1=document.getElementById("11");
var tikrinimui2=document.getElementById("22");
var tikrinimui3=document.getElementById("33");
if (tikrinimui1.getAttribute("class") != "blank" && tikrinimui1.getAttribute("class")==tikrinimui2.getAttribute("class") && tikrinimui2.getAttribute("class")==tikrinimui3.getAttribute("class")){
	if(tikrinimui1.getAttribute("class") == "o"){
		thisGame("Laimėjo priešininkas");
		owinnings++;
		stoppp();
	result();}
};
}

i2Tikrinimas = function(spejimas){
var tikrinimui1=document.getElementById("13");
var tikrinimui2=document.getElementById("22");
var tikrinimui3=document.getElementById("31");
if (tikrinimui1.getAttribute("class") != "blank" && tikrinimui1.getAttribute("class")==tikrinimui2.getAttribute("class") && tikrinimui2.getAttribute("class")==tikrinimui3.getAttribute("class")){
	if(tikrinimui1.getAttribute("class") == "o"){
		thisGame("Laimėjo priešininkas");
		owinnings++;
		stoppp();
	result();}
	}
};

tikrinimas=function(spejimas)
{
etikrinimas(spejimas);
stikrinimas(spejimas);
i1Tikrinimas(spejimas);
i2Tikrinimas(spejimas);
}


/*paslepiu paspausta mygtuka*/

vykdyti=function(verte){
	var mygtukas=document.getElementById(verte);	
	mygtukas.setAttribute("Class", "nematoma");
	var verte=verte.toString();
	console.log(verte);
	var Verte=verte.substring(1);
	console.log(Verte);
	var laukelis=document.getElementById(Verte);
	console.log(laukelis);
	laukelis.setAttribute("Class","x");
	tikrinimas(Verte);
	liko--;
	console.log(liko);
	if( liko===0 ){
		tie++;
		thisGame("Lygiosios!");
		result();
	}else{
		answer();
		if(liko===0){
			tie++;
			thisGame("Lygiosios!");
			result();
			console.log(tie);
		}
	}
}

result = function(){
	document.getElementById("resultx").innerHTML = xwinnings;
	document.getElementById("tie").innerHTML = tie;
	document.getElementById("resulto").innerHTML = owinnings;
}


thisGame = function(mes){
	var as = document.getElementById("thisGame");
as.innerHTML=mes;
}

stoppp = function(){console.log("stop");
	for(i=1; i<4; i++){
		for(j=1; j<4; j++){
		if((document.getElementById(i + "" + j).getAttribute("Class") != "x")&&(document.getElementById(i + "" + j).getAttribute("Class") != "o")){
			document.getElementById("1" + i + "" + j).setAttribute("Class", "nematoma");
		}
			
		}
}
}

restart = function(){
	for(i=1; i<4; i++){
		for(j=1; j<4; j++){
			thisGame("Vyksta žaidimas");
			document.getElementById(i + "" + j).setAttribute("Class", "blank");
			document.getElementById("1" + i + "" + j).setAttribute("Class", "matoma");
		}
	}
	liko=9;
	eitiZaidejui = Math.floor(Math.random()*2);
	if(eitiZaidejui){answer();};
	
}

if(eitiZaidejui){answer();};