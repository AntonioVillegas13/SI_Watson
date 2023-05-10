
import Header from "../../Components/Header";
import { useContext, useEffect, useState } from "react";
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Button, FAB } from "@rneui/base"

import { TarjetaPedidos } from "../../Components/Pedidos";
import { consultarPedidosGenerales } from "../../Services/AdminSrv";
import { cerrarSesion, RecuperarUsuario } from "../../Services/AutenticacionSrv";
import theme from "../../theme/theme";
import { PedidoContext } from "../../context/PedidosContext";

export function AdminPedidos({ navigation }) {
    const { user, setUser } = useContext(PedidoContext);

    const [pedidos, setPedidos] = useState([]);
    let pedidos2;



    useEffect(() => {
        recuperarUsuario();
        recuperarProductos();
    }, [])

    const recuperarUsuario = async () => {
        console.log("------------------------- Recuperar Usuario")

        await RecuperarUsuario(setUser);
        console.log("UID2:", user)
    }



    const recuperarProductos = () => {
        console.log("-------------------------USERide")
        consultarPedidosGenerales(setPedidos);
        //console.log("OED", pedidos);
        console.log("Uid", global.userIdLogin)
        // pedidos2 = pedidos.filter(item => item.codigo === "hX4gT8sDdRPCO5N6qt5mykIUa9g2")

        console.log("PEDIDOS2", pedidos2)
        console.log("PEDIDOS", pedidos);


    }


    const NavegarPedidoProcesado = () => {
        navigation.navigate("ListaPedidosProcesados")

    }

    const NavegarPedidoNoProcesado = () => {
        navigation.navigate("ListaPedidosNoProcesados")

    }


    return <View style={styles.container}>
        <Header />

        <View style={styles.cajaCabecera} >

            <Text style={{ fontSize: 40 }}>Pedidos Generales</Text>

        </View>


        <View style={styles.cajaCuerpo} >

            {/* <TarjetaPedidos pedidos={pedidos} navegar={navigation}/> */}
            <Button
                title='Pedidos Procesados'
                color={theme.colors.jade}
                onPress={NavegarPedidoProcesado}

            />
            <Button
                title='Pedidos No Procesados'

                color={theme.colors.morado}
                onPress={NavegarPedidoNoProcesado}

            />


        </View>
        <View style={styles.cajaBotones}>

            <Button
                title='Cerrar Sesion'

                color={theme.colors.morado}
                onPress={cerrarSesion}

            />

        </View>

    </View>

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff1',
        alignItems: 'stretch',
        justifyContent: 'flex-start'

    },
    impar: {

        marginLeft: 1,
        marginBottom: 20,
        marginRight: 20,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#E09726',
        borderRadius: 5




    },
    titulo: {
        fontSize: 30,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#F03E0A',
        letterSpacing: 3


    },
    Inputs: {
        borderBottomColor: "#82B5FA",
        borderBottomWidth: 2,
        borderBottomLeftRadius: 3.7,
        borderBottomRightRadius: 3.7,
        backgroundColor: "#B3DDF2",
        margin: 20,
        marginTop: 2,
        marginLeft: 1,
        shadowColor: "#0000",
        shadowRadius: 100
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    buttonS: {
        borderRadius: 20,
        padding: 30,
        paddingHorizontal: 40,
        backgroundColor: "#6B7FE3",
        margin: 10
    },
    buttonP: {
        borderRadius: 20,
        padding: 30,
        paddingHorizontal: 40,
        backgroundColor: "#82B5FA",
        margin: 10
    },
    cajaCabecera: {
        // backgroundColor: 'cyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,


    },
    cajaCuerpo: {
        // backgroundColor: 'brown',
        flex: 2,
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 39
    },
    cajaBotones: {
        //backgroundColor: 'red',
        paddingBottom: 30,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1
    }

});
