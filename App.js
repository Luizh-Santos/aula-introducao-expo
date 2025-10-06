import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Constants from 'expo-constants';



import Atividade06 from './src/atividades1/atv6';

import Exemplo06 from './src/exemplos/ex06';








export default function App() {
  return (
    <View style={styles.container}>
      <Atividade06/>
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
