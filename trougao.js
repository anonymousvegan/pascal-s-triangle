let node=false;
function uradi(){
	let	s="", poslednji_znak="*", rediznad=[], noviRed=[], html="<table>", n; 
	if(node) n=5 
	else n= parseInt(document.getElementById("broj").value)
	for(a=0; a<2*n-1; a++){
		rediznad.push(0)
	}
	for (i=1; i<=n; i++){
		s+=i+":"
		html+="<tr>"
		html+="<td>"+i+": </td>"
		for(j=1; j<=2*n-1; j++){
			html+="<td>"
			if(j<=n-i || j>2*n-1 - (n-i) ){
				noviRed.push(0);
				s+=" "
				html+="</td>"
			}
			else{
				if(poslednji_znak=="#"){
					noviRed.push(0)
					s+=" ";
					poslednji_znak="*";
					html+="</td>"
				}
				else{
					if(i==1 || i==2){
					noviRed.push(1)
					}
					else{
						if(noviRed.length+1<rediznad.length && noviRed.length-1>=0){
						noviRed.push(
							rediznad[
							noviRed.length-1]+
							rediznad[
							noviRed.length+1]
						)}
						else{
							noviRed.push(1);
						}
					}
					html+=noviRed[noviRed.length-1]+"</td>"
					s+=noviRed[noviRed.length-1]
					poslednji_znak="#";
				}
			}
		}
		rediznad=noviRed;
		noviRed=[]
		s+="\n"
		html+="</tr>"
		poslednji_znak="*"
	}
	if(node) console.log(s)
	else document.getElementById("out").innerHTML=html;
	}
	if(node) 
		uradi()
	/*
	1. program dobija  broj n, toliko redova treba da ispiše  znači! 
	2. u ovom slučaju to je 5, znači 5 redova.
	3. svaki red ima  9 ćelija, dakle n*2-1;
	4. broj ćelija će uvek biti neparan (2n-1), samim tim znamo da imamo broj koji će ići u sredinu
	5. u prvom redu n-1 prazna mesta, pa jedno popunjeno, pa opet n-1 prazna
	6. u drugom redu imamo n-2 prazna mesta sa strane, dakle prva 3 i zadnja 3 su prazna,
	u sredini imamo popunjeno-prazno-puno  ponavljanje.
	7. u trećem redu n-3, razključujemo, formula za prvih par  razmaka je n-broj reda,
	8. sredina ide naizmenično, broj-razmak-broj- razmak
	9 kraj  idu razmaci, opet
	10. gde god je broj, sabira se sa 2 broja iznd njega.
	11. paziti na array.lenght da ne bude > 2n-1 ili <0!

	* * * * # * * * *
	* * * # * # * * *
	* * # * # * # * *
	* # * # * # * # *
	# * # * # * # * #

	1 2 3 4 5 6 7 8 9
	0 0 0 0 0 0 0 0 0
	0 0 0 0 1 0 0 0 0
	0 0 0 1 0 1 0 0 0
	0 0 1 0 2 0 1 0 0
	0 1 0 3 0 3 0 1 0
	1 0 
	*/