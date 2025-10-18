import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Constants from 'expo-constants';



import Atividade05 from './src/atividades1/atv05';

import Exemplo07 from './src/exemplos/ex07';








export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo07/>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBDEFB',
  
    justifyContent: 'center',
    padding: 8,
    paddingTop: Constants.statusBarHeight,

   

  },
});
