function carregar(){

var img = document.getElementById('img')
var msg = document.getElementById('msg')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()

msg.innerText=`Agora são ${hora}:${minutos}h`

if(hora>=0 && hora<12){
   document.body.style.background= 'rgb(69, 159, 201)'
    img.scr = "manha.jpg"
}
else if (hora >=12 && hora <18){

document.body.style.background='rgb(201, 111, 69)'
img.src='tarde.jpg'

}
else{
      document.body.style.background= 'rgb(24, 23, 23)'
img.src ='noite.jpg'
}




}