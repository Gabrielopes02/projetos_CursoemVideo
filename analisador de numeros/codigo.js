
let numeros = []
let estadobotao= false
function adicionar(){

    let tabela = document.getElementById('lista')
    let num = Number(document.getElementById('numero').value)
   



    if(num < 1 || num > 100 ) {
        alert('valor invalido, digite outro número e tente novamente')
        }
    else{ 
        if(numeros.length == ''){ // testando se o vetor está vazio
        
            numeros.push(num)
            let item = document.createElement('option')
            item.text= 'valor ' + num + ' adicionado'
            tabela.appendChild(item)
                   
            }
            else{// vetor não vazio
                let conf = false
                for(let i=0; i < numeros.length; i++){// teste para ver se tem numeros repetidos
                   
                   
                  

                  if(numeros[i] == num){

                    conf = true
                    alert('valor ja existente, tente novamente')
                     }

                }

                if(conf == false){

                    numeros.push(num)
                   let item = document.createElement('option')
                   item.text= 'valor ' + num+ ' adicionado'
                   tabela.appendChild(item)

                    }
        }



    }
    document.getElementById('numero').value= ''
    document.getElementById('numero').focus()
    res.innerHTML=''
 }

 function finalizar(){
    let res = document.getElementById('cu')
    let maior = 0, menor = numeros[0] ,soma = 0 , media = 0


    if(numeros.length==''){
        alert('Adicione valores antes de finalizar')

    }
    else{
    for(let i in numeros){// percorrendo todo o array
    
    if(numeros[i] > maior){// achando o maior valor
        maior = numeros[i]
    }
    if(numeros[i] < menor){// achando o menor valor
        menor = numeros[i]   
    }
    soma+= numeros[i]//soma de todos os valores

    }
    media = soma/numeros.length// calculando a média
    res.innerHTML ='<button id = "voltar" onclick= "voltar()" > <a>👈</a></button><br>'
    res.innerHTML += `Ao todo temos ${numeros.length} números cadastrados <br> 
    O maior valor informado foi ${maior} <br>
    O menor valor informado foi ${menor}<br>
    Somando os valores, temos ${soma}<br>
    A média dos valores digitados é ${media}`

}


 }

 function noturno(){


let botao = document.getElementById('botao')
let bolinha = document.getElementById('bolinha')
let corpo = document.getElementById('corpo')
let partebranca = document.getElementById('cu')

if(estadobotao == false){
    partebranca.style.backgroundColor ='rgb(60, 163, 0)'
    corpo.style.backgroundColor = 'rgb(36, 36, 36)'
    estadobotao = true
    bolinha.style.right = '-14px'

}else{

partebranca.style.backgroundColor =' rgb(169, 202, 150)'
 corpo.style.backgroundColor = 'rgb(197, 196, 196)'
bolinha.style.right = ''
estadobotao =false
}

 }

   

function voltar(){
    location.reload()
    
}
           

                
           
                
           
    
               
            
    
            
    
    
         
    
    

        