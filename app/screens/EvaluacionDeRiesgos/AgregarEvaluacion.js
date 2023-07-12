import { useEffect, useState } from "react";
import { Alert, Picker } from "react-native-web";
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
import {
  AddActive,
  consultarActivo,
  consultarNoProcesado,
} from "../../Services/ProductosSrv";
import uuid from "react-native-uuid";
import * as ImagePicker from "expo-image-picker";
import { SubirFoto, SubirIamgen } from "../../Services/ImagesSrv";
import Header from "../../Components/Header";
import { TouchableOpacity } from "react-native-web";
import StyledText from "../../Components/StyledText";
// import QRCode from "react-native-qrcode-svg";
import { AutocompleteDropdown } from "react-native-autocomplete-dropdown";
import {
  AddEvaluacion,
  AddVulnerability,
  consultarEvaluacion,
  consultarVulnerability,
} from "../../Services/VulnerabilidadesSrv";
import {
  consultarListaAmenazas,
  consultarListaVulnerabilidades,
} from "../../Services/VulnerabilidadSrv";
import { SelectList } from "react-native-dropdown-select-list";

export function AniadirEvaluaciona({ route, navigation }) {
  const [Idaux, setId] = useState("A-");
  const [MacroProceso, setMacroProceso] = useState("");
  const [NombreVulnerabilidad, setNombreVulnerabilidad] = useState("");
  const [Vulnerabilidad, setVulnerabilidad] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  const [Ubicacion, setUbicacion] = useState("");
  const [Propietario, setPropietario] = useState("");
  const [Custodio, setCustodio] = useState("");
  const [Confidencialidad, setConfidencialidad] = useState(0);
  const [Integridad, setIntegridad] = useState(0);
  const [Disponibilidad, setDisponibilidad] = useState(0);
  const [VA, setVA] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem2, setSelectedItem2] = useState(null);
  const [selectedItem3, setSelectedItem3] = useState(null);
  const [amenazas, setamenazas] = useState(null);
  const [total, setTotal] = useState(0);

  const [data, setdata] = useState(null);
  const [iamgeBase64, setImageBase64] = useState("");
  const [vulnerabilities, setvulnerabilities] = useState([]);
  const [Activos, setActivos] = useState();

  const [Url, setUrl] = useState("");
  const [Id2, setId2] = useState(0);
  useEffect(() => {
    const consulta = async () => {
      await consultarEvaluacion(setId);
      await consultarNoProcesado(setdata);
      await consultarListaVulnerabilidades(setvulnerabilities);
      await consultarNoProcesado(setActivos);
      await consultarListaAmenazas(setamenazas);
      await consultarEvaluacion(setId);
      console.log("VulnerabilidaesdesdeFirestore:", vulnerabilities);
    };
    consulta();
  }, []);

  const calcular = () => {
    let VaCID = selectedItem2.VA;
    let ValorAmenaza = selectedItem.Vulnerabilidad;
    let ValorVulnerabilidad = selectedItem3.Nivel;

    console.log("vACID", VaCID);
    console.log("vACID", ValorAmenaza);
    console.log("vACID", ValorVulnerabilidad);

    console.log("vACID2", selectedItem2.VA);
    console.log("vACID2", selectedItem.Vulnerabilidad);
    console.log("vACID2", selectedItem3.Nivel);

    setTotal(ValorVulnerabilidad * ValorAmenaza * VaCID);

    console.log("Total", total);
  };

  const AniadirEvaluaciona = () => {
    // SubirIamgen();
    console.log("NUEVO URL", Url);
    console.log("Objeto", {
      id: Idaux,
      vulnerabilidad: selectedItem,
      activo: selectedItem2,
      amenazas: selectedItem3,
      Total: total,
    });

    AddEvaluacion({
      id: Idaux,
      vulnerabilidad: selectedItem,
      activo: selectedItem2,
      amenazas: selectedItem3,
      Total: total,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollView}>
        <Header />
        <StyledText subtitle center>
          {" "}
          Evaluacion De Riesgos
        </StyledText>

        <View
          style={{ flexDirection: "column", justifyContent: "space-between" }}
        >
          <Text>Activo</Text>
          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={{ id: "A-1" }} // or just '2'
            onSelectItem={setSelectedItem2}
            dataSet={Activos}
            debounce={600}
          />

          <Text>Vulnerabilidad</Text>

          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={{ id: "A-1" }} // or just '2'
            onSelectItem={setSelectedItem}
            dataSet={vulnerabilities}
            debounce={600}
          />

          <Text>Amenaza</Text>

          <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={false}
            initialValue={{ id: "A-1" }} // or just '2'
            onSelectItem={setSelectedItem3}
            dataSet={amenazas}
            debounce={600}
          />
        </View>

        <Text>Activo             Vulnerabilidad            Amenaza         Total</Text>
        <Text>
          {selectedItem2 ? selectedItem2.title : null}{" "} {selectedItem ? selectedItem.title : null}{" "}     {selectedItem3 ? selectedItem3.title : null}{" "}                   {selectedItem && selectedItem2 && selectedItem3 ? total : null}
          
          
          
        </Text>

        <Button
          title="Calcular nivel de Riesgo"
          onPress={() => {
            calcular();
            console.log("DATAAAA:", total);
            console.log("vulnerabilitiesClone:", vulnerabilities);
            console.log("ActivoSeleccionado", selectedItem);

            console.log("VulnSeleccionado", selectedItem2);
            console.log("Amenaza", selectedItem3);

            // AñadirProducto();
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

        <Button
          title="Agregar Evaluacion"
          onPress={() => {
            AniadirEvaluaciona();
            // AñadirProducto();
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
