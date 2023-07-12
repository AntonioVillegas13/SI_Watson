import { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import theme from "../theme/theme";
import PedidoCard from "./PedidoCard";
import StyledText from "./StyledText";
import { AddMitigacion } from "../Services/VulnerabilidadesSrv";

import { Card, TextInput, DropDown } from "react-native-paper";
import { Button, Icon } from "@rneui/base";

export const TarjetaDetalleEvaluacion = (props) => {
  const Pedido = props.item;
  const [Control, setControl] = useState("");
  const [tratamiento, setTratamiento] = useState("");

  const ObjPedido = props.objPedido;
  console.log("PEDIDO", Pedido);
  console.log("PEDIDO OBJETO", ObjPedido);
  console.log("PEDIDO OBJETO", ObjPedido);



  const AñadirProducto = () => {
    // SubirIamgen();
   
    console.log("Objeto", {
      Todo: ObjPedido,
      Control:Control,
      Tratamiento:tratamiento
    });

    AddMitigacion({
      id:ObjPedido.activo.id,
      Todo: ObjPedido,
      Control:Control,
      Tratamiento:tratamiento
    });
  };
  return (
    <ScrollView>
      <View style={styles.section}>
        <StyledText center subtitle>
          ACTIVO
        </StyledText>
        <ScrollView horizontal={true} contentContainerStyle={styles.content}>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              NombreActivo{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.activo?.NombreActivo}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              AreaEncargada{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.activo?.AreaEncargada}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Custodio{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.activo?.Custodio}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              VA{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.activo?.VA}
            </StyledText>
          </View>
        </ScrollView>

        <StyledText center subtitle>
          AMENAZA
        </StyledText>

        <ScrollView horizontal={true} contentContainerStyle={styles.content}>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Nombre amenaza{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.amenazas?.title}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Nivel amenaza{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.amenazas?.Nivel}
            </StyledText>
          </View>
        </ScrollView>

        <StyledText subtitle> Vulneralidad </StyledText>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.content}
          // pagingEnabled={true}
        >
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Macroproceso{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.vulnerabilidad?.value}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Nombre vulnerabilidad{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.vulnerabilidad?.title}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Nivel de Vulnerabilidad{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.vulnerabilidad?.Vulnerabilidad}
            </StyledText>
          </View>
        </ScrollView>

        <View>
        <StyledText subtitle center>
            ------------------------------------------------------------------------------------------------------{" "}
          </StyledText>
          <StyledText subtitle center>
            TRATAMIENTO DE RIESGOS{" "}
          </StyledText>
          <Text>Metodo de Tratamiento</Text>
          <TextInput
            label="Metodo de tratamiento"
            value={tratamiento}
            onChangeText={setTratamiento}
            mode="outlined"
            keyboardType="default"
          />
          <Text>Controles</Text>
          <TextInput
            label="Metodo de tratamiento"
            value={Control}
            onChangeText={setControl}
            mode="outlined"
            keyboardType="default"
          />
          <Text>Controles</Text>
          <Button
            title="Agregar Tratamientos de riesgos"
            onPress={() => {
              AñadirProducto();
              // navigation.navigate("ListaVulnerabilidad");
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: theme.colors.jade,
            }}
            containerStyle={{
              width: 200,
              paddingTop: 40,
              marginLeft: "20%",
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  item: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    padding: 20,
    marginHorizontal: 10,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
});
