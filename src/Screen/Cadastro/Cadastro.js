import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";


export default function Cadastro({ navigation }) {

    return (

        <View style={styles.fundoCadastro}>
            <Text style={styles.infP}>Informações pessoais</Text>

            <View style={styles.fundo2}>
                <Text style={styles.infoCadastro}>Nome </Text>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder='Nome completo'
                        style={styles.inputCadastro}

                        placeholderTextColor={'silver'}
                    />
                </View>

                <Text style={styles.infoCadastro}>Email</Text>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder='Email'
                        style={styles.inputCadastro}

                        placeholderTextColor={'silver'}
                    />
                </View>


                <Text style={styles.infoCadastro}>Telefone</Text>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder='(99) 99999-9999'
                        style={styles.inputCadastro}
                        keyboardType="numeric"
                        placeholderTextColor={'silver'}
                    />
                </View>

                <Text style={styles.infoCadastro}>CPF</Text>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder='999.999.999-99'
                        style={styles.inputCadastro}
                        keyboardType="numeric"
                        placeholderTextColor={'silver'}
                    />
                </View>



            </View>

            <View>
                <Button
                    onPress={() => navigation.navigate('CadastroEnd')}
                    buttonColor="#ffcc00"
                    style={styles.ar}
                    
                >
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize:20,}}>Contiuar</Text>
                </Button>


            </View>




        </View>
    )
}


const styles = StyleSheet.create({
    fundoCadastro: {
        backgroundColor: 'white',
        flex: 1,
    },
    infoNome: {
        marginTop: '10%',
        marginLeft: '10%',
        fontSize: 19,
    },
    infoCadastro: {
        marginTop: '2%',
        marginLeft: '5%',
        fontSize: 17,
        fontWeight:'600'
    },
    inputCadastro: {
        flexDirection: 'row',
        width: '85%',
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        marginLeft: '2%',
        fontSize:18,
    },
    textCep: {
        marginTop: '5%',
        marginLeft: '65%',
        fontSize: 14
    },
    numCasa: {
        marginTop: 5,
        marginLeft: '70%',
        flexDirection: 'row',
        width: '15%',
        backgroundColor: '#e6e6e6',
        borderRadius: 15,
        height: 35,
        alignItems: 'center',
    },
    infP: {
        position: 'absolute',
        alignSelf: 'center',
        fontWeight: 'bold',
        margin: 40,
        fontSize: 20,
    },
    fundo2: {
        marginTop: '25%',
        alignSelf: 'center'
    },
    ar: {
        marginTop: '40%',
        marginHorizontal: '30%',
        borderRadius:30,   


    },
    inputArea: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        height: 60,
        alignItems: 'center',
    },
    icon: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        marginLeft: 320
    }
})