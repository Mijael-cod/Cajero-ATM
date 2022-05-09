let html = document.getElementById("tiempo");
setInterval(function(){
    tiempo = new Date();
    horas = tiempo.getHours();
    minutos = tiempo.getMinutes();
    segundos = tiempo.getSeconds();
    if(horas<10)
        horas = "0"+horas;
    if(minutos<10)
        minutos = "0"+minutos;
    if(segundos<10)
        segundos = "0"+segundos;
    html.innerHTML = horas+" : "+minutos+" : "+segundos; 

},1000);

function ingresar(){
    let password = "12345678";
    var p = document.getElementById("contra").value;

    

    if(p == password){
        document.getElementById("container2").style.display="block";
        document.getElementById("container").style.display="none";

    }
   
    
}

function consultas(){




}

function retiro() {
    document.getElementById('container2').style.display = 'none';
    document.getElementById('retiros').style.display = 'flex';
  }
  function volver() {
    document.getElementById('container2').style.display = 'flex';
    document.getElementById('retiros').style.display = 'none';
  }