import {StyleSheet, Text,View,TextInput,TouchableOpacity } from "react-native";
import { useState } from "react";


function RedefinirSenha({navigation}){

    const[input,setInput] = useState('');

    return(
        <View style={styles.fundo}>

            <Text style={styles.ola}>Olá</Text>
            <Text style={styles.margin}>Para redefinir senha digite seu Email</Text>

        <View style={styles.areaR}>
        <TextInput
          style={styles.input}
          placeholder='  Insira seu email'
          placeholderTextColor='silver'
          value={input}
          onChangeText={(texto) => setInput(texto)}
          ></TextInput>        
        </View>

        <View style={styles.margin}>
            <Text>Clique no botao para encaminhar link de redefinição.</Text>
        </View>

        <View style={styles.botao}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('redefinir')}
        >
            <Text style={styles.textSen}>Enviar</Text>
        </TouchableOpacity>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    areaR:{
        flexDirection:'row',
        width:'85%',
        backgroundColor: '#e6e6e6',  
        height: 50,
        alignItems:'center',
        marginLeft: '7%',
        marginTop:'1%',
        borderRadius:15,
    },
    margin: {
        margin:10,
        marginLeft: '9%',
    },
    ola: {
        marginTop: '9%',
        marginLeft: '7%',
        fontSize: 50
    },
    botao:{
        position: 'relative',
        marginTop:'48%',
        backgroundColor: '#ffcc00',
        borderRadius: 50,
        paddingVertical: 10,
        width: '30%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fundo:{
        backgroundColor:'#fff',
        flex:1,
    },
    textSen:{
        fontSize:18,
        fontWeight:'bold',
        color:'black'
    }       
}) 

export default RedefinirSenha;