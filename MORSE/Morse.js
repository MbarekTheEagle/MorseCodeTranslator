//بسم الله الرحمان الرحيم
//alert("بسم الله الرحمان الرحيم");

let t = document.getElementById("INP");
let TArea = document.getElementById("TXT");
let BTN = document.getElementById("B1");
let DV = document.getElementById("D1");

// function myFunction(){
  // TArea.innerHTML=T.value;
// }
function myFunction(){
	let T = t.value.toUpperCase();
  if(T=="A"){
	  FA();
      FAbis();
  }
  else if(T=="B"){
	  FB();
  }
   else if(T=="C"){
	  FC();
  }
   else if(T=="D"){
	  FD();
  } else if(T=="E"){
	  FE();
  } else if(T=="F"){
	  FF();
  } else if(T=="G"){
	  FG();
  } else if(T=="H"){
	  FH();
  } else if(T=="I"){
	  FI();
  } else if(T=="J"){
	  FJ();
  } else if(T=="K"){
	  FK();
  } else if(T=="L"){
	  FL();
  } else if(T=="M"){
	  FM();
  } else if(T=="N"){
	  FN();
  } else if(T=="O"){
	  FO();
  } else if(T=="P"){
	  FP();
  }else if(T=="Q"){
	  FQ();
  }else if(T=="R"){
	  FR();
  }else if(T=="S"){
	  FS();
  }else if(T=="T"){
	  FT();
  }else if(T=="U"){
	  FU();
  }else if(T=="V"){
	  FV();
  }else if(T=="W"){
	  FW();
  }else if(T=="Y"){
	  FY();
  }else if(T=="Z"){
	  FZ();
  }
}

function Length(){
  t.value="";
  TArea.value="";
}
////////////////////////
function FAbis(){

}


function FA(){
  TArea.innerHTML=".-";
}
function FB(){
  TArea.innerHTML="-...";
}
function FC(){
  TArea.innerHTML="-.-.";
}
function FD(){
  TArea.innerHTML="-..";
}
function FE(){
  TArea.innerHTML=".";
}
function FF(){
  TArea.innerHTML="..-.";
}
function FG(){
  TArea.innerHTML="--.";
}
function FH(){
  TArea.innerHTML="....";
}
function FI(){
  TArea.innerHTML="..";
}
function FJ(){
  TArea.innerHTML=".---";
}
function FK(){
  TArea.innerHTML="-.-";
}
function FL(){
  TArea.innerHTML=".-..";
}
function FM(){
  TArea.innerHTML="--";
}
function FN(){
  TArea.innerHTML="-.";
}
function FO(){
  TArea.innerHTML="---";
}
function FP(){
  TArea.innerHTML=".--.";
}
function FQ(){
  TArea.innerHTML="--.-";
}
function FR(){
  TArea.innerHTML=".-.";
}
function FS(){
  TArea.innerHTML="...";
}
function FT(){
  TArea.innerHTML="-";
}
function FU(){
  TArea.innerHTML="..-";
}
function FV(){
  TArea.innerHTML="...-";
}
function FW(){
  TArea.innerHTML=".--";
}
function FX(){
  TArea.innerHTML="-..-";
}
function FY(){
  TArea.innerHTML="-.--";
}
function FZ(){
  TArea.innerHTML="--..";
}
///
const mapping = {
					"A" : ".-", "B" : "-...","C" : "-.-.", "D" : "-..",
					"E" : ".", "F" : "..-.", "G" : "--.", "H" : "....",
					"I" : "..", "J" : ".---", "K" : "-.-", "L" : ".-..",
					"M" : "--", "N" : "-.", "O" : "---", "P" : ".--.",
					"Q" : "--.-", "R" : ".-.", "S" : "...", "T" : "-",
					"U" : "..-", "V" : "...-", "W" : ".--", "X" : "-..-",
					"Y" : "-.--", "Z" : "--..",
					
					
					"0" : "-----",
					"1" : ".----", "2" : "..---", "3" : "...--",
					"4" : "....-", "5" : ".....", "6" : "-....",
					"7" : "--...", "8" : "---..", "9" : "----."
				}
				

function text2morse(){
	
	let t = document.getElementById("INP").value; //khda value
	
	T = t.toUpperCase(); //upper case 
	
	let arr1 = T.split(""); //split all caracters including spaces
	
	let arr2 = arr1.map(x => {
		if(mapping[x])
		{
			return mapping[x];
		}
		else{						
			return x;
		}
	});
	
	let code = arr2.join(" ");
	
	TArea.innerHTML = code;
}
/////////
let id = null;
function myMove() {
	let DV = document.getElementById("D1");
	let TArea = document.getElementById("TXT");
    let T = t.value.toUpperCase();
  if(T=="A"){
	 DV.style.backgroundColor ="green";
	 DV.style.backgroundColor ="white";
	 DV.style.backgroundColor ="green";
  }
}