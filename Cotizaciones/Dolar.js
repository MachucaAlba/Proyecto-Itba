let url ="https://www.dolarsi.com/api/api.php?type=valoresprincipales";

cotizacionesDelDolar();

function cotizacionesDelDolar(){
    var info = document.getElementById("cotizacion")
    info.innerHTML = "";
fetch(url)
    .then(response => response.json())
    .then(data => {
       for(var i in data){
        if(data[i].casa.nombre.includes("Dolar")){
            info.innerHTML += `
            <tr>
            <th>${data[i].casa.agencia}</th>
            <td>${data[i].casa.nombre}</td>
            <td>${data[i].casa.compra}</td>
            <td>${data[i].casa.venta}</td>
            `;}
       } 
    }
    );

    }
    document.getElementById('dolarData').innerHTML = body
