import { StyleSheet, View,Text, Image } from "react-native";
import { Button } from "react-native-paper";
import React from "react";






export default function Home({ navigation }) {
  
  return (

    <View style={styles.fundoHome}>

      <View>
      <Image
      style={styles.logo}
      source={require('../Screen/image/logoSR.png')}
    
      />
      <Text style={styles.textlogo}>Transportes</Text>
      </View>

      
      

      <View>
        <Button
          style={styles.button}
          buttonColor="#ffcc00"
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.AcLogin}>Acessar</Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    position:'relative',
    marginLeft:'3%',
    height:'55%',
    width:'100%',
    marginTop:'20%'
  },
  textlogo: {
    position:'absolute',
    alignSelf:'center',
    fontSize: 30,
    fontWeight:'bold',
    marginTop:'78%'
  
  },
  fundoHome: {
    backgroundColor: 'white',
    flex: 1,
  },
  button:{
    position:'relative',
    marginTop:'30%',
    marginHorizontal:'30%',
    marginVertical:'15%',
    
    
  

  },
  AcLogin:{
    fontSize:18,
    fontWeight:'bold',
    color:'black'
  }
})




