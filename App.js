
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screen/Home';
import Login from './src/Screen/login/Login';
import RedefinirSenha from './src/Screen/login/RedefinirSenha';
import Redefinir from './src/Screen/login/Redefinir';
import { StatusBar } from 'expo-status-bar';
import Cadastro from './src/Screen/Cadastro/Cadastro';
import CadastroEnd from './src/Screen/Cadastro/CadastroEnd';
import Inicio from './src/Screen/Inicial';

import React, { useEffect } from 'react';


import * as Location from 'expo-location';
import ContaUsu from './src/Screen/conta/contaUsu';
import Contatos from './src/Screen/conta/Contatos';



const stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('A permissão para acessar o local foi negada');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location);
    })();
  }, []);






  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ffcc00" barStyle="ligth-content" />
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {
              backgroundColor: '#ffcc00',
            },

          }}
        />

        <stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerStyle: {
              backgroundColor: '#ffcc00',
            },

          }}

        />
        <stack.Screen
          name='RedefinirSenha'
          component={RedefinirSenha}
          options={{
            title: 'Redefinir Senha',
            headerStyle: {
              backgroundColor: '#ffcc00',
            },
          }}

        />
        <stack.Screen
          name='redefinir'
          component={Redefinir}
          options={{
            title: 'Redefinir Senha',
            headerStyle: {
              backgroundColor: '#ffcc00',
            },
          }}
        />
        <stack.Screen
          name='CadastroEnd'
          component={CadastroEnd}
          options={{
            title: 'Cadastro',
            headerStyle: {
              backgroundColor: '#ffcc00'
            }
          }}
        />
        <stack.Screen
          name='Inicio'
          component={Inicio}
          options={{ headerShown: false }}

        />

        <stack.Screen
          name='ContaUsu'
          component={ContaUsu}
          options={{ headerShown: false }}
        />

        <stack.Screen
          name='Contatos'
          component={Contatos}
          options={{ headerShown: false }}
        />

      </stack.Navigator>
    </NavigationContainer>
  )
};

