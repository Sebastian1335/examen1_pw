

function convertir(){
    var radios = document.getElementsByName("tipo");

    var selected = Array.from(radios).find(radio => radio.checked).value
    var valor = parseInt(document.getElementById("valor").value)

    var ans = 0;
    if(selected == "Celcius"){
        ans = (valor * 9/5)+32;

        window.alert("La temperatura transformada a F es " +ans);
    }else{
        ans = (valor - 32) * 5/9

        window.alert("La temperatura transformada a C es " +ans);
    }
    

}