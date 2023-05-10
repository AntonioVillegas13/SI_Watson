import { useEffect, useState } from "react";
import { Picker } from "react-native-web";
import {
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Card, Text, TextInput, DropDown } from "react-native-paper";
import theme from "../../theme/theme";
import { Button, Icon } from "@rneui/base";
import { AddActive } from "../../Services/ActivosSrv";
import uuid from "react-native-uuid";
import * as ImagePicker from "expo-image-picker";
import { SubirFoto, SubirIamgen } from "../../Services/ImagesSrv";
import Header from "../../Components/Header";
import { TouchableOpacity } from "react-native-web";
import StyledText from "../../Components/StyledText";
import { Productos } from "../AdministradorScreen/Productos";

export function AniadirActivos({ route, navigation }) {
  const [Idaux, setId] = useState("A-");
  const [MacroProceso, setMacroProceso] = useState("");
  const [AreaEncargada, setAreaEncargada] = useState("");
  const [NombreActivo, setNombreActivo] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Ubicacion, setUbicacion] = useState("");
  const [Propietario, setPropietario] = useState("");
  const [Custodio, setCustodio] = useState("");
  const [Confidencialidad, setConfidencialidad] = useState("");
  const [Integridad, setIntegridad] = useState("");
  const [Disponibilidad, setDisponibilidad] = useState("");
  const [VA, setVA] = useState("");

  const [selectedValue, setSelectedValue] = useState("");
 

  const [iamgeBase64, setImageBase64] = useState("");

  const [Url, setUrl] = useState("");

  const pickImages = async () => {
    let resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      // base64:true
    });
    console.log("Imagen Uri:", resultado.assets[0].uri);
    // await setImageBase64(resultado.assets[0].uri);
    // await SubirFoto(resultado.assets[0].uri, Idaux, setUrl);
  };

  const AñadirProducto = () => {
    // SubirIamgen();
    console.log("NUEVO URL", Url);
    console.log("Objeto", {
      NActivo: Idaux,
      MacroProceso: MacroProceso,
      AreaEncargada: AreaEncargada,
      NombreActivo: NombreActivo,
      Descripcion: Descripcion,
      NombreActivo: NombreActivo,
      Descripcion: Descripcion,
      Ubicacion: Ubicacion,
      Propietario: Propietario,
      Custodio: Custodio,
      url: Url,
    });

    AddActive({
      NActivo: Idaux,
      MacroProceso: MacroProceso,
      AreaEncargada: AreaEncargada,
      NombreActivo: NombreActivo,
      Descripcion: Descripcion,
      NombreActivo: NombreActivo,
      Descripcion: Descripcion,
      Ubicacion: Ubicacion,
      Propietario: Propietario,
      Custodio: Custodio,
      url: Url,
      Confidencialidad:Confidencialidad,
      Integridad:Integridad,
      Disponibilidad:Disponibilidad,
      VA:VA,
      selectedValue:selectedValue

    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <StyledText subtitle>
          {" "}
          IDENTIFICACION DE LOS ACTIVOS DE INFORMACION
        </StyledText>
        <StyledText subtitle> </StyledText>

        <TextInput
          label="N° de Activo"
          value={Idaux}
          onChangeText={setId}
          mode="outlined"
          keyboardType="default"
        />

        <TextInput
          label="Macro Proceso"
          value={MacroProceso}
          onChangeText={setMacroProceso}
          mode="outlined"
          keyboardType="default"
        />

        <TextInput
          label="Area encargada"
          value={AreaEncargada}
          onChangeText={setAreaEncargada}
          mode="outlined"
          keyboardType="default"
        />

        <TextInput
          label="Nombre Activo"
          value={NombreActivo}
          onChangeText={setNombreActivo}
          mode="outlined"
          keyboardType="default"
        />
        <TextInput
          label="Descripcion"
          value={Descripcion}
          onChangeText={setDescripcion}
          mode="outlined"
          keyboardType="default"
        />
        <TextInput
          label="Ubicacion"
          value={Ubicacion}
          onChangeText={setUbicacion}
          mode="outlined"
          keyboardType="default"
        />
        <TextInput
          label="Propietario"
          value={Propietario}
          onChangeText={setPropietario}
          mode="outlined"
          keyboardType="default"
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={{ flex: 1, marginRight: 10 }}
            label="Custodio"
            value={Custodio}
            onChangeText={setCustodio}
            mode="outlined"
            keyboardType="default"
          />

          <Button
            title="Agregar Imagen"
            onPress={() => {
              pickImages();
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: theme.colors.jade,
              alignSelf: "auto",
            }}
            containerStyle={{
              width: 100,
              paddingTop: 10,
            }}
          />
        </View>
        <StyledText subtitle> </StyledText>
        <StyledText subtitle> VALORACION DE ACTIVOS</StyledText>
        <StyledText subtitle> </StyledText>

        <TextInput
          style={{ flex: 1, marginRight: 10 }}
          label="Confidencialidad"
          value={Confidencialidad}
          onChangeText={setConfidencialidad}
          mode="outlined"
          keyboardType="number-pad"
        />

        <TextInput
          style={{ flex: 1, marginRight: 10 }}
          label="Integridad"
          value={Integridad}
          onChangeText={setIntegridad}
          mode="outlined"
          keyboardType="number-pad"
        />

        <TextInput
          style={{ flex: 1, marginRight: 10 }}
          label="Disponibilidad"
          value={Disponibilidad}
          onChangeText={setDisponibilidad}
          mode="outlined"
          keyboardType="number-pad"
        />
        <TextInput
          style={{ flex: 1, marginRight: 10 }}
          label="VA"
          value={VA}
          onChangeText={setVA}
          mode="outlined"
          keyboardType="default"
        />

        <StyledText subtitle>-CLASIFICACION DE LOS ACTIVOS </StyledText>
        <StyledText subtitle> </StyledText>

        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Button
            title="Critico"
            onPress={() => {
              setSelectedValue("Critico")
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: "red",
              alignSelf: "auto",
            }}
            containerStyle={{
              width: 100,
              paddingTop: 40,
              paddingHorizontal: 2,
            }}
          />

          <Button
            title="Importante"
            onPress={() => {
              setSelectedValue("Importante")
             
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor:"blue",
              alignSelf: "auto",
            }}
            containerStyle={{
              width: 110,
              paddingTop: 40,
              paddingHorizontal: 2,
            }}
          />

          <Button
            title="Secundario"
            onPress={() => {
              setSelectedValue("Secundario")
              
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: "green",
              alignSelf: "auto",
            }}
            containerStyle={{
              width: 110,
              paddingTop: 40,
              paddingHorizontal: 2,
            }}
          />
        </View>

        <View style={styles.cajaBotones}>
          <Button
            title="Agregar Activo"
            onPress={() => {
              console.log("prod",Productos)
              AñadirProducto();
              
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: theme.colors.jade,
            }}
            containerStyle={{
              width: 100,
              paddingTop: 40,
              marginLeft:120
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    // alignItems: 'stretch',
    justifyContent: "center",
    dColor: "gray",
  },
  cajaBotones: {
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 2,
    flexDirection: "row",
  },
  scrollView: {
    // backgroundColor: 'pink',
    marginHorizontal: 10,
  },
});
