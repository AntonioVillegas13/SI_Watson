
import { useEffect, useState } from "react";
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"

import { recuperarProductosAdmin } from "../../Services/AdminSrv";
import theme from "../../theme/theme";
import { TarjetaProducto } from "../../Components/ProductosComponent";
import { FAB } from 'react-native-paper';
import Header from "../../Components/Header";

export function Productos({ navigation }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        RecuperarProductos();
        const willFocusSubscription = navigation.addListener("focus", () => {
            RecuperarProductos();
        });
        return willFocusSubscription;
    }, [])



    const RecuperarProductos = () => {

        recuperarProductosAdmin(setProductos);
    }




    return <View style={styles.container}>
        <Header />
        <View style={styles.cajaCabecera}>
            <Text style={{ fontSize: 42 }}>Productos</Text>
        </View>
        <View style={styles.cajaCuerpo}>

            <TarjetaProducto
                productos={productos}
                navegar={navigation}

            />
        </View>
        <View style={styles.cajaBotones}>
            <FAB
                icon="plus"
                style={styles.fab}
                onPress={() => {
                    navigation.navigate("AddProdNav")


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

    }, fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    }
    ,
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
        //backgroundColor: 'cyan',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        // marginBottom: 50,
        // paddingTop: 75,
    },
    cajaCuerpo: {
        backgroundColor: '#fff1',
        flex: 10,
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 39
    },
    cajaBotones: {
        //backgroundColor: 'red',
        paddingBottom: 10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1
    }

});
