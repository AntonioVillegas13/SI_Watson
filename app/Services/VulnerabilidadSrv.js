import { collection, doc, getDocs, setDoc, addDoc, getDoc, query, where } from 'firebase/firestore'


export const consultarListaVulnerabilidades = async (fnsetPedidos) => {
    
    // console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= collection(global.dbCon, "Vulnerabilidades");
console.log("VulnerabilidaesdesdeFirestore----------------------")
    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    await SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
       
            console.log("doce-------------------", documento.data());
            PedidoArray.push(documento.data());
            console.log("VulnerabilidaesdesdeFirestore")
        



    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc2", PedidoArray);

}

export const consultarListaAmenazas = async (fnsetPedidos) => {
    
    // console.log("global--------------------------------",Id);
    // const productoRef = collection(global.dbCon, "Pedidos");
    const productoRef= collection(global.dbCon, "amenazas");
console.log("VulnerabilidaesdesdeFirestore----------------------")
    const SnapPedidos = await getDocs(productoRef);
    let PedidoArray = []
    await SnapPedidos.forEach((documento) => {
        console.log("doc", documento.data());
       
            console.log("doce-------------------", documento.data());
            PedidoArray.push(documento.data());
            console.log("VulnerabilidaesdesdeFirestore")
        



    });

    fnsetPedidos(PedidoArray)
    console.log("pediFunc2", PedidoArray);

}