import { useEffect } from "react";
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

export const TarjetaDetalleVulnerabilidad = (props) => {
  const Pedido = props.item;
  const ObjPedido = props.objPedido;
  console.log("PEDIDO", Pedido);
  console.log("PEDIDO OBJETO", ObjPedido);
  console.log("PEDIDO OBJETO", ObjPedido);

  return (
    <ScrollView>
      <View style={styles.section}>
        <ScrollView contentContainerStyle={styles.content}>
          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              id{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.id}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Vulnerabilidad{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.Vulnerabilidad}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              Nombre{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.title}
            </StyledText>
          </View>

          <View style={{ flexDirection: "column" }}>
            <StyledText subtitle bold margin>
              MacroProceso{" "}
            </StyledText>
            <StyledText bold margin>
              {ObjPedido.MacroProceso}
            </StyledText>
          </View>

        
        </ScrollView>

        <View>
            
        <Text></Text>    
        <Text></Text>    
        <Text></Text>    
        <Text></Text>    
        <Text></Text>    
            
        </View>        


       
      </View>
      
   


   

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    justifyContent:"center"
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 20,
    justifyContent:"center"
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
