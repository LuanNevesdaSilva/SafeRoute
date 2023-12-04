
import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Image } from 'react-native';



export default function App() {

 const initialRegion = {
    latitude: -3.10719,
    longitude: -60.0261,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
    
  };

  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      showsUserLocation={true}
      initialRegion={initialRegion}
      mapPadding={{top:50}}
     />


    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
