export async function consultarReservas(){
    
    //1. URL del servicio
    const url = "http://pruegaapi20231.vercel.app/buscarReservas"

    //2. Configurar la peticion de envio
    const peticion = {
        method: "GET",//get,post,put,delete
        //Headers:{},//datos de control****
        //body:"",//post,put***
    }
    //3. Siempre debo comunicarme  con el back.
    //fetch
    let respuestaDelServidor = await fetch(url,peticion)
    respuestaDelServidor = await respuestaDelServidor.json()
    return respuestaDelServidor
}