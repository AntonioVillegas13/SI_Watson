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
// import QRCode from "react-native-qrcode-svg";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";

export function AniadirVulnerabilidad({ route, navigation }) {
  const [Idaux, setId] = useState("A-");
  const [MacroProceso, setMacroProceso] = useState("");
  const [NombreVulnerabilidad, setNombreVulnerabilidad] = useState("");
  const [Amenaza, setAmenaza] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Ubicacion, setUbicacion] = useState("");
  const [Propietario, setPropietario] = useState("");
  const [Custodio, setCustodio] = useState("");
  const [Confidencialidad, setConfidencialidad] = useState(0);
  const [Integridad, setIntegridad] = useState(0);
  const [Disponibilidad, setDisponibilidad] = useState(0);
  const [VA, setVA] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
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
    await setImageBase64(resultado.assets[0].uri);
    await SubirFoto(resultado.assets[0].uri, Idaux + "", setUrl);
  };

  const AñadirProducto = () => {
    // SubirIamgen();
    console.log("NUEVO URL", Url);
    console.log("Objeto", {
      NActivo: Idaux,
      MacroProceso: MacroProceso,
      NombreVulnerabilidad: NombreVulnerabilidad,
      Amenaza: Amenaza,
      Descripcion: Descripcion,
      Amenaza: Amenaza,
      Descripcion: Descripcion,
      Ubicacion: Ubicacion,
      Propietario: Propietario,
      Custodio: Custodio,
      url: Url,
      para: selectedItem
    });

    AddActive({
      NActivo: Idaux,
      MacroProceso: MacroProceso,
      NombreVulnerabilidad: NombreVulnerabilidad,
      Amenaza: Amenaza
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header />
        <StyledText subtitle center>
          {" "}
          IDENTIFICACION DE LAS VULNERABILIDADES
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
          label="Nombre"
          value={NombreVulnerabilidad}
          onChangeText={setNombreVulnerabilidad}
          mode="outlined"
          keyboardType="default"
        />
        {/* <AutocompleteDropdown
          clearOnFocus={false}
          closeOnBlur={true}
          closeOnSubmit={false}
          initialValue={{ id: "2" }} // or just '2'
          onSelectItem={setSelectedItem}
          dataSet={[
            { id: "1", title: "Computacion" },
            { id: "2", title: "Sistemas" }

          ]}
        /> */}
        
        <TextInput
          label="Amenaza"
          value={Amenaza}
          onChangeText={setAmenaza}
          mode="outlined"
          keyboardType="default"
        />
      
      
      
       
      
       
       
        

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
