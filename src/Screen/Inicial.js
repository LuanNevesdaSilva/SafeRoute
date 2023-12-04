import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Conta from './conta/conta';
import Motorista from './motorista';
import Map from './Map';
import { Image } from 'react-native';





const Tab = createBottomTabNavigator();

export default function Inicio() {


    return (


        <Tab.Navigator
            initialRouteName='Map'
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'black',
                headerShown: false,
                tabBarStyle: { backgroundColor: '#ffce00', height:70, },
            }}


        >


            <Tab.Screen
                name='Conta'
                component={Conta}
                options={{
                    tabBarLabelStyle:{fontSize:15,},
                    tabBarIcon: () => {
                        return (<Image
                            style={{ width: 50, height: 50 }}
                            source={require('../Screen/image/usuario.png')}
                        />);
                    },
                }} />

            <Tab.Screen
                name='Map'
                component={Map}
                options={{
                    tabBarLabel:'Home',
                    tabBarLabelStyle:{fontSize:15,},
                    tabBarIcon: () => {
                        return (
                            <Image
                                style={{ width: 45, height: 45, backgroundColor: 'transparent' }}
                                source={require('../Screen/image/casaFeiaDoCaralh.png')}
                            />
                        );
                    },
                }} />

            <Tab.Screen name='Motorista' 
            component={Motorista}
             options={{
                tabBarLabelStyle:{fontSize:15,},
                tabBarIcon: () => {
                    return (
                        <Image
                            style={{ width: 50, height: 50, backgroundColor: 'transparent' }}
                            source={require('../Screen/image/carteira-de-motorista.png')}
                        />
                    );
                },
            }}

            />


        </Tab.Navigator>




    )
}

