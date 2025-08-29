import { View, Text } from 'react-native';

import styles from './styles';

export default function Atividade1() {
    return(
        <View style={styles.container}>
        <Text style={styles.titulo}>Atividade 1</Text>
        <Text style ={styles.txt1}>Aula</Text>
        <Text style ={styles.txt}>29/08</Text>
        </View>
    );
} 

