import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "react-native";

export default function Conta({ navigation }) {
    return (
        <View style={styles.Conta}>
            <Text style={{ marginTop: "7%", fontSize: 25 }}>
                CONFIGURAÇÕES
            </Text>
            <Pressable onPress={() => navigation.navigate('ContaUsu')}>
                <Image
                    style={styles.imagem}
                    source={require('../image/contUsuario.png')}
                />
            </Pressable>
                <Text style={styles.texto}>Csasd</Text>
            <Text>____________________________________________________________</Text>

            <Pressable onPress={() => navigation.navigate('Contatos')}>
                <Image
                    style={styles.imagem}
                    source={require('../image/contatos.png')}
                />
            </Pressable>
                <Text style={{fontSize: 20}}>Contatos de Confiança</Text>
            <Text>____________________________________________________________</Text>
            <Pressable>
                <Image
                    style={styles.imagem2}
                    source={require('../image/altLocal.png')}
                />
            </Pressable>
                <Text style={styles.texto}>Alterar Localidade</Text>
            <Text>____________________________________________________________</Text>
            <Pressable>
                <Image
                    style={styles.imagem}
                    source={require('../image/o-email.png')}
                />
            </Pressable>
                <Text style={{fontSize: 20}}>Chat</Text>
            <Text>____________________________________________________________</Text>
            <Pressable>
                <Image
                    style={styles.imagem}
                    source={require('../image/sair.png')}
                />
            </Pressable>
                <Text style={{fontSize: 20}}>Sair</Text>
        </View>
    )
}
//Não dá para colocar fontSize, como aumentar a font de alguma coisa então?..

const styles = StyleSheet.create({
    Conta: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",
    },
    imagem: {
        width: 60,
        height: 60,
        marginLeft: 0,
        marginTop: 15,
        position: 'relative'
    },
    imagem2: {
        width: 70,
        height: 70,
        marginLeft: 0,
        marginTop: 15,
        position: 'relative'
    },
    texto: {
        marginTop: "1%",
        fontSize: 20,
    },
})