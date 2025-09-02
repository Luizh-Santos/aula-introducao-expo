import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import Exemplo02 from './src/exemplos/ex02';

 import Exemplo01 from './src/exemplos/ex01';

 import Atividade1 from './src/atividades1/atv1';

import Atividade02 from './src/atividades1/atv2';






export default function App() {
  return ( 
    <View style={styles.container}>
      <Atividade02/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D47A1',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 10,
    paddingTop: Constants.statusBarHeight,
  },
});
