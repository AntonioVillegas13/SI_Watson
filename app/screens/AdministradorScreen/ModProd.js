
import { useEffect, useState } from "react";
import { View, Alert, StyleSheet, FlatList, TouchableHighlight, ScrollView } from "react-native"
import { Card, Text, TextInput } from 'react-native-paper';
import theme from '../../theme/theme'
import { Button, Icon } from '@rneui/base';
import { CambiarProducto } from "../../Services/ProductosSrv";
import * as ImagePicker from "expo-image-picker"
import { SubirFoto } from "../../Services/ImagesSrv";
import Header from "../../Components/Header";

export function ModProd({ route, navigation }) {
    const [tituloaux, setTitulo] = useState("");
    const [precioaux, setPrecio] = useState("");
    const [categoriaaux, setCategoria] = useState("");
    const [Idaux, setId] = useState("");
    const [Peso, setPeso] = useState("");
    const [iamgeBase64, setImageBase64] = useState("");
    const [Url, setUrl] = useState("")


    const ActualizarProducto = () => {

        CambiarProducto({
            id: id,
            price: precioaux,
            Category: categoriaaux,
            title: tituloaux,
            weigth: Peso,
            uri: iamgeBase64,
            url: Url
        });

    }
    const { titulo, precio, categoria, id, peso, url } = route.params;
    useEffect(() => {
        setPrecio(precio);
        setTitulo(titulo)
        setCategoria(categoria)
        setId(id)
        setPeso(peso)
        setUrl(url)
    }, [])



    const pickImages = async () => {
        let resultado = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            selectionLimit: 1,
            aspect: [4, 3],
            quality: 1,
            allowsEditing: true

        })
        console.log("Imagen Uri:", resultado.assets[0].uri)
        await setImageBase64(resultado.assets[0].uri)
        await SubirFoto(resultado.assets[0].uri, Idaux, setUrl);
    }



    return <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Header />
            <Card>
                {Url ? <Card.Cover source={{ uri: Url }} /> : <Card.Cover source={{ uri: "https://img.freepik.com/psd-premium/maqueta-botella-agua-dulce_358694-279.jpg?w=2000" }} />}

                <Card.Title title={tituloaux} subtitle={categoriaaux} />
                <Card.Content>
                    {/* <Text variant="titleLarge">{prod.title}</Text> */}
                    <Text variant="bodyMedium">{precioaux}</Text>

                </Card.Content>
            </Card>

            <TextInput
                label="Nombre"
                value={tituloaux}
                onChangeText={setTitulo}
                mode="outlined"
                maxLength={40}
            />


            <TextInput
                label="Precio"
                value={precioaux}
                onChangeText={setPrecio}
                mode="outlined"
                keyboardType="numeric"


            />

            <TextInput
                label="Categoria"
                value={categoriaaux}
                onChangeText={setCategoria}
                mode="outlined"

            />

            <TextInput
                label="Peso"
                value={Peso}
                onChangeText={setPeso}
                mode="outlined"
                keyboardType="numeric"


            />



            <View style={styles.cajaBotones}>
                <Button
                    title='Modificar Producto'
                    onPress={() => {
                        ActualizarProducto();
                        navigation.goBack();
                    }}
                    buttonStyle={{ borderRadius: 10, backgroundColor: theme.colors.jade, alignSelf: "auto" }}
                    containerStyle={{
                        width: 100,
                        paddingTop: 40
                    }}
                />
                <Button
                    title='Agregar Imagen'
                    onPress={() => {
                        pickImages();
                    }}
                    buttonStyle={{ borderRadius: 10, backgroundColor: theme.colors.jade, alignSelf: "auto" }}
                    containerStyle={{
                        width: 100,
                        paddingTop: 40
                    }}
                />
            </View>
        </ScrollView>
    </View>

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        // alignItems: 'stretch',
        justifyContent: 'center',
        padding: 10,
        // backgroundColor: "gray"
    },
    cajaBotones: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 2,
        flexDirection: "row"
    },
    scrollView: {
        // backgroundColor: 'pink',
        marginHorizontal: 10,
    },

});
