import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { Image } from "react-native";


export default function ContaUsu({ navigation }) {
    return (
        <View style={styles.contUsu}>
            <Image
                style={styles.img}
                source={require('../image/contUsuario.png')}
            />

            <View style={styles.estilu}>
                <Text style={styles.teste}>NOME:</Text>
                <Text style={styles.teste}>Wendão</Text>
                <Text style={styles.teste}>__________________________________</Text>
                <Text style={styles.teste}>Email:</Text>
                <Text style={styles.teste}>clienteEmail@gmail.com</Text>
                <Text style={styles.teste}>__________________________________</Text>
                <Text style={styles.teste}>Aluno:</Text>
                <Text style={styles.teste}>NomeAluno</Text>
                <Text style={styles.teste}>__________________________________</Text>
                <Text style={styles.teste}>Escola:</Text>
                <Text style={styles.teste}>Raimundo AlgumaCoisa</Text>
                <Text style={styles.teste}>__________________________________</Text>
                <Text style={styles.teste}>Rota: 12</Text>

            </View>

            <Pressable onPress={() => navigation.navigate('Conta')}>
                <Text style={styles.voltar}>Voltar</Text>
            </Pressable>

        </View>

    )
}

const styles = StyleSheet.create({
    contUsu: {
        alignItems: "center",
        flex: 1,
        backgroundColor: "white",
    },
    estilu: {
        flex: 2,
        backgroundColor: "#ffce00",
        marginBottom: "40%",
        marginTop: "14%",
        borderRadius: 20,
        paddingTop: 15,
        alignItems: "center",

    },
    img: {
        alignItems: "center",
        marginTop: "10%",
        width: 75,
        height: 75
    },
    teste: {
        fontSize: 21,
        display: "flex",
        textAlign: "center"
    },
    voltar: {
        backgroundColor:"#ffce00",
        borderRadius: 10,
        fontSize: 20,
        marginBottom: "5%"

    }
});
