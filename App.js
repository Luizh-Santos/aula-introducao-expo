import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput } from 'react-native';
import Constants from 'expo-constants';

import Exemplo02 from './src/exemplos/ex02';

 import Exemplo01 from './src/exemplos/ex01';

 import Atividade1 from './src/atividades1/atv1';

import Atividade02 from './src/atividades1/atv2';

import Exemplo03 from './src/exemplos/ex03';

import Atividade03 from './src/atividades1/atv3'

import Exemplo04 from './src/exemplos/ex04';

import Exemplo05 from './src/exemplos/ex05';






export default function App() {
  return ( 
    <View style={styles.container}>
      <Exemplo05/>
      <StatusBar style="light" />
    </View>
  );
};

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
