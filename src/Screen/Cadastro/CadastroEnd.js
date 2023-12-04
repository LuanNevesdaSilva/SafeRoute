import { View, Text, StyleSheet, TextInput } from "react-native";
import { Button } from "react-native-paper";

function CadastroEnd({ navigation }) {
    return (
        <View style={styles.textIncial}>
            <Text style={styles.infP}>Endereço Escolar</Text>

            <View style={styles.containerInput}>
                <Text style={styles.titulo}>Escola </Text>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder='Escola'
                        style={styles.inputCadastro}

                        placeholderTextColor={'silver'}
                    />
                </View>

                <Text style={styles.titulo}>CEP</Text>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder='CEP'
                        style={styles.inputCadastro}
                        placeholderTextColor={'silver'}
                    />
                </View>
                <Text style={styles.titulo}>Turno</Text>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder='Turno'
                        style={styles.inputCadastro}

                        placeholderTextColor={'silver'}
                    />
                </View>
                <Text style={styles.titulo}>Nome do Aluno</Text>

                <View style={styles.inputArea}>
                    <TextInput
                        placeholder='Nome'
                        style={styles.inputCadastro}
                        placeholderTextColor={'silver'}
                    />
                </View>

                <View>
                    <Button
                    buttonColor="#ffcc00"
                    onPress={()=> navigation.navigate('')}
                    style={styles.buttonProx}
                    >
                        <Text style={styles.textProx}>Contiuar</Text>
                    </Button>
                </View>
              
            </View>
        </View>

    )


}

const styles = StyleSheet.create({
    textIncial: {
        backgroundColor: 'white',
        flex: 1,
    },
    infP: {
        position: 'absolute',
        alignSelf: 'center',
        fontWeight: 'bold',
        margin: 40,
        fontSize: 20,
    },

  
    containerInput: {
        marginTop: '25%',
        alignSelf: 'center'
    },
    inputArea: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        height: 60,
        alignItems: 'center',
    },
    titulo: {
        marginTop: '2%',
        marginLeft: '5%',
        fontSize: 17,
        fontWeight:"600"
    },
    inputCadastro: {
        flexDirection: 'row',
        width: '85%',
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        height: 45,
        alignItems: 'center',
        marginLeft: '2%',
        fontSize:18,
    },
    buttonProx:{
        marginTop:'45%',
        marginHorizontal:'25%',
        borderRadius:30,

    },
    textProx:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
      
    }

})

export default CadastroEnd;