
import { View, Text, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Button, FAB } from "@rneui/base"
import theme from "../../theme/theme";
import { TarjetaDetallePedidos } from "../../Components/DetPedido";
import { useEffect, useState } from "react";
import { CambiarPedidoNoProcesado, consultarUnPedido } from "../../Services/ProductosSrv";
import StyledText from "../../Components/StyledText";
import Header from "../../Components/Header";
import { TarjetaDetalleActivo } from "../../Components/DetActivo";
import { consultarUnActivo } from "../../Services/ActivosSrv";
import { TarjetaDetalleVulnerabilidad } from "../../Components/DetVulnera";
import { consultarUnVulnerability } from "../../Services/VulnerabilidadesSrv";

export const DetalleVulnerabilidad = ({ route, navigation }) => {
    const { id } = route.params;
    const [ObjPedido, setObjPedido] = useState({});
    useEffect(() => {
        consultar();


    }, [])

    
    const consultar = async () => {


        await consultarUnVulnerability(id, setObjPedido);
        console.log("---------------------------OBJPedido", ObjPedido)

    }




    return (
        <View>
            <ScrollView>
                <Header back={() => navigation?.goBack()} />
                <StyledText title bold center>Resumen de Vulnerabilidad</StyledText >
                <View style={{ alignItems: "center" }}>
                </View>




                <View>
                    <TarjetaDetalleVulnerabilidad
                        item={id}
                        objPedido={ObjPedido}
                    />

                </View>


                <View>



                </View>

            </ScrollView>








           
        </View>
    )

} 