import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "react-native";

function Motorista({navigation}) {
   return (
    <View style={styles.motora}>
        <Image
        style={styles.img}
        source={require('../Screen/image/motorista.png')}
        />

        <View style={styles.estilu}>
            <Text style={styles.teste}>NOME:</Text>
            <Text style={styles.teste}>Wenderson viadão</Text>
            <Text style={styles.teste}>__________________________________</Text>
            <Text style={styles.teste}>CNH:</Text>
            <Text style={styles.teste}>123456789212</Text>
            <Text style={styles.teste}>__________________________________</Text>
            <Text style={styles.teste}>CPF:</Text>
            <Text style={styles.teste}>123.456.789-12</Text>
            <Text style={styles.teste}>__________________________________</Text>
            <Text style={styles.teste}>Veículo:</Text>
            <Text style={styles.teste}>Renault Master 2.3 Executive</Text>
            <Text style={styles.teste}>ABC-1234</Text>
            
            
            

        </View>
    </View>
   )
}

const styles = StyleSheet.create({
    motora: {
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
    }
});

export default Motorista;