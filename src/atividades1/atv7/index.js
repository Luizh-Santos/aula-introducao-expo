
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


import styles from './styles';
import { useState } from 'react';

export default function Exemplo07() {

    const [massa, setMassa] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);

    function Calcular() {
        const valor = massa / (altura * altura);
        setResultado(valor);
    }


    return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Exemplo 7
            </Text>
            <View style={styles.entradaImc}>
                <TextInput placeholder='Massa' placeholderTextColor='#0D47A1' keyboardType='numeric' style={styles.input}
                onChangeText={(entrada) => setMassa(entrada)}
                
                />
                <TextInput placeholder='Altura' placeholderTextColor='#0D47A1' keyboardType='numeric' style={styles.input} 
                onChangeText={(entrada) => setAltura(entrada)}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => Calcular()}>
                <Text style={styles.textButton}> Calcular  </Text>
            </TouchableOpacity>
            <Text style={styles.resultados}> {resultado.toFixed(2)} </Text>

              <Text style={styles.textButton}> Calcular  </Text>



        </View>
    );
};



