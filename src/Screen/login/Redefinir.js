import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { View,TextInput, TouchableOpacity,StyleSheet} from "react-native";


function Redefinir({navigation}){

    const [input, setInput] = useState('');
    const [hidePass, SetHidePass] = useState(true)

    return(
        <View>
              <View style={styles.inputAreaR}>
                <TextInput
                    style={styles.input}
                    placeholder='  Insira sua senha'
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
        </View>
    )

}

const styles = StyleSheet.create({
    icon: {
        width: '15%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputAreaR:{
            flexDirection:'row',
            marginTop:'40%',
            width:'87%',
            backgroundColor: '#e6e6e6',   
            height: 50,
            left:24,
    },
    input: {
        width: '85%',
        height: 50,
        color: 'black',
        fontSize: 18,
    }
})


export default Redefinir;