
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Button, FAB } from "@rneui/base"
import theme from "../../theme/theme";
import { TarjetaDetallePedidos } from "../../Components/DetPedido";
import { useEffect, useState } from "react";
import { CambiarPedidoNoProcesado, consultarUnPedido } from "../../Services/ProductosSrv";
import StyledText from "../../Components/StyledText";
import Header from "../../Components/Header";

export const DetallePedidoNopProcesado = ({ route, navigation }) => {
    const { id } = route.params;
    const [ObjPedido, setObjPedido] = useState({});
    useEffect(() => {
        consultar();


    }, [])

    const CambiarPedidoNoProcesadoD = () => {
        let newObjet = {
            StatusPedido: false,
            cedula: ObjPedido.cedula,
            cedulaUsuario: ObjPedido.cedulaUsuario,
            codigo: ObjPedido.codigo,
            correo: ObjPedido.correo,
            estados: ObjPedido.estados,
            extra: ObjPedido.extra,
            id: ObjPedido.id,
            nombre: ObjPedido.nombre,
            productosArray: ObjPedido.productosArray,
            subTotal: ObjPedido.subTotal,
            total: ObjPedido.total

        }

        CambiarPedidoNoProcesado(newObjet);
    }
    const consultar = async () => {


        await consultarUnPedido(id, setObjPedido);
        console.log("---------------------------OBJPedido", ObjPedido.url)

    }




    return (
        <View>
            <ScrollView>
                <Header back={() => navigation?.goBack()} />
                <StyledText title bold center>Resumen de pedido</StyledText >
                <View style={{ alignItems: "center" }}>
                    {ObjPedido.estados == "false" ? <StyledText subtitle bold margin fondoColorVerde white>   Pedido Regular   </StyledText> : <StyledText subtitle fondoColorRojo bold white margin >   Pedido Urgente   </StyledText>}
                </View>




                <View>
                    <TarjetaDetallePedidos
                        item={id}
                        objPedido={ObjPedido}
                    />
                </View>


                <View>



                </View>

            </ScrollView>








            <FAB
                icon={{ name: 'update', color: 'white' }}
                color="#555273"
                size="small"
                placement="left"
                style={{
                    position: 'absolute',
                    top: "94%",
                    color: theme.colors.jade
                }}
                onPress={() => {
                    CambiarPedidoNoProcesadoD();


                }}
            />

        </View>
    )

} 
