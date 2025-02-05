function contar(){
 
var inicio  = Number(document.getElementById('inicio').value)
var fim = Number(document.getElementById('fim').value)
var passo = Number(document.getElementById('passo').value)
var res = document.getElementById('resultado')
var soma = inicio

    if(inicio!==""){


    if(passo == 0 || passo == ""){
        alert ('passo invalido, considerando passo = 1')
        passo = 1
        }

      
        
        res.innerHTML = `Contando:<br>`
      
        
        while(soma <= fim){

            
            res.innerHTML += `&#11088 ${soma}`
            soma += passo

          
        }
       res.innerHTML+= '&#9749 finalmente ein caraio'
    }

    else {

        res.innerHTML = 'impossivel contar, mude o início e tente novamente'

            
        
    }









}
