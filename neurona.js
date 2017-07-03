
  var entradas=0;
   var x=0;
   var pesos=0, entradas=0, theta=-0.4,Tasa_aprend = 0.5, filas=0;
 //Código JQuery
$(function() {
 /* $("#my_file_input").click(function(){
  oFileIn = document.getElementById('my_file_input');
  if (oFileIn.addEventListener) {
    oFileIn.addEventListener('change', filePicked, false);
  }
  });*/
 $("#boton").click(function(){
   if(entradas!=0){ 
              i=0,contadorx=0,aux=1;
              var n = new Array();
              var naxuliar = new Array();
              $("table tbody tr td input").each(function(){
                      if(i<x.length+2){                  
                          
                           
                          if(i==x.length)
                          {
                           //ingresa el biaz
                              n[i]=1;
                            
                           i++;
                            
                          }
                          //////////
                          n[i]=parseInt($(this).val());
                          i++;
                          
                      }
                      else
                      {               

                         x[contadorx]=n.slice();
                          i=0;
                          n.length=0;
                          n[i]=parseInt($(this).val());  
                          contadorx++;
                          i=1;                
                      }
                });
               if(n.length>0){
                //n[x.length]=2;
               n.splice(x.length-1, 0, 1);//agrega el biaz al ultimo array
                x[contadorx]=n.slice();
              }
               console.log("Tabla de Aprendizaje armada escribe x");

               neurona();
     }
     else
     {
           alert("No hagas trampa , no has ingresado Entradas -.-");
     }
    });
   $("#inserta").click(function(){
      $("#inserta").attr("disabled", true);
       entradas=Number(document.getElementById("entradas").value);
      x =new Array (entradas) ;
       entradas++;
   });
   $("#precetron").click(function(){
     if(entradas!=0){
        Salida();
     }
     else
     {
          alert("No hagas trampa , no has ingresado Entradas -.-");
     }
   });

});


/////////////////////////////Nuerona///////////////////////////////////////////////
function LlenaPesos() {
    pesos= new Array(entradas);   
    console.log("Pesos Inciales");
        for (j = 0; j <pesos.length; j++) {      
                 pesos[j]=Math.random() * (0.5 + 0.5) - 0.5;
                  console.log("W"+j+" :"+pesos[j]);
            };  
 }
function ImprimePesos(){
        console.log("Ajustando Pesos");
          for (j = 0; j <pesos.length; j++) {   
                console.log("W"+j+" :"+pesos[j]);
            };  
}

function recalculaPesos(posicionEntrada, y){
  for (i = 0; i < pesos.length; i++) {
       pesos[i] = pesos[i] + Tasa_aprend * (x[posicionEntrada][entradas] - y) * x[posicionEntrada][i];
        }
}


function neurona() {
  LlenaPesos();
  var y=0,cont=0,i=0;
  console.log("Salidas");
   while (i < x.length) {
     //Prodcuto Punto
     var Sumatoria=0
      for (j = 0; j <entradas; j++) {   
            Sumatoria+=pesos[j]*x[i][j];     
           
          }; 
 
  

        y=Sumatoria>0? 1:0;//Funcion EScalon

        ///Compara el valor de las Y para ajustar el peso
            if (y == x[i][entradas]) {
                   for (k=0;k<entradas;k++) { // x.length
                     console.log(x[i][k]);
                   }; 
                   console.log(" Desada:"+x[i][entradas]+" Salida:"+y);
                                  
              }
              else {
                for (k=0;k<entradas;k++) { //x.length
                     console.log(x[i][k]);
                   };
                    console.log(x[i][k]+" Desada:"+x[i][entradas]+" Salida Erronea:"+y);
                console.log("Vamos Corregir los Pesos :D");
                recalculaPesos(i,y);
                ImprimePesos();
                i = -1;
            }
            i++;
            
  }

  alert("Eh Aprenido Pruebame ;)");
     
  //Salida();
}
function Salida() {
  //////ingresa las entradas
  var ingresarx=[],SumaSalida=0;
   for (j = 0; j <entradas-1; j++) {  // x.length
     ingresarx[j] = Number(prompt("Ingresa X"+j+":"));    

    }
     ingresarx.splice(entradas, 0, 1);//agrega el biaz al ultimo array
 //// Sumatoria
  for (j = 0; j <entradas; j++) {    // x.length
            SumaSalida+=pesos[j]*ingresarx[j];     

          };
   y=SumaSalida>0? 1:0;//Funcion EScalon     
   alert(y); 
}


/////////////////////////////////////////////////////////////////////////////////////
