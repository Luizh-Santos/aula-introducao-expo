import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Constants from 'expo-constants';



import Atividade7 from './src/atividades1/atv7';

import Exemplo08 from './src/exemplos/ex08';








export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo08/>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBDEFB',
alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: 10,
    padding: 8,
    paddingTop: Constants.statusBarHeight,



  },
});
