import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import styles from './styles';

export default function Exemplo03() {

    const [numero, setNumero] = useState(10);

    function handleIncrementar() {
        setNumero(numero+ 1);
        //    console.log(numero);
    }

 

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Button
                onPress={() => { alert('Alguém tocou no botão') }}
                title="Alerta"
                color="#0D47A1"
                accessibilityLabel="Botão de alerta" />

            <Text style={styles.txt}>{numero}</Text>

            <TouchableOpacity
                style={styles.botao}
                onPress={() => handleIncrementar()}
            >
                <Text style={styles.txtBotao}>Incrementar Número</Text>
            </TouchableOpacity>
        </View>
    );
}

