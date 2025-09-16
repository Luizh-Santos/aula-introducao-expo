import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import styles from './styles';

export default function Atividade03() {

    const [numero, setNumero] = useState(0);

    function handleIncrementar() {
        setNumero(numero + 1);
        //    console.log(numero);
    }
    function handleDecrementar() {
        setNumero(numero - 1);

    }
    function handleZerar() {
        setNumero(0);

    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 3</Text>



            <View style={styles.containerbotao}> <TouchableOpacity
                style={styles.botao}
                onPress={() => handleDecrementar()}
            >
                <Text style={styles.txtBotao}>-</Text>
            </TouchableOpacity>
                <Text style={styles.txt}>{numero}</Text>
                <TouchableOpacity
                    style={styles.botao}
                    onPress={() => handleIncrementar()}
                >
                    <Text style={styles.txtBotao}>+</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.containerbotaoz}>
                <TouchableOpacity
                    style={styles.botao2}
                    onPress={() => handleZerar()}
                >
                    <Text style={styles.txtBotao}>Zerar</Text>
                </TouchableOpacity>
            </View>





        </View>
    );
}

