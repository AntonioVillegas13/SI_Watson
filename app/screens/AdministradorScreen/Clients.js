
import { useEffect, useState } from "react";
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"

import { guardarCliente, consultarClientes } from "../../Services/ClienteSrv";
import theme from "../../theme/theme";
import { TarjetaProducto } from "../../Components/ProductosComponent";
import { FAB } from 'react-native-paper';
import { TarjetaCliente } from "../../Components/Clientecard";
import Header from "../../Components/Header";

export function Clientes({ navigation }) {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        RecuperarClientes();
        const willFocusSubscription = navigation.addListener("focus", () => {
            RecuperarClientes();
        });
        return willFocusSubscription;
    }, [])



    const RecuperarClientes = () => {

        consultarClientes(setClientes);
    }




    return <View style={styles.container}>
        <Header />

        <View style={styles.cajaCabecera}>
            <Text style={{ fontSize: 42 }}>Clientes</Text>
        </View>
        <View style={styles.cajaCuerpo}>
            <TarjetaCliente
                clientes={clientes}
                funcionCliente={setClientes}

            />
        </View>
        <View style={styles.cajaBotones}>
            <FAB
                icon="plus"
                style={styles.fab}
                
                onPress={() => {
                    navigation.navigate("RegistrarNav")


                }}
            />
        </View>

    </View>

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff1',
        alignItems: 'stretch',
        justifyContent: 'center',

    },
    cajaCabecera: {
        //backgroundColor: 'cyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // marginBottom: 50,
        // paddingTop: 75,
    },
    cajaCuerpo: {
        // backgroundColor: 'brown',
        flex: 10,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    cajaBotones: {
        //backgroundColor: 'red',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    }, fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
});
