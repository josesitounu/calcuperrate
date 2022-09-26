/*  <h4>web para ver si con la ayuda de dios y todos los santos pasas el corte <span>ingresa la nota con su respectivo porcentaje</span></h4>   */

let n_notas;
let cont;
let arraynotas = [];
let arrayporcen = [];
let arraynotasENT = [];
let arrayporENT = [];
let sumaRel = 0;
let aprobacion = "";
let sumaPor = 0;
let porcen = 0;
let notaImag = 0;
let final = 0;
let mondongo = 0;

function num_notas(n_notas) {
	
	n_notas = document.getElementById("n_notas").value

	cont = parseInt(n_notas)

		for(let i = 0; i < cont; i++){

				const input = document.createElement("input");
				input.id = "notas"+[i]
				input.type = "text"

				const input2 = document.createElement("input");
				input2.id = "porcentaje"+[i]
				input2.type = "text"

				const label = document.createElement("label");
				label.textContent = "nota: " +([i+1])

				const label2 = document.createElement("label");
				label2.textContent = "%: " +([i+1])


				const n_notasHTML = document.createElement("div")
				n_notasHTML.id = "labelMolesto"


				const n_notasHTMLhijo1 = document.createElement("div")
				n_notasHTMLhijo1.id = "labelMolestohijo"

				const n_notasHTMLhijo2 = document.createElement("div")
				n_notasHTMLhijo2.id = "labelMolestohijo"



				n_notasHTMLhijo1.appendChild(label)

				n_notasHTML.appendChild(n_notasHTMLhijo1)
				document.body.appendChild(n_notasHTML)

				n_notasHTMLhijo1.appendChild(input)
				
				n_notasHTML.appendChild(n_notasHTMLhijo1)
				document.body.appendChild(n_notasHTML)

			
	            arraynotas[i] = n_notasHTML.value;

	            
	            n_notasHTMLhijo2.appendChild(label2)

				n_notasHTML.appendChild(n_notasHTMLhijo2)
				document.body.appendChild(n_notasHTML)

				n_notasHTMLhijo2.appendChild(input2)
				
				n_notasHTML.appendChild(n_notasHTMLhijo2)
				document.body.appendChild(n_notasHTML)

	            arrayporcen[i] = n_notasHTML.value;
		}

	const input3 = document.createElement("input");
	input3.textContent = "CALCULAR NOTAS"
	input3.id = "calcu"
	input3.type = "submit"

	const n_notasHTML2 = document.createElement("div")

	n_notasHTML2.appendChild(input3)
	document.body.appendChild(n_notasHTML2)
	

	input3.addEventListener("click", function()  {


		
	
      for(let j = 0; j < arraynotas.length; j++){

      	arraynotasENT[j] = parseInt(document.getElementById("notas"+[j]).value)

      }

      for(let j = 0; j < arrayporcen.length; j++){

      	arrayporENT[j] = parseInt(document.getElementById("porcentaje"+[j]).value)
      	sumaPor += arrayporENT[j]

      }

 	sumaRel = 0;

     for(let j = 0; j < arraynotasENT.length; j++){


      	sumaRel += (arraynotasENT[j] * arrayporENT[j]) / 100;
  	}



  	if(sumaRel < 3){
  		aprobacion = "PERDIOOO MKK"
  	}else if(sumaRel >= 3 ){
  		aprobacion = "GANOOO WEPAAA"
  	}

  	

  	mondongo = 100 - sumaPor

  	if(mondongo != 0){


  		let notaNecesaria = 0;
  		let necesario = 0;
  		
        if(sumaRel < 3){
            necesario = (100 - (sumaPor))/100;
            for (let i = 0; sumaRel+notaNecesaria < 3; i++) {
                notaNecesaria += 0.1*necesario;
            }
        }
        
        porcen = (notaNecesaria/necesario);
 

  	}else{
  		porcen = " lo que fue fue, usteee ya completo todas las notas:)";
  		const resultado = document.createElement("div");
      resultado.id = "resultado"
	  resultado.textContent = "Su definitiva es: " + (sumaRel.toFixed(2))+ " usted: " + aprobacion + porcen
	  document.body.appendChild(resultado)

	  sumaPor = 0;
  	}





    
      const resultado = document.createElement("div");
      resultado.id = "resultado"
	  resultado.textContent = "Su definitiva es: " + (sumaRel.toFixed(2))+ " usted: " + aprobacion + " necesita sacar en la proxima nota: " + (porcen.toFixed(2))
	  document.body.appendChild(resultado)

	  sumaPor = 0;


	});

}





