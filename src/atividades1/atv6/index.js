
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


import styles from './styles';
import { useState } from 'react';

export default function Exemplo06() {

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [total, setTotal] = useState(0);

    function soma() {
        let resultado = parseFloat(n1) + parseFloat(n2);
        setTotal(resultado.toString());
    }


return (
    <View style={styles.container}>
        <Text style={styles.paragraph}>
            Exemplo 6
        </Text>

        <Text style={styles.txtSaida}> Calculadora básica</Text>

        <Text style={styles.textLabel}> 1º Número </Text>
        <TextInput
            style={styles.txtEntrada}
            onChangeText={(entrada) => setN1(entrada)}
            value={n1}
        />

        <Text style={styles.txtSaida}> + | - | * | /  </Text>

        <Text style={styles.textLabel}> 2º Número </Text>
        <TextInput
            style={styles.txtEntrada}
            onChangeText={(entrada) => setN2(entrada)}
            value={n2}
        />

        <Text style={[styles.txtSaida, { margin: 0 }]}> = </Text>

        <Text style={styles.textLabel}> Total </Text>
        <TextInput
            style={styles.txtEntrada}
            editable={false}
            value={total} 
            />

        <TouchableOpacity style={styles.button} onPress={() => soma()}>
            <Text style={styles.textButton}> + </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => soma()}>
            <Text style={styles.textButton}> - </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => soma()}>
            <Text style={styles.textButton}> * </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => soma()}>
            <Text style={styles.textButton}> / </Text>
        </TouchableOpacity>

    </View>
);
};



