
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
import { TarjetaDetalleEvaluacion } from "../../Components/DetEnvuala";
import { consultarUnEvaluacion, consultarUnVulnerability } from "../../Services/VulnerabilidadesSrv";

export const DetalleEvaluacion = ({ route, navigation }) => {
    const { id } = route.params;
    const [ObjPedido, setObjPedido] = useState({});
    useEffect(() => {
        consultar();


    }, [])

    
    const consultar = async () => {


        await consultarUnEvaluacion(id, setObjPedido);
        console.log("---------------------------OBJPedido", ObjPedido)

    }




    return (
        <View>
            <ScrollView>
                <Header back={() => navigation?.goBack()} />
                <StyledText title bold center>Resumen de Evaluacion</StyledText >
                <View style={{ alignItems: "center" }}>
                </View>




                <View>
                    <TarjetaDetalleEvaluacion
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
