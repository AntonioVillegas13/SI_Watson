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
import { AddActive, consultarActivo } from "../../Services/ActivosSrv";
import uuid from "react-native-uuid";
import * as ImagePicker from "expo-image-picker";
import { SubirFoto, SubirIamgen } from "../../Services/ImagesSrv";
import Header from "../../Components/Header";
import { TouchableOpacity } from "react-native-web";
import StyledText from "../../Components/StyledText";
import QRCode from "react-native-qrcode-svg";

export function AniadirActivos({ route, navigation }) {
  const [Idaux, setId] = useState("A-");
  const [MacroProceso, setMacroProceso] = useState("");
  const [AreaEncargada, setAreaEncargada] = useState("");
  const [NombreActivo, setNombreActivo] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Ubicacion, setUbicacion] = useState("");
  const [Propietario, setPropietario] = useState("");
  const [Custodio, setCustodio] = useState("");
  const [Confidencialidad, setConfidencialidad] = useState(0);
  const [Integridad, setIntegridad] = useState(0);
  const [Disponibilidad, setDisponibilidad] = useState(0);
  const [VA, setVA] = useState(0);

  const [selectedValue, setSelectedValue] = useState("");

  const [iamgeBase64, setImageBase64] = useState("");

  const [Url, setUrl] = useState("");
  const [Id2, setId2] = useState(0);
  useEffect(() => {
    const consulta = async () => {
      await consultarActivo(setId);
    };
    consulta();
  }, []);

  useEffect(() => {
    console.log("Idfuera", Id2);

    console.log(
      parseFloat(Confidencialidad) +
        parseFloat(Integridad) +
        parseFloat(Disponibilidad)
    );
    setVA(
      (
        (parseFloat(Confidencialidad) +
          parseFloat(Integridad) +
          parseFloat(Disponibilidad)) /
        3
      ).toFixed(2)
    );
    console.log("VA", VA);
  }, [Confidencialidad, Integridad, Disponibilidad]);

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
      Confidencialidad: Confidencialidad,
      Integridad: Integridad,
      Disponibilidad: Disponibilidad,
      VA: VA,
      selectedValue: selectedValue,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <StyledText subtitle center>
          {" "}
          IDENTIFICACION DE LOS ACTIVOS DE INFORMACION
        </StyledText>
        <StyledText subtitle> </StyledText>

        <TextInput
          label="N° de Activo"
          value={Idaux + ""}
          editable={false}
          mode="outlined"
          keyboardType="default"
          textColor="gray"
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
            alignItems: "stretch"
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
        </View >
        <View style={{
            alignItems: "center",
            // justifyContent: "center",
          }} >
          <Button
            title="Agregar Imagen del Activo"
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
        <StyledText subtitle center > VALORACION DE ACTIVOS</StyledText>
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
          value={VA + ""}
          editable={false}
          mode="outlined"
          keyboardType="default"
          textColor="gray"
        />

        <StyledText subtitle center>-CLASIFICACION DE LOS ACTIVOS </StyledText>
        <StyledText subtitle> </StyledText>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Button
            title="Critico"
            onPress={() => {
              setSelectedValue("Critico");
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
              setSelectedValue("Importante");
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: "blue",
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
              setSelectedValue("Secundario");
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
              AñadirProducto();
            }}
            buttonStyle={{
              borderRadius: 10,
              backgroundColor: theme.colors.jade,
            }}
            containerStyle={{
              width: 100,
              paddingTop: 40,
              marginLeft: 120,
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
