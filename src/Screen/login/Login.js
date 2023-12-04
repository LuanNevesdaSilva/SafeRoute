import { StyleSheet, View, Image, Text,TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native-paper';
import React from 'react';

import { useState } from 'react';

function Login({ navigation }) {

    const [input, setInput] = useState('');
    const [hidePass, SetHidePass] = useState(true)

    return (
        <View style={styles.fundo}>
            <View>
                <Text style={styles.informativo}>Bem Vindo</Text>
            </View>

            <Image
                style={styles.logo}
                source={require('../image/logoSR.png')}
            />



            <View style={styles.ContainerLogin}>
                <Text style={styles.inf}>Email</Text>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder='Email'
                        style={styles.inputCPF}
                        placeholderTextColor={'silver'}
            
                    />
                </View>

                <View>
                    <Text style={styles.cad}>Não tem uma conta? <Text style={{ textDecorationLine: 'underline', }} onPress={() => navigation.navigate('Cadastro')}>Cadastre-se</Text></Text>

                </View>


                <Text style={styles.inf}>Senha</Text>


                <View style={styles.inputArea}>
                    <TextInput
                        style={styles.input}
                        placeholder='Insira sua senha'
                        placeholderTextColor='silver'
                        value={input}
                        onChangeText={(texto) => setInput(texto)}
                        secureTextEntry={hidePass}
                    />
                    <TouchableOpacity style={styles.icon} onPress={() => SetHidePass(!hidePass)}>
                        {hidePass ?
                            <Ionicons name='eye' color="black" size={25} />
                            :
                            <Ionicons name='eye-off' color="#FFF" size={25} />
                        }
                    </TouchableOpacity>
                </View>

                <View >
                    <Text style={styles.redefinir} onPress={() => navigation.navigate('RedefinirSenha')} >     Esqueci a Senha</Text>
                </View>



            </View>

            <View>
                <Button
                style={styles.prox}
                    buttonColor="#ffcc00"
                    onPress={() => navigation.navigate('Inicio')}
                >
                    <Text style={styles.avProx}>Avançar</Text>
                </Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    ContainerLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:2,

    },
    informativo: {
        fontSize: 30,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:10,
        

        
    },

    inputArea: {
        flexDirection: 'row',
        width: '87%',
        backgroundColor: '#e6e6e6',
        height: 50,
        alignItems: 'center',
        borderRadius: 15,
    },
    inputCPF: {
        flexDirection: 'row',
        width: '85%',
        backgroundColor: '#e6e6e6',
        height: 50,
        alignItems: 'center',
        marginLeft: '3%',
        borderRadius: 15,
    },
    input: {
        flexDirection: 'row',
        width: '85%',
        backgroundColor: '#e6e6e6',
        height: 50,
        alignItems: 'center',
        borderRadius: 15,
        marginLeft: '3%',
        fontSize: 18,
    },
    icon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fundo: {
        flex: 1,
        backgroundColor: 'white',
    },
    inf: {
        marginTop: '5%',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 289,
    },
    prox: {
        marginTop:'25%',
        marginHorizontal:'30%',
      

    },
    redefinir: {
        marginTop: 10,
        marginRight: '60%',
        fontWeight:'600'

    },
    avProx: {
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        color:'#000e',
        
    },
    cad: {
        marginRight: '30%',
        fontSize:14,
        marginTop: 10,
        fontWeight:'500'
      


    },
    logo: {
        position:'relative',
        alignSelf:'center',
        marginLeft:'5%',
        height:'30%',
        width:'100%',
        

      },
});

export default Login