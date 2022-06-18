let endpoint = 'https://api.binance.com/api/v3/ticker/price'
fetch(endpoint)
    .then( respuesta => respuesta.json())
    .then( datos => mostrarData(datos))
    .catch( e => console.log(e))

const mostrarData = (datos)=>{
    console.log(data)
}
    